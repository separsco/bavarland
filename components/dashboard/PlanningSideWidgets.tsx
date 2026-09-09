import { ChevronLeft, Crown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { counselorMessage, planningProgress } from "@/data/planning";
import { toPersianDigits } from "@/data/otp";

export function PlanningSideWidgets() {
  return (
    <div className="space-y-4">
      <section className="rounded-2xl bg-brand-blue p-5 text-white">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-extrabold">پیشرفت امروز</h2>
          <p className="text-sm text-white/80">
            {toPersianDigits(planningProgress.done)}/{toPersianDigits(planningProgress.total)} پارت
            انجام شده
          </p>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${planningProgress.percent}%` }}
            />
          </div>
          <p className="text-sm font-bold">
            {toPersianDigits(planningProgress.percent)}٪
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-sm shadow-navy/5">
        <div className="mb-3 flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-[#F2F2F3] text-brand-blue">
            <MessageCircle className="size-4" />
          </span>
          <h2 className="text-base font-extrabold text-foreground">پیام مشاور</h2>
        </div>
        <p className="text-sm leading-7 text-muted">{counselorMessage}</p>
      </section>

      <section className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-navy/5">
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Crown className="size-4" />
            </span>
            <h2 className="text-base font-extrabold text-foreground">
              خرید اشتراک باور پرو
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted">
            با برنامه شخصی‌سازی‌شده و پیگیری منظم، مسیر مطالعه‌ات را دقیق‌تر پیش ببر.
          </p>
          <Button
            href="/subscriptions"
            variant="primary"
            size="md"
            className="mt-4 w-full"
            endSlot={<ChevronLeft className="size-4" />}
          >
            مشاهده پلن ها
          </Button>
        </div>
        <div className="h-1.5 w-full bg-primary" />
      </section>
    </div>
  );
}
