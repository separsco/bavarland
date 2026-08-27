type IconSlotProps = {
  /** اندازهٔ جای‌خالی آیکون برای قرار دادن خروجی فیگما */
  className?: string;
  label?: string;
};

export function IconSlot({ className = "size-5", label = "icon" }: IconSlotProps) {
  return (
    <span
      aria-hidden
      data-slot={label}
      className={`inline-block shrink-0 ${className}`}
    />
  );
}
