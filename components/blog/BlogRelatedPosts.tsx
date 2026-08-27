"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import type { BlogPost } from "@/data/blog";

type BlogRelatedPostsProps = {
  posts: BlogPost[];
};

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: "next" | "prev") {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const amount = Math.min(scroller.clientWidth * 0.85, 360);
    scroller.scrollBy({
      left: direction === "next" ? -amount : amount,
      behavior: "smooth",
    });
  }

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border pt-10 sm:pt-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">
          مقاله‌های مرتبط
        </h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="قبلی"
            onClick={() => scrollByCard("prev")}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-sky-soft"
          >
            <ChevronRight className="size-4" />
          </button>
          <button
            type="button"
            aria-label="بعدی"
            onClick={() => scrollByCard("next")}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-sky-soft"
          >
            <ChevronLeft className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-[min(100%,300px)] shrink-0 sm:w-[320px]"
          >
            <BlogPostCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
