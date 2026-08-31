import { Button } from "@/components/ui/Button";

type PaymentFailedContentProps = {
  trackingCode: string;
  planId?: string;
};

export function PaymentFailedContent({
  trackingCode,
  planId = "6m",
}: PaymentFailedContentProps) {
  return (
    <>
      <h1 className="text-2xl font-extrabold text-red-500 sm:text-3xl">
        پرداخت ناموفق
      </h1>

      <p className="mt-3 text-sm text-muted sm:text-base">
        کد پیگیری شما: {trackingCode}
      </p>

      <div className="mt-6 rounded-2xl bg-red-50 px-4 py-4 text-sm leading-7 text-red-600 sm:text-base">
        پرداخت با شکست مواجه شد اگر پولی از حسابتون کم شده طی ۷۲ ساعت به حساب
        برمیگرده
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row-reverse">
        <Button
          href={`/checkout/${planId}`}
          variant="primary"
          size="lg"
          className="w-full sm:flex-1"
        >
          پرداخت مجدد
        </Button>
        <Button
          href="/subscriptions"
          variant="outline"
          size="lg"
          className="w-full border-navy/20 text-navy sm:flex-1"
        >
          برگشت به صفحه
        </Button>
      </div>
    </>
  );
}
