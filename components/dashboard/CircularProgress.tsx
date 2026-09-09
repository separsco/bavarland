import { toPersianDigits } from "@/data/otp";

type CircularProgressProps = {
  value: number;
  className?: string;
};

export function CircularProgress({
  value,
  className = "size-[9.5rem]",
}: CircularProgressProps) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - value / 100);

  return (
    <div className={`relative mx-auto ${className}`}>
      <svg viewBox="0 0 88 88" className="size-full -rotate-90" aria-hidden>
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          className="stroke-sky-soft"
          strokeWidth="4"
        />
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          className="stroke-brand-blue"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-extrabold text-brand-blue">
        {toPersianDigits(value)}٪
      </span>
    </div>
  );
}
