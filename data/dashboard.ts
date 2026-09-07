export const dashboardNavItems = [
  {
    href: "/dashboard",
    label: "داشبورد",
    image: "/images/dashboard.png",
    description: "برنامه مطالعاتی، پانسیون و وضعیت روزانه دانش‌آموز در باورلند.",
  },
  {
    href: "/dashboard/pension",
    label: "پانسیون",
    image: "/images/dashboardPension.svg",
    description: "ورود به اتاق مطالعه آنلاین و مشاهده وضعیت پانسیون.",
  },
  {
    href: "/dashboard/planning",
    label: "برنامه ریزی",
    image: "/images/dashboardPlaning.svg",
    description: "برنامه مطالعاتی روزانه و هفتگی خود را اینجا مدیریت کن.",
  },
  {
    href: "/dashboard/academy",
    label: "آکادمی",
    image: "/images/dashboardAcademy.svg",
    description: "ویدیوها و محتوای آموزشی آکادمی باورلند.",
  },
  {
    href: "/dashboard/consulting",
    label: "مشاوره (VIP)",
    image: "/images/dashboardConsulting.svg",
    description: "ارتباط با مشاور و مشاهده زمان جلسات مشاوره.",
  },
  {
    href: "/dashboard/major",
    label: "انتخاب رشته",
    image: "/images/dashboardMajor.svg",
    description: "انتخاب رشته را بر اساس رتبه، علاقه و اولویت‌هایت انجام بده.",
  },
  {
    href: "/dashboard/reports",
    label: "گزارش عملکرد",
    image: "/images/dashboardReports.svg",
    description: "گزارش پیشرفت، آزمون‌ها و عملکرد مطالعاتی.",
  },
  {
    href: "/dashboard/account",
    label: "حساب کاربری",
    image: "/images/dashboardAccount.svg",
    description: "اطلاعات حساب کاربری و تنظیمات پروفایل.",
  },
] as const;

export const dashboardUser = {
  firstName: "کیمیا",
  greeting: "درود کیمیا 👋 به باورلند خوش اومدی",
  points: "۳,۲۴۰",
  rank: "رتبه دوم",
};

export const currentSession = {
  title: "ریاضی — فصل مشتق",
  timeRange: "۰۸:۰۰ - ۱۰:۰۰",
  status: "۱۰ دقیقه دیگر فعال می‌شود",
  attendees: ["session-avatar-1", "session-avatar-2", "session-avatar-3", "session-avatar-4"],
};

export type PlanTone = "green" | "orange" | "red" | "blue" | "muted";

export type WeeklyPlanItem = {
  title: string;
  subtitle: string;
  tone: PlanTone;
};

export const weekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
] as const;

export const weeklyPlan: WeeklyPlanItem[][] = [
  [
    { title: "شیمی ۱۲ (فصل ۱)", subtitle: "تست زمان‌دار", tone: "green" },
    { title: "فیزیک ۱۲", subtitle: "درسنامه", tone: "blue" },
    { title: "ادبیات", subtitle: "آرایه", tone: "muted" },
  ],
  [
    { title: "ریاضی ۲", subtitle: "فصل مشتق", tone: "orange" },
    { title: "زیست ۱۲", subtitle: "تست", tone: "green" },
  ],
  [
    { title: "شیمی ۱۲", subtitle: "آزمونک", tone: "red" },
    { title: "زبان", subtitle: "لغت و گرامر", tone: "blue" },
    { title: "هندسه", subtitle: "تمرین", tone: "muted" },
  ],
  [
    { title: "زیست ۱۲ (فصل ۲)", subtitle: "درسنامه", tone: "green" },
    { title: "ریاضی ۲", subtitle: "تست زمان‌دار", tone: "orange" },
  ],
  [
    { title: "فیزیک ۱۲", subtitle: "حل تمرین", tone: "blue" },
    { title: "شیمی ۱۲", subtitle: "جمع‌بندی", tone: "green" },
    { title: "دینی", subtitle: "درس ۳", tone: "muted" },
  ],
  [
    { title: "ریاضی ۲", subtitle: "مرور", tone: "orange" },
    { title: "ادبیات", subtitle: "قرابت", tone: "red" },
  ],
  [
    { title: "آزمون جامع", subtitle: "صبح", tone: "blue" },
    { title: "تحلیل آزمون", subtitle: "عصر", tone: "muted" },
  ],
];

export const streakDays = [
  { label: "ش", done: true, current: false },
  { label: "ی", done: true, current: false },
  { label: "د", done: true, current: false },
  { label: "س", done: false, current: true },
  { label: "چ", done: false, current: false },
  { label: "پ", done: false, current: false },
  { label: "ج", done: false, current: false },
] as const;

export const counselorAlert = {
  name: "رها آزمند",
  date: "امروز ۲ اردیبهشت",
  time: "۱۵:۳۰",
};

export const todayPlan = [
  {
    id: "math",
    title: "ریاضی ۲ - فصل دوازدهم",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    done: false,
  },
  {
    id: "chemistry",
    title: "شیمی ۱۲ - فصل اول",
    time: "۱۰:۳۰ - ۱۲:۰۰",
    done: true,
  },
  {
    id: "biology",
    title: "زیست ۱۲ - فصل دوم",
    time: "۱۴:۰۰ - ۱۶:۰۰",
    done: false,
  },
  {
    id: "physics",
    title: "فیزیک ۱۲ - نوسان",
    time: "۱۶:۳۰ - ۱۸:۰۰",
    done: false,
  },
] as const;

export const recommendedVideos = [
  {
    id: "video-1",
    title: "جمع‌بندی فصل مشتق ریاضی",
    slot: "academy-video-1",
  },
  {
    id: "video-2",
    title: "تست‌های پرتکرار شیمی دوازدهم",
    slot: "academy-video-2",
  },
] as const;
