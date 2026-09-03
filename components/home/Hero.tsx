import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroIllustration } from "@/components/home/HeroIllustration";
import {
  HeroTitleArrow,
  HeroTitleSparkle,
} from "@/components/home/HeroTitleDecorations";
import { IoChevronBackOutline } from "react-icons/io5";


export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-start">
          <Badge className="!bg-[#E8EDF3] !text-brand-blue px-4 py-2 text-sm">همراه همیشگی مسیر موفقیت تو!</Badge>

          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <h1 className="relative text-[1.75rem] font-extrabold leading-snug text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.35]">
              <span className="block">
                هر دانش‌آموز، یک{" "}
                <span className="relative inline-block">
                  <svg className="lg:block hidden" xmlns="http://www.w3.org/2000/svg" width="71" height="36" viewBox="0 0 71 36" fill="none">
                    <path d="M19.922 35.1315L0.25 23.7129" stroke="#FF5527" strokeMiterlimit="10" />
                    <path d="M42.8812 35.129L33.0193 0.135246" stroke="#FF5527" strokeMiterlimit="10" />
                    <path d="M58.7924 35.1326L67.7503 18.6771" stroke="#FF5527" strokeMiterlimit="10" />
                  </svg>
                  مسیر
                </span>
              </span>
              <span className="flex items-end justify-center gap-2 sm:gap-3 lg:justify-start">
                <span className="block">
                  موفقیت <span className="text-primary">اختصاصی</span>
                </span>
                <HeroTitleArrow className="lg:block hidden mb-0.5 h-9 w-10 shrink-0 sm:mb-1 sm:h-10 sm:w-11 lg:h-12 lg:w-14" />
              </span>
            </h1>
          </div>

          <p className="max-w-[460px] text-sm leading-7 text-muted sm:text-base sm:leading-8 lg:text-lg">
            از برنامه‌ریزی تا نظارت روزانه، مشاوره تخصصی و گزارش به والدین؛ همه چیز برای رسیدن به بهترین نتیجه
          </p>

          <HeroIllustration className="lg:hidden" />

          <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-2">
            <Button
              href="/subscriptions"
              variant="primary"
              size="lg"
              className="h-7 w-[90%] justify-center px-4 text-sm sm:text-base"
              endSlot={<IoChevronBackOutline className="size-4 shrink-0" />}
            >
              شروع مسیر موفقیت
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="h-7 w-[90%] justify-center border-brand-blue !bg-background px-4 text-sm !text-brand-blue hover:!bg-background sm:text-base"
            >
              تماس با ما
            </Button>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-lg lg:order-2 lg:block lg:max-w-none">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
