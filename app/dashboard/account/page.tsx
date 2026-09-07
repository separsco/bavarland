import type { Metadata } from "next";
import { AccountPageContent } from "@/components/dashboard/AccountPageContent";

export const metadata: Metadata = {
  title: "حساب کاربری | داشبورد باورلند",
  description: "اطلاعات حساب کاربری و تنظیمات پروفایل.",
};

export default function DashboardAccountPage() {
  return <AccountPageContent />;
}
