import { BarChart3, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { recommendedVideos } from "@/data/dashboard";

type DashboardAcademyVideosProps = {
  variant?: "stack" | "grid";
};

export function DashboardAcademyVideos({
  variant = "stack",
}: DashboardAcademyVideosProps) {
  return (
    <section className="rounded-[1.75rem] bg-white p-4 shadow-sm shadow-navy/5 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="size-5 text-brand-blue" />
          <h2 className="text-sm font-extrabold text-foreground sm:text-base">
            ویدیو پیشنهادی آکادمی
          </h2>
        </div>

        <Button
          href="/dashboard/academy"
          variant="outline"
          size="sm"
          className="!h-9 !rounded-xl !px-4 text-xs"
        >
          همه
        </Button>
      </div>

      <div className={variant === "grid" ? "grid grid-cols-2 gap-3" : "space-y-3"}>
        {recommendedVideos.map((video) => (
          <article
            key={video.id}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1b4f94] to-[#071226] p-3 ${
              variant === "grid" ? "min-h-[8.5rem]" : "min-h-[9.5rem] p-4"
            }`}
          >
            <span className={`absolute top-3 left-3 rounded-full bg-black/35 px-2 py-1 text-[10px] text-white ${variant === "grid" ? "" : "text-[11px] px-2.5"}`}>
              {video.duration}
            </span>

            <span className={`absolute top-1/2 left-3 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white ${variant === "grid" ? "size-8" : "left-4 size-11"}`}>
              <Play className={variant === "grid" ? "size-3.5 fill-white" : "size-5 fill-white"} />
            </span>

            <p className={`absolute inset-x-3 bottom-3 font-bold text-white ${variant === "grid" ? "text-[11px] leading-5" : "inset-x-4 bottom-4 text-sm"}`}>
              {video.title}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
