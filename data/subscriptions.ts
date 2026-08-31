export type SubscriptionPlan = {
  id: string;
  title: string;
  description: string;
  tagline: string;
  price: string;
  features: string[];
  featured?: boolean;
};

const commonFeatures = [
  "برنامه‌ریزی تحصیلی متناسب با شرایط و اهداف دانش‌آموز",
  "دریافت مشاوره تخصصی برای مدیریت بهتر و رفع چالش‌های مطالعاتی",
  "پیگیری و فالوآپ منظم روند درس خواندن و اجرای برنامه",
  "بررسی میزان پیشرفت و نقاط قوت و ضعف و ویدیوهای آکادمی",
  "پشتیبانی و همراهی در مسیر رسیدن به اهداف تحصیلی",
] as const;

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "1m",
    title: "پلن ۱ ماهه",
    description: "شروع مسیر با باور لند",
    tagline: "شروع یه مسیر تازه",
    price: "۲,۲۰۰,۰۰۰",
    features: [...commonFeatures],
  },
  {
    id: "3m",
    title: "پلن ۳ ماهه",
    description: "سه ماه همراهی مستمر و هدفمند",
    tagline: "سه ماه برای یک تغییر جدی",
    price: "۲,۲۰۰,۰۰۰",
    features: [...commonFeatures],
  },
  {
    id: "12m",
    title: "پلن ۱۲ ماهه",
    description: "یک سال همراهی کامل تا انتخاب رشته",
    tagline: "کامل‌ترین پلن",
    price: "۲,۲۰۰,۰۰۰",
    featured: true,
    features: [
      ...commonFeatures,
      "راهنمایی در فرآیند انتخاب رشته و تصمیم‌گیری آگاهانه",
    ],
  },
  {
    id: "6m",
    title: "پلن ۶ ماهه",
    description: "یک مسیر منظم و پیوسته برای پیشرفت تحصیلی",
    tagline: "نیم‌سال برای رسیدن به هدف",
    price: "۲,۲۰۰,۰۰۰",
    features: [...commonFeatures],
  },
];

export function getSubscriptionPlanById(id: string) {
  return subscriptionPlans.find((plan) => plan.id === id);
}
