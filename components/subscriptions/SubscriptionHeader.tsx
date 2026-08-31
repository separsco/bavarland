import { MediaSlot } from "@/components/ui/MediaSlot";

export function SubscriptionHeader() {
  return (
    <header className="relative overflow-hidden pb-8 pt-6 text-center sm:pb-10 sm:pt-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -start-6 top-4 rotate-[-18deg] text-5xl font-black tracking-widest text-navy/[0.06] sm:-start-2 sm:text-7xl"
      >
        BUY
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -end-6 top-4 rotate-[18deg] text-5xl font-black tracking-widest text-navy/[0.06] sm:-end-2 sm:text-7xl"
      >
        BUY
      </div>

      <div className="relative flex justify-center">
        <div className="rounded-b-[1.75rem] bg-navy px-8 py-4 sm:px-10 sm:py-5">
          <MediaSlot label="logo" className="mx-auto h-8 w-28 sm:h-9 sm:w-32" />
        </div>
      </div>

      <h1 className="relative mt-8 text-2xl font-extrabold leading-snug text-foreground sm:mt-10 sm:text-3xl lg:text-4xl">
        پلن‌های اشتراک{" "}
        <span className="text-primary">باور لند</span>
      </h1>

      <p className="relative mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
        درس خوندن وقتی تنها باشی سخته؛ اما با باور اسکول هیچ‌وقت تنها نیستی
      </p>
    </header>
  );
}
