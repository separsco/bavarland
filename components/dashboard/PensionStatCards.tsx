import { CircularProgress } from "@/components/dashboard/CircularProgress";
import { pensionStats } from "@/data/pension";

export function PensionStatCards() {
  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      {pensionStats.map((stat) => (
        <article
          key={stat.id}
          className="rounded-2xl bg-white p-4 shadow-sm shadow-navy/5 sm:p-5"
        >
          <div className="flex items-center justify-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="size-6 shrink-0 sm:size-7">
<rect width="28" height="28" rx="14" fill="#E8EDF3"/>
<path d="M19.9802 12.9133V15.04C19.9802 16.5867 18.7268 17.84 17.1802 17.84H14.8068C14.4402 17.84 14.1402 18.1333 14.1402 18.5067V19.0533C14.1402 19.42 14.4402 19.72 14.8068 19.72H16.3135C16.5735 19.72 16.7868 19.9267 16.7868 20.1933C16.7868 20.4533 16.5735 20.6667 16.3135 20.6667H11.0202C10.7602 20.6667 10.5468 20.4533 10.5468 20.1933C10.5468 19.9267 10.7602 19.72 11.0202 19.72H12.5268C12.8935 19.72 13.1935 19.42 13.1935 19.0533V18.5067C13.1935 18.1333 12.8935 17.84 12.5268 17.84H10.1268C8.58683 17.84 7.3335 16.5867 7.3335 15.04V10.7933C7.3335 9.25333 8.58683 8 10.1268 8H13.0002C13.3668 8 13.6668 8.3 13.6668 8.66667V10.1C13.6668 11.3867 14.5268 12.2467 15.8068 12.2467H19.3135C19.6802 12.2467 19.9802 12.5467 19.9802 12.9133Z" fill="#164685"/>
<path d="M20.6598 7.57308L19.9065 8.09975V7.81975C19.9065 7.18641 19.3932 6.67975 18.7665 6.67975H15.9132C15.2265 6.67308 14.6665 7.23308 14.6665 7.91975V10.1064C14.6665 10.6797 14.9532 11.2464 15.8065 11.2464H18.7598C19.3932 11.2464 19.8998 10.7331 19.8998 10.1064V9.81975L20.6532 10.3464C21.0332 10.6064 21.3332 10.4464 21.3332 9.99308V7.92641C21.3332 7.47308 21.0332 7.31975 20.6598 7.57308Z" fill="#164685"/>
</svg>
            <h2 className="text-center text-xs font-bold text-foreground sm:text-sm">{stat.title}</h2>
          </div>
          <p className="mt-2 text-center text-xs text-muted">{stat.subtitle}</p>
          <div className="mt-4">
            <CircularProgress
              value={stat.percent}
              className="size-[6.75rem] sm:size-[8.5rem] xl:size-[9.5rem]"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
