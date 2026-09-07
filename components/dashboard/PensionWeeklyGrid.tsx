import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { weekDays, type PlanTone } from "@/data/dashboard";
import { pensionTimeSlots, pensionWeeklyGrid } from "@/data/pension";

const toneClasses: Record<PlanTone, string> = {
  green: "bg-emerald-50 text-emerald-800",
  orange: "bg-orange-50 text-orange-700",
  red: "bg-red-50 text-red-600",
  blue: "bg-sky-50 text-brand-blue",
  muted: "bg-slate-50 text-muted",
};

export function PensionWeeklyGrid() {
  return (
    <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <DashboardIcon label="pension-weekly-calendar-icon" className="size-5" />
          <h2 className="text-base font-extrabold text-foreground sm:text-lg">
            برنامه مطالعاتی کل هفته
          </h2>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-3 py-2 text-sm font-medium text-white"
        >
          <DashboardIcon
            label="pension-week-prev-icon"
            className="size-4"
            tone="on-dark"
          />
          هفته جاری
          <DashboardIcon
            label="pension-week-next-icon"
            className="size-4"
            tone="on-dark"
          />
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[64rem]">
          <div className="grid grid-cols-[7.5rem_repeat(7,minmax(0,1fr))] gap-2">
            <div />
            {weekDays.map((day) => (
              <p
                key={day}
                className="pb-2 text-center text-sm font-bold text-foreground"
              >
                {day}
              </p>
            ))}

            {pensionTimeSlots.map((slot, slotIndex) => (
              <div key={slot} className="contents">
                <p className="flex items-center justify-center rounded-xl bg-sky-soft px-2 text-center text-[11px] font-medium text-muted">
                  {slot}
                </p>
                {pensionWeeklyGrid[slotIndex].map((cell, dayIndex) => (
                  <article
                    key={`${slot}-${weekDays[dayIndex]}`}
                    className={`min-h-[4.75rem] rounded-2xl px-2.5 py-2.5 text-[11px] leading-5 ${
                      cell
                        ? toneClasses[cell.tone]
                        : "bg-slate-50 text-muted"
                    }`}
                  >
                    {cell ? (
                      <>
                        <p className="font-bold">{cell.title}</p>
                        <p className="mt-1 opacity-80">{cell.subtitle}</p>
                      </>
                    ) : (
                      <p className="font-medium">انتخاب نشده</p>
                    )}
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
