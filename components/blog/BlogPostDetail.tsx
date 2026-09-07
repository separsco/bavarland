import { BlogCommentsSection } from "@/components/blog/BlogCommentsSection";
import { BlogRelatedPosts } from "@/components/blog/BlogRelatedPosts";
import type { BlogPost } from "@/data/blog";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

type BlogPostDetailProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
};

export function BlogPostDetail({ post, relatedPosts }: BlogPostDetailProps) {
  return (
    <div className="pb-12 sm:pb-16">
      <article className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <Breadcrumb
          className="mb-5"
          items={[
            { label: "وبلاگ", href: "/blog" },
            { label: post.title },
          ]}
        />

        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl font-extrabold leading-10 text-foreground sm:text-3xl sm:leading-[2.75rem] lg:text-4xl">
            {post.title}
          </h1>

          <div className="mt-5">
            <div className="inline-flex items-center gap-2.5">
              {/* <MediaSlot
                label={`blog-author-avatar-${post.id}`}
                className="size-9 rounded-full bg-sky"
              /> */}
              <img src="/images/Image.svg" alt="" className="h-9 w-9"/>
              <span className="font-medium  text-xl">{post.author}</span>
            </div>
            <div className=" flex flex-wrap items-center gap-x-4 gap-y-2  text-xs text-muted sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#85858B"/>
<path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#85858B"/>
<path d="M8.5 14.5003C8.37 14.5003 8.24 14.4703 8.12 14.4203C7.99 14.3703 7.89 14.3003 7.79 14.2103C7.61 14.0203 7.5 13.7703 7.5 13.5003C7.5 13.3703 7.53 13.2403 7.58 13.1203C7.63 13.0003 7.7 12.8903 7.79 12.7903C7.89 12.7003 7.99 12.6303 8.12 12.5803C8.48 12.4303 8.93 12.5103 9.21 12.7903C9.39 12.9803 9.5 13.2403 9.5 13.5003C9.5 13.5603 9.49 13.6303 9.48 13.7003C9.47 13.7603 9.45 13.8203 9.42 13.8803C9.4 13.9403 9.37 14.0003 9.33 14.0603C9.3 14.1103 9.25 14.1603 9.21 14.2103C9.02 14.3903 8.76 14.5003 8.5 14.5003Z" fill="#85858B"/>
<path d="M12 14.4999C11.87 14.4999 11.74 14.4699 11.62 14.4199C11.49 14.3699 11.39 14.2999 11.29 14.2099C11.11 14.0199 11 13.7699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.8899 11.29 12.7899C11.39 12.6999 11.49 12.6299 11.62 12.5799C11.98 12.4199 12.43 12.5099 12.71 12.7899C12.89 12.9799 13 13.2399 13 13.4999C13 13.5599 12.99 13.6299 12.98 13.6999C12.97 13.7599 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.8 14.1099 12.75 14.1599 12.71 14.2099C12.52 14.3899 12.26 14.4999 12 14.4999Z" fill="#85858B"/>
<path d="M15.5 14.4999C15.37 14.4999 15.24 14.4699 15.12 14.4199C14.99 14.3699 14.89 14.2999 14.79 14.2099C14.75 14.1599 14.71 14.1099 14.67 14.0599C14.63 13.9999 14.6 13.9399 14.58 13.8799C14.55 13.8199 14.53 13.7599 14.52 13.6999C14.51 13.6299 14.5 13.5599 14.5 13.4999C14.5 13.2399 14.61 12.9799 14.79 12.7899C14.89 12.6999 14.99 12.6299 15.12 12.5799C15.49 12.4199 15.93 12.5099 16.21 12.7899C16.39 12.9799 16.5 13.2399 16.5 13.4999C16.5 13.5599 16.49 13.6299 16.48 13.6999C16.47 13.7599 16.45 13.8199 16.42 13.8799C16.4 13.9399 16.37 13.9999 16.33 14.0599C16.3 14.1099 16.25 14.1599 16.21 14.2099C16.02 14.3899 15.76 14.4999 15.5 14.4999Z" fill="#85858B"/>
<path d="M8.5 18.0002C8.37 18.0002 8.24 17.9702 8.12 17.9202C8 17.8702 7.89 17.8002 7.79 17.7102C7.61 17.5202 7.5 17.2602 7.5 17.0002C7.5 16.8702 7.53 16.7402 7.58 16.6202C7.63 16.4902 7.7 16.3802 7.79 16.2902C8.16 15.9202 8.84 15.9202 9.21 16.2902C9.39 16.4802 9.5 16.7402 9.5 17.0002C9.5 17.2602 9.39 17.5202 9.21 17.7102C9.02 17.8902 8.76 18.0002 8.5 18.0002Z" fill="#85858B"/>
<path d="M12 18.0002C11.74 18.0002 11.48 17.8902 11.29 17.7102C11.11 17.5202 11 17.2602 11 17.0002C11 16.8702 11.03 16.7402 11.08 16.6202C11.13 16.4902 11.2 16.3802 11.29 16.2902C11.66 15.9202 12.34 15.9202 12.71 16.2902C12.8 16.3802 12.87 16.4902 12.92 16.6202C12.97 16.7402 13 16.8702 13 17.0002C13 17.2602 12.89 17.5202 12.71 17.7102C12.52 17.8902 12.26 18.0002 12 18.0002Z" fill="#85858B"/>
<path d="M15.5 17.9999C15.24 17.9999 14.98 17.8899 14.79 17.7099C14.7 17.6199 14.63 17.5099 14.58 17.3799C14.53 17.2599 14.5 17.1299 14.5 16.9999C14.5 16.8699 14.53 16.7399 14.58 16.6199C14.63 16.4899 14.7 16.3799 14.79 16.2899C15.02 16.0599 15.37 15.9499 15.69 16.0199C15.76 16.0299 15.82 16.0499 15.88 16.0799C15.94 16.0999 16 16.1299 16.06 16.1699C16.11 16.1999 16.16 16.2499 16.21 16.2899C16.39 16.4799 16.5 16.7399 16.5 16.9999C16.5 17.2599 16.39 17.5199 16.21 17.7099C16.02 17.8899 15.76 17.9999 15.5 17.9999Z" fill="#85858B"/>
<path d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z" fill="#85858B"/>
<path d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V17C21.75 20.65 19.65 22.75 16 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="#85858B"/>
</svg>
              {post.date}
            </span>
            <span className="block w-px h-5 bg-[#9D9EA2]"></span>
            <span className="inline-flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#85858B"/>
<path d="M15.7106 15.9298C15.5806 15.9298 15.4506 15.8998 15.3306 15.8198L12.2306 13.9698C11.4606 13.5098 10.8906 12.4998 10.8906 11.6098V7.50977C10.8906 7.09977 11.2306 6.75977 11.6406 6.75977C12.0506 6.75977 12.3906 7.09977 12.3906 7.50977V11.6098C12.3906 11.9698 12.6906 12.4998 13.0006 12.6798L16.1006 14.5298C16.4606 14.7398 16.5706 15.1998 16.3606 15.5598C16.2106 15.7998 15.9606 15.9298 15.7106 15.9298Z" fill="#85858B"/>
</svg>
              {post.readingTime}
            </span>
          </div>
            {/* <span className="inline-flex items-center gap-1.5">
              <IconSlot label="blog-detail-read-time-icon" className="size-4" />
              {post.readingTime}
            </span> */}

            {/* <span className="inline-flex items-center gap-1.5">
              <IconSlot label="blog-detail-date-icon" className="size-4" />
              {post.date}
            </span> */}
          </div>
        </header>

        {/* <MediaSlot
          label={`blog-detail-cover-${post.id}`}
          className="mb-8 aspect-[16/9] w-full rounded-[1.5rem] sm:mb-10 sm:rounded-[2rem]"
        /> */}
        <img src="/images/Hero Image.svg" alt="" />

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
