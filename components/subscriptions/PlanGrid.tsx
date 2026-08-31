import { subscriptionPlans } from "@/data/subscriptions";
import { PlanCard } from "@/components/subscriptions/PlanCard";

export function PlanGrid() {
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
      {subscriptionPlans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}
