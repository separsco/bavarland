export type AuthSlide = {
  id: string;
  title: string;
  description: string;
};

export const authSlides: AuthSlide[] = [
  {
    id: "plan",
    title: "تنها درس نخون، با برنامه و نظارت پیش برو",
    description:
      "با برنامه آنلاین پان‌استادی، مسیر مطالعه‌ات شفاف می‌شود و هر روز می‌دانی دقیقاً چه کاری باید انجام بدهی.",
  },
  {
    id: "skills",
    title: "هر مهارتی که نیاز داری، همینجاست",
    description:
      "از مشاوره تحصیلی و ویدیوهای آموزشی تا روش‌های مطالعه؛ همه ابزارهای لازم برای پیشرفت در یک جا.",
  },
  {
    id: "follow-up",
    title: "پیگیری منظم، رمز استمرار موفقیت",
    description:
      "با فالوآپ منظم و پشتیبانی تخصصی، مسیر درس خواندنت را از دست نمی‌دهی و با انگیزه جلو می‌روی.",
  },
  {
    id: "daily",
    title: "هر روز بدون سردرگمی مطالعه کن",
    description:
      "برنامه‌های شخصی‌سازی‌شده کمک می‌کنند هر روز با تمرکز و هدف مشخص مطالعه کنی و به نتیجه برسی.",
  },
];

const persianArabicDigits: Record<string, string> = {
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
};

export const MOBILE_NUMBER_MAX_LENGTH = 11;

export function normalizeMobileNumber(value: string) {
  return value
    .replace(/[۰-۹٠-٩]/g, (digit) => persianArabicDigits[digit] ?? digit)
    .replace(/[^\d]/g, "");
}

export function validateMobileNumber(value: string) {
  const digits = normalizeMobileNumber(value);

  if (!digits) {
    return "شماره موبایل را وارد کنید";
  }

  if (digits.length > 11) {
    return "شماره موبایل باید با 09 یا 9 شروع شده و بیش از 11 رقم نباشد";
  }

  if (!/^9\d{9}$/.test(digits) && !/^09\d{9}$/.test(digits)) {
    return "شماره موبایل باید با 09 یا 9 شروع شده و بیش از 11 رقم نباشد";
  }

  return null;
}

export function isMobileNumberValid(value: string) {
  return validateMobileNumber(value) === null;
}
