import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PensionPointsBanner } from "@/components/dashboard/PensionPointsBanner";
import { PensionRanking } from "@/components/dashboard/PensionRanking";
import { PensionStatCards } from "@/components/dashboard/PensionStatCards";
import { PensionTodayPlan } from "@/components/dashboard/PensionTodayPlan";
import { PensionWeeklyGrid } from "@/components/dashboard/PensionWeeklyGrid";

export function PensionPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        className="hidden lg:block"
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "پانسیون" },
        ]}
      />

      <div className="lg:hidden">
        <PensionPointsBanner />
      </div>

      <PensionStatCards />

      <div className="lg:hidden">
        <PensionTodayPlan />
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
        <div className="hidden min-w-0 lg:block">
          <PensionWeeklyGrid />
        </div>
        <PensionRanking />
      </div>
    </div>
  );
}
