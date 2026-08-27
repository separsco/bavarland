type MediaSlotProps = {
  /** جای‌خالی عکس/ایلاستریشن برای قرار دادن خروجی فیگما */
  className?: string;
  label?: string;
};

export function MediaSlot({
  className = "h-64 w-full",
  label = "media",
}: MediaSlotProps) {
  return (
    <div
      aria-hidden
      data-slot={label}
      className={`relative overflow-hidden ${className}`}
    />
  );
}
