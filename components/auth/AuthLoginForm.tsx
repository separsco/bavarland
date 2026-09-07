"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthFormShell } from "@/components/auth/AuthFormShell";
import { PhoneField } from "@/components/auth/PhoneField";
import {
  isMobileNumberValid,
  normalizeMobileNumber,
  validateMobileNumber,
} from "@/data/auth";

export function AuthLoginForm() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const error = validateMobileNumber(mobile);
  const isValid = isMobileNumberValid(mobile);
  const canSubmit = isValid && acceptedTerms;
  const showError = (touched || submitted) && Boolean(error);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!canSubmit) {
      return;
    }

    router.push(
      `/auth/verify?phone=${encodeURIComponent(normalizeMobileNumber(mobile))}`,
    );
  }

  return (
    <AuthFormShell>
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
          خوش اومدی به{" "}
          <span className="text-primary">باور لند</span>
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
          برای ورود یا ثبت‌نام، شماره موبایلت رو وارد کن
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <PhoneField
            id="mobile"
            value={mobile}
            onChange={setMobile}
            onBlur={() => setTouched(true)}
            placeholder="شماره موبایل"
            error={showError}
          />
          {showError ? (
            <p className="mt-2 text-xs leading-6 text-red-500">{error}</p>
          ) : (
            <p className="mt-2 text-xs leading-6 text-muted">
              شماره موبایل باید با ۰۹ یا ۹ شروع شده و بیش از ۱۱ رقم نباشد
            </p>
          )}
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-sm leading-7 text-foreground">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) => setAcceptedTerms(event.target.checked)}
            className="mt-1 size-4 shrink-0 rounded border-border text-primary accent-brand-blue"
          />
          <span>
            با ورود و ثبت‌نام در سایت، با{" "}
            <Link
              href="/terms"
              className="font-medium text-brand-blue underline-offset-2 hover:underline"
            >
              قوانین باورلند
            </Link>{" "}
            موافقت می‌کنم.
          </span>
        </label>

        <button
          type="submit"
          disabled={!canSubmit}
          className={`mt-2 h-14 w-full rounded-full text-base font-semibold transition-colors ${
            canSubmit
              ? "bg-primary text-white shadow-sm shadow-primary/20 hover:bg-primary-hover"
              : "cursor-not-allowed bg-[#b8c9dc] text-white"
          }`}
        >
          ارسال کد تایید
        </button>
      </form>
    </AuthFormShell>
  );
}
