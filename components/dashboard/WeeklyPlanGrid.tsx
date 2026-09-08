import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { WeeklyPlanCell } from "@/components/dashboard/WeeklyPlanCell";
import { weekDays, weeklyPlan, weeklyTimeRange } from "@/data/dashboard";

export function WeeklyPlanGrid() {
  return (
    <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <CalendarDays className="size-5 text-brand-blue" />
          <h2 className="text-base font-extrabold text-foreground sm:text-lg">
            برنامه مطالعاتی کل هفته
          </h2>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-3 py-2 text-sm font-medium text-white"
        >
          <ChevronRight className="size-4" />
          هفته جاری
          <ChevronLeft className="size-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="grid min-w-[58rem] grid-cols-7 gap-1.5">
          {weekDays.map((day) => (
            <p
              key={day}
              className="pb-1 text-center text-sm font-bold text-foreground"
            >
              {day}
            </p>
          ))}

          {weekDays.map((day) => (
            <p
              key={`${day}-time`}
              className="pb-2 text-center text-[11px] leading-4 font-medium text-muted"
              dir="ltr"
            >
              {weeklyTimeRange.start}
              <br />
              {weeklyTimeRange.end}
            </p>
          ))}

          {weeklyPlan.flatMap((row, rowIndex) =>
            row.map((cell, dayIndex) => (
              <WeeklyPlanCell key={`${weekDays[dayIndex]}-${rowIndex}`} cell={cell} />
            )),
          )}
        </div>
      </div>
    </section>
  );
}
