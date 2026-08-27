"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/subscriptions", label: "اشتراک ها" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
  { href: "/blog", label: "وبلاگ" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md">
      {/* موبایل */}
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 md:hidden">
        <button
          type="button"
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground"
        >
          {menuOpen ? (
            <X className="size-6" strokeWidth={2} />
          ) : (
            <Menu className="size-6" strokeWidth={2} />
          )}
        </button>

        <Link href="/" className="absolute start-1/2 -translate-x-1/2" aria-label="باورلند">
          <MediaSlot label="logo" className="h-8 w-28" />
        </Link>

        <Link
          href="/auth"
          aria-label="ورود / ثبت نام"
          className="inline-flex size-10 overflow-hidden rounded-full border border-border bg-sky-soft"
        >
          <MediaSlot label="header-avatar" className="size-full" />
        </Link>
      </div>

      {/* دسکتاپ */}
      <div className="mx-auto hidden h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-8 md:flex">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="باورلند">
          <MediaSlot label="logo" className="h-9 w-28" />
        </Link>

        <nav className="flex items-center gap-1" aria-label="منوی اصلی">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "font-medium text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="/contact"
            variant="outline"
            size="icon"
            className="border-border"
            aria-label="تماس"
          >
            <IconSlot label="phone-icon" className="size-5" />
          </Button>

          <Button
            href="/auth"
            variant="navy"
            size="md"
            startSlot={<IconSlot label="user-icon" className="size-4" />}
          >
            ورود / ثبت نام
          </Button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="منوی موبایل">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    isActive
                      ? "bg-sky font-semibold text-primary"
                      : "font-medium text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 flex flex-col gap-2">
            <Button href="/auth" variant="navy" size="lg" className="w-full">
              ورود / ثبت نام
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full">
              تماس با ما
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
