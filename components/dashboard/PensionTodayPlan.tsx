import { ChevronDown, Clock, Hourglass } from "lucide-react";
import { todaySessions } from "@/data/dashboard";
import { planningSelectedDate, planningWeekDays } from "@/data/planning";
import { toPersianDigits } from "@/data/otp";

const statusStyles = {
  enter: {
    bar: "bg-primary",
    badge: "bg-primary text-white",
    label: "ورود به پانسیون",
  },
  remaining: {
    bar: "bg-[#7eb6e8]",
    badge: "bg-sky-100 text-brand-blue",
    label: "۷ دقیقه مونده",
  },
  pending: {
    bar: "bg-amber-300",
    badge: "bg-amber-100 text-amber-700",
    label: "در حال انتظار",
  },
  done: {
    bar: "bg-emerald-400",
    badge: "bg-emerald-100 text-emerald-700",
    label: "انجام شد",
  },
} as const;

function SessionTime({ time }: { time: string }) {
  const [start, end] = time.split(" - ");

  return (
    <span
      dir="ltr"
      className="inline-flex items-center gap-1 text-[11px] text-muted"
    >
 
      <span>{start}</span>
      <span>—</span>
      <span>{end}</span>
      <Clock className="size-3.5" />
    </span>
  );
}

export function PensionTodayPlan({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-3 py-3 text-sm font-semibold text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill="#FAFAFA"/>
<path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill="#FAFAFA"/>
<path d="M8.5 14.5002C8.24 14.5002 7.98 14.3902 7.79 14.2102C7.61 14.0202 7.5 13.7702 7.5 13.5002C7.5 13.3702 7.53 13.2402 7.58 13.1202C7.63 13.0002 7.7 12.8902 7.79 12.7902C8.16 12.4202 8.83 12.4202 9.21 12.7902C9.39 12.9802 9.5 13.2402 9.5 13.5002C9.5 13.5602 9.49 13.6302 9.48 13.7002C9.47 13.7602 9.45 13.8202 9.42 13.8802C9.4 13.9402 9.37 14.0002 9.33 14.0602C9.29 14.1102 9.25 14.1602 9.21 14.2102C9.02 14.3902 8.76 14.5002 8.5 14.5002Z" fill="#FAFAFA"/>
<path d="M12 14.5003C11.87 14.5003 11.74 14.4703 11.62 14.4203C11.49 14.3703 11.39 14.3003 11.29 14.2103C11.11 14.0203 11 13.7703 11 13.5003C11 13.3703 11.03 13.2403 11.08 13.1203C11.13 13.0003 11.2 12.8903 11.29 12.7903C11.39 12.7003 11.49 12.6303 11.62 12.5803C11.99 12.4303 12.43 12.5103 12.71 12.7903C12.89 12.9803 13 13.2403 13 13.5003C13 13.5603 12.99 13.6303 12.98 13.7003C12.97 13.7603 12.95 13.8203 12.92 13.8803C12.9 13.9403 12.87 14.0003 12.83 14.0603C12.8 14.1103 12.75 14.1603 12.71 14.2103C12.52 14.3903 12.26 14.5003 12 14.5003Z" fill="#FAFAFA"/>
<path d="M8.5 17.9998C8.37 17.9998 8.24 17.9698 8.12 17.9198C7.99 17.8698 7.88 17.7998 7.79 17.7098C7.7 17.6198 7.63 17.5098 7.58 17.3798C7.53 17.2598 7.5 17.1298 7.5 16.9998C7.5 16.8698 7.53 16.7398 7.58 16.6198C7.63 16.4898 7.7 16.3798 7.79 16.2898C7.88 16.1998 7.99 16.1298 8.12 16.0798C8.36 15.9798 8.64 15.9698 8.88 16.0798C9.01 16.1298 9.12 16.1998 9.21 16.2898C9.3 16.3798 9.37 16.4898 9.42 16.6198C9.47 16.7398 9.5 16.8698 9.5 16.9998C9.5 17.1298 9.47 17.2598 9.42 17.3798C9.37 17.5098 9.3 17.6198 9.21 17.7098C9.12 17.7998 9.01 17.8698 8.88 17.9198C8.76 17.9698 8.63 17.9998 8.5 17.9998Z" fill="#FAFAFA"/>
<path d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z" fill="#FAFAFA"/>
<path d="M18 23.75C16.83 23.75 15.72 23.33 14.87 22.56C14.51 22.26 14.19 21.88 13.93 21.44C13.49 20.72 13.25 19.87 13.25 19C13.25 16.38 15.38 14.25 18 14.25C19.36 14.25 20.66 14.84 21.56 15.86C22.33 16.74 22.75 17.85 22.75 19C22.75 19.87 22.51 20.72 22.06 21.45C21.22 22.87 19.66 23.75 18 23.75ZM18 15.75C16.21 15.75 14.75 17.21 14.75 19C14.75 19.59 14.91 20.17 15.22 20.67C15.39 20.97 15.61 21.22 15.85 21.43C16.45 21.97 17.2 22.25 18 22.25C19.15 22.25 20.19 21.66 20.78 20.68C21.09 20.17 21.25 19.6 21.25 19C21.25 18.22 20.96 17.46 20.44 16.85C19.82 16.15 18.93 15.75 18 15.75Z" fill="#FAFAFA"/>
<path d="M17.4299 20.7396C17.2399 20.7396 17.0499 20.6695 16.8999 20.5195L15.9099 19.5296C15.6199 19.2396 15.6199 18.7596 15.9099 18.4696C16.1999 18.1796 16.6799 18.1796 16.9699 18.4696L17.4499 18.9496L19.0499 17.4696C19.3499 17.1896 19.8299 17.2096 20.1099 17.5096C20.3899 17.8096 20.3699 18.2896 20.0699 18.5696L17.9399 20.5396C17.7899 20.6696 17.6099 20.7396 17.4299 20.7396Z" fill="#FAFAFA"/>
<path d="M15.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V16.36C21.75 16.67 21.56 16.95 21.26 17.06C20.97 17.17 20.64 17.09 20.43 16.85C19.81 16.15 18.92 15.75 17.99 15.75C16.2 15.75 14.74 17.21 14.74 19C14.74 19.59 14.9 20.17 15.21 20.67C15.38 20.97 15.6 21.22 15.84 21.43C16.08 21.63 16.17 21.96 16.06 22.26C15.97 22.55 15.69 22.75 15.37 22.75ZM8 4.25C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.82C13.45 20.57 13.25 19.8 13.25 19C13.25 16.38 15.38 14.25 18 14.25C18.79 14.25 19.57 14.45 20.25 14.82V8.5C20.25 5.64 18.86 4.25 16 4.25H8Z" fill="#FAFAFA"/>
</svg>
          {planningSelectedDate}
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-[#E7E7E8] gap-2 px-3 py-3 text-sm font-medium text-foreground"
        >
          هفته جاری
          <ChevronDown className="size-4" />
        </button>
      </div>

      <div className="-mx-1 flex gap-2 overflow-x-auto px-1">
        {planningWeekDays.map((day) => (
          <div
            key={day.id}
            className={`flex min-w-[4.5rem] shrink-0 flex-col items-center rounded-lg border px-3 py-2 ${
              day.active
                ? "border-brand-blue bg-[#D1DAE7] text-brand-blue"
                : "border-[#E7E7E8] bg-white text-muted"
            }`}
          >
            <span className="text-sm font-extrabold">{toPersianDigits(day.date)}</span>
            <span className="mt-0.5 text-[11px] font-medium">{day.label}</span>
          </div>
        ))}
      </div>

      {showTitle ? (
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
            <rect width="32" height="32" rx="16" fill="#F2F2F3" />
            <path d="M13.3333 11.833C13.0599 11.833 12.8333 11.6063 12.8333 11.333V9.33301C12.8333 9.05967 13.0599 8.83301 13.3333 8.83301C13.6066 8.83301 13.8333 9.05967 13.8333 9.33301V11.333C13.8333 11.6063 13.6066 11.833 13.3333 11.833Z" fill="#164685" />
            <path d="M18.6667 11.833C18.3934 11.833 18.1667 11.6063 18.1667 11.333V9.33301C18.1667 9.05967 18.3934 8.83301 18.6667 8.83301C18.9401 8.83301 19.1667 9.05967 19.1667 9.33301V11.333C19.1667 11.6063 18.9401 11.833 18.6667 11.833Z" fill="#164685" />
            <path d="M21.6666 14.5596H10.3333C10.0599 14.5596 9.83325 14.3329 9.83325 14.0596C9.83325 13.7862 10.0599 13.5596 10.3333 13.5596H21.6666C21.9399 13.5596 22.1666 13.7862 22.1666 14.0596C22.1666 14.3329 21.9399 14.5596 21.6666 14.5596Z" fill="#164685" />
            <path d="M18.6667 23.1663H13.3333C10.9 23.1663 9.5 21.7663 9.5 19.333V13.6663C9.5 11.233 10.9 9.83301 13.3333 9.83301H18.6667C21.1 9.83301 22.5 11.233 22.5 13.6663V19.333C22.5 21.7663 21.1 23.1663 18.6667 23.1663ZM13.3333 10.833C11.4267 10.833 10.5 11.7597 10.5 13.6663V19.333C10.5 21.2397 11.4267 22.1663 13.3333 22.1663H18.6667C20.5733 22.1663 21.5 21.2397 21.5 19.333V13.6663C21.5 11.7597 20.5733 10.833 18.6667 10.833H13.3333Z" fill="#164685" />
          </svg>
          <h2 className="text-sm font-extrabold text-foreground">
            برنامه مطالعاتی امروز
          </h2>
        </div>
      ) : null}

      <ul className="space-y-3">
        {todaySessions.map((session) => {
          const style = statusStyles[session.status];
          const label =
            session.status === "remaining"
              ? session.remainingLabel
              : style.label;

          return (
            <li key={session.id}>
              <article className="overflow-hidden rounded-2xl bg-[#FAFAFA] shadow-sm shadow-navy/5">
                <div className="flex items-start justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold text-foreground">
                      {session.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{session.subtitle}</p>
                    <div className="mt-3">
                      <SessionTime time={session.time} />
                    </div>
                  </div>

                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${style.badge}`}
                  >
                    {session.status === "remaining" || session.status === "pending" ? (
                      <Hourglass className="size-3" />
                    ) : null}
                    {session.status === "done" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.99992 1.33301C4.32659 1.33301 1.33325 4.32634 1.33325 7.99967C1.33325 11.673 4.32659 14.6663 7.99992 14.6663C11.6733 14.6663 14.6666 11.673 14.6666 7.99967C14.6666 4.32634 11.6733 1.33301 7.99992 1.33301ZM11.1866 6.46634L7.40659 10.2463C7.31325 10.3397 7.18659 10.393 7.05325 10.393C6.91992 10.393 6.79325 10.3397 6.69992 10.2463L4.81325 8.35967C4.61992 8.16634 4.61992 7.84634 4.81325 7.65301C5.00659 7.45967 5.32659 7.45967 5.51992 7.65301L7.05325 9.18634L10.4799 5.75968C10.6733 5.56634 10.9933 5.56634 11.1866 5.75968C11.3799 5.95301 11.3799 6.26634 11.1866 6.46634Z" fill="#1E7B1E"/>
                      </svg>
                    ) : null}
                    {label}
                  </span>
                </div>
                <div className={`h-1.5 w-full ${style.bar}`} />
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
