import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { reportPoints } from "@/data/reports";

export function ReportsPointsLog() {
  return (
    <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:p-6">
      <div className="mb-5 flex items-center gap-2">
        <DashboardIcon label="reports-points-icon" className="size-5" />
        <h2 className="text-base font-extrabold text-foreground">گزارش امتیازات</h2>
      </div>

      <ul className="space-y-3">
        {reportPoints.map((item) => {
          const isPositive = item.type === "positive";

          return (
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-2xl bg-sky-soft/70 px-3 py-3"
            >
              <DashboardIcon
                label={
                  isPositive ? "reports-point-positive-icon" : "reports-point-negative-icon"
                }
                className="size-8 rounded-full"
              />
              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-extrabold ${
                    isPositive ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {item.points}
                </p>
                <p className="mt-1 text-xs text-muted">{item.description}</p>
              </div>
              <span className="rounded-full bg-white px-2.5 py-1 text-[11px] text-muted">
                {item.date}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
