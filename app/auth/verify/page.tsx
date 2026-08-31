import { Suspense } from "react";
import type { Metadata } from "next";
import { AuthOtpPageContent } from "@/components/auth/AuthOtpPageContent";

export const metadata: Metadata = {
  title: "تایید شماره موبایل | باورلند",
  description: "کد تایید ارسال‌شده به شماره موبایل خود را وارد کنید.",
};

export default function AuthVerifyPage() {
  return (
    <Suspense fallback={null}>
      <AuthOtpPageContent />
    </Suspense>
  );
}
