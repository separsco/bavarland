import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { MediaSlot } from "@/components/ui/MediaSlot";
import {
  counselorAlert,
  recommendedVideos,
  streakDays,
  todayPlan,
} from "@/data/dashboard";

export function DashboardSidePanels() {
  return (
    <div className="space-y-4">
      <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <DashboardIcon label="dashboard-streak-icon" className="size-5" />
          <h2 className="text-base font-extrabold text-foreground">استریک</h2>
        </div>
        <div className="flex items-center justify-between gap-1">
          {streakDays.map((day) => (
            <div key={day.label} className="flex flex-1 flex-col items-center gap-2">
              <span
                className={`flex size-9 items-center justify-center rounded-full ${
                  day.current
                    ? "bg-primary text-white"
                    : day.done
                      ? "bg-brand-blue text-white"
                      : "bg-sky-soft text-muted"
                }`}
              >
                <DashboardIcon
                  label={
                    day.current
                      ? "dashboard-streak-today-icon"
                      : day.done
                        ? "dashboard-streak-done-icon"
                        : "dashboard-streak-empty-icon"
                  }
                  className="size-4"
                  tone={day.current || day.done ? "on-dark" : "default"}
                />
              </span>
              <span className="text-xs text-muted">{day.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[1.75rem] bg-brand-blue p-4 text-white sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <DashboardIcon
            label="dashboard-counselor-alert-icon"
            className="size-5"
            tone="on-dark"
          />
          <h2 className="text-base font-extrabold">هشدار مشاور</h2>
        </div>
        <div className="flex items-center gap-3">
          <MediaSlot
            label="dashboard-counselor-avatar"
            className="size-12 shrink-0 rounded-full bg-white/20"
          />
          <div>
            <p className="text-sm font-bold">مشاور: {counselorAlert.name}</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-white/80">
              <DashboardIcon
                label="dashboard-counselor-date-icon"
                className="size-3.5"
                tone="on-dark"
              />
              تاریخ تماس : {counselorAlert.date} ساعت : {counselorAlert.time}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className="text-base font-extrabold text-foreground">
            برنامه مطالعاتی امروز
          </h2>
          <DashboardIcon label="dashboard-today-plan-icon" className="size-5" />
        </div>
        <ul className="space-y-3">
          {todayPlan.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border ${
                  item.done
                    ? "border-primary bg-primary"
                    : "border-dashed border-border bg-sky-soft"
                }`}
              >
                <DashboardIcon
                  label={
                    item.done
                      ? "dashboard-today-checked-icon"
                      : "dashboard-today-unchecked-icon"
                  }
                  className="size-3"
                  tone={item.done ? "on-dark" : "default"}
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                  <DashboardIcon label="dashboard-today-clock-icon" className="size-3.5" />
                  {item.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <DashboardIcon label="dashboard-videos-icon" className="size-5" />
          <h2 className="text-base font-extrabold text-foreground">
            ویدیو پیشنهادی آکادمی
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {recommendedVideos.map((video) => (
            <article key={video.id}>
              <div className="relative overflow-hidden rounded-2xl">
                <MediaSlot
                  label={video.slot}
                  className="aspect-video w-full bg-sky-soft"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <DashboardIcon
                    label={`${video.slot}-play`}
                    className="size-8 rounded-full"
                  />
                </span>
              </div>
              <p className="mt-2 text-xs font-medium leading-6 text-foreground">
                {video.title}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
