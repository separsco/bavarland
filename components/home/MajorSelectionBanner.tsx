import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MajorSelectionBanner() {
  return (
    <section className="pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <h2 className="text-xl font-bold leading-snug text-foreground sm:text-2xl lg:text-3xl">
            <span className="text-primary">انتخاب رشته‌ات</span> رو حرفه‌ای انجام
            بده
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
            بر اساس رتبه، علایق، شرایط و اولویت‌هات بهترین انتخاب‌ها رو ببین و با
            اطمینان بیشتری برای آینده‌ات تصمیم بگیر!
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base font-bold text-brand-blue sm:text-lg">
              قیمت اشتراک : ۲۰۰,۰۰۰ تومان
            </p>
            <Button
              href="/subscriptions"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              endSlot={<ChevronLeft className="size-5 shrink-0" />}
            >
              خرید اشتراک انتخاب رشته
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
