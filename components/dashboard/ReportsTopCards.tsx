import { Button } from "@/components/ui/Button";
import { CircularProgress } from "@/components/dashboard/CircularProgress";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { reportCircularStats, reportSubscription } from "@/data/reports";
import { toPersianDigits } from "@/data/otp";

export function ReportsTopCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {reportCircularStats.map((stat) => (
        <article
          key={stat.id}
          className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5"
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

      <article className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:col-span-2 xl:col-span-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <DashboardIcon label="reports-subscription-icon" className="size-5" />
            <h2 className="text-sm font-bold text-foreground">{reportSubscription.title}</h2>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            {reportSubscription.status}
          </span>
        </div>
        <p className="mt-3 text-sm text-muted">{reportSubscription.remaining}</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-sky-soft">
          <div
            className="h-full rounded-full bg-brand-blue"
            style={{ width: `${reportSubscription.percent}%` }}
          />
        </div>
        <p className="mt-2 text-end text-xs font-bold text-brand-blue">
          {toPersianDigits(reportSubscription.percent)}٪
        </p>
        <Button href="/subscriptions" variant="primary" size="md" className="mt-5 w-full">
          تمدید اشتراک
        </Button>
      </article>
    </div>
  );
}
