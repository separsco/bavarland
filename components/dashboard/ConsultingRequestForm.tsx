"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { DashboardIcon } from "@/components/dashboard/DashboardIcon";
import {
  consultingGoals,
  consultingStudyStatuses,
  consultingSubjects,
  consultingTimes,
} from "@/data/consulting";

const selectClassName =
  "h-12 w-full appearance-none rounded-xl border border-border bg-sky-soft/60 bg-[position:left_1rem_center] bg-no-repeat px-4 text-sm text-foreground outline-none [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%20fill=%27none%27%20viewBox=%270%200%2012%208%27%3E%3Cpath%20stroke=%27%236b7280%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27m1%201.5%205%205%205-5%27/%3E%3C/svg%3E')] ps-4 pe-10";

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

export function ConsultingRequestForm() {
  const [subject, setSubject] = useState(consultingSubjects[0].value);
  const [studyStatus, setStudyStatus] = useState(consultingStudyStatuses[0].value);
  const [goal, setGoal] = useState(consultingGoals[0].value);
  const [time, setTime] = useState(consultingTimes[0].value);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:p-8">
      <div className="flex items-start gap-2">
        <DashboardIcon label="consulting-form-icon" className="mt-0.5 size-5" />
        <div>
          <h2 className="text-base font-extrabold text-foreground sm:text-lg">
            همراهی اختصاصی تا رسیدن به بهترین نتیجه (فرم درخواست مشاوره)
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
            مشاور اختصاصی در کنار شماست تا با بررسی وضعیت درسی، برنامه‌ریزی شخصی‌سازی شده و
            پیگیری مستمر، بهترین مسیر پیشرفت را برایتان طراحی کند.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            id="subject"
            label="در کدام درس بیشتر مشکل داری؟"
            value={subject}
            onChange={setSubject}
            options={consultingSubjects}
          />
          <SelectField
            id="studyStatus"
            label="وضعیت فعلی مطالعه"
            value={studyStatus}
            onChange={setStudyStatus}
            options={consultingStudyStatuses}
          />
          <SelectField
            id="goal"
            label="هدفت از مشاوره چیه؟"
            value={goal}
            onChange={setGoal}
            options={consultingGoals}
          />
          <SelectField
            id="time"
            label="ترجیح میدی چه زمانی برگزار بشه؟"
            value={time}
            onChange={setTime}
            options={consultingTimes}
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full max-w-md"
            endSlot={<DashboardIcon label="consulting-submit-icon" className="size-4" tone="on-dark" />}
          >
            ثبت درخواست مشاوره VIP
          </Button>
        </div>
      </form>
    </section>
  );
}
