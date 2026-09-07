import type { Metadata } from "next";
import { DashboardSectionPage } from "@/components/dashboard/DashboardSectionPage";

export const metadata: Metadata = {
  title: "پانسیون | داشبورد باورلند",
  description: "ورود به اتاق مطالعه آنلاین و مشاهده وضعیت پانسیون.",
};

export default function DashboardPensionPage() {
  return (
    <DashboardSectionPage
      title="پانسیون"
      description="ورود به اتاق مطالعه آنلاین و مشاهده وضعیت پانسیون."
      icon="dashboard-nav-pension"
    />
  );
}
