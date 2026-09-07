import { Button } from "@/components/ui/Button";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { counselorMessage, planningProgress } from "@/data/planning";
import { toPersianDigits } from "@/data/otp";

export function PlanningSideWidgets() {
  return (
    <div className="space-y-4">
      <section className="rounded-[1.75rem] bg-brand-blue p-5 text-white">
        <h2 className="text-base font-extrabold">پیشرفت امروز</h2>
        <p className="mt-2 text-sm text-white/80">
          {toPersianDigits(planningProgress.done)}/{toPersianDigits(planningProgress.total)} پارت
          انجام شده
        </p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${planningProgress.percent}%` }}
          />
        </div>
        <p className="mt-2 text-end text-sm font-bold">
          {toPersianDigits(planningProgress.percent)}٪
        </p>
      </section>

      <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5">
        <div className="mb-3 flex items-center gap-2">
          <DashboardIcon label="planning-counselor-message-icon" className="size-5" />
          <h2 className="text-base font-extrabold text-foreground">پیام مشاور</h2>
        </div>
        <p className="text-sm leading-7 text-muted">{counselorMessage}</p>
      </section>

      <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5">
        <div className="mb-3 flex items-center gap-2">
          <DashboardIcon label="planning-pro-ribbon-icon" className="size-5" />
          <h2 className="text-base font-extrabold text-foreground">
            خرید اشتراک باور پرو
          </h2>
        </div>
        <p className="text-sm leading-7 text-muted">
          با برنامه شخصی‌سازی‌شده و پیگیری منظم، مسیر مطالعه‌ات را دقیق‌تر پیش ببر.
        </p>
        <Button href="/subscriptions" variant="primary" size="md" className="mt-4 w-full">
          مشاهده پلن ها
        </Button>
      </section>
    </div>
  );
}
