import type { Metadata } from "next";
import { PensionPageContent } from "@/components/dashboard/PensionPageContent";

export const metadata: Metadata = {
  title: "پانسیون | داشبورد باورلند",
  description: "ورود به اتاق مطالعه آنلاین و مشاهده وضعیت پانسیون.",
};

export default function DashboardPensionPage() {
  return <PensionPageContent />;
}
