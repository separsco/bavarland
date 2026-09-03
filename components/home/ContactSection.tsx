import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ReactNode } from "react";

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <path
        d="M22.668 4.6665H9.33463C5.33464 4.6665 2.66797 6.6665 2.66797 11.3332V20.6665C2.66797 25.3332 5.33464 27.3332 9.33463 27.3332H22.668C26.668 27.3332 29.3346 25.3332 29.3346 20.6665V11.3332C29.3346 6.6665 26.668 4.6665 22.668 4.6665ZM23.2946 12.7865L19.1213 16.1198C18.2413 16.8265 17.1213 17.1732 16.0013 17.1732C14.8813 17.1732 13.748 16.8265 12.8813 16.1198L8.70797 12.7865C8.2813 12.4398 8.21463 11.7998 8.54797 11.3732C8.89463 10.9465 9.5213 10.8665 9.94797 11.2132L14.1213 14.5465C15.1346 15.3598 16.8546 15.3598 17.868 14.5465L22.0413 11.2132C22.468 10.8665 23.108 10.9332 23.4413 11.3732C23.788 11.7998 23.7213 12.4398 23.2946 12.7865Z"
        fill="white"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <path
        d="M23.4946 14.3335C22.9213 14.3335 22.468 13.8668 22.468 13.3068C22.468 12.8135 21.9746 11.7868 21.148 10.8935C20.3346 10.0268 19.4413 9.52013 18.6946 9.52013C18.1213 9.52013 17.668 9.05346 17.668 8.49346C17.668 7.93346 18.1346 7.4668 18.6946 7.4668C20.028 7.4668 21.428 8.1868 22.6546 9.48013C23.8013 10.6935 24.5346 12.2001 24.5346 13.2935C24.5346 13.8668 24.068 14.3335 23.4946 14.3335Z"
        fill="white"
      />
      <path
        d="M28.3064 14.3332C27.733 14.3332 27.2797 13.8665 27.2797 13.3065C27.2797 8.57317 23.4264 4.73317 18.7064 4.73317C18.133 4.73317 17.6797 4.2665 17.6797 3.7065C17.6797 3.1465 18.133 2.6665 18.693 2.6665C24.5597 2.6665 29.333 7.43984 29.333 13.3065C29.333 13.8665 28.8664 14.3332 28.3064 14.3332Z"
        fill="white"
      />
      <path
        d="M14.7346 19.9332L12.268 22.3998C11.748 22.9198 10.9213 22.9198 10.388 22.4132C10.2413 22.2665 10.0946 22.1332 9.94797 21.9865C8.57464 20.5998 7.33464 19.1465 6.22797 17.6265C5.13464 16.1065 4.25464 14.5865 3.61464 13.0798C2.98797 11.5598 2.66797 10.1065 2.66797 8.71984C2.66797 7.81317 2.82797 6.9465 3.14797 6.1465C3.46797 5.33317 3.97464 4.5865 4.6813 3.91984C5.53464 3.07984 6.46797 2.6665 7.45464 2.6665C7.82797 2.6665 8.2013 2.7465 8.53464 2.9065C8.8813 3.0665 9.18797 3.3065 9.42797 3.65317L12.5213 8.01317C12.7613 8.3465 12.9346 8.65317 13.0546 8.9465C13.1746 9.2265 13.2413 9.5065 13.2413 9.75984C13.2413 10.0798 13.148 10.3998 12.9613 10.7065C12.788 11.0132 12.5346 11.3332 12.2146 11.6532L11.2013 12.7065C11.0546 12.8532 10.988 13.0265 10.988 13.2398C10.988 13.3465 11.0013 13.4398 11.028 13.5465C11.068 13.6532 11.108 13.7332 11.1346 13.8132C11.3746 14.2532 11.788 14.8265 12.3746 15.5198C12.9746 16.2132 13.6146 16.9198 14.308 17.6265C14.4413 17.7598 14.588 17.8932 14.7213 18.0265C15.2546 18.5465 15.268 19.3998 14.7346 19.9332Z"
        fill="white"
      />
      <path
        d="M29.2941 24.4402C29.2941 24.8135 29.2274 25.2002 29.0941 25.5735C29.0541 25.6802 29.0141 25.7869 28.9608 25.8935C28.7341 26.3735 28.4408 26.8269 28.0541 27.2535C27.4008 27.9735 26.6808 28.4935 25.8674 28.8269C25.8541 28.8269 25.8408 28.8402 25.8274 28.8402C25.0408 29.1602 24.1874 29.3335 23.2674 29.3335C21.9074 29.3335 20.4541 29.0135 18.9208 28.3602C17.3874 27.7069 15.8541 26.8269 14.3341 25.7202C13.8141 25.3335 13.2941 24.9469 12.8008 24.5335L17.1608 20.1735C17.5341 20.4535 17.8674 20.6669 18.1474 20.8135C18.2141 20.8402 18.2941 20.8802 18.3874 20.9202C18.4941 20.9602 18.6008 20.9735 18.7208 20.9735C18.9474 20.9735 19.1208 20.8935 19.2674 20.7469L20.2808 19.7469C20.6141 19.4135 20.9341 19.1602 21.2408 19.0002C21.5474 18.8135 21.8541 18.7202 22.1874 18.7202C22.4408 18.7202 22.7074 18.7735 23.0008 18.8935C23.2941 19.0135 23.6008 19.1869 23.9341 19.4135L28.3474 22.5469C28.6941 22.7869 28.9341 23.0669 29.0808 23.4002C29.2141 23.7335 29.2941 24.0669 29.2941 24.4402Z"
        fill="white"
      />
    </svg>
  );
}

