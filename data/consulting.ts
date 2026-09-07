export const consultingProcess = [
  "ارسال درخواست",
  "تماس کارشناسان",
  "تعیین زمان جلسه حضوری",
  "شروع برنامه اختصاصی",
] as const;

export const consultingServices = [
  "بررسی نقاط قوت و ضعف، میزان آمادگی و سطح علمی",
  "برنامه متناسب با زمان، هدف و شرایط شما",
  "بررسی عملکرد و اصلاح برنامه در طول مسیر",
] as const;

export const consultingSubjects = [
  { value: "math", label: "ریاضی" },
  { value: "physics", label: "فیزیک" },
  { value: "chemistry", label: "شیمی" },
  { value: "biology", label: "زیست" },
  { value: "literature", label: "ادبیات" },
] as const;

export const consultingStudyStatuses = [
  { value: "under-2", label: "کمتر از ۲ ساعت" },
  { value: "2-4", label: "۲ تا ۴ ساعت" },
  { value: "4-6", label: "۴ تا ۶ ساعت" },
  { value: "over-6", label: "بیشتر از ۶ ساعت" },
] as const;

export const consultingGoals = [
  { value: "decline", label: "رفع افت تحصیلی" },
  { value: "rank", label: "بهبود رتبه" },
  { value: "planning", label: "برنامه‌ریزی دقیق" },
  { value: "motivation", label: "افزایش انگیزه" },
] as const;

export const consultingTimes = [
  { value: "morning", label: "صبح" },
  { value: "afternoon", label: "ظهر" },
  { value: "evening", label: "عصر" },
] as const;
