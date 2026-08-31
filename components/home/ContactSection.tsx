import { Button } from "@/components/ui/Button";
import { IconSlot } from "@/components/ui/IconSlot";

type ContactCardProps = {
  label: string;
  iconLabel: string;
  lines: string[];
};

function ContactCard({ label, iconLabel, lines }: ContactCardProps) {
  return (
    <div className="relative w-full rounded-3xl border border-border bg-white px-5 pb-5 pt-8 text-center shadow-md sm:max-w-[220px]">
      <span className="absolute start-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
        {label}
      </span>

      <span className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full bg-navy">
        <IconSlot label={iconLabel} className="size-5" />
      </span>

      <ul className="space-y-1.5">
        {lines.map((line, index) => (
          <li
            key={`${line}-${index}`}
            dir="ltr"
            className="text-sm font-medium text-foreground"
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="mb-6 flex flex-col gap-8 lg:mb-0 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl text-center lg:text-start">
              <h2 className="flex items-start justify-center gap-3 text-xl font-extrabold leading-snug text-foreground sm:text-2xl lg:justify-start lg:text-3xl">
                <span className="mt-1 hidden h-8 w-1 shrink-0 rounded-full bg-accent-line lg:inline-block" />
                <span>
                  راه‌های ارتباطی با مجموعه{" "}
                  <span className="text-primary">باورلند</span>
                </span>
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                باورلند — کنار تو تا موفقیت
              </p>
            </div>

            <div className="relative z-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:justify-items-center lg:-mb-14 lg:flex lg:w-auto lg:justify-end">
              <ContactCard
                label="تلفن‌های تماس"
                iconLabel="contact-phone-icon"
                lines={["۰۲۱-۴۵۸۸۵۹۸۸۶۹۹", "۰۲۱-۴۵۸۸۵۹۸۸۶۹۹"]}
              />
              <ContactCard
                label="ایمیل‌های ما"
                iconLabel="contact-email-icon"
                lines={["bavarland@gmail.com", "bavarland@gmail.com"]}
              />
            </div>
          </div>

          <div className="rounded-t-[2rem] bg-navy px-5 pb-8 pt-10 sm:rounded-t-[2.5rem] sm:px-10 lg:pt-16">
            <Button
              href="/subscriptions"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              endSlot={<IconSlot label="cta-chevron-icon" className="size-4" />}
            >
              آماده‌ای شروع کنی؟
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
