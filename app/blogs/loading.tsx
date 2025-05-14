// app/blogs/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";

export default function Loading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="py-12 md:py-24 lg:py-32 bg-gray-200 animate-pulse">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <Skeleton className="h-10 w-48 mx-auto" />
              <Skeleton className="h-6 w-72 mx-auto" />
              <Skeleton className="h-5 w-96 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Search Skeleton */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex w-full max-w-md mx-auto items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Skeleton className="h-10 w-full pl-8" />
            </div>
            <Skeleton className="h-10 w-20" />
          </div>
        </div>
      </section>

      {/* Blog Posts Skeleton */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map(
              (
                _,
                i // Show 6 skeleton cards
              ) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg overflow-hidden"
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
              )
            )}
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
