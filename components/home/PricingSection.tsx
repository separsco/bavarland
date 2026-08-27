import { Button } from "@/components/ui/Button";
import { IconSlot } from "@/components/ui/IconSlot";

type Plan = {
  id: string;
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "1m",
    title: "پلن ۱ ماهه",
    price: "۲,۲۰۰,۰۰۰",
    features: [
      "برنامه مطالعاتی اختصاصی",
      "پیگیری هفتگی مشاور",
      "گزارش پیشرفت",
      "پشتیبانی آنلاین",
      "دسترسی به محتوای آموزشی",
      "جلسه معارفه اولیه",
    ],
  },
  {
    id: "3m",
    title: "پلن ۳ ماهه",
    price: "۲,۲۰۰,۰۰۰",
    features: [
      "برنامه مطالعاتی اختصاصی",
      "پیگیری منظم مشاور",
      "گزارش پیشرفت ماهانه",
      "پشتیبانی اولویت‌دار",
      "دسترسی کامل به محتوا",
    ],
  },
  {
    id: "6m",
    title: "پلن ۶ ماهه",
    price: "۲,۲۰۰,۰۰۰",
    features: [
      "برنامه مطالعاتی اختصاصی",
      "پیگیری مستمر مشاور",
      "تحلیل عملکرد دوره‌ای",
      "پشتیبانی سریع",
      "دسترسی کامل به محتوا",
      "جلسات رفع اشکال",
    ],
  },
  {
    id: "12m",
    title: "پلن ۱۲ ماهه",
    price: "۲,۲۰۰,۰۰۰",
    featured: true,
    features: [
      "برنامه مطالعاتی اختصاصی",
      "پیگیری مستمر مشاور",
      "تحلیل عملکرد دوره‌ای",
      "پشتیبانی ویژه",
      "دسترسی کامل به محتوا",
      "جلسات رفع اشکال",
      "مشاوره انتخاب رشته",
    ],
  },
];

function PricingCard({ plan }: { plan: Plan }) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm sm:p-7 ${
        plan.featured ? "border-primary" : "border-border"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-foreground">{plan.title}</h3>
          <p className="mt-2 text-2xl font-extrabold text-primary">
            {plan.price}{" "}
            <span className="text-sm font-medium text-muted">تومان</span>
          </p>
        </div>
        <IconSlot label={`plan-icon-${plan.id}`} className="size-8" />
      </div>

      <ul className="mb-6 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-foreground">
            <IconSlot label="check-icon" className="mt-0.5 size-4 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/subscriptions"
        variant={plan.featured ? "primary" : "navy"}
        size="lg"
        className="w-full"
        endSlot={<IconSlot label="chevron-icon" className="size-4" />}
      >
        خرید اشتراک
      </Button>
    </article>
  );
}

export function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-y-16 start-0 w-24 opacity-10 sm:w-32">
        <IconSlot label="pricing-decor-right" className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-y-16 end-0 w-24 opacity-10 sm:w-32">
        <IconSlot label="pricing-decor-left" className="h-full w-full" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <h2 className="text-xl font-extrabold leading-snug text-foreground sm:text-3xl lg:text-4xl">
            پلن‌های اشتراک{" "}
            <span className="text-primary">باورلند</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
            پلنی را انتخاب کن که با مسیر و هدف فعلی‌ات هم‌خوانی دارد.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
