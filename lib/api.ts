// // lib/api.ts

// import { stripHtml, formatDate } from "./utils"; // Import from consolidated utils

// const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

// console.log("WP_API_URL:", WP_API_URL); // Debugging line to check the URL

// if (!WP_API_URL) {
//   console.error(
//     "CRITICAL: WORDPRESS_API_URL environment variable is not set NEXT_PUBLIC_WORDPRESS_API_URL"
//   );
// }

// // Define required fields for optimization
// const postFields = [
//   "id",
//   "slug",
//   "title",
//   "excerpt",
//   "content",
//   "date",
//   "featured_media",
//   "categories",
//   "tags",
//   "_links", //  author and featured media details if not embedding
// ].join(",");

// // Define the structure of your post data (example)
// interface WpPostData {
//   id: number;
//   slug: string;
//   title: { rendered: string };
//   excerpt: { rendered: string };
//   content: { rendered: string };
//   date: string;
//   featured_media: number; // Media ID
//   categories: number[];
//   tags: number[];
//   _links: any; // Define further if needed
//   _embedded?: {
//     author?: { name: string }[];
//     "wp:featuredmedia"?: {
//       id: number; // Good to have ID as well
//       source_url: string;
//       alt_text: string;
//       media_details?: {
//         // Optional: Get dimensions if needed
//         width: number;
//         height: number;
//       };
//     }[];
//     // --- Add wp:term here ---
//     "wp:term"?: {
//       id: number;
//       link: string;
//       name: string;
//       slug: string;
//       taxonomy: string;
//       _links: any; // Simplified links here
//     }[][]; // Array of arrays of term objects
//     // -----------------------
//   };
// }

// // Helper function for fetching
// async function fetchWpApi(endpoint: string) {
//   if (!WP_API_URL) {
//     console.error("WordPress API URL is not configured.");
//     return { data: null, error: "API URL not configured." };
//   }

//   const url = `${WP_API_URL}${endpoint}`;

//   try {
//     console.log(`Fetching: ${url}`); // Log URL for debugging
//     const response = await fetch(url, { next: { revalidate: 60 } }); // Add revalidation (e.g., 60 seconds)

//     if (!response.ok) {
//       console.error(`API Error: ${response.status} for ${url}`);
//       if (response.status === 404) {
//         return { data: null, error: "Not Found" };
//       }
//       return { data: null, error: `API Error: ${response.status}` };
//     }

//     const data = await response.json();
//     return { data, error: null };
//   } catch (error) {
//     console.error(`Network or fetch error for ${url}:`, error);
//     if (error instanceof Error) {
//       return { data: null, error: error.message };
//     }
//     return { data: null, error: "An unknown fetch error occurred" };
//   }
// }

// /**
//  * Fetch posts from WordPress API
//  */
// export async function getPosts(): Promise<{
//   posts: WpPostData[] | null;
//   error: string | null;
// }> {
//   // Use _embed to get author name, featured image URL etc. in one request
//   const { data, error } = await fetchWpApi(
//     `/wp/v2/posts?_embed&_fields=${postFields}`
//   );

//   if (error || !data) {
//     return { posts: null, error: error || "Failed to fetch posts." };
//   }
//   // TODO: Potentially map data to include featured_image_url directly if using _embed
//   return { posts: data as WpPostData[], error: null };
// }

// /**
//  * Fetch a single post by slug
//  */
// export async function getPostBySlug(
//   slug: string
// ): Promise<{ post: WpPostData | null; error: string | null }> {
//   if (!slug) return { post: null, error: "Slug is required." };

//   // Use _embed to get details in one request
//   const { data, error } = await fetchWpApi(
//     `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed&_fields=${postFields}`
//   );

//   if (error) {
//     return { post: null, error };
//   }
//   if (!data || data.length === 0) {
//     return { post: null, error: "Post not found." };
//   }
//   // TODO: Potentially map data[0] to include featured_image_url directly if using _embed
//   return { post: data[0] as WpPostData, error: null };
// }
// lib/api.ts

import { stripHtml, formatDate } from "./utils"; // Consolidated utils

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

console.log("WP_API_URL:", WP_API_URL);

if (!WP_API_URL) {
  console.error("CRITICAL: NEXT_PUBLIC_WORDPRESS_API_URL is not set");
}

// Define the structure of your post data
interface WpPostData {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _links: any;
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: {
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: {
        width: number;
        height: number;
      };
    }[];
    "wp:term"?: {
      id: number;
      link: string;
      name: string;
      slug: string;
      taxonomy: string;
      _links: any;
    }[][];
  };
}

// Helper function to fetch data from the WP API
async function fetchWpApi(endpoint: string) {
  if (!WP_API_URL) {
    return { data: null, error: "API URL not configured." };
  }

  const url = `${WP_API_URL}${endpoint}`;

  try {
    console.log(`Fetching: ${url}`);
    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      console.error(`API Error: ${response.status} for ${url}`);
      return {
        data: null,
        error:
          response.status === 404
            ? "Not Found"
            : `API Error: ${response.status}`,
      };
    }

    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown fetch error",
    };
  }
}

/**
 * Fetch all posts
 */
export async function getPosts(): Promise<{
  posts: WpPostData[] | null;
  error: string | null;
}> {
  const { data, error } = await fetchWpApi(`/wp/v2/posts?_embed`);

  if (error || !data) {
    return { posts: null, error: error || "Failed to fetch posts." };
  }

  return { posts: data as WpPostData[], error: null };
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(
  slug: string
): Promise<{ post: WpPostData | null; error: string | null }> {
  if (!slug) return { post: null, error: "Slug is required." };

  const { data, error } = await fetchWpApi(
    `/wp/v2/posts?slug=${encodeURIComponent(slug)}&_embed`
  );

  if (error) {
    return { post: null, error };
  }

  if (!data || data.length === 0) {
    return { post: null, error: "Post not found." };
  }

  return { post: data[0] as WpPostData, error: null };
}
