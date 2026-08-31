import type { Metadata } from "next";
import { AuthPageContent } from "@/components/auth/AuthPageContent";

export const metadata: Metadata = {
  title: "ورود / ثبت‌نام | باورلند",
  description: "برای ورود یا ثبت‌نام در باور لند، شماره موبایل خود را وارد کنید.",
};

export default function AuthPage() {
  return <AuthPageContent />;
}
