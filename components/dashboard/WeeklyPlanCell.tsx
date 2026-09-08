import type { PlanTone, WeeklyPlanCell } from "@/data/dashboard";

const toneClasses: Record<PlanTone, string> = {
  green: "bg-[#2f9e5b] text-white",
  orange: "bg-[#f0a100] text-white",
  red: "bg-[#e53935] text-white",
  blue: "bg-brand-blue text-white",
  muted: "bg-transparent text-foreground",
};

export function WeeklyPlanCell({ cell }: { cell: WeeklyPlanCell }) {
  if (!cell) {
    return (
      <article className="flex min-h-[4.25rem] items-center justify-center rounded-xl px-1.5 py-2 text-center text-[11px] text-muted">
        انتخاب نشده
      </article>
    );
  }

  return (
    <article
      className={`flex min-h-[4.25rem] flex-col items-center justify-center rounded-xl px-1.5 py-2 text-center text-[11px] leading-4 ${toneClasses[cell.tone]}`}
    >
      <p className="font-bold">{cell.title}</p>
      <p className={`mt-1 ${cell.tone === "muted" ? "text-muted" : "text-white/90"}`}>
        {cell.subtitle}
      </p>
    </article>
  );
}
