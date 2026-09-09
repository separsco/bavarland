export const planningWeekDays = [
  { id: "sat", label: "شنبه", date: "12", active: false },
  { id: "sun", label: "یکشنبه", date: "13", active: false },
  { id: "mon", label: "دوشنبه", date: "14", active: false },
  { id: "tue", label: "سه‌شنبه", date: "15", active: true },
  { id: "wed", label: "چهارشنبه", date: "16", active: false },
  { id: "thu", label: "پنجشنبه", date: "17", active: false },
  { id: "fri", label: "جمعه", date: "18", active: false },
] as const;

export const planningSelectedDate = "سه‌شنبه ۱۵ مرداد";

export const planningProgress = {
  done: 2,
  total: 4,
  percent: 85,
};

export const counselorMessage = "امروز عالی پیش رفتی، موفق باشی 💜";

export const planningTasks = [
  {
    id: "math",
    title: "ریاضی ۲",
    subtitle: "فصل دوازدهم (مبحث تابع)",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    status: "done",
  },
  {
    id: "chemistry",
    title: "شیمی ۱۲",
    subtitle: "فصل اول (ساختار اتم)",
    time: "۱۰:۳۰ - ۱۲:۰۰",
    status: "done",
  },
  {
    id: "biology",
    title: "زیست ۱۲",
    subtitle: "فصل دوم (گردش مواد)",
    time: "۱۴:۰۰ - ۱۶:۰۰",
    status: "pending",
  },
  {
    id: "physics",
    title: "فیزیک ۱۲",
    subtitle: "فصل نوسان",
    time: "۱۶:۳۰ - ۱۸:۰۰",
    status: "pending",
  },
] as const;
