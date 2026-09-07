import type { Metadata } from "next";
import { PlanningPageContent } from "@/components/dashboard/PlanningPageContent";

export const metadata: Metadata = {
  title: "برنامه‌ریزی | داشبورد باورلند",
  description: "برنامه مطالعاتی روزانه و هفتگی خود را اینجا مدیریت کن.",
};

export default function DashboardPlanningPage() {
  return <PlanningPageContent />;
}
