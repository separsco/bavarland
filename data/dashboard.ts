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
  title: " درود کیمیا 👋  ",
  desc: "به باورلند خوش اومدی",
  points: "۳,۲۴۰",
  rank: "رتبه دوم",
} as const;

export const currentSession = {
  title: "ریاضی — فصل مشتق",
  status: "۱۰ دقیقه دیگر فعال می‌شود",
  timeRange: "۰۸:۰۰ - ۱۰:۰۰",
  extraAttendees: 16,
  attendees: [
    "session-attendee-1",
    "session-attendee-2",
    "session-attendee-3",
  ],
} as const;

export type PlanTone = "green" | "orange" | "red" | "blue" | "muted";

export type WeeklyPlanItem = {
  title: string;
  subtitle: string;
  tone: PlanTone;
};

export type WeeklyPlanCell = WeeklyPlanItem | null;

export const weekDays = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
] as const;

export const weeklyTimeRange = {
  start: "۰۷:۳۰",
  end: "۰۹:۰۰",
} as const;

const chemistryTimed: WeeklyPlanItem = {
  title: "شیمی۲(فصل ۱)",
  subtitle: "تست زمان‌دار",
  tone: "muted",
};

const chemistryStudy: WeeklyPlanItem = {
  title: "شیمی۲(فصل ۱)",
  subtitle: "مطالعه",
  tone: "muted",
};

export const weeklyPlan: WeeklyPlanCell[][] = [
  [
    { ...chemistryTimed, tone: "red" },
    chemistryStudy,
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    chemistryStudy,
    { ...chemistryTimed, tone: "orange" },
    chemistryStudy,
  ],
  [
    { ...chemistryTimed, tone: "green" },
    { title: "ریاضی ۲", subtitle: "مطالعه", tone: "blue" },
    chemistryStudy,
    { ...chemistryTimed, tone: "orange" },
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    { ...chemistryTimed, tone: "orange" },
  ],
  [
    chemistryStudy,
    { ...chemistryTimed, tone: "green" },
    { title: "زیست ۱۲", subtitle: "تست زمان‌دار", tone: "muted" },
    chemistryStudy,
    { title: "فیزیک ۱۲", subtitle: "آزمون", tone: "muted" },
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
  ],
  [
    { ...chemistryTimed, tone: "orange" },
    chemistryStudy,
    { ...chemistryTimed, tone: "green" },
    { title: "ادبیات", subtitle: "مطالعه", tone: "muted" },
    chemistryStudy,
    { ...chemistryTimed, tone: "red" },
    { ...chemistryTimed, tone: "green" },
  ],
  [
    chemistryStudy,
    null,
    { ...chemistryTimed, tone: "orange" },
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    chemistryStudy,
    { title: "دینی", subtitle: "مطالعه", tone: "muted" },
  ],
  [
    { title: "فیزیک ۱۲", subtitle: "تست زمان‌دار", tone: "muted" },
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    { ...chemistryTimed, tone: "orange" },
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    { ...chemistryTimed, tone: "orange" },
  ],
  [
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    { ...chemistryTimed, tone: "red" },
    chemistryStudy,
    { title: "زبان", subtitle: "مطالعه", tone: "muted" },
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
  ],
  [
    chemistryStudy,
    { ...chemistryTimed, tone: "orange" },
    chemistryStudy,
    { ...chemistryTimed, tone: "green" },
    { ...chemistryTimed, tone: "orange" },
    chemistryStudy,
    { ...chemistryTimed, tone: "green" },
  ],
  [
    { ...chemistryTimed, tone: "orange" },
    chemistryStudy,
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    chemistryStudy,
    { title: "آزمون جامع", subtitle: "آزمون", tone: "muted" },
    { ...chemistryTimed, tone: "red" },
  ],
  [
    chemistryStudy,
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    { ...chemistryTimed, tone: "orange" },
    { ...chemistryTimed, tone: "green" },
    chemistryStudy,
    { title: "تحلیل آزمون", subtitle: "مطالعه", tone: "muted" },
  ],
];

export const streakInfo = {
  count: 3,
  subtitle: "(روزهای متوالی که اینجا بودی)",
  message: "تبریک میگم سه روز که پشت سر هم داری تلاش میکنی!",
} as const;

export const streakDays = [
  { label: "شنبه", done: true, current: false },
  { label: "یکشنبه", done: true, current: false },
  { label: "دوشنبه", done: true, current: false },
  { label: "سه شنبه", done: false, current: true },
  { label: "چهارشنبه", done: false, current: false },
  { label: "پنج شنبه", done: false, current: false },
  { label: "جمعه", done: false, current: false },
] as const;

export const counselorAlert = {
  name: "رها آزمند",
  date: "امروز ۲ اردیبهشت",
  time: "۱۵:۳۰",
};

export const todaySessions = [
  {
    id: "enter",
    title: "ریاضی ۲",
    subtitle: "فصل دوازدهم (مبحث تابع)",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    status: "enter",
  },
  {
    id: "remaining",
    title: "ریاضی ۲",
    subtitle: "فصل دوازدهم (مبحث تابع)",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    status: "remaining",
    remainingLabel: "۷ دقیقه مونده",
  },
  {
    id: "pending",
    title: "ریاضی ۲",
    subtitle: "فصل دوازدهم (مبحث تابع)",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    status: "pending",
  },
  {
    id: "done",
    title: "ریاضی ۲",
    subtitle: "فصل دوازدهم (مبحث تابع)",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    status: "done",
  },
] as const;

export const todayPlan = [
  {
    id: "math-1",
    title: "ریاضی ۲",
    subtitle: "فصل دوازدهم (مبحث تابع)",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    done: false,
  },
  {
    id: "math-2",
    title: "ریاضی ۲",
    subtitle: "فصل دوازدهم (مبحث تابع)",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    done: false,
  },
  {
    id: "math-3",
    title: "ریاضی ۲",
    subtitle: "فصل دوازدهم (مبحث تابع)",
    time: "۰۸:۰۰ - ۱۰:۰۰",
    done: false,
  },
] as const;

export const recommendedVideos = [
  {
    id: "video-1",
    title: "اهمال کاری چیه و چطور درمانش کنیم؟",
    duration: "۰۱:۴۵:۲۳",
    slot: "academy-video-1",
  },
  {
    id: "video-2",
    title: "اهمال کاری چیه و چطور درمانش کنیم؟",
    duration: "۰۱:۴۵:۲۳",
    slot: "academy-video-2",
  },
] as const;
