import { DashboardSessionBanner } from "@/components/dashboard/DashboardSessionBanner";
import { DashboardSidePanels } from "@/components/dashboard/DashboardSidePanels";
import { DashboardWeeklyPlan } from "@/components/dashboard/DashboardWeeklyPlan";

export function DashboardPageContent() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_21rem] xl:items-start">
      <div className="space-y-4">
        <DashboardSessionBanner />
        <DashboardWeeklyPlan />
      </div>
      <DashboardSidePanels />
    </div>
  );
}
