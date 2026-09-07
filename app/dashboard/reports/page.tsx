import type { Metadata } from "next";
import { ReportsPageContent } from "@/components/dashboard/ReportsPageContent";

export const metadata: Metadata = {
  title: "گزارش عملکرد | داشبورد باورلند",
  description: "گزارش پیشرفت، آزمون‌ها و عملکرد مطالعاتی.",
};

export default function DashboardReportsPage() {
  return <ReportsPageContent />;
}
