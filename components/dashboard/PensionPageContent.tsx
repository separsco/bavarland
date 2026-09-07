import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PensionRanking } from "@/components/dashboard/PensionRanking";
import { PensionStatCards } from "@/components/dashboard/PensionStatCards";
import { PensionWeeklyGrid } from "@/components/dashboard/PensionWeeklyGrid";

export function PensionPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "پانسیون" },
        ]}
      />

      <PensionStatCards />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
        <PensionWeeklyGrid />
        <PensionRanking />
      </div>
    </div>
  );
}
