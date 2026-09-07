"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { MediaSlot } from "@/components/ui/MediaSlot";
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
        className={`fixed inset-y-0 start-0 z-50 flex w-72 shrink-0 flex-col overflow-y-auto border-e border-border bg-white transition-transform xl:static xl:translate-x-0 ${
          open ? "translate-x-0" : "translate-x-full xl:translate-x-0"
        }`}
      >
        <div className="flex items-center gap-3 px-5 py-6">
          <MediaSlot label="dashboard-logo" className="h-12 w-32 rounded-xl bg-sky-soft" />
        </div>

        <nav className="flex-1 space-y-1 px-3" aria-label="منوی داشبورد">
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
                className={`relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-primary/5 font-semibold text-primary"
                    : "font-medium text-muted hover:bg-sky-soft hover:text-foreground"
                }`}
              >
                {isActive ? (
                  <span className="absolute inset-y-2 start-0 w-1 rounded-full bg-primary" />
                ) : null}
                <DashboardIcon label={item.icon} className="size-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4">
          <div className="rounded-3xl bg-brand-blue px-4 py-5 text-white">
            <DashboardIcon
              label="dashboard-major-cta-icon"
              className="size-10 rounded-full"
              tone="on-dark"
            />
            <p className="mt-3 text-sm font-bold leading-7">
              انتخاب رشته‌ات رو حرفه‌ای انجام بده
            </p>
            <p className="mt-1 text-xs leading-6 text-white/75">
              بهترین انتخاب‌ها را بر اساس رتبه و علایق خودت ببین.
            </p>
            <Button
              href="/subscriptions"
              variant="primary"
              size="sm"
              className="mt-4 w-full"
            >
              خرید انتخاب رشته
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
