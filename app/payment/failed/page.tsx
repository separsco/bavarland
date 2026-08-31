import type { Metadata } from "next";
import { PaymentResultShell } from "@/components/payment/PaymentResultShell";
import { PaymentFailedContent } from "@/components/payment/PaymentFailedContent";

export const metadata: Metadata = {
  title: "پرداخت ناموفق | باورلند",
  description: "پرداخت شما انجام نشد.",
};

type PaymentFailedPageProps = {
  searchParams: Promise<{
    tracking?: string;
    plan?: string;
  }>;
};

export default async function PaymentFailedPage({
  searchParams,
}: PaymentFailedPageProps) {
  const { tracking, plan } = await searchParams;
  const trackingCode = tracking ?? "۶۲۵۵۳۰۰۳۸۲";

  return (
    <PaymentResultShell>
      <PaymentFailedContent trackingCode={trackingCode} planId={plan} />
    </PaymentResultShell>
  );
}
