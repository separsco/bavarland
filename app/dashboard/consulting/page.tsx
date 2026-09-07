import type { Metadata } from "next";
import { ConsultingPageContent } from "@/components/dashboard/ConsultingPageContent";

export const metadata: Metadata = {
  title: "مشاوره VIP | داشبورد باورلند",
  description: "ارتباط با مشاور و مشاهده زمان جلسات مشاوره.",
};

export default function DashboardConsultingPage() {
  return <ConsultingPageContent />;
}
