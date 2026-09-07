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
      <h1 className="text-2xl font-extrabold text-[#32CD32] sm:text-3xl">
        پرداخت موفق
      </h1>

      <p className="mt-3 text-sm text-muted sm:text-base">
        کد پیگیری شما: {trackingCode}
      </p>

      <div className="mt-6 rounded-2xl bg-green-50 px-4 py-4 text-sm leading-7 text-[#28A428] sm:text-base">
        تبریک میگم پرداخت موفق بود، اشتراک {durationLabel} برای شما فعال شد!
      </div>

      <Button href="/" variant="navy" size="lg" className="mt-8 !bg-[#164685] w-[40%] mx-auto">
        رفتن به داشبورد
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M14.9993 20.67C14.8093 20.67 14.6193 20.6 14.4693 20.45L7.9493 13.93C6.8893 12.87 6.8893 11.13 7.9493 10.07L14.4693 3.55002C14.7593 3.26002 15.2393 3.26002 15.5293 3.55002C15.8193 3.84002 15.8193 4.32002 15.5293 4.61002L9.0093 11.13C8.5293 11.61 8.5293 12.39 9.0093 12.87L15.5293 19.39C15.8193 19.68 15.8193 20.16 15.5293 20.45C15.3793 20.59 15.1893 20.67 14.9993 20.67Z" fill="white"/>
</svg>
      </Button>
    </>
  );
}