type ContactCardProps = {
  label: string;
  lines: string[];
  icon: ReactNode;
};

function ContactCard({ label, lines, icon }: ContactCardProps) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] shrink-0 sm:mx-0 sm:w-[216px] sm:max-w-none">
      <div className="mx-3 overflow-visible rounded-2xl bg-primary pt-2.5 pb-1.5">
        <p className="mb-2 px-2 text-center text-sm font-medium text-white">
          {label}
        </p>

        <div className="relative z-10 -mx-3 flex flex-col items-center gap-3 rounded-2xl bg-white px-4 py-5 text-center shadow-md">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#164685]">
            {icon}
          </span>

          <ul className="space-y-1">
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
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative z-10 mb-[-3.5rem] flex flex-col gap-8 px-2 sm:mb-[-4rem] lg:mb-[-4.5rem] lg:flex-row lg:items-end lg:justify-between lg:gap-10 lg:px-6">
            <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:w-auto lg:self-start lg:pb-16 lg:text-start">
              <h2 className="flex items-start justify-center gap-3 text-xl font-medium leading-snug text-foreground sm:text-2xl lg:justify-start lg:text-3xl">
                <img
                  src="/images/Rectangle 240662875.svg"
                  alt=""
                  aria-hidden
                  className="mt-1 hidden h-8 w-auto lg:block"
                />
                <span>
                  راه‌های ارتباطی با مجموعه{" "}
                  <span className="text-primary">باورلند</span>
                </span>
              </h2>
              <p className="mt-3 mb-5 text-sm leading-7 text-muted sm:text-base">
                باور لند ، کنار تو تا موفقیت
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-5 overflow-visible sm:flex-row sm:justify-center sm:gap-6 lg:w-auto lg:shrink-0 lg:justify-end lg:gap-5">

              <ContactCard
                label="ایمیل‌های ما"
                icon={<EmailIcon />}
                lines={["bavarland@gmail.com", "bavarland@gmail.com"]}
              />
              <ContactCard
                label="تلفن‌های تماس"
                icon={<PhoneIcon />}
                lines={["۰۲۱-۴۵۸۸۵۹۸۸۶۹۹", "۰۲۱-۴۵۸۸۵۹۸۸۶۹۹"]}
              />
            </div>
          </div>

          <div className="hidden lg:flex relative  h-[108px] items-center justify-start overflow-hidden rounded-[2rem] px-5 sm:rounded-[3.5rem] sm:px-8 lg:px-10">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[#164685]" />
              <div className="absolute inset-0 bg-[url('/images/bg-home.svg')] bg-cover bg-center bg-no-repeat opacity-50" />
            </div>

            <div className="relative">
              <Button
                href="/subscriptions"
                variant="primary"
                size="lg"
                className="rounded-full"
                endSlot={<ChevronLeft className="size-5" />}
              >
                آماده‌ای شروع کنی؟
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
