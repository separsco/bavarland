import {
  MOBILE_NUMBER_MAX_LENGTH,
  normalizeMobileNumber,
} from "@/data/auth";

type PhoneFieldProps = {
  id: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: boolean;
};

export function PhoneField({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder = "09121234567",
  error = false,
}: PhoneFieldProps) {
  return (
    <div>
      {label ? (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
          {label}
        </label>
      ) : null}
      <div
        className={`flex overflow-hidden rounded-xl border bg-sky-soft/60 ${
          error ? "border-red-400" : "border-border"
        }`}
      >
        <input
          id={id}
          name={id}
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder={placeholder}
          value={value}
          maxLength={MOBILE_NUMBER_MAX_LENGTH}
          aria-invalid={error}
          aria-label={label ?? "شماره موبایل"}
          onChange={(event) => {
            onChange(
              normalizeMobileNumber(event.target.value).slice(
                0,
                MOBILE_NUMBER_MAX_LENGTH,
              ),
            );
          }}
          onBlur={onBlur}
          dir="ltr"
          className="h-12 w-full bg-white px-4 text-left text-sm text-foreground outline-none placeholder:text-muted/70"
        />
        <span className="flex h-12 items-center border-e border-border bg-[#F7F7F8] px-4 text-sm text-muted">
          ۹۸+
        </span>
      </div>
    </div>
  );
}
