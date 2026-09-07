import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { dashboardUser } from "@/data/dashboard";

type DashboardHeaderProps = {
  onOpenMenu: () => void;
};

export function DashboardHeader({ onOpenMenu }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-border bg-white px-4 py-4 sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          aria-label="باز کردن منو"
          onClick={onOpenMenu}
          className="inline-flex size-10 items-center justify-center rounded-full border border-dashed border-border bg-sky-soft xl:hidden"
        >
          <DashboardIcon label="dashboard-menu-icon" className="size-5" />
        </button>

        <MediaSlot
          label="dashboard-user-avatar"
          className="size-11 shrink-0 rounded-full bg-sky-soft"
        />
        <p className="truncate text-sm font-bold text-foreground sm:text-base">
          {dashboardUser.greeting}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-full bg-primary px-3 py-2 text-white sm:flex">
          <DashboardIcon
            label="dashboard-trophy-icon"
            className="size-4"
            tone="on-dark"
          />
          <span className="text-xs font-semibold whitespace-nowrap sm:text-sm">
            {dashboardUser.points} امتیاز ({dashboardUser.rank})
          </span>
        </div>

        <button
          type="button"
          aria-label="اعلان‌ها"
          className="inline-flex size-10 items-center justify-center rounded-full border border-dashed border-border bg-sky-soft"
        >
          <DashboardIcon label="dashboard-notification-icon" className="size-5" />
        </button>
        <button
          type="button"
          aria-label="خروج"
          className="inline-flex size-10 items-center justify-center rounded-full border border-dashed border-border bg-sky-soft"
        >
          <DashboardIcon label="dashboard-logout-icon" className="size-5" />
        </button>
      </div>
    </header>
  );
}
