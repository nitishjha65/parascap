// app/blogs/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar, Clock, User, Terminal } from "lucide-react";
import { getPostBySlug } from "@/lib/api";
import { formatDate, stripHtml, calculateReadTime } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
  // Optional: Add searchParams if you ever need query parameters
  // searchParams?: { [key: string]: string | string[] | undefined };
}

// --- Metadata Generation ---
// Use the interface here too for strong typing
export async function generateMetadata({ params }: any) {
  // Access slug directly from the destructured params
  const slug = params?.slug;
  // Await the data fetching *using* the slug
  const { post, error } = await getPostBySlug(slug);

  if (error || !post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  // Process metadata *after* awaiting
  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).substring(0, 160);

  return {
    title: `${title} | Parascap Ventures Blog`,
    description: description,
  };
}

// --- Main Component ---
// Use the interface for props
export default async function BlogPostPage({ params }: any) {
  // Access slug directly from the destructured params. No await needed here.
  const slug = params.slug;
  // Await the data fetching *using* the slug
  const { post, error } = await getPostBySlug(slug);

  // --- Handle Errors and Not Found ---
  if (error === "Not Found" || !post) {
    notFound(); // Trigger the 404 page
  }

  // Handle other errors (like API connection issues)
  if (error) {
    // Simplified check: if there's any error besides "Not Found"
    return (
      <main className="flex-1 container py-12">
        <Alert variant="destructive" className="max-w-2xl mx-auto my-20">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error Loading Blog Post</AlertTitle>
          <AlertDescription>
            {`We encountered an error: ${error}. Please try again later or contact support.`}
          </AlertDescription>
          <div className="mt-4">
            <Link href="/blogs">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Button>
            </Link>
          </div>
        </Alert>
      </main>
    );
  }

  // If post is guaranteed to exist here because of error checks above
  // Process post data
  const createMarkup = (html: string) => ({ __html: html });
  const strippedContent = stripHtml(post.content.rendered);
  const readTime = calculateReadTime(strippedContent);
  const authorName = post._embedded?.author?.[0]?.name || "Admin";
  const featuredImageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  console.log("featuredImageUrllll", featuredImageUrl);
  const featuredImageAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    stripHtml(post.title.rendered);
  const embeddedTerms = post._embedded?.["wp:term"] || [];
  const categories: string[] = [];
  const tags: string[] = [];
  console.log("featuredImageUrl", featuredImageUrl);
  embeddedTerms.forEach((termGroup) => {
    termGroup.forEach((term) => {
      if (term.taxonomy === "category") {
        categories.push(term.name);
      } else if (term.taxonomy === "post_tag") {
        tags.push(term.name);
      }
    });
  });

  // --- Render the page ---
  return (
    <>
      {/* Blog Post Hero */}
      <section className="py-12 md:py-24 lg:py-32 bg-parascap-darkGray text-white">
        {/* ... rest of hero section ... */}
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Link
              href="/blogs"
              className="flex items-center text-parascap-green hover:underline mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Link>
            <div className="space-y-2 max-w-3xl">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                dangerouslySetInnerHTML={createMarkup(post.title.rendered)}
              />
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-300 pt-4">
                <div className="flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-1.5 h-4 w-4" />
                  <span>{authorName}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1.5 h-4 w-4" />
                  <span>{readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-12 md:py-16 lg:py-20">
        {/* ... rest of content section ... */}
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Featured Image */}
            {featuredImageUrl ? (
              <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={featuredImageUrl}
                  alt={featuredImageAlt}
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="mb-8 aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
                {/* Placeholder could go here */}
              </div>
            )}

            {/* Blog Content Area */}
            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-parascap-darkGray prose-a:text-parascap-green hover:prose-a:underline">
              <div
                dangerouslySetInnerHTML={createMarkup(post.content.rendered)}
              />
            </article>

            {/* Tags and Categories */}
            {(categories.length > 0 || tags.length > 0) && (
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Link
                      href={`/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      key={`cat-${index}`}
                    >
                      <span className="inline-block cursor-pointer rounded-full bg-parascap-green/10 px-3 py-1 text-xs font-medium text-parascap-green hover:bg-parascap-green/20">
                        {category}
                      </span>
                    </Link>
                  ))}
                  {tags.map((tag, index) => (
                    <Link
                      href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      key={`tag-${index}`}
                    >
                      <span className="inline-block cursor-pointer rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-parascap-lightGray dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                        #{tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        {/* ... rest of newsletter section ... */}
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
