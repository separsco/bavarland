import type { Metadata } from "next";
import { SubscriptionsPageContent } from "@/components/subscriptions/SubscriptionsPageContent";

export const metadata: Metadata = {
  title: "پلن‌های اشتراک | باورلند",
  description:
    "پلن‌های اشتراک باور لند؛ همراهی مستمر در برنامه‌ریزی تحصیلی، مشاوره تخصصی و رسیدن به اهداف تحصیلی.",
};

export default function SubscriptionsPage() {
  return <SubscriptionsPageContent />;
}
