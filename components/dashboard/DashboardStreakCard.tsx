import { Check, Flame, Hourglass } from "lucide-react";
import { streakDays, streakInfo } from "@/data/dashboard";

export function DashboardStreakCard() {
  return (
    <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-5">
      <div className="flex items-start gap-2">
        <Flame className="mt-0.5 size-5 fill-[#e53935] text-[#e53935]" />
        <div>
          <h2 className="text-base font-extrabold text-foreground">استریک</h2>
          <p className="mt-0.5 text-xs text-muted">{streakInfo.subtitle}</p>
        </div>
      </div>

      <p className="mt-5 text-center text-sm leading-7 text-muted">
        {streakInfo.message}
      </p>

      <div className="mt-5 flex items-end justify-between gap-1">
        {streakDays.map((day) => (
          <div key={day.label} className="flex flex-1 flex-col items-center gap-2">
            {day.current ? (
              <div className="flex h-10 flex-col items-center justify-center">
                <Hourglass className="size-6 text-primary" />
                <span
                  className="mt-0.5 size-0 border-x-[5px] border-b-[6px] border-x-transparent border-b-primary"
                  aria-hidden
                />
              </div>
            ) : (
              <span
                className={`flex size-10 items-center justify-center rounded-full ${
                  day.done
                    ? "bg-brand-blue text-white"
                    : "border border-dashed border-border bg-white text-muted"
                }`}
              >
                {day.done ? <Check className="size-4" strokeWidth={3} /> : null}
              </span>
            )}
            <span
              className={`text-xs ${day.current ? "font-bold text-primary" : "text-muted"}`}
            >
              {day.current ? "امروز" : day.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
