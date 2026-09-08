import { ChevronLeft, Clock, Monitor } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { currentSession } from "@/data/dashboard";
import { toPersianDigits } from "@/data/otp";

export function DashboardSessionBanner() {
  return (
    <section className="rounded-[1.75rem] bg-brand-blue px-4 py-5 text-white sm:px-6 sm:py-6">
      <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-start">
        <div className="flex items-center gap-2 lg:items-start lg:gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center lg:mt-0.5 lg:size-10 lg:rounded-xl lg:bg-white/10">
            <Monitor className="size-5" />
          </span>
          <div>
            <h2 className="text-base font-extrabold sm:text-lg lg:text-xl">
              {currentSession.title}
            </h2>
            <p className="mt-1.5 text-sm text-white/80">{currentSession.status}</p>
          </div>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm lg:mt-0">
          <Clock className="size-4" />
          {currentSession.timeRange}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center">
          {currentSession.attendees.map((slot, index) => (
            <MediaSlot
              key={slot}
              label={slot}
              className={`size-9 rounded-full border-2 border-brand-blue bg-white/25 ${
                index > 0 ? "-ms-2" : ""
              }`}
            />
          ))}
          <span className="-ms-2 flex size-9 items-center justify-center rounded-full border-2 border-brand-blue bg-primary text-xs font-bold text-white">
            +{toPersianDigits(currentSession.extraAttendees)}
          </span>
        </div>

        <Button
          variant="primary"
          size="md"
          className="shrink-0 !px-4 text-sm sm:!px-5"
          endSlot={<ChevronLeft className="size-4" />}
        >
          ورود به اتاق پانسیون
        </Button>
      </div>
    </section>
  );
}
