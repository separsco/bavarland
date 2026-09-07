import type { Metadata } from "next";
import { DashboardSectionPage } from "@/components/dashboard/DashboardSectionPage";

export const metadata: Metadata = {
  title: "مشاوره VIP | داشبورد باورلند",
  description: "ارتباط با مشاور و مشاهده زمان جلسات مشاوره.",
};

export default function DashboardConsultingPage() {
  return (
    <DashboardSectionPage
      title="مشاوره (VIP)"
      description="ارتباط با مشاور و مشاهده زمان جلسات مشاوره."
      icon="dashboard-nav-consulting"
    />
  );
}
