import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { weekDays, weeklyPlan, type PlanTone } from "@/data/dashboard";

const toneClasses: Record<PlanTone, string> = {
  green: "bg-emerald-50 text-emerald-700",
  orange: "bg-orange-50 text-orange-700",
  red: "bg-red-50 text-red-600",
  blue: "bg-sky-50 text-brand-blue",
  muted: "bg-slate-50 text-muted",
};

export function DashboardWeeklyPlan() {
  return (
    <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <DashboardIcon label="dashboard-weekly-calendar-icon" className="size-5" />
          <h2 className="text-base font-extrabold text-foreground sm:text-lg">
            برنامه مطالعاتی کل هفته
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1">
          <DashboardIcon label="dashboard-week-prev-icon" className="size-4" />
          <span className="px-2 text-sm font-medium text-foreground">هفته جاری</span>
          <DashboardIcon label="dashboard-week-next-icon" className="size-4" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="grid min-w-[52rem] grid-cols-7 gap-3">
          {weekDays.map((day, dayIndex) => (
            <div key={day} className="space-y-2">
              <p className="text-center text-sm font-bold text-foreground">{day}</p>
              {weeklyPlan[dayIndex].map((item) => (
                <article
                  key={`${day}-${item.title}-${item.subtitle}`}
                  className={`rounded-2xl px-3 py-3 text-xs leading-6 ${toneClasses[item.tone]}`}
                >
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 opacity-80">{item.subtitle}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
