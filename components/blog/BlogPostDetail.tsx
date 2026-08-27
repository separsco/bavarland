import Link from "next/link";
import { BlogCommentsSection } from "@/components/blog/BlogCommentsSection";
import { BlogRelatedPosts } from "@/components/blog/BlogRelatedPosts";
import type { BlogPost } from "@/data/blog";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

type BlogPostDetailProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export function BlogPostDetail({ post, relatedPosts }: BlogPostDetailProps) {
  return (
    <div className="pb-12 sm:pb-16">
      <article className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <nav aria-label="مسیر صفحه" className="mb-5 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/blog" className="transition-colors hover:text-primary">
                وبلاگ
              </Link>
            </li>
            <li aria-hidden className="text-border">
              ›
            </li>
            <li className="line-clamp-1 text-foreground">{post.title}</li>
          </ol>
        </nav>

        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-extrabold leading-10 text-foreground sm:text-3xl sm:leading-[2.75rem] lg:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
            <div className="inline-flex items-center gap-2.5">
              <MediaSlot
                label={`blog-author-avatar-${post.id}`}
                className="size-9 rounded-full bg-sky"
              />
              <span className="font-medium text-foreground">{post.author}</span>
            </div>

            <span className="inline-flex items-center gap-1.5">
              <IconSlot label="blog-detail-read-time-icon" className="size-4" />
              {post.readingTime}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <IconSlot label="blog-detail-date-icon" className="size-4" />
              {post.date}
            </span>
          </div>
        </header>

        <MediaSlot
          label={`blog-detail-cover-${post.id}`}
          className="mb-8 aspect-[16/9] w-full rounded-[1.5rem] sm:mb-10 sm:rounded-[2rem]"
        />

        <div className="space-y-8 text-sm leading-8 text-muted sm:text-base sm:leading-8">
          <p className="text-foreground">{post.content.intro}</p>

          {post.content.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                {section.heading}
              </h2>

              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.bullets ? (
                <ul className="space-y-2 pe-1">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>

      <div className="mx-auto w-full max-w-7xl space-y-10 px-4 sm:space-y-12 sm:px-6 lg:px-8">
        <BlogCommentsSection />
        <BlogRelatedPosts posts={relatedPosts} />
      </div>
    </div>
  );
}
