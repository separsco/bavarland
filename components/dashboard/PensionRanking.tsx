import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { pensionPodium, pensionRankList } from "@/data/pension";

const rankBadgeClasses: Record<number, string> = {
  1: "bg-amber-400 text-navy",
  2: "bg-slate-300 text-navy",
  3: "bg-amber-700 text-white",
};

export function PensionRanking() {
  return (
    <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-5">
      <div className="mb-6 flex items-center gap-2">
        <DashboardIcon label="pension-ranking-icon" className="size-5" />
        <h2 className="text-base font-extrabold text-foreground">رتبه کیمیا در پانسیون</h2>
      </div>

      <div className="mb-6 flex items-end justify-center gap-4">
        {pensionPodium.map((person) => (
          <div
            key={person.rank}
            className={`flex flex-col items-center ${person.rank === 1 ? "-translate-y-3" : ""}`}
          >
            <div className="relative">
              <MediaSlot
                label={person.avatar}
                className={`rounded-full bg-sky-soft ${
                  person.rank === 1 ? "size-16" : "size-14"
                }`}
              />
              <span
                className={`absolute -bottom-1 left-1/2 flex size-5 -translate-x-1/2 items-center justify-center rounded-full text-[10px] font-bold ${rankBadgeClasses[person.rank]}`}
              >
                {person.rank}
              </span>
            </div>
            <p className="mt-3 text-xs font-bold text-foreground">{person.name}</p>
            <p className="mt-1 text-[11px] text-muted">{person.xp}</p>
          </div>
        ))}
      </div>

      <ul className="space-y-3">
        {pensionRankList.map((person) => (
          <li
            key={person.rank}
            className="flex items-center gap-3 rounded-2xl bg-sky-soft/70 px-3 py-2.5"
          >
            <span className="w-5 text-sm font-bold text-muted">{person.rank}</span>
            <p className="min-w-0 flex-1 text-sm font-semibold text-foreground">
              {person.name}
            </p>
            <span className="text-xs text-muted">{person.xp}</span>
            <MediaSlot
              label={person.avatar}
              className="size-9 shrink-0 rounded-full bg-sky"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
