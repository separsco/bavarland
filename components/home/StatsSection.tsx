import { IconSlot } from "@/components/ui/IconSlot";

const stats = [
  {
    id: "students",
    label: "+۲۰۰۰ دانش‌آموز فعال",
    icon: "stat-students-icon",
  },
  {
    id: "mentors",
    label: "+۱۴۰۰ مشاور و مدرس",
    icon: "stat-mentors-icon",
  },
  {
    id: "hours",
    label: "+۱۰,۰۰۰ ساعت مطالعه ثبت‌شده",
    icon: "stat-hours-icon",
  },
] as const;

export function StatsSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-navy px-5 py-10 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, #5b8def 0, transparent 35%), radial-gradient(circle at 80% 70%, #ff5527 0, transparent 30%)",
            }}
          />

          <div className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <h2 className="text-xl font-extrabold leading-snug text-white sm:text-3xl">
              اعدادی که حاصل اعتماد هزاران{" "}
              <span className="text-primary">دانش‌آموز</span> است
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/70 sm:mt-4 sm:text-base">
              نتیجه‌ای که از همراهی مستمر و مسیر تخصصی ساخته شده است.
            </p>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-3 sm:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 sm:px-5"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-sky sm:size-11">
                  <IconSlot label={stat.icon} className="size-5" />
                </span>
                <p className="text-sm font-semibold leading-6 text-foreground sm:text-[0.95rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
