"use client";

import { useState } from "react";
import { ChevronLeft, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  subscriptionPlans,
  type SubscriptionPlan,
} from "@/data/subscriptions";

function ActiveIndicator() {
  return (
    <svg
      className="pointer-events-none absolute start-1/2 bottom-0 mx-auto left-0 right-0 h-3 w-10 -translate-x-1/2 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="12"
      viewBox="0 0 39 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M27.0234 6.56152C23.7153 6.56152 21.5507 3.4804 20.2773 0.727539C19.8286 -0.242693 17.775 -0.242692 17.3262 0.727539C16.0528 3.48025 13.8888 6.56125 10.5811 6.56152H27.0234ZM39 11.5947C39 8.81541 37.1125 6.56276 34.7842 6.5625H4.21582C1.88745 6.56275 0 8.8154 0 11.5947H39Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PricingCard({
  plan,
  selected,
  onSelect,
}: {
  plan: SubscriptionPlan;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className={`relative flex h-full cursor-pointer flex-col rounded-3xl border-2 bg-white p-6 transition-colors sm:p-7 ${selected ? "border-primary" : "border-transparent hover:border-border"
        }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <img src="/images/Target Center 1.svg" alt="" className="size-6" />

          <h3 className="pt-3 text-lg font-medium text-foreground sm:text-4xl">
            {plan.title}
          </h3>
          <p className="mt-1.5 text-base leading-7 text-[#54555D]">
            {plan.description}
          </p>
        </div>
      </div>

      <div className="mb-5 flex items-center gap-2">
        <div className="text-2xl font-bold text-primary">
          <span>{plan.price}</span> <span>تومان</span>
        </div>
        <span className="text-sm text-[#6D6D74]">{plan.tagline}</span>
      </div>

      <ul className="mb-6 flex flex-1 list-disc flex-col gap-2.5 ps-5 text-sm leading-7 text-muted marker:text-muted">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {/* <Button
        href={`/checkout/${plan.id}`}
        variant={selected ? "primary" : "navy"}
        size="lg"
        className={`w-[40%] rounded-full !gap-1 sm:!gap-1.5 lg:!gap-2.5 ${
          selected ? "!bg-primary hover:!bg-primary-hover" : "!bg-[#164685]"
        }`}
        endSlot={<ChevronLeft className="size-3 shrink-0 lg:size-5" />}
        onClick={(event) => event.stopPropagation()}
      >
        خرید اشتراک
      </Button> */}

      <button className={`w-[40%] rounded-full text-white flex items-center py-2 justify-center !gap-1 sm:!gap-1.5 lg:!gap-2.5 ${selected ? "!bg-primary hover:!bg-primary-hover" : "!bg-[#164685]"
        }`} onClick={(event) => event.stopPropagation()}>
        خرید اشتراک
        <ChevronLeft className="size-5 shrink-0" />
      </button>

      {selected && <ActiveIndicator />}
    </article>
  );
}

export function PricingSection() {
  const orderedPlans = ["1m", "3m", "6m", "12m"]
    .map((id) => subscriptionPlans.find((plan) => plan.id === id))
    .filter((plan): plan is SubscriptionPlan => Boolean(plan));

  const defaultId =
    orderedPlans.find((plan) => plan.featured)?.id ?? orderedPlans[0].id;
  const [selectedId, setSelectedId] = useState(defaultId);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute start-4 top-0 hidden w-16 opacity-25 sm:start-6 lg:start-8 lg:block xl:w-20"
        >
          <img
            src="/images/buy.svg"
            alt=""
            className="h-auto w-full object-contain"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute end-4 top-0 hidden w-16 opacity-25 sm:end-6 lg:end-8 lg:block xl:w-20"
        >
          <img
            src="/images/buy.svg"
            alt=""
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="relative mx-auto mb-8 max-w-xl px-2 text-center sm:mb-12 sm:max-w-3xl">
          <img
            src="/images/buy.svg"
            alt=""
            aria-hidden
            className="mx-auto mb-4 h-11 w-auto object-contain lg:hidden"
          />
          <h2 className="text-xl font-medium leading-snug text-foreground sm:text-3xl lg:text-3xl">
            پلن‌های اشتراک{" "}
            <span className="text-primary">باور لند</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
            درس خوندن وقتی تنها باشی سخته؛ اما با باور لند
            <br />
            هیچ‌وقت تنها نیستی
          </p>
        </div>

        <div className="relative grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {orderedPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              selected={selectedId === plan.id}
              onSelect={() => setSelectedId(plan.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
