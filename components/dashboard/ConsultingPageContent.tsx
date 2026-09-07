import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ConsultingRequestForm } from "@/components/dashboard/ConsultingRequestForm";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { consultingProcess, consultingServices } from "@/data/consulting";
import { toPersianDigits } from "@/data/otp";

export function ConsultingPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "مشاوره" },
        ]}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:p-6">
          <div className="mb-4 flex items-center gap-2">
            <DashboardIcon label="consulting-process-icon" className="size-5" />
            <h2 className="text-base font-extrabold text-foreground">روند دریافت مشاوره</h2>
          </div>
          <ol className="space-y-3 text-sm leading-7 text-foreground">
            {consultingProcess.map((step, index) => (
              <li key={step}>
                {toPersianDigits(index + 1)}. {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:p-6">
          <div className="mb-4 flex items-center gap-2">
            <DashboardIcon label="consulting-services-icon" className="size-5" />
            <h2 className="text-base font-extrabold text-foreground">
              خدماتی که دریافت می‌کنید
            </h2>
          </div>
          <ul className="list-disc space-y-3 ps-5 text-sm leading-7 text-foreground">
            {consultingServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <ConsultingRequestForm />
    </div>
  );
}
