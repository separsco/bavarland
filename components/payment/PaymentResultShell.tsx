import type { ReactNode } from "react";
import { MediaSlot } from "@/components/ui/MediaSlot";

type PaymentResultShellProps = {
  children: ReactNode;
};

export function PaymentResultShell({ children }: PaymentResultShellProps) {
  return (
    <section className="flex flex-1 items-center justify-center bg-sky-soft px-4 py-10 sm:py-14">
      <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-navy/5">
        <div className="bg-navy px-4 pb-2 pt-4 sm:px-6 sm:pb-3 sm:pt-5">
          <div className="flex justify-center">
            <div className="rounded-b-[1.75rem] bg-navy px-8 py-3 sm:px-10 sm:py-4">
              <MediaSlot label="logo" className="mx-auto h-8 w-28 sm:h-9 sm:w-32" />
            </div>
          </div>
        </div>

        <div className="flex justify-center px-4 py-10 sm:px-8 sm:py-14">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-md shadow-black/5 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
