import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PlanningMainPanel } from "@/components/dashboard/PlanningMainPanel";
import { PlanningSideWidgets } from "@/components/dashboard/PlanningSideWidgets";

export function PlanningPageContent() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "داشبورد", href: "/dashboard" },
          { label: "برنامه ریزی" },
        ]}
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
        <PlanningMainPanel />
        <PlanningSideWidgets />
      </div>
    </div>
  );
}
