import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#eef2f6]">
      {children}
    </div>
  );
}
