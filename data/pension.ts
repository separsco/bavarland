import type { PlanTone } from "@/data/dashboard";

export const pensionStats = [
  {
    id: "goals",
    title: "تحقق اهداف",
    icon: "pension-stat-goals",
    subtitle: "۴۶ جلسه از ۵۰ جلسه",
    percent: 92,
  },
  {
    id: "delay",
    title: "تأخیر در پانسیون",
    icon: "pension-stat-delay",
    subtitle: "۶ جلسه از ۵۰ جلسه",
    percent: 12,
  },
  {
    id: "absence",
    title: "غیبت در پانسیون",
    icon: "pension-stat-absence",
    subtitle: "۴ جلسه از ۵۰ جلسه",
    percent: 8,
  },

  {
    id: "presence",
    title: "حضور در پانسیون",
    icon: "pension-stat-presence",
    subtitle: "۴۶ جلسه از ۵۰ جلسه",
    percent: 92,
  },
 
 
] as const;

export const pensionPodium = [
  {
    rank: 2,
    name: "سارا محمدی",
    xp: "۳,۱۲۰ XP",
    avatar: "pension-rank-2",
  },
  {
    rank: 1,
    name: "کیمیا رضایی",
    xp: "۳,۲۴۰ XP",
    avatar: "pension-rank-1",
  },
  {
    rank: 3,
    name: "نیما کاظمی",
    xp: "۳,۰۵۰ XP",
    avatar: "pension-rank-3",
  },
] as const;

export const pensionRankList = [
  {
    rank: 4,
    name: "هلیا برزگر",
    xp: "۳,۰۰۰ XP",
    avatar: "pension-rank-4",
  },
  {
    rank: 5,
    name: "آراد حسینی",
    xp: "۲,۸۴۰ XP",
    avatar: "pension-rank-5",
  },
  {
    rank: 6,
    name: "نازنین احمدی",
    xp: "۲,۷۱۰ XP",
    avatar: "pension-rank-6",
  },
  {
    rank: 7,
    name: "پارسا کریمی",
    xp: "۲,۶۴۰ XP",
    avatar: "pension-rank-7",
  },
] as const;

export const pensionTimeSlots = [
  "۰۷:۳۰ - ۰۹:۰۰",
  "۰۹:۰۰ - ۱۰:۳۰",
  "۱۰:۳۰ - ۱۲:۰۰",
  "۱۴:۰۰ - ۱۵:۳۰",
  "۱۵:۳۰ - ۱۷:۰۰",
] as const;

export type PensionPlanCell = {
  title: string;
  subtitle: string;
  tone: PlanTone;
} | null;

export const pensionWeeklyGrid: PensionPlanCell[][] = [
  [
    { title: "شیمی ۱۲ (فصل ۱)", subtitle: "تست زمان‌دار", tone: "green" },
    { title: "ریاضی ۲", subtitle: "درسنامه", tone: "orange" },
    { title: "زیست ۱۲", subtitle: "تست", tone: "blue" },
    null,
    { title: "فیزیک ۱۲", subtitle: "حل تمرین", tone: "green" },
    { title: "ادبیات", subtitle: "قرابت", tone: "red" },
    { title: "آزمون جامع", subtitle: "صبح", tone: "blue" },
  ],
  [
    { title: "فیزیک ۱۲", subtitle: "درسنامه", tone: "blue" },
    { title: "زیست ۱۲", subtitle: "تست", tone: "green" },
    { title: "شیمی ۱۲", subtitle: "آزمونک", tone: "red" },
    { title: "ریاضی ۲", subtitle: "تست زمان‌دار", tone: "orange" },
    { title: "شیمی ۱۲", subtitle: "جمع‌بندی", tone: "green" },
    { title: "ریاضی ۲", subtitle: "مرور", tone: "orange" },
    { title: "تحلیل آزمون", subtitle: "عصر", tone: "muted" },
  ],
  [
    { title: "ادبیات", subtitle: "آرایه", tone: "muted" },
    null,
    { title: "زبان", subtitle: "لغت و گرامر", tone: "blue" },
    { title: "زیست ۱۲ (فصل ۲)", subtitle: "درسنامه", tone: "green" },
    { title: "دینی", subtitle: "درس ۳", tone: "muted" },
    { title: "ادبیات", subtitle: "قرابت", tone: "red" },
    null,
  ],
  [
    { title: "ریاضی ۲", subtitle: "تمرین", tone: "orange" },
    { title: "شیمی ۱۲", subtitle: "تست", tone: "green" },
    { title: "هندسه", subtitle: "تمرین", tone: "muted" },
    { title: "فیزیک ۱۲", subtitle: "نوسان", tone: "blue" },
    null,
    { title: "زیست ۱۲", subtitle: "مرور", tone: "green" },
    { title: "زبان", subtitle: "ریدینگ", tone: "blue" },
  ],
  [
    null,
    { title: "دینی", subtitle: "درس ۴", tone: "muted" },
    { title: "ریاضی ۲", subtitle: "تست زمان‌دار", tone: "orange" },
    { title: "شیمی ۱۲", subtitle: "درسنامه", tone: "red" },
    { title: "فیزیک ۱۲", subtitle: "جمع‌بندی", tone: "blue" },
    null,
    { title: "مشاوره", subtitle: "جلسه گروهی", tone: "green" },
  ],
];
