import { IconSlot } from "@/components/ui/IconSlot";

type DashboardIconProps = {
  label: string;
  className?: string;
  tone?: "default" | "on-dark";
};

export function DashboardIcon({
  label,
  className = "size-5",
  tone = "default",
}: DashboardIconProps) {
  return (
    <IconSlot
      label={label}
      className={`rounded-md border border-dashed ${
        tone === "on-dark"
          ? "border-white/35 bg-white/10"
          : "border-border bg-sky-soft"
      } ${className}`}
    />
  );
}
