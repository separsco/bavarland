import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PensionTodayPlan } from "@/components/dashboard/PensionTodayPlan";
import { PlanningMainPanel } from "@/components/dashboard/PlanningMainPanel";
import { PlanningSideWidgets } from "@/components/dashboard/PlanningSideWidgets";

export function PlanningPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        className="hidden lg:block"
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "برنامه ریزی" },
        ]}
      />

      <div className="space-y-4 lg:hidden">
        <PensionTodayPlan showTitle={false} />
        <PlanningSideWidgets />
      </div>

      <div className="hidden gap-4 lg:grid xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
        <PlanningMainPanel />
        <PlanningSideWidgets />
      </div>
    </div>
  );
}
