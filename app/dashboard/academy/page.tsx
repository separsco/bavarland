import type { Metadata } from "next";
import { DashboardSectionPage } from "@/components/dashboard/DashboardSectionPage";

export const metadata: Metadata = {
  title: "آکادمی | داشبورد باورلند",
  description: "ویدیوها و محتوای آموزشی آکادمی باورلند.",
};

export default function DashboardAcademyPage() {
  return (
    <DashboardSectionPage
      title="آکادمی"
      description="ویدیوها و محتوای آموزشی آکادمی باورلند."
      icon="dashboard-nav-academy"
    />
  );
}
