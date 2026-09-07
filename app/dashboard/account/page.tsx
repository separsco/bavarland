import type { Metadata } from "next";
import { DashboardSectionPage } from "@/components/dashboard/DashboardSectionPage";

export const metadata: Metadata = {
  title: "حساب کاربری | داشبورد باورلند",
  description: "اطلاعات حساب کاربری و تنظیمات پروفایل.",
};

export default function DashboardAccountPage() {
  return (
    <DashboardSectionPage
      title="حساب کاربری"
      description="اطلاعات حساب کاربری و تنظیمات پروفایل."
      icon="dashboard-nav-account"
    />
  );
}
