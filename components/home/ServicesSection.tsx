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
};

const services: Service[] = [
  {
    id: "pension",
    label: "پانسیون مطالعاتی",
    title: "پانسیون مطالعاتی؛ محیطی برای تمرکز و پیشرفت",
    description:
      "فضایی آرام و منظم برای مطالعه متمرکز، همراه با نظارت مشاور و پیگیری مستمر عملکرد دانش‌آموزان.",
    features: [
      "برنامه مطالعاتی منظم",
      "ایجاد انگیزه و رقابت سالم",
      "نظارت و پیگیری مستمر",
      "ارتباط آسان و مستقیم",
    ],
    iconActive: "/images/monitor-recorder.svg",
    iconInactive: "/images/monitor-recorder2.svg",
  },
  {
    id: "planning",
    label: "برنامه‌ریزی تحصیلی",
    title: "برنامه‌ریزی تحصیلی؛ مسیر شفاف تا هدف",
    description:
      "برنامه شخصی‌سازی‌شده بر اساس وضعیت فعلی، هدف کنکور و سبک مطالعهٔ هر دانش‌آموز.",
    features: [
      "تقویم مطالعاتی هفتگی",
      "تعادل بین دروس عمومی و تخصصی",
      "بازنگری دوره‌ای برنامه",
      "هماهنگی با سطح پیشرفت",
    ],
    iconActive: "/images/calendar.svg",
    iconInactive: "/images/calendar2.svg",
  },
  {
    id: "vip",
    label: "مشاوره VIP",
    title: "مشاوره VIP؛ همراهی تخصصی و نزدیک",
    description:
      "جلسات اختصاصی با مشاور باتجربه برای تحلیل مسیر، رفع موانع و تصمیم‌گیری‌های کلیدی.",
    features: [
      "جلسات یک‌به‌یک",
      "پشتیبانی اولویت‌دار",
      "تحلیل نقاط ضعف و قوت",
      "برنامه اصلاحی اختصاصی",
    ],
    iconActive: "/images/headphone2.svg",
    iconInactive: "/images/headphone.svg",
  },
  {
    id: "followup",
    label: "پیگیری تلفنی",
    title: "پیگیری تلفنی؛ همراهی مداوم در مسیر",
    description:
      "تماس‌های منظم برای پایش اجرای برنامه، ایجاد انگیزه و جلوگیری از افت عملکرد.",
    features: [
      "تماس‌های زمان‌بندی‌شده",
      "گزارش پیشرفت به خانواده",
      "یادآوری اهداف هفتگی",
      "پشتیبانی در لحظهٔ نیاز",
    ],
    iconActive: "/images/call-calling.svg",
    iconInactive: "/images/call-calling2.svg",
  },
  {
    id: "major",
    label: "انتخاب رشته",
    title: "انتخاب رشته؛ تصمیم آگاهانه برای آینده",
    description:
      "راهنمایی مبتنی بر علاقه، استعداد و واقعیت بازار برای انتخاب رشتهٔ دانشگاهی مناسب.",
    features: [
      "تحلیل شخصیت و علاقه",
      "بررسی ظرفیت و رتبه",
      "معرفی مسیرهای شغلی",
      "مشاوره خانواده و دانش‌آموز",
    ],
    iconActive: "/images/award.svg",
    iconInactive: "/images/award2.svg",
  },
  {
    id: "academy",
    label: "آکادمی",
    title: "آکادمی ویدیوهای آموزشی باورلند",
    description:
      "ویدیوهای آموزشی هدفمند برای مرور چندباره، تقویت نقاط ضعف و آمادگی بهتر تا روز آزمون.",
    features: [
      "مرور چندباره و یادگیری آسان",
      "آموزش هدفمند و آنلاین",
      "بررسی تمام دروس",
      "تقویت نقاط ضعف",
    ],
    iconActive: "/images/video-play.svg",
    iconInactive: "/images/video-play2.svg",
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
          <h2 className="text-xl font-extrabold leading-snug text-foreground sm:text-3xl lg:text-4xl">
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
                src="/images/Group 1171274866.svg"
                alt={`تصویر ${active.label}`}
                width={578}
                height={417}
                loading="eager"
                decoding="async"
                className="block h-auto w-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-5 lg:order-1">
              <h3 className="text-lg font-bold leading-8 text-foreground max-w-[400px] sm:text-xl lg:text-2xl">
                {active.title.includes("؛") ? (
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
              <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {active.description}
              </p>

              <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {active.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative flex items-center overflow-hidden rounded-xl bg-[#f3f4f6]"
                  >
                    {/* <span className="absolute inset-y-0 start-0 w-1 bg-accent-line" /> */}
                    <img src="/images/Union3.svg" alt="" />
                    <span className="text-sm pr-3 font-medium leading-6 text-foreground">
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
