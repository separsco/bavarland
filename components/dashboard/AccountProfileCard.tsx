"use client";

import { FormEvent, useEffect, useState } from "react";
import { PhoneField } from "@/components/auth/PhoneField";
import { Button } from "@/components/ui/Button";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import { accountFormDefaults } from "@/data/account";
import { gradeLevels, studyFields } from "@/data/signup";

const selectClassName =
  "h-12 w-full appearance-none rounded-xl border border-border bg-white bg-[position:left_1rem_center] bg-no-repeat px-4 text-sm text-foreground outline-none [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%20fill=%27none%27%20viewBox=%270%200%2012%208%27%3E%3Cpath%20stroke=%27%236b7280%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27m1%201.5%205%205%205-5%27/%3E%3C/svg%3E')] ps-4 pe-10";

const inputClassName =
  "h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-muted/70";

type AccountFormValues = typeof accountFormDefaults;

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: ReadonlyArray<{ value: string; label: string }>;
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
        className={selectClassName}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function getProfileRows(values: AccountFormValues) {
  return [
    { label: "نام و نام خانوادگی", value: values.fullName },
    {
      label: "پایه تحصیلی",
      value: gradeLevels.find((item) => item.value === values.gradeLevel)?.label ?? "",
    },
    {
      label: "رشته تحصیلی",
      value: studyFields.find((item) => item.value === values.studyField)?.label ?? "",
    },
    { label: "شماره تماس والدین", value: values.parentMobile },
    { label: "تاریخ تولد", value: values.birthDate },
    { label: "کد ملی", value: values.nationalId },
  ];
}

export function AccountProfileCard() {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(accountFormDefaults);
  const [draft, setDraft] = useState(accountFormDefaults);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function openEditor() {
    setDraft(saved);
    setOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(draft);
    setOpen(false);
  }

  return (
    <>
      <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <DashboardIcon label="account-profile-icon" className="size-5" />
            <h1 className="text-base font-extrabold text-foreground">اطلاعات حساب کاربری</h1>
          </div>
          <button
            type="button"
            onClick={openEditor}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue"
          >
            <DashboardIcon label="account-edit-icon" className="size-4" />
            ویرایش اطلاعات
          </button>
        </div>

        <dl className="divide-y divide-border">
          {getProfileRows(saved).map((field) => (
            <div
              key={field.label}
              className="flex items-center justify-between gap-4 py-3 text-sm"
            >
              <dt className="shrink-0 text-muted">{field.label}</dt>
              <dd className={`text-end font-semibold ${field.value ? "text-foreground" : "text-muted"}`}>
                {field.value || "وارد نشده است"}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="بستن"
            className="absolute inset-0 bg-navy/40"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="account-edit-title"
            className="relative z-10 max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-[1.75rem] bg-white p-5 shadow-xl sm:p-7"
          >
            <h2
              id="account-edit-title"
              className="mb-6 text-center text-lg font-extrabold text-foreground sm:text-xl"
            >
              ویرایش اطلاعات کاربری
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <PhoneField
                id="account-mobile"
                label="شماره تماس"
                value={draft.mobile}
                onChange={(mobile) => setDraft((current) => ({ ...current, mobile }))}
                placeholder="9032153600"
              />

              <div>
                <label
                  htmlFor="account-fullName"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  id="account-fullName"
                  value={draft.fullName}
                  onChange={(event) =>
                    setDraft((current) => ({ ...current, fullName: event.target.value }))
                  }
                  className={inputClassName}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  id="account-studyField"
                  label="رشته تحصیلی"
                  value={draft.studyField}
                  onChange={(studyField) => setDraft((current) => ({ ...current, studyField }))}
                  options={studyFields}
                />
                <SelectField
                  id="account-gradeLevel"
                  label="پایه تحصیلی"
                  value={draft.gradeLevel}
                  onChange={(gradeLevel) => setDraft((current) => ({ ...current, gradeLevel }))}
                  options={gradeLevels}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="account-nationalId"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    کدملی
                  </label>
                  <input
                    id="account-nationalId"
                    inputMode="numeric"
                    placeholder="مثال : ۲۲۴۵۴۶۰۵"
                    value={draft.nationalId}
                    maxLength={10}
                    onChange={(event) =>
                      setDraft((current) => ({
                        ...current,
                        nationalId: event.target.value.replace(/[^\d۰-۹٠-٩]/g, "").slice(0, 10),
                      }))
                    }
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label
                    htmlFor="account-birthDate"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    تاریخ تولد
                  </label>
                  <input
                    id="account-birthDate"
                    placeholder="مثال : ۱۴۰۵/۰۲/۱۲"
                    value={draft.birthDate}
                    onChange={(event) =>
                      setDraft((current) => ({ ...current, birthDate: event.target.value }))
                    }
                    className={inputClassName}
                  />
                </div>
              </div>

              <PhoneField
                id="account-parentMobile"
                label="شماره تماس یکی از والدین (پدر یا مادر)"
                value={draft.parentMobile}
                onChange={(parentMobile) =>
                  setDraft((current) => ({ ...current, parentMobile }))
                }
                placeholder="9032153600"
              />

              <Button
                type="submit"
                variant="navy"
                size="lg"
                className="mt-2 w-full !bg-brand-blue hover:!bg-brand-blue/90"
              >
                ثبت ویرایش اطلاعات
              </Button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
