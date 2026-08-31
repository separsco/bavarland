import type { Metadata } from "next";
import { AuthSignupPageContent } from "@/components/auth/AuthSignupPageContent";

export const metadata: Metadata = {
  title: "ثبت‌نام | باورلند",
  description: "برای ثبت‌نام در باور لند، اطلاعات خود را وارد کنید.",
};

export default function AuthSignupPage() {
  return <AuthSignupPageContent />;
}
