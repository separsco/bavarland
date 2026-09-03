"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";

type ServiceId =
  | "pension"
  | "planning"
  | "vip"
  | "followup"
  | "major"
  | "academy";

type Service = {
  id: ServiceId;
  label: string;
  title: string;
  description: string;
  features: [string, string, string, string];
  /** آیکون حالت فعال */
  iconActive: string;
  /** آیکون حالت عادی */
  iconInactive: string;
  /** تصویر بخش محتوا */
  image: string;
};

const services: Service[] = [
  {
    id: "pension",
    label: "پانسیون مطالعاتی",
    title: "پانسیون مطالعاتی؛ محیطی برای تمرکز و پیشرفت",
    description:
      "پانسیون مطالعاتی فضایی آرام، استاندارد و هدفمند برای مطالعه فراهم می‌کند تا بتوانید بدون حواس‌پرتی و در محیطی منظم، بیشترین بازدهی را داشته باشید.در این محیط، حضور مشاوران و پشتیبان‌ها، برنامه‌ریزی منظم و فضای رقابتی سالم باعث می‌شود کیفیت مطالعه افزایش پیدا کند و رسیدن به اهداف آسان‌تر شود.",
    features: [
      "برنامه مطالعاتی منظم",
      "ایجاد انگیزه و رقابت سالم",
      "نظارت و پیگیری مستمر",
      "ارتباط آسان و مستقیم",
    ],
    iconActive: "/images/monitor-recorder.svg",
    iconInactive: "/images/monitor-recorder2.svg",
    image: "/images/Group 1171274866.svg",
  },
  {
    id: "planning",
    label: "برنامه‌ریزی تحصیلی",
    title: "برنامه‌ریزی تحصیلی اختصاصی باورلند",
    description: `هر دانش‌آموز شرایط، توانایی‌ها، زمان آزاد و اهداف متفاوتی دارد؛ به همین دلیل یک برنامه ثابت نمی‌تواند برای همه مؤثر باشد. در باورلند، برنامه‌ریزی تحصیلی بر اساس سطح علمی، ساعات مطالعه، نقاط قوت و ضعف و هدف نهایی شما طراحی می‌شود تا مسیر یادگیری کاملاً شخصی‌سازی شود.
در طول مسیر نیز برنامه‌ها به‌صورت مداوم بررسی و بهینه‌سازی می‌شوند تا همیشه بهترین بازدهی را داشته باشید و با اطمینان بیشتری به سمت موفقیت حرکت کنید.`,
    features: [
      "برنامه اختصاصی و شخصی",
      "تعیین اهداف کوتاه و بلندمدت",
      "بررسی و اصلاح مستمر برنامه",
      "گزارش و ارزیابی عملکرد",
    ],
    iconActive: "/images/calendar.svg",
    iconInactive: "/images/calendar2.svg",
    image: "/images/Group 1171274867.svg",
  },
  {
    id: "vip",
    label: "مشاوره VIP",
    title: "مشاوره VIP و همراهی تخصصی",
    description:`گاهی یک تصمیم درست می‌تواند مسیر آینده را تغییر دهد. خدمات مشاوره VIP این امکان را فراهم می‌کند تا با همراهی مشاوران باتجربه، بهترین تصمیم‌ها را برای مسیر تحصیلی و شخصی خود بگیرید.
در جلسات مشاوره، شرایط فعلی، اهداف و چالش‌های شما بررسی می‌شود و راهکارهایی کاملاً متناسب با نیازتان ارائه می‌گردد تا با آرامش و اطمینان بیشتری در مسیر موفقیت قدم بردارید.`,
    features: [
      " جلسات اختصاصی مشاوره",
      " تحلیل شرایط و تعیین مسیر",
      "  راهکارهای شخصی‌سازی‌شده",
      "  همراهی تا رسیدن به نتیجه",
    ],
    iconActive: "/images/headphone2.svg",
    iconInactive: "/images/headphone.svg",
    image: "/images/Group 1171274868.svg",
  },
  {
    id: "followup",
    label: "پیگیری تلفنی",
    title: "پیگیری تلفنی؛ همراهی تا رسیدن به هدف",
    description: `مسیر موفقیت فقط به داشتن یک برنامه خوب محدود نمی‌شود؛ مهم این است که در طول مسیر به برنامه پایبند بمانید. در سرویس پیگیری تلفنی، کارشناسان باورلند به‌صورت منظم با شما در ارتباط هستند، روند مطالعه و میزان پیشرفتتان را بررسی می‌کنند و در صورت وجود مشکل یا عقب‌افتادگی، برای بهبود شرایط راهکار مناسب ارائه می‌دهند.
این پیگیری مستمر کمک می‌کند انگیزه خود را حفظ کنید و از برنامه عقب نمانید.`,
    features: [
      " بررسی میزان پایبندی به برنامه",
      "ارائه راهکارهای مناسب",
      "  ایجاد انگیزه و حفظ نظم",
      " پیگیری منظم مطالعه",
    ],
    iconActive: "/images/call-calling.svg",
    iconInactive: "/images/call-calling2.svg",
    image: "/images/Group 1171274869.svg",
  },
  {
    id: "major",
    label: "انتخاب رشته",
    title: " انتخاب رشته تخصصی؛ پیشنهاد بهترین انتخاب‌های ممکن",
    description:`انتخاب رشته یکی از مهم‌ترین تصمیم‌ها در مسیر تحصیلی و آینده شماست. در باورلند، با بررسی دقیق رتبه و کارنامه، سوابق تحصیلی، علایق، توانمندی‌ها و اهداف شما، رشته‌ها و دانشگاه‌های مناسب را شناسایی می‌کنیم. سپس با بررسی شانس قبولی و شرایط هر انتخاب، اولویت‌ها را به‌صورت اصولی تنظیم می‌کنیم تا انتخاب رشته‌ای آگاهانه، منطقی و متناسب با آینده‌ای که برای خودتان در نظر گرفته‌اید داشته باشید.`,
    features: [
      " تحلیل رتبه و کارنامه",
      "  اولویت‌بندی انتخاب‌ها",
      "  بررسی علایق و توانمندی‌ها",
      "   بررسی شانس قبولی",
    ],
    iconActive: "/images/award.svg",
    iconInactive: "/images/award2.svg",
    image: "/images/Group 1171274861.svg",
  },
  {
    id: "academy",
    label: "آکادمی",
    title: "آکادمی ویدیوهای آموزشی باورلند",
    description:`در آکادمی باورلند، مجموعه‌ای از ویدیوهای آموزشی تخصصی و کاربردی در اختیار شما قرار می‌گیرد تا بتوانید مفاهیم درسی را بهتر یاد بگیرید و نقاط ضعف خود را برطرف کنید. آموزش‌ها به‌صورت منظم و هدفمند تهیه شده‌اند و این امکان را دارید که هر درس را در زمان مناسب خودتان مشاهده و در صورت نیاز چندین بار مرور کنید. با دسترسی به محتوای آموزشی متنوع، می‌توانید بدون محدودیت زمانی و مکانی یادگیری خود را ادامه دهید و با آمادگی بیشتری در مسیر تحصیلی پیش بروید.`,
    features: [
      " مرور چندباره و یادگیری آسان",
      "آموزش هدفمند و آنلاین",
      "  بررسی شانس قبولی",
      "  تقویت نقاط ضعف",
    ],
    iconActive: "/images/video-play.svg",
    iconInactive: "/images/video-play2.svg",
    image: "/images/Group 1171274860.svg",
  },
];

