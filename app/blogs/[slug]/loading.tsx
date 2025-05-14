// app/blogs/[slug]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function Loading() {
  return (
    <>
      {/* Blog Post Hero Skeleton */}
      <section className="py-12 md:py-24 lg:py-32 bg-gray-200 animate-pulse">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Skeleton className="h-5 w-24 mb-4" /> {/* Back link */}
            <div className="space-y-3 max-w-3xl">
              <Skeleton className="h-10 w-3/4 mx-auto" /> {/* Title */}
              <div className="flex items-center justify-center gap-4 text-sm mt-4">
                <Skeleton className="h-5 w-40" /> {/* Meta info */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content Skeleton */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Skeleton className="aspect-video w-full mb-8 rounded-lg" />{" "}
            {/* Featured Image */}
            {/* Blog content skeleton */}
            <div className="space-y-4 mt-8">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-1/2" />
              <br />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>
            {/* Tags/Categories Skeleton */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Skeleton (Optional) */}
      <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
        {/* ... Add skeleton for newsletter if desired ... */}
      </section>
    </>
  );
}
