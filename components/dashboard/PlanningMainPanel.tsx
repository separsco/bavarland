import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import {
  planningSelectedDate,
  planningTasks,
  planningWeekDays,
} from "@/data/planning";

const statusStyles = {
  done: {
    card: "bg-emerald-50",
    bar: "bg-emerald-400",
    badge: "bg-emerald-100 text-emerald-700",
    label: "انجام شد",
    icon: "planning-task-done-icon",
  },
  pending: {
    card: "bg-amber-50",
    bar: "bg-amber-300",
    badge: "bg-amber-100 text-amber-700",
    label: "در حال انتظار",
    icon: "planning-task-pending-icon",
  },
} as const;

export function PlanningMainPanel() {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm shadow-navy/5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-blue px-3 py-2 text-sm font-semibold text-white">
          <DashboardIcon
            label="planning-selected-date-icon"
            className="size-4"
            tone="on-dark"
          />
          {planningSelectedDate}
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-medium text-foreground"
        >
          هفته جاری
          <DashboardIcon label="planning-week-dropdown-icon" className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {planningWeekDays.map((day) => (
          <div
            key={day.id}
            className={`rounded-2xl border px-3 py-3 text-center ${
              day.active
                ? "border-brand-blue bg-sky-soft text-brand-blue"
                : "border-border text-muted"
            }`}
          >
            <p className="text-xs font-medium">{day.label}</p>
            <p className="mt-1 text-base font-extrabold">{day.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <DashboardIcon label="planning-today-plan-icon" className="size-5" />
          <h2 className="text-base font-extrabold text-foreground">
            برنامه مطالعاتی امروز
          </h2>
        </div>

        <ol className="relative space-y-4 ps-7">
          <span className="absolute start-2 top-4 bottom-4 w-px bg-border" aria-hidden />

          {planningTasks.map((task) => {
            const style = statusStyles[task.status];

            return (
              <li key={task.id} className="relative">
                <span className="absolute top-6 -start-[1.35rem] size-2.5 rounded-full bg-border" />
                <article className={`overflow-hidden rounded-2xl ${style.card}`}>
                  <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-sm font-extrabold text-foreground">{task.title}</h3>
                      <p className="mt-1 text-xs text-muted">{task.subtitle}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${style.badge}`}
                      >
                        <DashboardIcon label={style.icon} className="size-3" />
                        {style.label}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <DashboardIcon label="planning-task-clock-icon" className="size-3.5" />
                        {task.time}
                      </span>
                    </div>
                  </div>
                  <div className={`h-1.5 w-full ${style.bar}`} />
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
