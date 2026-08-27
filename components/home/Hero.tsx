import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky-soft">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -start-24 top-10 h-72 w-72 rounded-full bg-sky/80 blur-3xl" />
        <div className="absolute -end-16 bottom-0 h-80 w-80 rounded-full bg-sky blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-start">
          <Badge>همراه همیشگی مسیر موفقیت تو!</Badge>

          <h1 className="max-w-xl text-[1.75rem] font-extrabold leading-snug text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.35]">
            هر دانش‌آموز، یک مسیر{" "}
            <span className="text-primary">موفقیت اختصاصی</span>
          </h1>

          <p className="max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8 lg:text-lg">
            برنامه‌ریزی روزانه، پایش مستمر و مشاوره تخصصی؛ تا مسیرت شفاف باشه و
            به نتیجه واقعی برسی.
          </p>

          <div className="relative mx-auto w-full max-w-sm lg:hidden">
            <div className="absolute start-2 top-2 z-10 max-w-[200px] rounded-2xl bg-white px-3 py-2.5 text-xs font-medium leading-5 text-foreground shadow-md">
              از اولین برنامه تا روز قبولی، کنارت هستیم
            </div>
            <MediaSlot
              label="hero-illustration"
              className="mx-auto aspect-square w-full rounded-[2rem]"
            />
          </div>

          <div className="flex w-full max-w-md flex-col gap-3 lg:max-w-none lg:flex-row lg:flex-wrap lg:items-center">
            <Button
              href="/subscriptions"
              variant="primary"
              size="lg"
              className="w-full lg:w-auto"
              endSlot={<IconSlot label="hero-chevron-icon" className="size-4" />}
            >
              شروع مسیر موفقیت
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full border-accent-line text-navy lg:w-auto"
            >
              تماس با ما
            </Button>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-lg lg:order-2 lg:block lg:max-w-none">
          <div className="absolute start-8 top-2 z-10 max-w-[260px] rounded-2xl bg-white px-4 py-3 text-sm font-medium leading-6 text-foreground shadow-md">
            از اولین برنامه تا روز قبولی، کنارت هستیم
          </div>
          <MediaSlot
            label="hero-illustration"
            className="mx-auto aspect-square w-full max-w-[480px] rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}
