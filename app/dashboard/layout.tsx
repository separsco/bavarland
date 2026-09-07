import type { ReactNode } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#f3f5f7]">
      <DashboardShell>{children}</DashboardShell>
    </div>
  );
}
