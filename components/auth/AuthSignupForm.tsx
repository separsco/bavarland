"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AuthFormShell } from "@/components/auth/AuthFormShell";
import { isMobileNumberValid, normalizeMobileNumber } from "@/data/auth";
import { gradeLevels, isSignupFormValid, studyFields } from "@/data/signup";

function PhoneField({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder = "09121234567",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="flex overflow-hidden rounded-2xl border border-border bg-sky-soft/60">
        <span className="flex h-12 items-center border-e border-border px-4 text-sm text-muted">
          +۹۸
        </span>
        <input
          id={id}
          name={id}
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          dir="ltr"
          className="h-12 w-full bg-transparent px-4 text-left text-sm text-foreground outline-none placeholder:text-muted/70"
        />
      </div>
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: ReadonlyArray<{ value: string; label: string }>;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full appearance-none rounded-2xl border border-border bg-sky-soft/60 bg-[length:0.75rem] bg-[position:left_1rem_center] bg-no-repeat px-4 text-sm text-foreground outline-none [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%20fill=%27none%27%20viewBox=%270%200%2012%208%27%3E%3Cpath%20stroke=%27%236b7280%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27m1%201.5%205%205%205-5%27/%3E%3C/svg%3E')] ps-4 pe-10"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function AuthSignupForm() {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [fullName, setFullName] = useState("");
  const [studyField, setStudyField] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [parentMobile, setParentMobile] = useState("");

  const canSubmit = isSignupFormValid(
    { mobile, fullName, studyField, gradeLevel, parentMobile },
    isMobileNumberValid,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
          دوست عزیز، به{" "}
          <span className="text-primary">باورلند</span>{" "}
          خوش اومدی!
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
          لطفاً اطلاعات زیر رو برای تنظیم دقیق‌تر برنامه‌ت وارد کن.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <PhoneField
          id="mobile"
          label="شماره تماس"
          value={mobile}
          onChange={setMobile}
        />

        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-foreground">
            نام و نام خانوادگی
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="مثال : علی محمدی"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="h-12 w-full rounded-2xl border border-border bg-sky-soft/60 px-4 text-sm text-foreground outline-none placeholder:text-muted/70"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            id="studyField"
            label="رشته تحصیلی"
            value={studyField}
            onChange={setStudyField}
            options={studyFields}
            placeholder="انتخاب رشته"
          />
          <SelectField
            id="gradeLevel"
            label="پایه تحصیلی"
            value={gradeLevel}
            onChange={setGradeLevel}
            options={gradeLevels}
            placeholder="انتخاب پایه"
          />
        </div>

        <PhoneField
          id="parentMobile"
          label="شماره تماس یکی از والدین"
          value={parentMobile}
          onChange={setParentMobile}
        />

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
