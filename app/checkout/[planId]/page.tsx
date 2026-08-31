import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getSubscriptionPlanById } from "@/data/subscriptions";

type CheckoutPageProps = {
  params: Promise<{ planId: string }>;
};

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { planId } = await params;
  const plan = getSubscriptionPlanById(planId);

  if (!plan) {
    notFound();
  }

  return (
    <section className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-6 px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm text-muted">تکمیل خرید</p>
        <h1 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
          {plan.title}
        </h1>
        <p className="mt-2 text-sm leading-7 text-muted">{plan.description}</p>
        <p className="mt-6 text-3xl font-extrabold text-primary">
          {plan.price}{" "}
          <span className="text-base font-medium text-muted">تومان</span>
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/subscriptions" variant="outline" size="lg" className="w-full sm:w-auto">
          بازگشت به پلن‌ها
        </Button>
        <Button variant="primary" size="lg" className="w-full sm:flex-1">
          پرداخت
        </Button>
      </div>

      <p className="text-center text-sm text-muted">
        صفحه پرداخت بعداً تکمیل می‌شود.{" "}
        <Link href="/subscriptions" className="font-medium text-primary">
          مشاهده سایر پلن‌ها
        </Link>
      </p>
    </section>
  );
}
