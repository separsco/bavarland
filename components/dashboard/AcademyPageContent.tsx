import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { academyCategories } from "@/data/academy";

function AcademyCategoryCard({
  category,
}: {
  category: (typeof academyCategories)[number];
}) {
  return (
    <article className="flex flex-col items-center rounded-[1.75rem] border border-transparent bg-white px-5 py-6 text-center shadow-sm shadow-navy/5 transition-colors hover:border-primary">
      <div className="size-16 overflow-hidden rounded-full bg-sky-soft sm:size-20">
        <img
          src={category.image}
          alt=""
          className="size-full object-cover"
        />
      </div>
      <h2 className="mt-5 text-base font-extrabold text-foreground">
        {category.title}
      </h2>
      <p className="mt-2 text-sm leading-7 text-muted">{category.description}</p>
    </article>
  );
}

export function AcademyPageContent() {
  const mobileCategories = academyCategories.toReversed();

  return (
    <div className="space-y-4">
      <Breadcrumb
        className="hidden lg:block"
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "آکادمی" },
        ]}
      />

      <div className="space-y-4 lg:hidden">
        {mobileCategories.map((category) => (
          <AcademyCategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="hidden gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {academyCategories.map((category) => (
          <AcademyCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
