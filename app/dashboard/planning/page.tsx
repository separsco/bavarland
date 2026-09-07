import type { Metadata } from "next";
import { DashboardSectionPage } from "@/components/dashboard/DashboardSectionPage";

export const metadata: Metadata = {
  title: "برنامه‌ریزی | داشبورد باورلند",
  description: "برنامه مطالعاتی روزانه و هفتگی خود را اینجا مدیریت کن.",
};

export default function DashboardPlanningPage() {
  return (
    <DashboardSectionPage
      title="برنامه ریزی"
      description="برنامه مطالعاتی روزانه و هفتگی خود را اینجا مدیریت کن."
      icon="dashboard-nav-planning"
    />
  );
}
