import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { MediaSlot } from "@/components/ui/MediaSlot";

export function MajorPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "انتخاب رشته" },
        ]}
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
        <section className="flex flex-col items-center rounded-[1.75rem] bg-white px-5 py-10 text-center shadow-sm shadow-navy/5 sm:px-10 sm:py-14">
          <Image
            src="/images/Group 1171274854.svg"
            alt=""
            width={280}
            height={220}
            className="h-auto w-48 sm:w-64"
          />
          <h1 className="mt-8 text-xl font-extrabold text-foreground sm:text-2xl">
            انتخاب رشته برای اشتراک رایگان فعال نیست
          </h1>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
            با خرید اشتراک به همه امکانات دسترسی دارین
          </p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Button
              href="/subscriptions"
              variant="navy"
              size="lg"
              className="w-full flex-1 !bg-brand-blue hover:!bg-brand-blue/90"
            >
              خرید اشتراک
            </Button>
            <Button href="/subscriptions" variant="primary" size="lg" className="w-full flex-1">
              خرید انتخاب رشته
            </Button>
          </div>
        </section>

        <section className="relative flex flex-col overflow-hidden rounded-[1.75rem] px-5 py-6 text-center sm:p-6">
          <img
            src="/images/bgDashboard.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 size-full object-cover"
          />
          <div className="relative z-10 flex flex-col">
            <img
              src="/images/img.svg"
              alt=""
              className="mx-auto h-[245px] w-36 sm:w-44"
            />
            <h2 className="mt-5 text-base font-extrabold leading-7 text-foreground">
              قبل از انتخاب، رشته‌ات رو بهتر بشناس!
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              با ویدیوهای کوتاه و کاربردی با رشته‌های دانشگاهی، بازار کار و مسیر تحصیلی هر رشته
              آشنا شو.
            </p>
            <Button href="/dashboard/academy" variant="primary" size="md" className="mt-6 w-full">
              رفتن به آکادمی
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
