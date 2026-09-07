import { Button } from "@/components/ui/Button";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { currentSession } from "@/data/dashboard";

export function DashboardSessionBanner() {
  return (
    <section className="rounded-[1.75rem] bg-brand-blue px-5 py-5 text-white sm:px-6 sm:py-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 items-start gap-3">
          <DashboardIcon
            label="dashboard-session-subject-icon"
            className="mt-0.5 size-8 rounded-xl"
            tone="on-dark"
          />
          <div>
            <h2 className="text-lg font-extrabold sm:text-xl">{currentSession.title}</h2>
            <p className="mt-2 text-sm text-white/80">{currentSession.status}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-2 text-sm">
          <DashboardIcon
            label="dashboard-session-clock-icon"
            className="size-4"
            tone="on-dark"
          />
          {currentSession.timeRange}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          {currentSession.attendees.map((slot, index) => (
            <MediaSlot
              key={slot}
              label={slot}
              className={`size-9 rounded-full border-2 border-brand-blue bg-white/20 ${
                index > 0 ? "-ms-2" : ""
              }`}
            />
          ))}
        </div>

        <Button variant="primary" size="md" className="w-full sm:w-auto">
          ورود به اتاق پانسیون
        </Button>
      </div>
    </section>
  );
}
