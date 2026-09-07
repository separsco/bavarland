export const accountFormDefaults = {
  mobile: "9032153600",
  fullName: "کیمیا روانگر",
  studyField: "experimental",
  gradeLevel: "12",
  nationalId: "",
  birthDate: "",
  parentMobile: "9032153600",
};

export const accountSupportPhones = ["۰۲۱-۲۵۸۴۵۱۵۴", "۰۲۱-۴۸۵۶۵۹۸۸"] as const;

export const accountPayments = [
  {
    id: "pay-1",
    title: "خرید مشاوره VIP",
    amount: "۱,۹۹۰,۰۰۰ تومان",
    date: "۱۴۰۴/۱۲/۰۸",
    status: "success",
    statusLabel: "پرداخت موفق",
  },
  {
    id: "pay-2",
    title: "خرید مشاوره VIP",
    amount: "۱,۹۹۰,۰۰۰ تومان",
    date: "۱۴۰۴/۱۲/۰۸",
    status: "failed",
    statusLabel: "پرداخت ناموفق",
  },
  {
    id: "pay-3",
    title: "خرید مشاوره VIP",
    amount: "۱,۹۹۰,۰۰۰ تومان",
    date: "۱۴۰۴/۱۲/۰۸",
    status: "success",
    statusLabel: "پرداخت موفق",
  },
] as const;
