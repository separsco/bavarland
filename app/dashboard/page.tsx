import type { Metadata } from "next";
import { DashboardPageContent } from "@/components/dashboard/DashboardPageContent";

export const metadata: Metadata = {
  title: "داشبورد دانش‌آموز | باورلند",
  description: "برنامه مطالعاتی، پانسیون و وضعیت روزانه دانش‌آموز در باورلند.",
};

export default function DashboardPage() {
  return <DashboardPageContent />;
}
