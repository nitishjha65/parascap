// lib/api.ts

import { stripHtml, formatDate } from "./utils"; // Import from consolidated utils

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!WP_API_URL) {
  console.error("CRITICAL: WORDPRESS_API_URL environment variable is not set.");
  // Consider throwing an error during build if this is essential
  // throw new Error("WORDPRESS_API_URL environment variable must be set.");
}

// Define required fields for optimization
const postFields = [
  "id",
  "slug",
  "title",
  "excerpt",
  "content",
  "date",
  "featured_media",
  "categories",
  "tags",
  "_links", // Needed for author and featured media details if not embedding
].join(",");

// Define the structure of your post data (example)
interface WpPostData {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number; // Media ID
  categories: number[];
  tags: number[];
  _links: any; // Define further if needed
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: {
      id: number; // Good to have ID as well
      source_url: string;
      alt_text: string;
      media_details?: {
        // Optional: Get dimensions if needed
        width: number;
        height: number;
      };
    }[];
    // --- Add wp:term here ---
    "wp:term"?: {
      id: number;
      link: string;
      name: string;
      slug: string;
      taxonomy: string;
      _links: any; // Simplified links here
    }[][]; // Array of arrays of term objects
    // -----------------------
  };
}

// Helper function for fetching
async function fetchWpApi(endpoint: string) {
  if (!WP_API_URL) {
    console.error("WordPress API URL is not configured.");
    return { data: null, error: "API URL not configured." };
  }

  const url = `${WP_API_URL}${endpoint}`;

  try {
    console.log(`Fetching: ${url}`); // Log URL for debugging
    const response = await fetch(url, { next: { revalidate: 60 } }); // Add revalidation (e.g., 60 seconds)

    if (!response.ok) {
      console.error(`API Error: ${response.status} for ${url}`);
      if (response.status === 404) {
        return { data: null, error: "Not Found" };
      }
      return { data: null, error: `API Error: ${response.status}` };
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error(`Network or fetch error for ${url}:`, error);
    if (error instanceof Error) {
      return { data: null, error: error.message };
    }
    return { data: null, error: "An unknown fetch error occurred" };
  }
}

/**
 * Fetch posts from WordPress API
 */
export async function getPosts(): Promise<{
  posts: WpPostData[] | null;
  error: string | null;
}> {
  // Use _embed to get author name, featured image URL etc. in one request
  const { data, error } = await fetchWpApi(
    `/wp/v2/posts?_embed&_fields=${postFields}`
  );

  if (error || !data) {
    return { posts: null, error: error || "Failed to fetch posts." };
  }
  // TODO: Potentially map data to include featured_image_url directly if using _embed
  return { posts: data as WpPostData[], error: null };
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(
  slug: string
): Promise<{ post: WpPostData | null; error: string | null }> {
  if (!slug) return { post: null, error: "Slug is required." };

  // Use _embed to get details in one request
  const { data, error } = await fetchWpApi(
    `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed&_fields=${postFields}`
  );

  if (error) {
    return { post: null, error };
  }
  if (!data || data.length === 0) {
    return { post: null, error: "Post not found." };
  }
  // TODO: Potentially map data[0] to include featured_image_url directly if using _embed
  return { post: data[0] as WpPostData, error: null };
}

// Re-export utility functions if they are conceptually tied to the API,
// otherwise rely on direct imports from 'lib/utils' in components.
// export { formatDate, stripHtml, calculateReadTime };

// --- Add Type Definitions (e.g., in types/wordpress.d.ts) ---
/*
declare module "@/types/wordpress" {
  interface WpRendered {
    rendered: string;
  }

  interface WpLink {
    href: string;
  }

  interface WpLinks {
    self: WpLink[];
    collection: WpLink[];
    about: WpLink[];
    author: (WpLink & { embeddable?: boolean })[];
    replies: (WpLink & { embeddable?: boolean })[];
    'version-history': (WpLink & { count?: number })[];
    'predecessor-version': (WpLink & { id?: number })[];
    'wp:featuredmedia'?: (WpLink & { embeddable?: boolean })[];
    'wp:attachment': WpLink[];
    'wp:term': (WpLink & { taxonomy?: string; embeddable?: boolean })[];
    curies: { name: string; href: string; templated: boolean }[];
  }

   interface WpEmbeddedMedia {
     id: number;
     date: string;
     slug: string;
     type: string;
     link: string;
     title: WpRendered;
     author: number;
     caption: WpRendered;
     alt_text: string;
     media_type: string;
     mime_type: string;
     media_details: any; // Define further if needed
     source_url: string;
     _links: WpLinks; // Simplified links here
   }

   interface WpEmbeddedAuthor {
      id: number;
      name: string;
      url: string;
      description: string;
      link: string;
      slug: string;
      avatar_urls: { [key: string]: string };
      // other fields...
      _links: WpLinks; // Simplified links here
   }

  interface WpEmbeddedTerm {
     id: number;
     link: string;
     name: string;
     slug: string;
     taxonomy: string;
     // other fields...
     _links: WpLinks; // Simplified links here
   }

   interface WpPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: WpRendered;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: WpRendered;
    content: WpRendered & { protected?: boolean };
    excerpt: WpRendered & { protected?: boolean };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any; // Define further if needed
    categories: number[];
    tags: number[];
    _links: WpLinks;
    _embedded?: {
       author?: WpEmbeddedAuthor[];
       'wp:featuredmedia'?: WpEmbeddedMedia[];
       'wp:term'?: WpEmbeddedTerm[][]; // Array of arrays for categories/tags
    };
  }
}
*/
