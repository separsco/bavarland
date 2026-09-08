import { DashboardAcademyVideos } from "@/components/dashboard/DashboardAcademyVideos";
import { DashboardCounselorAlert } from "@/components/dashboard/DashboardCounselorAlert";
import { DashboardMobilePlan } from "@/components/dashboard/DashboardMobilePlan";
import { DashboardStreakCard } from "@/components/dashboard/DashboardStreakCard";

export function DashboardSidePanels() {
  return (
    <div className="space-y-4">
      <DashboardStreakCard />
      <DashboardCounselorAlert />
      <DashboardMobilePlan title="برنامه مطالعاتی امروز" />
      <DashboardAcademyVideos variant="grid" />
    </div>
  );
}
