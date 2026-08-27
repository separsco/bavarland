"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

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
  },
];

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
      <div className="mb-6 grid grid-cols-2 gap-3 md:hidden">
        {services.map((service) => {
          const isActive = service.id === activeId;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onChange(service.id)}
              className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-center text-xs font-medium transition-colors sm:text-sm ${
                isActive
                  ? "border-primary bg-white text-primary shadow-sm"
                  : "border-border bg-white text-foreground"
              }`}
            >
              <IconSlot
                label={`service-tab-icon-${service.id}`}
                className="size-4 shrink-0"
              />
              <span>{service.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="mb-8 hidden gap-2 md:flex md:flex-wrap md:justify-center">
      {services.map((service) => {
        const isActive = service.id === activeId;

        return (
          <button
            key={service.id}
            type="button"
            onClick={() => onChange(service.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm transition-colors ${
              isActive
                ? "bg-sky font-semibold text-primary"
                : "font-medium text-muted hover:bg-sky-soft hover:text-foreground"
            }`}
          >
            <IconSlot
              label={`service-tab-icon-${service.id}`}
              className="size-5"
            />
            {service.label}
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
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-3 text-center sm:mb-10 sm:gap-4">
          <Badge>خدمات ما</Badge>
          <h2 className="text-xl font-extrabold leading-snug text-foreground sm:text-3xl lg:text-4xl">
            هر چیزی که برای{" "}
            <span className="text-primary">موفقیت</span> نیاز داری، اینجاست!
          </h2>
          <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
            روی هر خدمت بزن تا جزئیاتش را ببینی؛ از اولین روز مطالعه تا رسیدن به
            هدفت کنارتمون هستیم.
          </p>
        </div>

        <ServiceTabs activeId={activeId} onChange={setActiveId} variant="mobile" />
        <ServiceTabs activeId={activeId} onChange={setActiveId} variant="desktop" />

        <div className="grid items-center gap-6 rounded-[1.75rem] border border-border bg-white p-5 shadow-sm sm:gap-8 sm:rounded-[2rem] sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10">
          <MediaSlot
            label={`service-illustration-${active.id}`}
            className="mx-auto aspect-[4/3] w-full max-w-md rounded-3xl lg:order-2"
          />

          <div className="flex flex-col gap-4 sm:gap-5 lg:order-1">
            <h3 className="text-lg font-bold leading-8 text-foreground sm:text-xl lg:text-2xl">
              {active.title.split("باورلند").length > 1 ? (
                <>
                  {active.title.split("باورلند")[0]}
                  <span className="text-primary">باورلند</span>
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
                  className="flex items-center gap-3 rounded-2xl bg-sky-soft px-3 py-3 sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0"
                >
                  <span className="h-8 w-1 shrink-0 rounded-full bg-accent-line sm:mt-1 sm:h-10" />
                  <span className="text-sm font-medium leading-6 text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
