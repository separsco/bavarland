import type { Metadata } from "next";
import { DashboardSectionPage } from "@/components/dashboard/DashboardSectionPage";

export const metadata: Metadata = {
  title: "گزارش عملکرد | داشبورد باورلند",
  description: "گزارش پیشرفت، آزمون‌ها و عملکرد مطالعاتی.",
};

export default function DashboardReportsPage() {
  return (
    <DashboardSectionPage
      title="گزارش عملکرد"
      description="گزارش پیشرفت، آزمون‌ها و عملکرد مطالعاتی."
      icon="dashboard-nav-reports"
    />
  );
}
