import type { Metadata } from "next";
import { DashboardSectionPage } from "@/components/dashboard/DashboardSectionPage";

export const metadata: Metadata = {
  title: "انتخاب رشته | داشبورد باورلند",
  description: "انتخاب رشته را بر اساس رتبه، علاقه و اولویت‌هایت انجام بده.",
};

export default function DashboardMajorPage() {
  return (
    <DashboardSectionPage
      title="انتخاب رشته"
      description="انتخاب رشته را بر اساس رتبه، علاقه و اولویت‌هایت انجام بده."
      icon="dashboard-nav-major"
    />
  );
}
