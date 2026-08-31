import type { Metadata } from "next";
import { PaymentResultShell } from "@/components/payment/PaymentResultShell";
import { PaymentSuccessContent } from "@/components/payment/PaymentSuccessContent";

export const metadata: Metadata = {
  title: "پرداخت موفق | باورلند",
  description: "پرداخت شما با موفقیت انجام شد.",
};

type PaymentSuccessPageProps = {
  searchParams: Promise<{
    tracking?: string;
    plan?: string;
  }>;
};

export default async function PaymentSuccessPage({
  searchParams,
}: PaymentSuccessPageProps) {
  const { tracking, plan } = await searchParams;
  const trackingCode = tracking ?? "۶۲۵۵۳۰۰۳۸۲";

  return (
    <PaymentResultShell>
      <PaymentSuccessContent trackingCode={trackingCode} planId={plan} />
    </PaymentResultShell>
  );
}
