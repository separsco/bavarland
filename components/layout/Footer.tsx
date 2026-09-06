import Link from "next/link";

const socialLinks = [
  { id: "instagram", href: "#", label: "اینستاگرام", src: "/images/instagram.svg" },
  { id: "linkedin", href: "#", label: "لینکدین", src: "/images/linkdin.svg" },
  { id: "soroush", href: "#", label: "سروش", src: "/images/Soroush-color 1.svg" },
  { id: "telegram", href: "#", label: "تلگرام", src: "/images/telegram.svg" },
  { id: "whatsapp", href: "#", label: "واتساپ", src: "/images/whatsapp.svg" },
] as const;

export function Footer() {
  return (
    <footer className="mt-22 pb-6 pt-12 sm:pb-8 sm:pt-14">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
       <img src="/images/ChatGPT Image Aug 3, 2026, 03_10_26 AM-Photoroom 2.svg" alt="" aria-hidden className="absolute left-1/2 top-0 z-20 h-8 w-16 -translate-x-1/2 -translate-y-full" />
        <div className="overflow-hidden rounded-[2.5rem]">
          <div className="relative bg-brand-blue">
            <svg
              aria-hidden
              viewBox="0 0 86 17"
              fill="none"
              className="pointer-events-none absolute left-1/2 top-0 z-20 h-[26px] w-[200px] -translate-x-1/2 text-background"
            >
              <path
                d="M59.0518 9.06641C49.6563 9.06652 44.4837 13.85 42.3193 16.55C41.931 17.02 40.2436 17.02 39.8555 16.55C37.691 13.85 32.5185 9.06641 23.123 9.06641H59.0518ZM85.2188 0C85.2188 5.00634 81.094 9.06445 76.0059 9.06445H9.21289C4.12478 9.06445 0 5.00634 0 0H85.2188Z"
                fill="currentColor"
              />
            </svg>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div
              className="h-full w-full bg-[#164685]"
            />

            <div className="relative z-10 flex flex-col items-center px-6 pb-10 pt-16 text-center sm:px-10">
            <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="باورلند">
              <img src="/images/01 2.svg" alt="باورلند" className="" />
            </Link>

              <p className="max-w-2xl text-sm leading-8 text-white/85 sm:text-base sm:leading-8 mt-4">
              مجموعه‌ای از خدمات تخصصی مانند برنامه‌ریزی شخصی، پانسیون مطالعاتی، مشاوره تخصصی، پیگیری تلفنی و گزارش‌های تحلیلی را در کنار هم قرار داده‌ایم تا هر دانش‌آموز بتواند با آرامش و اطمینان، مسیر رسیدن به هدف خود را طی کند.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 bg-primary px-5 py-5 sm:flex-row sm:justify-between sm:gap-6 sm:px-8 sm:py-4">
            <p className="order-3 text-center text-xs font-medium text-white sm:order-1 sm:text-start sm:text-sm">
              تمام حقوق برای مجموعه باورلند محفوظ است
            </p>

            <p className="order-1 text-center text-sm font-medium text-white sm:order-2">
              ما را در شبکه‌های اجتماعی دنبال کنید
            </p>

            <ul className="order-2 flex items-center gap-2 sm:order-3">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex size-9 items-center justify-center  transition-colors hover:bg-white/25"
                  >
                    <img
                      src={social.src}
                      alt=""
                      aria-hidden
                      className="size-5 object-contain"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
