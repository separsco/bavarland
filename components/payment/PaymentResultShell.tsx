import type { ReactNode } from "react";
import { MediaSlot } from "@/components/ui/MediaSlot";

type PaymentResultShellProps = {
  children: ReactNode;
  variant: "success" | "failed";
};

export function PaymentResultShell({ children, variant }: PaymentResultShellProps) {
  const iconSrc =
    variant === "success" ? "/images/success.svg" : "/images/failed.svg";
  return (
    <section className="flex flex-1 items-center justify-center bg-sky-soft px-4 py-10 sm:py-14">
   
      <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-navy/5">
        <div className="">
          <div className="flex justify-center">
          
            <div className="">
              <MediaSlot label="logo" className="mx-auto h-8 w-28 sm:h-9 sm:w-32" />
            </div>
          </div>
        </div>

        <div className="">
        <img src={iconSrc} alt="" className="mx-auto" />

          <div className="w-full p-6 text-center sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
