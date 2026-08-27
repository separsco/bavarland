"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { BlogPostCard, type BlogPost } from "@/components/blog/BlogPostCard";

const PAGE_SIZE = 12;
const TOTAL_PAGES = 20;

const samplePost: Omit<BlogPost, "id" | "href"> = {
  title: "چگونه یک برنامه‌ریزی درسی مؤثر داشته باشیم؟",
  excerpt:
    "در این مقاله یاد می‌گیری چطور با یک برنامه واقع‌بینانه، مطالعه را منظم کنی و به هدف‌های تحصیلی‌ات نزدیک‌تر شوی.",
  category: "برنامه‌ریزی درسی",
  date: "۱۴۰۲/۰۳/۰۳",
  readingTime: "خواندن ۷ دقیقه",
};

function buildPosts(): BlogPost[] {
  return Array.from({ length: PAGE_SIZE * TOTAL_PAGES }, (_, index) => {
    const id = String(index + 1);
    return {
      ...samplePost,
      id,
      href: `/blog/${id}`,
    };
  });
}

const allPosts = buildPosts();

function getVisiblePages(current: number, total: number) {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: Array<number | "ellipsis"> = [1];

  if (current > 3) pages.push("ellipsis");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (current < total - 2) pages.push("ellipsis");

  pages.push(total);
  return pages;
}

export function BlogPostsSection() {
  const [page, setPage] = useState(1);

  const pagePosts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return allPosts.slice(start, start + PAGE_SIZE);
  }, [page]);

  const visiblePages = getVisiblePages(page, TOTAL_PAGES);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {pagePosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      <nav
        className="mt-10 flex items-center justify-center gap-2 sm:mt-12"
        aria-label="صفحه‌بندی مقالات"
      >
        <button
          type="button"
          aria-label="صفحه قبلی"
          disabled={page === 1}
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          className="inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-sky-soft disabled:opacity-40"
        >
          <ChevronRight className="size-5" />
        </button>

        {visiblePages.map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="px-1 text-sm text-muted"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              aria-current={item === page ? "page" : undefined}
              onClick={() => setPage(item)}
              className={`inline-flex size-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                item === page
                  ? "bg-navy text-white"
                  : "text-foreground hover:bg-sky-soft"
              }`}
            >
              {item}
            </button>
          ),
        )}

        <button
          type="button"
          aria-label="صفحه بعدی"
          disabled={page === TOTAL_PAGES}
          onClick={() => setPage((current) => Math.min(TOTAL_PAGES, current + 1))}
          className="inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-sky-soft disabled:opacity-40"
        >
          <ChevronLeft className="size-5" />
        </button>
      </nav>
    </section>
  );
}
