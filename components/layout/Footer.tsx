import Link from "next/link";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

const socialLinks = [
  { id: "facebook", href: "#", label: "فیسبوک" },
  { id: "twitter", href: "#", label: "توییتر" },
  { id: "whatsapp", href: "#", label: "واتساپ" },
  { id: "instagram", href: "#", label: "اینستاگرام" },
  { id: "telegram", href: "#", label: "تلگرام" },
] as const;

export function Footer() {
  return (
    <footer className="pb-6 pt-6 sm:pb-8 sm:pt-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-navy">
          <div className="relative flex flex-col items-center px-6 pb-10 pt-12 text-center sm:px-10 sm:pt-14">
            <span className="absolute start-1/2 top-0 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary">
              <IconSlot label="footer-badge-icon" className="size-5" />
            </span>

            <MediaSlot label="footer-logo" className="mb-6 h-12 w-40" />

            <p className="max-w-3xl text-sm leading-8 text-white/85 sm:text-base sm:leading-8">
              مجموعه‌ای از خدمات تخصصی مانند برنامه‌ریزی شخصی، پانسیون مطالعاتی،
              مشاوره تخصصی، پیگیری تلفنی و گزارش‌های تحلیلی را در کنار هم قرار
              داده‌ایم تا هر دانش‌آموز بتواند با آرامش و اطمینان، مسیر رسیدن به
              هدف خود را طی کند.
            </p>
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
                    className="inline-flex size-9 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
                  >
                    <IconSlot
                      label={`social-${social.id}-icon`}
                      className="size-4"
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
