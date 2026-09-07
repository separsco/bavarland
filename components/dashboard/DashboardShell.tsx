"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export function DashboardShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-dvh bg-[#f3f5f7]">
      <DashboardSidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader onOpenMenu={() => setMenuOpen(true)} />
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 lg:p-6">{children}</div>
      </div>
    </div>
  );
}
