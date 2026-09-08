import { dashboardUser } from "@/data/dashboard";

type DashboardHeaderProps = {
  onOpenMenu: () => void;
};

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M35 12.917H5C4.31667 12.917 3.75 12.3503 3.75 11.667C3.75 10.9837 4.31667 10.417 5 10.417H35C35.6833 10.417 36.25 10.9837 36.25 11.667C36.25 12.3503 35.6833 12.917 35 12.917Z" fill="#2E2F39" />
      <path d="M35 21.25H5C4.31667 21.25 3.75 20.6833 3.75 20C3.75 19.3167 4.31667 18.75 5 18.75H35C35.6833 18.75 36.25 19.3167 36.25 20C36.25 20.6833 35.6833 21.25 35 21.25Z" fill="#2E2F39" />
      <path d="M35 29.583H5C4.31667 29.583 3.75 29.0163 3.75 28.333C3.75 27.6497 4.31667 27.083 5 27.083H35C35.6833 27.083 36.25 27.6497 36.25 28.333C36.25 29.0163 35.6833 29.583 35 29.583Z" fill="#2E2F39" />
    </svg>
  );
}

export function DashboardHeader({ onOpenMenu }: DashboardHeaderProps) {
  return (
    <>
      <header className="relative z-30 border-b border-border/60 bg-white xl:hidden">
        <div className="relative flex h-16 items-center justify-between gap-3 px-4">
          <button
            type="button"
            aria-label="باز کردن منو"
            onClick={onOpenMenu}
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground"
          >
            <MenuIcon />
          </button>

          <img
            src="/images/menumobileicon.svg"
            alt="باورلند"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          <img
            src="/images/coverdashboard.svg"
            alt=""
            className="size-10 shrink-0 rounded-full bg-sky-soft"
          />
        </div>
      </header>

      <header className="mx-5 my-5 hidden items-center justify-between gap-3 rounded-lg border-b border-border bg-white px-4 py-4 sm:px-6 xl:flex">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/images/coverdashboard.svg"
            alt=""
            className="size-11 shrink-0 rounded-full bg-sky-soft"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-foreground sm:text-base">
              {dashboardUser.title}
            </p>
            <p className="truncate text-xs text-muted sm:text-sm">
              {dashboardUser.desc}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* <div className="hidden items-center gap-2 rounded-full bg-primary px-3 py-2 text-white sm:flex">
          <DashboardIcon
            label="dashboard-trophy-icon"
            className="size-4"
            tone="on-dark"
          />
          <span className="text-xs font-semibold whitespace-nowrap sm:text-sm">
            {dashboardUser.points} امتیاز ({dashboardUser.rank})
          </span>
        </div> */}

          <button
            type="button"
            aria-label="اعلان‌ها"
            className="inline-flex size-10 items-center justify-center rounded-full border border-2 border-[#E7E7E8]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.1602 14.8467H10.0735C7.11351 14.8467 5.68684 13.68 5.44017 11.0667C5.41351 10.7933 5.61351 10.5467 5.89351 10.52C6.16017 10.4933 6.41351 10.7 6.44017 10.9733C6.63351 13.0667 7.62017 13.8467 10.0802 13.8467H10.1668C12.8802 13.8467 13.8402 12.8867 13.8402 10.1733V5.82665C13.8402 3.11332 12.8802 2.15332 10.1668 2.15332H10.0802C7.60684 2.15332 6.62017 2.94665 6.44017 5.07999C6.40684 5.35332 6.17351 5.55999 5.89351 5.53332C5.61351 5.51332 5.41351 5.26665 5.43351 4.99332C5.66017 2.33999 7.09351 1.15332 10.0735 1.15332H10.1602C13.4335 1.15332 14.8335 2.55332 14.8335 5.82665V10.1733C14.8335 13.4467 13.4335 14.8467 10.1602 14.8467Z" fill="#23242E" />
              <path d="M10.0002 8.5H2.41357C2.14024 8.5 1.91357 8.27333 1.91357 8C1.91357 7.72667 2.14024 7.5 2.41357 7.5H10.0002C10.2736 7.5 10.5002 7.72667 10.5002 8C10.5002 8.27333 10.2736 8.5 10.0002 8.5Z" fill="#23242E" />
              <path d="M3.90012 10.7336C3.77346 10.7336 3.64679 10.6869 3.54679 10.5869L1.31346 8.35355C1.12012 8.16022 1.12012 7.84022 1.31346 7.64689L3.54679 5.41355C3.74012 5.22022 4.06012 5.22022 4.25346 5.41355C4.44679 5.60689 4.44679 5.92689 4.25346 6.12022L2.37346 8.00022L4.25346 9.88022C4.44679 10.0736 4.44679 10.3936 4.25346 10.5869C4.16012 10.6869 4.02679 10.7336 3.90012 10.7336Z" fill="#23242E" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="خروج"
            className="inline-flex size-10 items-center justify-center rounded-full border border-2 border-[#E7E7E8]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8.01357 13.6863C6.46024 13.6863 4.9069 13.4396 3.43357 12.9463C2.87357 12.753 2.4469 12.3596 2.26024 11.8463C2.0669 11.333 2.13357 10.7663 2.44024 10.2596L3.2069 8.98629C3.3669 8.71962 3.51357 8.18629 3.51357 7.87296V5.94629C3.51357 3.46629 5.53357 1.44629 8.01357 1.44629C10.4936 1.44629 12.5136 3.46629 12.5136 5.94629V7.87296C12.5136 8.17962 12.6602 8.71962 12.8202 8.99296L13.5802 10.2596C13.8669 10.7396 13.9202 11.3196 13.7269 11.8463C13.5336 12.373 13.1136 12.773 12.5869 12.9463C11.1202 13.4396 9.56691 13.6863 8.01357 13.6863ZM8.01357 2.44629C6.08691 2.44629 4.51357 4.01296 4.51357 5.94629V7.87296C4.51357 8.35962 4.31357 9.07962 4.0669 9.49962L3.30024 10.773C3.15357 11.0196 3.11357 11.2796 3.20024 11.4996C3.28024 11.7263 3.48024 11.8996 3.75357 11.993C6.54024 12.9263 9.49357 12.9263 12.2802 11.993C12.5202 11.913 12.7069 11.733 12.7936 11.493C12.8802 11.253 12.8602 10.993 12.7269 10.773L11.9602 9.49962C11.7069 9.06629 11.5136 8.35296 11.5136 7.86629V5.94629C11.5136 4.01296 9.94691 2.44629 8.01357 2.44629Z" fill="#23242E" />
              <path d="M9.25357 2.62711C9.20691 2.62711 9.16024 2.62044 9.11357 2.60711C8.92024 2.55378 8.73357 2.51378 8.55357 2.48711C7.98691 2.41378 7.44024 2.45378 6.92691 2.60711C6.74024 2.66711 6.54024 2.60711 6.41357 2.46711C6.28691 2.32711 6.24691 2.12711 6.32024 1.94711C6.59357 1.24711 7.26024 0.787109 8.02024 0.787109C8.78024 0.787109 9.44691 1.24044 9.72024 1.94711C9.78691 2.12711 9.75357 2.32711 9.62691 2.46711C9.52691 2.57378 9.38691 2.62711 9.25357 2.62711Z" fill="#23242E" />
              <path d="M8.01318 15.207C7.35318 15.207 6.71318 14.9404 6.24652 14.4737C5.77985 14.007 5.51318 13.367 5.51318 12.707H6.51318C6.51318 13.1004 6.67318 13.487 6.95318 13.767C7.23318 14.047 7.61985 14.207 8.01318 14.207C8.83985 14.207 9.51318 13.5337 9.51318 12.707H10.5132C10.5132 14.087 9.39318 15.207 8.01318 15.207Z" fill="#23242E" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
