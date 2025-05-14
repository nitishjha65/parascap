import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogPostCardProps {
  post: {
    id: number;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    featured_media: number | string;
    categories?: number[];
  };
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  // Create a markup object for dangerouslySetInnerHTML
  const createMarkup = (html: string) => {
    return { __html: html };
  };

  // Extract a short excerpt (first 150 characters)
  const excerpt =
    post.excerpt.rendered.replace(/<[^>]*>/g, "").substring(0, 150) + "...";

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/blogs/${post.slug}`}>
        <div className="aspect-video overflow-hidden">
          <Image
            src={
              post.featured_media
                ? post.featured_media.toString()
                : `/placeholder.svg?height=200&width=300`
            }
            alt={post.title.rendered}
            width={300}
            height={200}
            className="object-cover transition-transform group-hover:scale-105 grayscale"
          />
        </div>
        <div className="p-4">
          <div className="inline-block rounded-full bg-parascap-green/10 px-3 py-1 text-xs font-medium text-parascap-green">
            {post.categories && post.categories.length > 0
              ? `Category ${post.categories[0]}`
              : "Blog"}
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-parascap-lightGray">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <h3
            className="mt-2 text-xl font-bold text-parascap-darkGray"
            dangerouslySetInnerHTML={createMarkup(post.title.rendered)}
          />
          <p className="mt-2 text-parascap-lightGray line-clamp-2">{excerpt}</p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-parascap-green">
            Read more
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  );
}
