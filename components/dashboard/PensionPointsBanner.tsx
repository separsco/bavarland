import { Trophy } from "lucide-react";
import { dashboardUser } from "@/data/dashboard";

export function PensionPointsBanner() {
  return (
    <section className="flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 shadow-sm shadow-navy/5">
      <Trophy className="size-5 text-primary" fill="currentColor" />
      <p className="text-sm font-bold text-foreground">
        {dashboardUser.points} امتیاز ({dashboardUser.rank})
      </p>
    </section>
  );
}
