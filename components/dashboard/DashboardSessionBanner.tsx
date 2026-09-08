import { ChevronLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { currentSession } from "@/data/dashboard";
import { toPersianDigits } from "@/data/otp";

export function DashboardSessionBanner() {
  const [startTime, endTime] = currentSession.timeRange.split(" - ");

  return (
    <section className="relative overflow-hidden rounded-[1.75rem] bg-brand-blue px-4 py-5 text-white sm:px-6 sm:py-6">
      <img
        src="/images/bg-footer.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-brand-blue/75" />

      <div className="relative z-10">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:justify-between lg:text-start">
          <div className="flex items-center gap-2 lg:items-start lg:gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M23.4132 23.9603H8.5865C3.27984 23.9603 1.6665 22.347 1.6665 17.0403V8.58699C1.6665 3.28033 3.27984 1.66699 8.5865 1.66699H10.6665C11.2132 1.66699 11.6665 2.12033 11.6665 2.66699C11.6665 3.21366 11.2132 3.66699 10.6665 3.66699H8.5865C4.39984 3.66699 3.6665 4.40033 3.6665 8.58699V17.027C3.6665 21.2137 4.39984 21.947 8.5865 21.947H23.3998C27.5865 21.947 28.3198 21.2137 28.3198 17.027V15.8403C28.3198 15.2937 28.7732 14.8403 29.3198 14.8403C29.8665 14.8403 30.3198 15.2937 30.3198 15.8403V17.027C30.3332 22.347 28.7198 23.9603 23.4132 23.9603Z" fill="white"/>
<path d="M16 30.3333C15.4533 30.3333 15 29.88 15 29.3333V22.96C15 22.4133 15.4533 21.96 16 21.96C16.5467 21.96 17 22.4133 17 22.96V29.3333C17 29.88 16.5467 30.3333 16 30.3333Z" fill="white"/>
<path d="M29.3332 18.333H2.6665C2.11984 18.333 1.6665 17.8797 1.6665 17.333C1.6665 16.7863 2.11984 16.333 2.6665 16.333H29.3332C29.8798 16.333 30.3332 16.7863 30.3332 17.333C30.3332 17.8797 29.8798 18.333 29.3332 18.333Z" fill="white"/>
<path d="M22 30.333H10C9.45333 30.333 9 29.8797 9 29.333C9 28.7863 9.45333 28.333 10 28.333H22C22.5467 28.333 23 28.7863 23 29.333C23 29.8797 22.5467 30.333 22 30.333Z" fill="white"/>
<path d="M23.8132 13.493H17.4665C15.3732 13.493 14.0132 12.133 14.0132 10.0397V5.34635C14.0132 3.31969 15.6532 1.67969 17.6799 1.67969H23.8132C25.7199 1.67969 27.2665 3.22635 27.2665 5.13302V10.0397C27.2665 11.9464 25.7199 13.493 23.8132 13.493ZM17.6799 3.67969C16.7599 3.67969 16.0132 4.42635 16.0132 5.34635V10.0397C16.0132 11.3464 16.8399 11.493 17.4665 11.493H23.8132C24.6132 11.493 25.2665 10.8397 25.2665 10.0397V5.13302C25.2665 4.33302 24.6132 3.67969 23.8132 3.67969H17.6799Z" fill="white"/>
<path d="M28.5999 11.8266C28.1733 11.8266 27.7333 11.6799 27.3066 11.3733L25.6933 10.2399C25.4266 10.0533 25.2666 9.7466 25.2666 9.4266V5.7466C25.2666 5.4266 25.4266 5.11993 25.6933 4.93327L27.3066 3.79993C27.9999 3.3066 28.7466 3.21327 29.3599 3.53327C29.9733 3.85327 30.3199 4.51993 30.3199 5.37327V9.81327C30.3199 10.6666 29.9733 11.3333 29.3599 11.6533C29.1333 11.7733 28.8799 11.8266 28.5999 11.8266ZM27.2666 8.9066L28.3333 9.65327V5.51993L27.2666 6.2666V8.9066Z" fill="white"/>
</svg>
            <div>
              <h2 className="text-base font-extrabold sm:text-lg lg:text-xl">
                {currentSession.title}
              </h2>
              <p className="mt-1.5  text-white">{currentSession.status}</p>
            </div>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm lg:mt-0">
            <Clock className="size-4" />
            <span dir="ltr" className="inline-flex items-center gap-1.5 tabular-nums">
              {startTime}
              <span>—</span>
              {endTime}
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center" dir="ltr">
            <img
              src="/images/pic.svg"
              alt=""
              className="relative z-0 size-9 rounded-full border-2 border-white object-cover"
            />
            <img
              src="/images/pic.svg"
              alt=""
              className="relative z-[1] -ms-2.5 size-9 rounded-full border-2 border-white object-cover"
            />
            <img
              src="/images/pic.svg"
              alt=""
              className="relative z-[2] -ms-2.5 size-9 rounded-full border-2 border-white object-cover"
            />
            {/* <span className="relative z-[3] -ms-2.5 flex size-9 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white">
              +{toPersianDigits(currentSession.extraAttendees)}
            </span> */}
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
      </div>
    </section>
  );
}
