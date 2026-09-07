import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { academyCategories } from "@/data/academy";

export function AcademyPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "آکادمی" },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {academyCategories.map((category) => (
          <article
            key={category.id}
            className="rounded-[1.75rem] border border-transparent bg-white px-5 py-8 text-center shadow-sm shadow-navy/5 transition-colors hover:border-primary"
          >
            <MediaSlot
              label={category.image}
              className="mx-auto size-20 rounded-full bg-sky-soft sm:size-24"
            />
            <h2 className="mt-5 text-base font-extrabold text-foreground">
              {category.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted">{category.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
