export function toPersianDigits(value: string | number) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

export function formatMobileForDisplay(value: string) {
  const digits = value.replace(/[^\d]/g, "");

  if (digits.startsWith("0")) {
    return toPersianDigits(digits);
  }

  if (digits.startsWith("9")) {
    return toPersianDigits(`0${digits}`);
  }

  return toPersianDigits(digits);
}

export function formatCountdown(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formatted = `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;

  return toPersianDigits(formatted);
}

export const OTP_LENGTH = 6;
export const OTP_RESEND_SECONDS = 118;
