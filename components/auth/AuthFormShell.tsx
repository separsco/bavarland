import type { ReactNode } from "react";
import { MediaSlot } from "@/components/ui/MediaSlot";

type AuthFormShellProps = {
  children: ReactNode;
};

export function AuthFormShell({ children }: AuthFormShellProps) {
  return (
    <section className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <MediaSlot label="auth-logo" className="h-16 w-36 sm:h-[4.5rem] sm:w-40" />
        </div>
        {children}
      </div>
    </section>
  );
}
