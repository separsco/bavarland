import { Headphones } from "lucide-react";
import { counselorAlert } from "@/data/dashboard";

export function DashboardCounselorAlert() {
  return (
    <section className="rounded-[1.75rem] bg-brand-blue p-4 text-white sm:p-5">
      <div className="mb-4 flex items-center gap-2">
        <Headphones className="size-5" />
        <h2 className="text-base font-extrabold">هشدار مشاور</h2>
      </div>

      <div className="flex items-center gap-3">
        <img
          src="/images/coverdashboard.svg"
          alt=""
          className="size-12 shrink-0 rounded-full bg-white/20 object-cover"
        />
        <p className="text-sm font-bold">مشاور: {counselorAlert.name}</p>
      </div>

      <p className="mt-4 rounded-full bg-sky px-3 py-2 text-center text-[11px] font-medium text-brand-blue sm:text-xs">
        تاریخ تماس : {counselorAlert.date} ساعت : {counselorAlert.time}
      </p>
    </section>
  );
}
