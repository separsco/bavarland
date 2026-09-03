import { ChevronLeft } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="order-2 flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-start">
          <h2 className="flex items-center gap-3 text-xl font-extrabold text-foreground sm:text-2xl lg:text-3xl">
            <img
              src="/images/Rectangle 240662875.svg"
              alt=""
              aria-hidden
              className=" h-8 w-auto "
            />
            درباره <span className="text-primary">باورلند</span>
          </h2>

          <p className="max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            در باور لند اعتقاد داریم که موفقیت تحصیلی تنها با ساعت‌های بیشتر
            مطالعه به دست نمی‌آید؛ بلکه به برنامه‌ریزی دقیق، پیگیری مستمر،
            انگیزه و همراهی درست نیاز دارد. به همین دلیل مجموعه‌ای از خدمات
            تخصصی مانند برنامه‌ریزی شخصی، پانسیون مطالعاتی، مشاوره تخصصی،
            پیگیری تلفنی و گزارش‌های تحلیلی را در کنار هم قرار داده‌ایم تا هر
            دانش‌آموز بتواند با آرامش و اطمینان، مسیر رسیدن به هدف خود را طی
            کند.
          </p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-primary px-9 py-2.5 text-white"
            >
              شروع رایگان
              <ChevronLeft className="size-4" />
            </button>

            <img src="/images/Vector 9.svg" alt="" aria-hidden />
          </div>
        </div>

        <div className="relative order-1 mx-auto aspect-[414/437] w-full max-w-[420px] lg:order-2">
          <img
            src="/images/bg-about.svg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-contain"
          />
          <img
            src="/images/about.svg"
            alt="تیم باورلند"
            width={366}
            height={398}
            className="absolute left-1/2 top-[52%] z-10 w-[88%] max-w-[366px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
