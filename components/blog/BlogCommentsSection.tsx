"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

type Comment = {
  id: string;
  author: string;
  date: string;
  body: string;
  votes: number;
};

const initialComments: Comment[] = [
  {
    id: "1",
    author: "کاربر سایت",
    date: "۱۴۰۲/۰۳/۰۳",
    body: "مطلب خیلی کاربردی بود. مخصوصاً بخش شناخت شرایط فردی قبل از برنامه‌ریزی کمکم کرد تا برنامه واقع‌بینانه‌تری بنویسم.",
    votes: 648,
  },
  {
    id: "2",
    author: "کاربر سایت",
    date: "۱۴۰۲/۰۳/۰۳",
    body: "نکات خوبی گفته شده. اگر نمونه برنامه هفتگی هم اضافه بشه عالی می‌شه.",
    votes: 312,
  },
  {
    id: "3",
    author: "کاربر سایت",
    date: "۱۴۰۲/۰۳/۰۳",
    body: "برای دانش‌آموزای کنکوری خیلی مفید بود. ممنون از تیم باورلند.",
    votes: 198,
  },
];

export function BlogCommentsSection() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [text, setText] = useState("");
  const totalCount = 24;

  const visibleComments = initialComments.slice(0, visibleCount);

  return (
    <section className="border-t border-border pt-10 sm:pt-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-10 xl:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">
              دیدگاه‌های کاربران
            </h2>
            <p className="mt-1 text-sm text-muted">{totalCount} دیدگاه</p>
          </div>

          <ul className="space-y-4">
            {visibleComments.map((comment) => (
              <li
                key={comment.id}
                className="rounded-2xl border border-border bg-white p-4 sm:p-5"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <MediaSlot
                      label={`comment-avatar-${comment.id}`}
                      className="size-10 shrink-0 rounded-full bg-sky"
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {comment.author}
                      </p>
                      <p className="text-xs text-muted">{comment.date}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm text-muted">
                    <button
                      type="button"
                      aria-label="رأی مثبت"
                      className="inline-flex items-center justify-center"
                    >
                      <IconSlot label="comment-upvote-icon" className="size-4" />
                    </button>
                    <span className="min-w-8 text-center font-medium text-foreground">
                      {comment.votes}
                    </span>
                    <button
                      type="button"
                      aria-label="رأی منفی"
                      className="inline-flex items-center justify-center"
                    >
                      <IconSlot
                        label="comment-downvote-icon"
                        className="size-4"
                      />
                    </button>
                  </div>
                </div>

                <p className="text-sm leading-7 text-muted">{comment.body}</p>
              </li>
            ))}
          </ul>

          {visibleCount < initialComments.length || visibleCount < totalCount ? (
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="mt-5 w-full"
              endSlot={<ChevronDown className="size-4" />}
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(initialComments.length, count + 2),
                )
              }
            >
              مشاهده بیشتر
            </Button>
          ) : null}
        </div>

        <aside className="order-first lg:order-none">
          <div className="rounded-2xl border border-border bg-white p-5 sm:p-6 lg:sticky lg:top-24">
            <h3 className="mb-4 text-base font-bold text-foreground sm:text-lg">
              دیدگاه خود را بنویسید
            </h3>

            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              rows={6}
              placeholder="دیدگاه خود را بنویسید..."
              className="w-full resize-none rounded-2xl border border-border bg-sky-soft/40 px-4 py-3 text-sm leading-7 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent-line"
            />

            <Button
              type="button"
              variant="outline"
              size="md"
              className="mt-4 border-accent-line text-accent-line hover:bg-sky"
              onClick={() => setText("")}
            >
              ارسال دیدگاه
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
}
