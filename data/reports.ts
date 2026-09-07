export const reportCircularStats = [
  {
    id: "goals",
    title: "تحقق اهداف",
    icon: "reports-stat-goals",
    subtitle: "۴۶ جلسه از ۵۰ جلسه",
    percent: 92,
  },
  {
    id: "delay",
    title: "تأخیر در پانسیون",
    icon: "reports-stat-delay",
    subtitle: "۴۶ جلسه از ۵۰ جلسه",
    percent: 92,
  },
] as const;

export const reportSubscription = {
  title: "اشتراک ۶ ماهه",
  status: "فعال",
  remaining: "۲۱ روز تا پایان اشتراک (۶ ماهه)",
  percent: 70,
};

export const reportPoints = [
  {
    id: "attend-1",
    points: "+۱۲ امتیاز",
    description: "حضور به موقع در جلسه",
    date: "۱۴۰۴/۰۴/۱۲",
    type: "positive",
  },
  {
    id: "homework-1",
    points: "۱۵-",
    description: "عدم انجام تکلیف",
    date: "۱۴۰۴/۰۴/۱۲",
    type: "negative",
  },
  {
    id: "homework-2",
    points: "۱۵-",
    description: "عدم انجام تکلیف",
    date: "۱۴۰۴/۰۴/۱۲",
    type: "negative",
  },
] as const;
