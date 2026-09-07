import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PensionRanking } from "@/components/dashboard/PensionRanking";
import { ReportsPointsLog } from "@/components/dashboard/ReportsPointsLog";
import { ReportsTopCards } from "@/components/dashboard/ReportsTopCards";

export function ReportsPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "گزارش عملکرد" },
        ]}
      />

      <ReportsTopCards />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
        <ReportsPointsLog />
        <PensionRanking />
      </div>
    </div>
  );
}
