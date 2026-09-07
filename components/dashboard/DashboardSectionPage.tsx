import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { MediaSlot } from "@/components/ui/MediaSlot";

type DashboardSectionPageProps = {
  title: string;
  description: string;
  icon: string;
};

export function DashboardSectionPage({
  title,
  description,
  icon,
}: DashboardSectionPageProps) {
  return (
    <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:p-8">
      <div className="flex items-center gap-3">
        <DashboardIcon label={icon} className="size-8 rounded-xl" />
        <h1 className="text-xl font-extrabold text-foreground sm:text-2xl">{title}</h1>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
        {description}
      </p>
      <MediaSlot
        label={`${icon}-content`}
        className="mt-8 h-72 w-full rounded-3xl bg-sky-soft sm:h-96"
      />
    </section>
  );
}
