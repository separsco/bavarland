"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AuthFormShell } from "@/components/auth/AuthFormShell";
import { isMobileNumberValid, normalizeMobileNumber } from "@/data/auth";
import {
  formatCountdown,
  formatMobileForDisplay,
  OTP_LENGTH,
  OTP_RESEND_SECONDS,
} from "@/data/otp";

export function AuthOtpForm() {
  const searchParams = useSearchParams();
  const phoneParam = searchParams.get("phone") ?? "0918525888";
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(OTP_RESEND_SECONDS);

  const code = digits.join("");
  const isComplete = code.length === OTP_LENGTH && digits.every((digit) => digit !== "");
  const canSubmit = isComplete;

  useEffect(() => {
    if (secondsLeft <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [secondsLeft]);

  function updateDigit(index: number, value: string) {
    const nextDigit = value.replace(/\D/g, "").slice(-1);

    setDigits((current) => {
      const next = [...current];
      next[index] = nextDigit;
      return next;
    });

    if (nextDigit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, key: string) {
    if (key !== "Backspace") {
      return;
    }

    if (digits[index]) {
      return;
    }

    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pasted) {
      return;
    }

    const nextDigits = Array(OTP_LENGTH)
      .fill("")
      .map((_, index) => pasted[index] ?? "");

    setDigits(nextDigits);

    const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }
  }

  const displayPhone = formatMobileForDisplay(phoneParam);
  const editPhoneHref = isMobileNumberValid(phoneParam)
    ? `/auth?phone=${encodeURIComponent(normalizeMobileNumber(phoneParam))}`
    : "/auth";

  return (
    <AuthFormShell>
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          تایید شماره موبایل
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
          کد ارسال شده به {displayPhone} را وارد کنید.{" "}
          <Link
            href={editPhoneHref}
            className="font-medium text-navy underline-offset-2 hover:underline"
          >
            ویرایش شماره موبایل
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <div className="flex justify-center gap-2 sm:gap-3" dir="ltr">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
                type="text"
                inputMode="numeric"
                autoComplete={index === 0 ? "one-time-code" : "off"}
                maxLength={1}
                value={digit}
                onChange={(event) => updateDigit(index, event.target.value)}
                onKeyDown={(event) => handleKeyDown(index, event.key)}
                onPaste={handlePaste}
                aria-label={`رقم ${index + 1} کد تایید`}
                className="size-12 rounded-2xl border border-border bg-white text-center text-lg font-semibold text-foreground outline-none transition-colors focus:border-navy sm:size-14 sm:text-xl"
              />
            ))}
          </div>
        </div>

        <p className="text-end text-sm text-muted">
          {secondsLeft > 0 ? (
            <>
              {formatCountdown(secondsLeft)} تا دریافت مجدد کد
            </>
          ) : (
            <button
              type="button"
              onClick={() => setSecondsLeft(OTP_RESEND_SECONDS)}
              className="font-medium text-navy underline-offset-2 hover:underline"
            >
              ارسال مجدد کد
            </button>
          )}
        </p>

        <button
          type="submit"
          disabled={!canSubmit}
          className={`h-14 w-full rounded-full text-base font-semibold transition-colors ${
            canSubmit
              ? "bg-primary text-white shadow-sm shadow-primary/20 hover:bg-primary-hover"
              : "cursor-not-allowed bg-[#b8c9dc] text-white"
          }`}
        >
          ورود
        </button>
      </form>
    </AuthFormShell>
  );
}
