import { CircularProgress } from "@/components/dashboard/CircularProgress";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { pensionStats } from "@/data/pension";

export function PensionStatCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {pensionStats.map((stat) => (
        <article
          key={stat.id}
          className="rounded-[1.5rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-5"
        >
          <div className="flex items-center gap-2">
            <DashboardIcon label={stat.icon} className="size-5" />
            <h2 className="text-sm font-bold text-foreground">{stat.title}</h2>
          </div>
          <p className="mt-2 text-xs text-muted">{stat.subtitle}</p>
          <div className="mt-4">
            <CircularProgress value={stat.percent} />
          </div>
        </article>
      ))}
    </div>
  );
}
