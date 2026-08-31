import { Button } from "@/components/ui/Button";
import { getSubscriptionPlanById } from "@/data/subscriptions";

type PaymentSuccessContentProps = {
  trackingCode: string;
  planId?: string;
};

function getPlanDurationLabel(planId?: string) {
  const plan = planId ? getSubscriptionPlanById(planId) : undefined;
  if (!plan) {
    return "۶ ماهه";
  }

  return plan.title.replace(/^پلن\s+/, "");
}

export function PaymentSuccessContent({
  trackingCode,
  planId,
}: PaymentSuccessContentProps) {
  const durationLabel = getPlanDurationLabel(planId);

  return (
    <>
      <h1 className="text-2xl font-extrabold text-green-600 sm:text-3xl">
        پرداخت موفق
      </h1>

      <p className="mt-3 text-sm text-muted sm:text-base">
        کد پیگیری شما: {trackingCode}
      </p>

      <div className="mt-6 rounded-2xl bg-green-50 px-4 py-4 text-sm leading-7 text-green-700 sm:text-base">
        تبریک میگم پرداخت موفق بود، اشتراک {durationLabel} برای شما فعال شد!
      </div>

      <Button href="/" variant="navy" size="lg" className="mt-8 w-full">
        رفتن به داشبورد
      </Button>
    </>
  );
}
