import { PlanGrid } from "@/components/subscriptions/PlanGrid";
import { SubscriptionHeader } from "@/components/subscriptions/SubscriptionHeader";

export function SubscriptionsPageContent() {
  return (
    <section className="relative overflow-hidden bg-sky-soft py-8 sm:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -start-24 top-10 h-72 w-72 rounded-full bg-sky/70 blur-3xl" />
        <div className="absolute -end-16 bottom-0 h-80 w-80 rounded-full bg-sky/80 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SubscriptionHeader />
        <PlanGrid />
      </div>
    </section>
  );
}
