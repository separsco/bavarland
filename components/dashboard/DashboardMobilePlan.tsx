import { CalendarDays, Drama } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { todayPlan } from "@/data/dashboard";

type DashboardTodayPlanProps = {
  title?: string;
};

export function DashboardMobilePlan({
  title = "برنامه مطالعاتی کل هفته",
}: DashboardTodayPlanProps) {
  return (
    <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <CalendarDays className="size-5 shrink-0 text-brand-blue" />
          <h2 className="text-sm font-extrabold text-foreground sm:text-base">
            {title}
          </h2>
        </div>

        <Button
          href="/dashboard/planning"
          variant="outline"
          size="sm"
          className="!h-9 shrink-0 !rounded-xl !px-3 text-xs"
        >
          دیدن کل برنامه
        </Button>
      </div>

      <ul>
        {todayPlan.map((item, index) => (
          <li
            key={item.id}
            className={`flex items-center gap-3 py-3 ${
              index < todayPlan.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-foreground">
              <Drama className="size-5" />
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-foreground">{item.title}</p>
              <p className="mt-0.5 text-xs text-muted">{item.subtitle}</p>
            </div>

            <span className="shrink-0 rounded-full bg-[#f3f4f6] px-2.5 py-1.5 text-[10px] whitespace-nowrap text-muted sm:px-3 sm:text-[11px]">
              {item.time}
            </span>

            <span
              role="checkbox"
              aria-checked={item.done}
              aria-label={item.done ? "انجام شده" : "انجام نشده"}
              className={`size-5 shrink-0 rounded-[5px] border ${
                item.done
                  ? "border-primary bg-primary"
                  : "border-[#d1d5db] bg-white"
              }`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
