"use client";

import { useState } from "react";

const categories = [
  { id: "all", label: "همه مقالات", icon: "/images/book-saved.svg" },
  { id: "study", label: "مطالعه و یادگیری", icon: "/images/book.svg" },
  { id: "exam", label: "کنکور و آزمون", icon: "/images/ranking.svg" },
  { id: "planning", label: "برنامه‌ریزی درسی", icon: "/images/download.svg" },
  { id: "major", label: "انتخاب رشته و دانشگاه", icon: "/images/univer.svg" },
  { id: "personal", label: "مهارت‌های فردی", icon: "/images/emoji-happy.svg" },
  { id: "skills", label: "مهارت‌های مطالعه", icon: "/images/note-2.svg" },
  { id: "motivation", label: "انگیزه و موفقیت", icon: "/images/Motivation.svg" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export function BlogCategories() {
  const [activeId, setActiveId] = useState<CategoryId>("planning");

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <h2 className="mb-6 flex items-center gap-3 text-xl font-extrabold text-foreground sm:mb-8 sm:text-2xl lg:text-3xl">
      <img
              src="/images/Rectangle 240662875.svg"
              alt=""
              aria-hidden
              className=" h-8 w-auto "
            />
        <span>
          دسته‌بندی مقاله‌های{" "}
          <span className="text-primary">باورلند</span>
        </span>
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => {
          const isActive = category.id === activeId;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveId(category.id)}
              className={`inline-flex min-h-[56px] items-center gap-2.5 rounded-2xl border bg-white px-3 py-3 text-start text-xs font-medium transition-colors sm:min-h-[64px] sm:gap-3 sm:px-4 sm:text-sm ${
                isActive
                  ? "border-brand-blue text-brand-blue"
                  : "border-border text-foreground hover:border-brand-blue/50"
              }`}
            >
              <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#F7F7F8] p-3">
                <span
                  aria-hidden
                  className={`block size-5 sm:size-6 ${isActive ? "bg-brand-blue" : "bg-[#23242E]"}`}
                  style={{
                    maskImage: `url("${category.icon}")`,
                    WebkitMaskImage: `url("${category.icon}")`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </span>
              <span className="leading-6">{category.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
