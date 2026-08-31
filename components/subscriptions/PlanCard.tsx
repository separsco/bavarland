import { Button } from "@/components/ui/Button";
import type { SubscriptionPlan } from "@/data/subscriptions";

type PlanCardProps = {
  plan: SubscriptionPlan;
};

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm sm:p-7 ${
        plan.featured ? "border-2 border-primary" : "border-border"
      }`}
    >
      <div className="mb-5">
        <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">
          {plan.title}
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted sm:text-base">
          {plan.description}
        </p>
      </div>

      <p className="mb-1 text-sm font-semibold text-primary sm:text-base">
        {plan.tagline}
      </p>

      <p className="mb-6 text-3xl font-extrabold text-primary sm:text-4xl">
        {plan.price}{" "}
        <span className="text-base font-medium text-muted sm:text-lg">تومان</span>
      </p>

      <ul className="mb-8 flex flex-1 list-disc flex-col gap-3 ps-5 text-sm leading-7 text-foreground marker:text-muted">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <Button
        href={`/checkout/${plan.id}`}
        variant={plan.featured ? "primary" : "navy"}
        size="lg"
        className="w-full"
      >
        خرید اشتراک
      </Button>
    </article>
  );
}
