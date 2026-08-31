export const studyFields = [
  { value: "experimental", label: "علوم تجربی" },
  { value: "math", label: "ریاضی فیزیک" },
  { value: "humanities", label: "علوم انسانی" },
  { value: "art", label: "هنر" },
  { value: "language", label: "زبان‌های خارجی" },
] as const;

export const gradeLevels = [
  { value: "10", label: "پایه دهم" },
  { value: "11", label: "پایه یازدهم" },
  { value: "12", label: "پایه دوازدهم" },
  { value: "graduate", label: "فارغ‌التحصیل" },
] as const;

export type SignupFormValues = {
  mobile: string;
  fullName: string;
  studyField: string;
  gradeLevel: string;
  parentMobile: string;
};

export function isSignupFormValid(values: SignupFormValues, isMobileValid: (v: string) => boolean) {
  return (
    isMobileValid(values.mobile) &&
    values.fullName.trim().length >= 3 &&
    values.studyField !== "" &&
    values.gradeLevel !== "" &&
    isMobileValid(values.parentMobile)
  );
}
