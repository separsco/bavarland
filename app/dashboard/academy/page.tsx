import type { Metadata } from "next";
import { AcademyPageContent } from "@/components/dashboard/AcademyPageContent";

export const metadata: Metadata = {
  title: "آکادمی | داشبورد باورلند",
  description: "ویدیوها و محتوای آموزشی آکادمی باورلند.",
};

export default function DashboardAcademyPage() {
  return <AcademyPageContent />;
}
