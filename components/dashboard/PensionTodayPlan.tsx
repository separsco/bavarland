import { CalendarDays, Check, ChevronDown, Clock, Hourglass } from "lucide-react";
import { todaySessions } from "@/data/dashboard";
import { planningSelectedDate, planningWeekDays } from "@/data/planning";

const statusStyles = {
  enter: {
    bar: "bg-primary",
    badge: "bg-primary text-white",
    label: "ورود به پانسیون",
  },
  remaining: {
    bar: "bg-[#7eb6e8]",
    badge: "bg-sky-100 text-brand-blue",
    label: "۷ دقیقه مونده",
  },
  pending: {
    bar: "bg-amber-300",
    badge: "bg-amber-100 text-amber-700",
    label: "در حال انتظار",
  },
  done: {
    bar: "bg-emerald-400",
    badge: "bg-emerald-100 text-emerald-700",
    label: "انجام شد",
  },
} as const;

function SessionTime({ time }: { time: string }) {
  const [start, end] = time.split(" - ");

  return (
    <span
      dir="ltr"
      className="inline-flex items-center gap-1 text-[11px] text-muted"
    >
      <Clock className="size-3.5" />
      <span>{start}</span>
      <span>—</span>
      <span>{end}</span>
    </span>
  );
}

export function PensionTodayPlan() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-brand-blue px-3 py-2 text-sm font-semibold text-white">
          <CalendarDays className="size-4" />
          {planningSelectedDate}
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1 text-sm font-medium text-foreground"
        >
          هفته جاری
          <ChevronDown className="size-4" />
        </button>
      </div>

      <div className="-mx-1 flex justify-between gap-2 overflow-x-auto px-1">
        {planningWeekDays.map((day) => (
          <div key={day.id} className="flex min-w-0 flex-1 flex-col items-center gap-1">
            <span
              className={`flex size-10 items-center justify-center rounded-full text-sm font-bold ${
                day.active
                  ? "bg-brand-blue text-white"
                  : "text-muted"
              }`}
            >
              {day.date}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <CalendarDays className="size-5 text-foreground" />
        <h2 className="text-sm font-extrabold text-foreground">
          برنامه مطالعاتی امروز
        </h2>
      </div>

      <ul className="space-y-3">
        {todaySessions.map((session) => {
          const style = statusStyles[session.status];
          const label =
            session.status === "remaining"
              ? session.remainingLabel
              : style.label;

          return (
            <li key={session.id}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-navy/5">
                <div className="flex items-start justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold text-foreground">
                      {session.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{session.subtitle}</p>
                  </div>

                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${style.badge}`}
                    >
                      {session.status === "remaining" || session.status === "pending" ? (
                        <Hourglass className="size-3" />
                      ) : null}
                      {session.status === "done" ? <Check className="size-3.5" /> : null}
                      {label}
                    </span>
                    <SessionTime time={session.time} />
                  </div>
                </div>
                <div className={`h-1.5 w-full ${style.bar}`} />
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
