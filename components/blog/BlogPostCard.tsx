import Link from "next/link";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  href: string;
};

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <Link href={post.href} className="group flex h-full flex-col">
        <div className="relative">
          <MediaSlot
            label={`blog-post-image-${post.id}`}
            className="aspect-[16/10] w-full"
          />
          <span className="absolute bottom-3 start-3 rounded-lg bg-white px-2.5 py-1 text-xs font-medium text-accent-line shadow-sm">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
          <h3 className="text-base font-bold leading-7 text-foreground transition-colors group-hover:text-primary sm:text-lg sm:leading-8">
            {post.title}
          </h3>

          <p className="line-clamp-3 text-sm leading-7 text-muted">
            {post.excerpt}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-muted sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <IconSlot label="blog-date-icon" className="size-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <IconSlot label="blog-read-time-icon" className="size-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
