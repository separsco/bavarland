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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill="#23242E" />
            <path d="M14.25 22.75H9.75C9.34 22.75 9 22.41 9 22V4C9 2.28 9.95 1.25 11.55 1.25H12.45C14.05 1.25 15 2.28 15 4V22C15 22.41 14.66 22.75 14.25 22.75ZM10.5 21.25H13.5V4C13.5 2.85 12.96 2.75 12.45 2.75H11.55C11.04 2.75 10.5 2.85 10.5 4V21.25Z" fill="#23242E" />
            <path d="M7 22.75H3C2.59 22.75 2.25 22.41 2.25 22V10C2.25 8.28 3.13 7.25 4.6 7.25H5.4C6.87 7.25 7.75 8.28 7.75 10V22C7.75 22.41 7.41 22.75 7 22.75ZM3.75 21.25H6.25V10C6.25 8.75 5.7 8.75 5.4 8.75H4.6C4.3 8.75 3.75 8.75 3.75 10V21.25Z" fill="#23242E" />
            <path d="M21 22.75H17C16.59 22.75 16.25 22.41 16.25 22V15C16.25 13.28 17.13 12.25 18.6 12.25H19.4C20.87 12.25 21.75 13.28 21.75 15V22C21.75 22.41 21.41 22.75 21 22.75ZM17.75 21.25H20.25V15C20.25 13.75 19.7 13.75 19.4 13.75H18.6C18.3 13.75 17.75 13.75 17.75 15V21.25Z" fill="#23242E" />
          </svg>
          <h2 className="text-sm font-medium text-foreground sm:text-base">
            ویدیو پیشنهادی آکادمی
          </h2>
        </div>

        <Button
          href="/dashboard/academy"
          variant="outline"
          size="sm"
          className="!h-9 !w-[139px] shrink-0 !rounded-3xl !px-5 text-xs !text-[#164685] !border-[#164685]"
        >
          همه
        </Button>
      </div>

      <div className={variant === "grid" ? "grid grid-cols-2 gap-3" : "space-y-3"}>
        {recommendedVideos.map((video) => (
          <article
            key={video.id}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1b4f94] to-[#071226] p-3 ${variant === "grid" ? "min-h-[8.5rem]" : "min-h-[9.5rem] p-4"
              }`}
          >
            <div className="flex items-center gap-2" dir="ltr">
              <span
                className={`rounded-full bg-black/35 px-2 py-1 text-[10px] text-white ${
                  variant === "grid" ? "" : "px-2.5 text-[11px]"
                }`}
              >
                {video.duration}
              </span>
              <span
                className={`flex items-center justify-center rounded-full bg-white/20 text-white ${
                  variant === "grid" ? "size-8" : "size-11"
                }`}
              >
                <Play className={variant === "grid" ? "size-3.5 fill-white" : "size-5 fill-white"} />
              </span>
            </div>

            <p className={`absolute inset-x-3 bottom-3 font-bold text-white ${variant === "grid" ? "text-[11px] leading-5" : "inset-x-4 bottom-4 text-sm"}`}>
              {video.title}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
