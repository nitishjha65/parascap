// app/blogs/page.tsx
"use client"; // Needs to be client component for state/interaction

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Search, ArrowLeft, Terminal } from "lucide-react";
import { getPosts } from "@/lib/api"; // Assuming getPosts can handle pagination or create a new function
import { formatDate, stripHtml } from "@/lib/utils"; // Use utils
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState, useEffect } from "react"; // For state management
import { Skeleton } from "@/components/ui/skeleton"; // For initial load
import { Input } from "@/components/ui/input"; // For search
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Import Pagination

// Define post type matching API response or WpPostData from types/wordpress.d.ts
interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: { source_url: string; alt_text: string }[];
    "wp:term"?: any[][]; // Simplified term structure [[categories],[tags]]
  };
  // Add other fields as needed
}

const POSTS_PER_PAGE = 9; // Number of posts per page

export default function BlogsPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([]); // Store all fetched posts for client-side search/filter
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // --- Fetching Logic ---
  useEffect(() => {
    async function fetchAllPosts() {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch ALL posts initially for client-side search simplicity
        // For large numbers of posts, server-side search/pagination is better
        // TODO: Replace with actual API call - this example fetches all
        const response = await fetch(
          `http://localhost/wp-headless/server/wp-json/wp/v2/posts?_embed&per_page=100`
        ); // Fetch up to 100 posts

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const fetchedPosts = await response.json();
        setAllPosts(fetchedPosts as Post[]);
        setFilteredPosts(fetchedPosts as Post[]); // Initially show all
        setTotalPages(Math.ceil(fetchedPosts.length / POSTS_PER_PAGE));
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to fetch posts");
        console.error("Failed to fetch blog posts:", e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllPosts();
  }, []);

  // --- Filtering Logic ---
  useEffect(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = allPosts.filter(
      (post) =>
        stripHtml(post.title.rendered)
          .toLowerCase()
          .includes(lowerSearchTerm) ||
        stripHtml(post.excerpt.rendered).toLowerCase().includes(lowerSearchTerm)
    );
    setFilteredPosts(filtered);
    setTotalPages(Math.ceil(filtered.length / POSTS_PER_PAGE));
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, allPosts]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to top on page change
    }
  };

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // --- Render Logic ---
  const createMarkup = (html: string) => ({ __html: html });

  // --- Pagination Component Logic ---
  const renderPaginationItems = () => {
    // ... (Pagination rendering logic - same as previous example) ...
    const items = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust window if it overflows at the end
    if (
      endPage - startPage + 1 < maxVisiblePages &&
      totalPages > maxVisiblePages
    ) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      items.push(
        <PaginationItem key="first">
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        items.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      items.push(
        <PaginationItem key="last">
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <>
      {/* Blogs Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-parascap-green text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Blogs
              </h1>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights from the capital market
              </p>
              <p className="max-w-[600px] mx-auto text-gray-300">
                Explore weekly blogs on funding trends, IPO insights, market
                outlook, & growth strategies - curated by the Parascap Team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Search Section */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex w-full max-w-md mx-auto items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white pl-8 pr-4 py-2 text-sm outline-none focus:border-parascap-green focus:ring-1 focus:ring-parascap-green dark:bg-gray-950 dark:border-gray-800 dark:text-gray-50 dark:focus:border-parascap-green dark:focus:ring-parascap-green"
              />
            </div>
            {/* Optional: Keep Search button or remove if filtering is live */}
            {/* <Button className="bg-parascap-green text-white hover:bg-parascap-green/90">
              Search
            </Button> */}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {isLoading ? (
            <BlogLoadingSkeleton /> // Show skeleton while loading initially
          ) : error ? (
            <Alert variant="destructive" className="max-w-2xl mx-auto my-12">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error Loading Blog Posts</AlertTitle>
              <AlertDescription>
                {`We encountered an error: ${error}. Please try refreshing the page.`}
              </AlertDescription>
              <div className="mt-4">
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </Button>
              </div>
            </Alert>
          ) : paginatedPosts.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => {
                  const excerpt =
                    stripHtml(post.excerpt?.rendered).substring(0, 150) + "...";
                  const featuredImageUrl =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                  const featuredImageAlt =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                    stripHtml(post.title.rendered);
                  console.log("featuredImageUrl", featuredImageUrl);
                  const embeddedTerms = post._embedded?.["wp:term"] || [];
                  let categoryName = "Insights"; // Default
                  // Find the first category term
                  const categoryTerm = embeddedTerms
                    .flat()
                    .find((term) => term.taxonomy === "category");
                  if (categoryTerm) {
                    categoryName = categoryTerm.name;
                  }
                  //                   const categoryName =
                  //                     post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Insights"; // Default category

                  return (
                    <div
                      key={post.id}
                      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:bg-gray-900 dark:border-gray-800"
                    >
                      <Link href={`/blogs/${post.slug}`} className="block">
                        <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                          {featuredImageUrl ? (
                            <Image
                              src={featuredImageUrl}
                              alt={featuredImageAlt}
                              width={300}
                              height={200}
                              className="object-cover transition-transform group-hover:scale-105 grayscale w-full h-full"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500 grayscale">
                              No Image
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="inline-block rounded-full bg-parascap-green/10 px-3 py-1 text-xs font-medium text-parascap-green mb-2">
                            {categoryName}
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-sm text-parascap-lightGray dark:text-gray-400">
                            <span>{formatDate(post.date)}</span>
                            {/* Read time can be added if calculated */}
                            {/* <span>•</span> <span>5 min read</span> */}
                          </div>
                          <h3
                            className="mt-2 text-xl font-bold text-parascap-darkGray dark:text-gray-50 line-clamp-2 group-hover:text-parascap-green"
                            dangerouslySetInnerHTML={createMarkup(
                              post.title.rendered
                            )}
                          />
                          <p className="mt-2 text-parascap-lightGray dark:text-gray-400 line-clamp-3">
                            {excerpt}
                          </p>
                          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-parascap-green">
                            Read more
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage - 1);
                          }}
                          aria-disabled={currentPage <= 1}
                          className={
                            currentPage <= 1
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                      {renderPaginationItems()}
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                          }}
                          aria-disabled={currentPage >= totalPages}
                          className={
                            currentPage >= totalPages
                              ? "pointer-events-none opacity-50"
                              : ""
                          }
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-parascap-darkGray dark:text-gray-50 mb-4">
                No Blog Posts Found
              </h2>
              <p className="text-parascap-lightGray dark:text-gray-400 mb-8">
                {searchTerm
                  ? "No posts match your search criteria."
                  : "There are currently no blog posts available. Please check back later."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-parascap-darkGray dark:text-gray-50">
                Stay Updated
              </h2>
              <p className="max-w-[600px] text-parascap-lightGray md:text-xl dark:text-gray-400">
                Subscribe to our newsletter to receive the latest insights and
                updates.
              </p>
            </div>
            {/* TODO: Implement newsletter form submission */}
            <div className="flex w-full max-w-md flex-col gap-2 min-[400px]:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-parascap-green focus:ring-1 focus:ring-parascap-green dark:bg-gray-950 dark:border-gray-700 dark:text-gray-50"
              />
              <Button className="bg-parascap-green text-white hover:bg-parascap-green/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Simple Skeleton Component for Loading state within this file
function BlogLoadingSkeleton() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(POSTS_PER_PAGE)].map((_, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
          >
            <Skeleton className="aspect-video w-full" />
            <div className="p-4 space-y-3">
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
