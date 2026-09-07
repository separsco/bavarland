import type { Metadata } from "next";
import { MajorPageContent } from "@/components/dashboard/MajorPageContent";

export const metadata: Metadata = {
  title: "انتخاب رشته | داشبورد باورلند",
  description: "انتخاب رشته را بر اساس رتبه، علاقه و اولویت‌هایت انجام بده.",
};

export default function DashboardMajorPage() {
  return <MajorPageContent />;
}
