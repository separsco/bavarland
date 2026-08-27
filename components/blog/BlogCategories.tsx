"use client";

import { useState } from "react";
import { IconSlot } from "@/components/ui/IconSlot";

const categories = [
  { id: "all", label: "همه مقالات" },
  { id: "study", label: "مطالعه و یادگیری" },
  { id: "exam", label: "کنکور و آزمون" },
  { id: "planning", label: "برنامه‌ریزی درسی" },
  { id: "major", label: "انتخاب رشته و دانشگاه" },
  { id: "personal", label: "مهارت‌های فردی" },
  { id: "skills", label: "مهارت‌های مطالعه" },
  { id: "motivation", label: "انگیزه و موفقیت" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

export function BlogCategories() {
  const [activeId, setActiveId] = useState<CategoryId>("planning");

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <h2 className="mb-6 flex items-center gap-3 text-xl font-extrabold text-foreground sm:mb-8 sm:text-2xl lg:text-3xl">
        <span className="h-7 w-1 shrink-0 rounded-full bg-accent-line sm:h-8" />
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
                  ? "border-accent-line text-accent-line"
                  : "border-border text-foreground hover:border-accent-line/50"
              }`}
            >
              <IconSlot
                label={`blog-category-icon-${category.id}`}
                className="size-5 shrink-0 sm:size-6"
              />
              <span className="leading-6">{category.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
