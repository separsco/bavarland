"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { MediaSlot } from "@/components/ui/MediaSlot";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/subscriptions", label: "اشتراک ها" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
  { href: "/blog", label: "وبلاگ" },
] as const;

function ActiveNavIndicator() {
  return (

    <svg className="absolute start-1/2 lg:-bottom-4 md:-bottom-3 h-2 w-6 -translate-x-1/2 text-primary lg:-bottom-5 lg:h-3 lg:w-10" xmlns="http://www.w3.org/2000/svg" width="39" height="12" viewBox="0 0 39 12" fill="none">
      <path d="M27.0234 6.56152C23.7153 6.56152 21.5507 3.4804 20.2773 0.727539C19.8286 -0.242693 17.775 -0.242692 17.3262 0.727539C16.0528 3.48025 13.8888 6.56125 10.5811 6.56152H27.0234ZM39 11.5947C39 8.81541 37.1125 6.56276 34.7842 6.5625H4.21582C1.88745 6.56275 0 8.8154 0 11.5947H39Z" fill="#FF5527" />
    </svg>
  );
}

function NavLinks({ pathname, className }: { pathname: string; className?: string }) {
  return (
    <nav className={className} aria-label="منوی اصلی">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative whitespace-nowrap px-1.5 py-1.5 text-[11px] transition-colors md:px-2 md:py-2 md:text-xs lg:px-3 lg:text-sm ${isActive
              ? "font-semibold text-foreground"
              : "font-medium text-muted hover:text-foreground"
              }`}
          >
            {item.label}
            {isActive ? <ActiveNavIndicator /> : null}
          </Link>
        );
      })}
    </nav>
  );
}

function HeaderActions({
  phoneClassName,
  className,
}: {
  phoneClassName?: string;
  className?: string;
}) {
  return (
    <div className={`flex shrink-0 items-center gap-1.5 md:gap-2 lg:gap-3 ${className ?? ""}`}>
      <Button
        href="/contact"
        variant="outline"
        size="icon"
        className={`shrink-0 !size-9 lg:!size-10 xl:!size-11 ${phoneClassName ?? "!border-brand-blue hover:bg-sky-soft"}`}
        aria-label="تماس"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 lg:size-6" viewBox="0 0 24 24" fill="none">
          <path d="M17.45 22.75C16.32 22.75 15.13 22.48 13.9 21.96C12.7 21.45 11.49 20.75 10.31 19.9C9.14 19.04 8.01 18.08 6.94 17.03C5.88 15.96 4.92 14.83 4.07 13.67C3.21 12.47 2.52 11.27 2.03 10.11C1.51 8.87 1.25 7.67 1.25 6.54C1.25 5.76 1.39 5.02 1.66 4.33C1.94 3.62 2.39 2.96 3 2.39C3.77 1.63 4.65 1.25 5.59 1.25C5.98 1.25 6.38 1.34 6.72 1.5C7.11 1.68 7.44 1.95 7.68 2.31L10 5.58C10.21 5.87 10.37 6.15 10.48 6.43C10.61 6.73 10.68 7.03 10.68 7.32C10.68 7.7 10.57 8.07 10.36 8.42C10.21 8.69 9.98 8.98 9.69 9.27L9.01 9.98C9.02 10.01 9.03 10.03 9.04 10.05C9.16 10.26 9.4 10.62 9.86 11.16C10.35 11.72 10.81 12.23 11.27 12.7C11.86 13.28 12.35 13.74 12.81 14.12C13.38 14.6 13.75 14.84 13.97 14.95L13.95 15L14.68 14.28C14.99 13.97 15.29 13.74 15.58 13.59C16.13 13.25 16.83 13.19 17.53 13.48C17.79 13.59 18.07 13.74 18.37 13.95L21.69 16.31C22.06 16.56 22.33 16.88 22.49 17.26C22.64 17.64 22.71 17.99 22.71 18.34C22.71 18.82 22.6 19.3 22.39 19.75C22.18 20.2 21.92 20.59 21.59 20.95C21.02 21.58 20.4 22.03 19.68 22.32C18.99 22.6 18.24 22.75 17.45 22.75ZM5.59 2.75C5.04 2.75 4.53 2.99 4.04 3.47C3.58 3.9 3.26 4.37 3.06 4.88C2.85 5.4 2.75 5.95 2.75 6.54C2.75 7.47 2.97 8.48 3.41 9.52C3.86 10.58 4.49 11.68 5.29 12.78C6.09 13.88 7 14.95 8 15.96C9 16.95 10.08 17.87 11.19 18.68C12.27 19.47 13.38 20.11 14.48 20.57C16.19 21.3 17.79 21.47 19.11 20.92C19.62 20.71 20.07 20.39 20.48 19.93C20.71 19.68 20.89 19.41 21.04 19.09C21.16 18.84 21.22 18.58 21.22 18.32C21.22 18.16 21.19 18 21.11 17.82C21.08 17.76 21.02 17.65 20.83 17.52L17.51 15.16C17.31 15.02 17.13 14.92 16.96 14.85C16.74 14.76 16.65 14.67 16.31 14.88C16.11 14.98 15.93 15.13 15.73 15.33L14.97 16.08C14.58 16.46 13.98 16.55 13.52 16.38L13.25 16.26C12.84 16.04 12.36 15.7 11.83 15.25C11.35 14.84 10.83 14.36 10.2 13.74C9.71 13.24 9.22 12.71 8.71 12.12C8.24 11.57 7.9 11.1 7.69 10.71L7.57 10.41C7.51 10.18 7.49 10.05 7.49 9.91C7.49 9.55 7.62 9.23 7.87 8.98L8.62 8.2C8.82 8 8.97 7.81 9.07 7.64C9.15 7.51 9.18 7.4 9.18 7.3C9.18 7.22 9.15 7.1 9.1 6.98C9.03 6.82 8.92 6.64 8.78 6.45L6.46 3.17C6.36 3.03 6.24 2.93 6.09 2.86C5.93 2.79 5.76 2.75 5.59 2.75ZM13.95 15.01L13.79 15.69L14.06 14.99C14.01 14.98 13.97 14.99 13.95 15.01Z" fill="#164685" />
          <path d="M18.5 9.75C18.09 9.75 17.75 9.41 17.75 9C17.75 8.64 17.39 7.89 16.79 7.25C16.2 6.62 15.55 6.25 15 6.25C14.59 6.25 14.25 5.91 14.25 5.5C14.25 5.09 14.59 4.75 15 4.75C15.97 4.75 16.99 5.27 17.88 6.22C18.71 7.11 19.25 8.2 19.25 9C19.25 9.41 18.91 9.75 18.5 9.75Z" fill="#164685" />
          <path d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9C21.25 5.55 18.45 2.75 15 2.75C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25C19.27 1.25 22.75 4.73 22.75 9C22.75 9.41 22.41 9.75 22 9.75Z" fill="#164685" />
        </svg>
      </Button>


      <Button
        href="/auth"
        variant="navy"
        size="md"
        className="!h-9 !shrink-0 !whitespace-nowrap !bg-brand-blue !px-2.5 !text-[11px] !text-white hover:!bg-brand-blue/90 md:!px-3 md:!text-xs lg:!h-11 lg:!px-4 lg:!text-sm xl:!px-5"
        startSlot={<UserIcon className="size-3.5 shrink-0 md:size-4" />}
      >
        ورود / ثبت نام
      </Button>
    </div>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M12.1586 11.62C12.1286 11.62 12.1086 11.62 12.0786 11.62C12.0286 11.61 11.9586 11.61 11.8986 11.62C8.99859 11.53 6.80859 9.25 6.80859 6.44C6.80859 3.58 9.13859 1.25 11.9986 1.25C14.8586 1.25 17.1886 3.58 17.1886 6.44C17.1786 9.25 14.9786 11.53 12.1886 11.62C12.1786 11.62 12.1686 11.62 12.1586 11.62ZM11.9986 2.75C9.96859 2.75 8.30859 4.41 8.30859 6.44C8.30859 8.44 9.86859 10.05 11.8586 10.12C11.9086 10.11 12.0486 10.11 12.1786 10.12C14.1386 10.03 15.6786 8.42 15.6886 6.44C15.6886 4.41 14.0286 2.75 11.9986 2.75Z"
        fill="currentColor"
      />
      <path
        d="M12.1716 22.55C10.2116 22.55 8.24156 22.05 6.75156 21.05C5.36156 20.13 4.60156 18.87 4.60156 17.5C4.60156 16.13 5.36156 14.86 6.75156 13.93C9.75156 11.94 14.6116 11.94 17.5916 13.93C18.9716 14.85 19.7416 16.11 19.7416 17.48C19.7416 18.85 18.9816 20.12 17.5916 21.05C16.0916 22.05 14.1316 22.55 12.1716 22.55ZM7.58156 15.19C6.62156 15.83 6.10156 16.65 6.10156 17.51C6.10156 18.36 6.63156 19.18 7.58156 19.81C10.0716 21.48 14.2716 21.48 16.7616 19.81C17.7216 19.17 18.2416 18.35 18.2416 17.49C18.2416 16.64 17.7116 15.82 16.7616 15.19C14.2716 13.53 10.0716 13.53 7.58156 15.19Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MobileNavMenu({
  pathname,
  menuOpen,
}: {
  pathname: string;
  menuOpen: boolean;
}) {
  if (!menuOpen) return null;

  return (
    <div className="border-t border-border bg-white px-4 py-4 md:hidden">
      <nav className="flex flex-col gap-1" aria-label="منوی موبایل">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-2xl px-4 py-3 text-sm ${isActive
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
  );
}

function MobileHeaderBar({
  menuOpen,
  onToggleMenu,
}: {
  menuOpen: boolean;
  onToggleMenu: () => void;
}) {
  return (
    <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 md:hidden">
      <button
        type="button"
        aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
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
        className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-sky-soft text-brand-blue"
      >
        <UserIcon className="size-5" />
      </Link>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

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
    <header
      className={
        isHome
          ? "sticky top-0 z-50 border-b border-border/60 bg-white md:border-b-0 md:bg-background md:px-3 md:pt-3 sm:px-6 sm:pt-4 lg:px-8 lg:pt-5"
          : "sticky top-0 z-50 border-b border-border/60 bg-white md:bg-white/90 md:backdrop-blur-md"
      }
    >
      <MobileHeaderBar
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
      />

      <MobileNavMenu pathname={pathname} menuOpen={menuOpen} />

      {isHome ? (
        <div className="mx-auto hidden w-full max-w-6xl rounded-full bg-white shadow-lg shadow-navy/10 ring-1 ring-black/[0.04] md:block">
          <div className="flex h-14 min-w-0 items-center justify-between gap-2 px-3 md:gap-2.5 md:px-4 lg:h-[72px] lg:gap-4 lg:px-6 xl:gap-6 xl:px-10">
            <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="باورلند">
              <img src="/images/01 1.svg" alt="باورلند" className="" />
            </Link>

            <NavLinks
              pathname={pathname}
              className="flex min-w-0 flex-1 items-center justify-center gap-0 lg:gap-1 xl:gap-2"
            />

            <HeaderActions phoneClassName="!border-brand-blue hover:bg-sky-soft" />
          </div>
        </div>
      ) : (
        <div className="mx-auto hidden h-14 w-full max-w-7xl min-w-0 items-center justify-between gap-2 px-3 md:flex md:gap-2.5 md:px-4 lg:h-[72px] lg:gap-4 lg:px-6 xl:gap-4 xl:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="باورلند">
            <MediaSlot label="logo" className="h-7 w-24 md:h-8 md:w-28 lg:h-9" />
          </Link>

          <NavLinks
            pathname={pathname}
            className="flex min-w-0 flex-1 items-center justify-center gap-0 lg:gap-0.5 xl:gap-1"
          />

          <HeaderActions />
        </div>
      )}
    </header>
  );
}