function ServiceTabIcon({
  service,
  isActive,
  className,
}: {
  service: Service;
  isActive: boolean;
  className: string;
}) {
  return (
    <img
      src={isActive ? service.iconActive : service.iconInactive}
      alt=""
      aria-hidden
      className={`shrink-0 object-contain ${className}`}
    />
  );
}

function ServiceTabs({
  activeId,
  onChange,
  variant,
}: {
  activeId: ServiceId;
  onChange: (id: ServiceId) => void;
  variant: "mobile" | "desktop";
}) {
  if (variant === "mobile") {
    return (
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {services.map((service) => {
          const isActive = service.id === activeId;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onChange(service.id)}
              className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-center text-xs font-medium transition-colors sm:text-sm ${isActive
                  ? "border-primary bg-white text-primary shadow-sm"
                  : "border-border bg-white text-foreground"
                }`}
            >
              <ServiceTabIcon
                service={service}
                isActive={isActive}
                className="size-4"
              />
              <span>{service.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="hidden w-full md:flex md:flex-nowrap md:items-end md:justify-between md:gap-1 lg:justify-center lg:gap-3 xl:gap-8">
      {services.map((service) => {
        const isActive = service.id === activeId;

        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onChange(service.id)}
            className={`relative inline-flex shrink-0 items-center gap-1.5 px-1.5 pt-1 pb-3 text-xs transition-colors lg:gap-2 lg:px-3 lg:text-sm xl:px-4 ${isActive
                ? "font-semibold text-primary"
                : "font-medium text-muted"
              }`}
          >
            <ServiceTabIcon
              service={service}
              isActive={isActive}
              className="size-4 lg:size-5"
            />
            <span className="whitespace-nowrap">{service.label}</span>
            {isActive && (
              <img
                src="/images/Unionicon.svg"
                alt=""
                aria-hidden
                width={86}
                height={25}
                className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[25px] w-[86px] -translate-x-1/2 translate-y-[calc(100%-1px)]"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

export function ServicesSection() {
  const [activeId, setActiveId] = useState<ServiceId>("pension");
  const active = services.find((service) => service.id === activeId) ?? services[0];

  return (
    <section className="py-12 sm:py-16 ">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-3 text-center sm:mb-10 sm:gap-4">
          <Badge className="!bg-[#E8EDF3] !text-brand-blue px-11 py-2 text-sm">خدمات ما</Badge>
          <h2 className="text-xl font-medium leading-snug text-foreground sm:text-3xl lg:text-3xl">
            هر چیزی که برای{" "}
            <span className="text-primary">موفقیت</span> نیاز داری، اینجاست!
          </h2>
          <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
            از اولین روز مطالعه تا رسیدن به هدفت، در هر قدم همراهت هستیم . <br />برای مشاهده توضیحات هر خدمت، روی آن کلیک کنید.
          </p>
        </div>

        <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm sm:rounded-[2rem]">
          <div className="relative border-b border-border px-4 pt-3 pb-4 sm:px-6 sm:pt-4 sm:pb-4 md:pb-0 lg:px-8">
            <ServiceTabs activeId={activeId} onChange={setActiveId} variant="mobile" />
            <ServiceTabs activeId={activeId} onChange={setActiveId} variant="desktop" />
          </div>

          <div className="grid items-center gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-10">
            <div className="relative mx-auto w-full max-w-[578px] lg:order-2">
              <img
                src={active.image}
                alt={`تصویر ${active.label}`}
                width={578}
                height={417}
                loading="eager"
                decoding="async"
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 lg:order-1">
              <h3 className="text-lg font-bold leading-8 text-foreground sm:text-xl lg:text-2xl">
                {active.title.includes("اختصاصی باورلند") ? (
                  <>
                    {active.title.split("اختصاصی باورلند")[0]}
                    <span className="text-primary">اختصاصی باورلند</span>
                  </>
                ) : active.title.includes("مشاوره VIP") ? (
                  <>
                    <span className="text-primary">مشاوره VIP</span>
                    {active.title.split("مشاوره VIP")[1]}
                  </>
                ) : active.title.includes("رسیدن به هدف") ? (
                  <>
                    {active.title.split("رسیدن به هدف")[0]}
                    <span className="text-primary">رسیدن به هدف</span>
                  </>
                ) : active.title.includes("؛") ? (
                  <>
                    <span className="text-primary">
                      {active.title.split("؛")[0]}
                    </span>
                    ؛{active.title.split("؛").slice(1).join("؛")}
                  </>
                ) : active.title.includes("باورلند") ? (
                  <>
                    {active.title.split("باورلند")[0]}
                    <span className="text-primary">باورلند</span>
                    {active.title.split("باورلند")[1]}
                  </>
                ) : (
                  active.title
                )}
              </h3>
              <p className="whitespace-pre-line text-sm leading-7 max-w-[500px] text-muted sm:text-base sm:leading-8">
                {active.description}
              </p>

              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-3">
                {active.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative flex min-h-[48px] items-center overflow-hidden rounded-xl bg-[#f3f4f6]"
                  >
                    <img
                      src="/images/Union3.svg"
                      alt=""
                      aria-hidden
                      className="h-12 w-[13px] shrink-0 self-stretch object-fill"
                    />
                    <span className="flex-1 px-3 py-2.5 text-center text-sm font-medium leading-6 text-[#164685]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
