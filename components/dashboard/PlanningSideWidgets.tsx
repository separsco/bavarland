import { ChevronLeft, Crown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { counselorMessage, planningProgress } from "@/data/planning";
import { toPersianDigits } from "@/data/otp";

export function PlanningSideWidgets() {
  return (
    <div className="space-y-4">
      <section className="relative overflow-hidden rounded-2xl bg-brand-blue p-5 text-white">
        <img
          src="/images/bg-footer.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-brand-blue/75" />

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-extrabold">پیشرفت امروز</h2>
            <p className="text-sm text-white/80">
              {toPersianDigits(planningProgress.done)}/{toPersianDigits(planningProgress.total)} پارت
              انجام شده
            </p>
          </div>
          <div dir="ltr" className="mt-4 flex items-center gap-3">
            <p className="text-sm font-bold">
              {toPersianDigits(planningProgress.percent)}٪
            </p>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${planningProgress.percent}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-sm shadow-navy/5">
        <div className="mb-3 flex items-center gap-2 border-b border-gray-200 pb-3">
          <span className="inline-flex size-8 items-center justify-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 22.81C11.31 22.81 10.66 22.46 10.2 21.85L8.7 19.85C8.67 19.81 8.55 19.75 8.49 19.75H8C3.83 19.75 1.25 18.62 1.25 13V8C1.25 3.58 3.58 1.25 8 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H8C4.42 2.75 2.75 4.42 2.75 8V13C2.75 17.52 4.3 18.25 8 18.25H8.5C9.01 18.25 9.59 18.54 9.9 18.95L11.4 20.95C11.75 21.41 12.25 21.41 12.6 20.95L14.1 18.95C14.43 18.51 14.95 18.25 15.5 18.25H16C19.58 18.25 21.25 16.58 21.25 13V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V13C22.75 17.42 20.42 19.75 16 19.75H15.5C15.42 19.75 15.35 19.79 15.3 19.85L13.8 21.85C13.34 22.46 12.69 22.81 12 22.81Z" fill="#23242E"/>
<path d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z" fill="#23242E"/>
<path d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z" fill="#23242E"/>
<path d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z" fill="#23242E"/>
<path d="M19.5 7.75C17.71 7.75 16.25 6.29 16.25 4.5C16.25 2.71 17.71 1.25 19.5 1.25C21.29 1.25 22.75 2.71 22.75 4.5C22.75 6.29 21.29 7.75 19.5 7.75ZM19.5 2.75C18.54 2.75 17.75 3.54 17.75 4.5C17.75 5.46 18.54 6.25 19.5 6.25C20.46 6.25 21.25 5.46 21.25 4.5C21.25 3.54 20.46 2.75 19.5 2.75Z" fill="#23242E"/>
</svg>
          </span>
          <h2 className="text-base font-extrabold text-foreground">پیام مشاور</h2>
        </div>
        <p className="text-sm leading-7 text-muted">{counselorMessage}</p>
      </section>

      <section className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-navy/5">
        <div className="p-5">
          <div className="mb-3 flex items-center justify-center">
            <span className="inline-flex size-8 items-center justify-center ">
              {/* <Crown className="size-4" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.25 18.4701L19.6 18.8601C19.23 18.9501 18.94 19.2301 18.86 19.6001L18.51 21.0701C18.32 21.8701 17.3 22.1201 16.77 21.4901L13.78 18.0501C13.54 17.7701 13.67 17.3301 14.03 17.2401C15.8 16.8101 17.39 15.8201 18.56 14.4101C18.75 14.1801 19.09 14.1501 19.3 14.3601L21.52 16.5801C22.28 17.3401 22.01 18.2901 21.25 18.4701Z" fill="#FF5527"/>
<path d="M2.69992 18.4701L4.34992 18.8601C4.71992 18.9501 5.00992 19.2301 5.08992 19.6001L5.43992 21.0701C5.62992 21.8701 6.64992 22.1201 7.17992 21.4901L10.1699 18.0501C10.4099 17.7701 10.2799 17.3301 9.91992 17.2401C8.14992 16.8101 6.55992 15.8201 5.38992 14.4101C5.19992 14.1801 4.85992 14.1501 4.64992 14.3601L2.42992 16.5801C1.66992 17.3401 1.93992 18.2901 2.69992 18.4701Z" fill="#FF5527"/>
<path d="M12 2C8.13 2 5 5.13 5 9C5 10.45 5.43 11.78 6.17 12.89C7.25 14.49 8.96 15.62 10.95 15.91C11.29 15.97 11.64 16 12 16C12.36 16 12.71 15.97 13.05 15.91C15.04 15.62 16.75 14.49 17.83 12.89C18.57 11.78 19 10.45 19 9C19 5.13 15.87 2 12 2ZM15.06 8.78L14.23 9.61C14.09 9.75 14.01 10.02 14.06 10.22L14.3 11.25C14.49 12.06 14.06 12.38 13.34 11.95L12.34 11.36C12.16 11.25 11.86 11.25 11.68 11.36L10.68 11.95C9.96 12.37 9.53 12.06 9.72 11.25L9.96 10.22C10 10.03 9.93 9.75 9.79 9.61L8.94 8.78C8.45 8.29 8.61 7.8 9.29 7.69L10.36 7.51C10.54 7.48 10.75 7.32 10.83 7.16L11.42 5.98C11.74 5.34 12.26 5.34 12.58 5.98L13.17 7.16C13.25 7.32 13.46 7.48 13.65 7.51L14.72 7.69C15.39 7.8 15.55 8.29 15.06 8.78Z" fill="#FF5527"/>
</svg>
            </span>
            <h2 className="text-base font-extrabold text-foreground">
              خرید اشتراک باور پرو
            </h2>
          </div>
          <p className="w-full text-sm leading-7 text-muted flex items-center justify-center text-center">
          با خرید اشتراک برنامه‌ریزی، یک نقشه راه شخصی‌سازی‌شده متناسب با هدفت دریافت کن و با برنامه‌ای منظم، سریع‌تر به نتیجه برس.
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
