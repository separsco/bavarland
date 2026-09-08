import { DashboardAcademyVideos } from "@/components/dashboard/DashboardAcademyVideos";
import { DashboardCounselorAlert } from "@/components/dashboard/DashboardCounselorAlert";
import { DashboardSessionBanner } from "@/components/dashboard/DashboardSessionBanner";
import { DashboardSidePanels } from "@/components/dashboard/DashboardSidePanels";
import { DashboardStreakCard } from "@/components/dashboard/DashboardStreakCard";
import { DashboardTodaySessions } from "@/components/dashboard/DashboardTodaySessions";
import { DashboardWeeklyPlan } from "@/components/dashboard/DashboardWeeklyPlan";

export function DashboardPageContent() {
  return (
    <>
      <div className="space-y-4 lg:hidden">
        <DashboardSessionBanner />
        <DashboardStreakCard />
        <DashboardAcademyVideos />
        <DashboardCounselorAlert />
        <DashboardTodaySessions />
      </div>

      <div className="hidden gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_21.5rem] lg:items-start xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="min-w-0 space-y-4">
          <DashboardSessionBanner />
          <DashboardWeeklyPlan />
        </div>
        <DashboardSidePanels />
      </div>
    </>
  );
}
