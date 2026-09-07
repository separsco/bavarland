"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { dashboardNavItems } from "@/data/dashboard";

type DashboardSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function DashboardSidebar({ open, onClose }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="بستن منو"
          className="fixed inset-0 z-40 bg-navy/40 xl:hidden"
          onClick={onClose}
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 start-0 z-50 flex w-72 shrink-0 flex-col overflow-y-auto rounded-l-4xl border-e border-border bg-white transition-transform xl:static xl:translate-x-0 ${
          open ? "translate-x-0" : "translate-x-full xl:translate-x-0"
        }`}
      >
        <div className="flex items-center gap-3 px-5 py-6">
         <img src="/images/01 1.svg" alt="" />
        </div>

        <nav className="flex-1 space-y-1" aria-label="منوی داشبورد">
          {dashboardNavItems.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`relative flex items-center gap-3 py-2.5 pe-4 ps-5 text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-primary"
                    : "font-medium text-muted hover:text-foreground"
                }`}
              >
                {isActive ? (
                  <svg
                    className="pointer-events-none absolute start-0 top-1/2 -translate-y-1/2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="42"
                    viewBox="0 0 11 42"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6.85254 29.1035C6.85239 25.3997 3.53148 23.0277 0.710938 21.6807C-0.236682 21.2277 -0.236725 19.2722 0.710938 18.8193C3.53152 17.4723 6.85248 15.1004 6.85254 11.3965L6.85254 29.1035ZM11.8711 42C9.10031 42 6.85449 39.9667 6.85449 37.459L6.85449 4.54102C6.85449 2.03334 9.10031 0 11.8711 0L11.8711 42Z"
                      fill="#FF5527"
                    />
                  </svg>
                ) : null}
                <span
                  aria-hidden
                  className={`size-5 shrink-0 ${isActive ? "bg-primary" : "bg-muted"}`}
                  style={{
                    maskImage: `url(${item.image})`,
                    WebkitMaskImage: `url(${item.image})`,
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <img src="/images/VIP.svg" alt="" className="w-[188px] h-[270px] mx-auto mb-5"/>
      </aside>
    </>
  );
}
