import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AccountProfileCard } from "@/components/dashboard/AccountProfileCard";
import { Button } from "@/components/ui/Button";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { accountPayments, accountSupportPhones } from "@/data/account";
import { reportSubscription } from "@/data/reports";
import { toPersianDigits } from "@/data/otp";

export function AccountPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "حساب کاربری" },
        ]}
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_21rem] xl:items-start">
        <AccountProfileCard />

        <div className="space-y-4">
          <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5">
            <div className="flex items-start gap-3">
              <DashboardIcon label="account-support-icon" className="size-10 rounded-full" />
              <p className="text-sm leading-7 text-muted">
                هر زمان به کمک نیاز داشتید، کارشناسان ما همراه شما هستند.
              </p>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue" dir="ltr">
              <DashboardIcon label="account-support-phone-icon" className="size-8 rounded-full" />
              {accountSupportPhones.join(" | ")}
            </p>
          </section>

          <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <DashboardIcon label="account-subscription-icon" className="size-5" />
                <h2 className="text-sm font-bold text-foreground">{reportSubscription.title}</h2>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                {reportSubscription.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted">{reportSubscription.remaining}</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-sky-soft">
              <div
                className="h-full rounded-full bg-brand-blue"
                style={{ width: `${reportSubscription.percent}%` }}
              />
            </div>
            <p className="mt-2 text-end text-xs font-bold text-brand-blue">
              {toPersianDigits(reportSubscription.percent)}٪
            </p>
            <Button href="/subscriptions" variant="primary" size="md" className="mt-5 w-full">
              تمدید اشتراک
            </Button>
          </section>
        </div>
      </div>

      <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:p-6">
        <div className="mb-5 flex items-center gap-2">
          <DashboardIcon label="account-payments-icon" className="size-5" />
          <h2 className="text-base font-extrabold text-foreground">پرداخت ها</h2>
        </div>
        <ul className="space-y-3">
          {accountPayments.map((payment) => (
            <li
              key={payment.id}
              className="flex flex-wrap items-center gap-3 rounded-2xl bg-sky-soft/70 px-3 py-3"
            >
              <DashboardIcon label="account-payment-info-icon" className="size-9 rounded-full" />
              <p className="min-w-0 flex-1 text-sm font-semibold text-foreground">{payment.title}</p>
              <span className="text-sm text-foreground">{payment.amount}</span>
              <span className="text-xs text-muted">{payment.date}</span>
              <span
                className={`text-sm font-bold ${
                  payment.status === "success" ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {payment.statusLabel}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
