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
  "h-12 w-full max-w-[26.5rem] appearance-none rounded-lg border border-[#E7E7E8] bg-white bg-[position:left_1rem_center] bg-no-repeat px-4 text-sm text-foreground outline-none [background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%20fill=%27none%27%20viewBox=%270%200%2012%208%27%3E%3Cpath%20stroke=%27%236b7280%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%271.5%27%20d=%27m1%201.5%205%205%205-5%27/%3E%3C/svg%3E')] ps-4 pe-10";

function SelectField<T extends string>({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: ReadonlyArray<{ value: T; label: string }>;
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
        onChange={(event) => onChange(event.target.value as T)}
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

function SuccessAlert({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        role="status"
        aria-live="polite"
        className="flex w-full max-w-lg items-center gap-4 rounded-[1.5rem] bg-white p-5 shadow-lg shadow-navy/10 sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden className="size-16 shrink-0 sm:size-[4.5rem]">
          <rect width="72" height="72" rx="36" fill="#CBF5CB" />
          <path d="M36 16C24.98 16 16 24.98 16 36C16 47.02 24.98 56 36 56C47.02 56 56 47.02 56 36C56 24.98 47.02 16 36 16ZM45.56 31.4L34.22 42.74C33.94 43.02 33.56 43.18 33.16 43.18C32.76 43.18 32.38 43.02 32.1 42.74L26.44 37.08C25.86 36.5 25.86 35.54 26.44 34.96C27.02 34.38 27.98 34.38 28.56 34.96L33.16 39.56L43.44 29.28C44.02 28.7 44.98 28.7 45.56 29.28C46.14 29.86 46.14 30.8 45.56 31.4Z" fill="#32CD32" />
        </svg>
        <div className="min-w-0">
          <h3 className="text-base font-extrabold text-navy sm:text-lg">
            گزارش شما ثبت شد!
          </h3>
          <p className="mt-1 text-sm leading-7 text-muted">
            مشاور شما گزارش این پارت را مشاهده خواهد کرد و امتیاز حضور شما ثبت می‌شود.
          </p>
        </div>
      </div>
    </div>
  );
}

type SubjectValue = (typeof consultingSubjects)[number]["value"];
type StudyStatusValue = (typeof consultingStudyStatuses)[number]["value"];
type GoalValue = (typeof consultingGoals)[number]["value"];
type TimeValue = (typeof consultingTimes)[number]["value"];

export function ConsultingRequestForm() {
  const [subject, setSubject] = useState<SubjectValue>(consultingSubjects[0].value);
  const [studyStatus, setStudyStatus] = useState<StudyStatusValue>(
    consultingStudyStatuses[0].value,
  );
  const [goal, setGoal] = useState<GoalValue>(consultingGoals[0].value);
  const [time, setTime] = useState<TimeValue>(consultingTimes[0].value);
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowSuccess(true);
  }

  return (
    <section className="rounded-[1.75rem] bg-white p-5 shadow-sm shadow-navy/5 sm:p-8">
      <div className="flex flex-col items-center justify-center gap-2">

        <div className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.1499 19.35C11.7399 19.35 11.3999 19.01 11.3999 18.6V16.5C11.3999 16.09 11.7399 15.75 12.1499 15.75C12.5599 15.75 12.8999 16.09 12.8999 16.5V18.6C12.8999 19.01 12.5599 19.35 12.1499 19.35Z" fill="#23242E" />
            <path d="M17.8999 22.75H6.3999V21C6.3999 19.48 7.6299 18.25 9.1499 18.25H15.1499C16.6699 18.25 17.8999 19.48 17.8999 21V22.75ZM7.8999 21.25H16.3999V21C16.3999 20.31 15.8399 19.75 15.1499 19.75H9.1499C8.4599 19.75 7.8999 20.31 7.8999 21V21.25Z" fill="#23242E" />
            <path d="M18.1499 22.75H6.1499C5.7399 22.75 5.3999 22.41 5.3999 22C5.3999 21.59 5.7399 21.25 6.1499 21.25H18.1499C18.5599 21.25 18.8999 21.59 18.8999 22C18.8999 22.41 18.5599 22.75 18.1499 22.75Z" fill="#23242E" />
            <path d="M18.43 12.4396C18.22 12.4396 18.01 12.3496 17.86 12.1796C17.67 11.9596 17.62 11.6496 17.74 11.3896C18.08 10.6096 18.25 9.77957 18.25 8.90957V5.90957C18.25 5.55957 18.19 5.21957 18.07 4.85957C18.06 4.82957 18.05 4.78957 18.04 4.74957C18.01 4.59957 18 4.44957 18 4.30957C18 3.89957 18.34 3.55957 18.75 3.55957H19.35C21.14 3.55957 22.6 5.05957 22.6 6.90957C22.6 8.43957 21.97 9.94957 20.88 11.0396C20.86 11.0596 20.8 11.1096 20.79 11.1196C20.2 11.6096 19.53 12.1596 18.63 12.4096C18.56 12.4296 18.5 12.4396 18.43 12.4396ZM19.68 5.08957C19.73 5.35957 19.75 5.63957 19.75 5.90957V8.90957C19.75 9.31957 19.72 9.70957 19.66 10.1096C19.72 10.0596 19.77 10.0196 19.83 9.96957C20.63 9.16957 21.1 8.04957 21.1 6.90957C21.1 6.00957 20.49 5.24957 19.68 5.08957Z" fill="#23242E" />
            <path d="M5.5799 12.3996C5.4999 12.3996 5.4299 12.3896 5.3499 12.3596C4.5299 12.0996 3.7599 11.6196 3.1199 10.9796C1.9699 9.70961 1.3999 8.31961 1.3999 6.84961C1.3999 5.02961 2.8299 3.59961 4.6499 3.59961H5.2999C5.5499 3.59961 5.7899 3.72961 5.9299 3.93961C6.0699 4.14961 6.0899 4.41961 5.9899 4.64961C5.8299 5.00961 5.7499 5.41961 5.7499 5.84961V8.84961C5.7499 9.70961 5.9199 10.5496 6.2699 11.3496C6.3899 11.6196 6.3299 11.9296 6.1399 12.1496C5.9899 12.3096 5.7899 12.3996 5.5799 12.3996ZM4.2999 5.12961C3.4899 5.28961 2.8999 5.98961 2.8999 6.84961C2.8999 7.93961 3.3399 8.98961 4.2099 9.94961C4.2499 9.99961 4.2999 10.0396 4.3499 10.0796C4.2799 9.66961 4.2499 9.25961 4.2499 8.84961V5.84961C4.2499 5.60961 4.2699 5.36961 4.2999 5.12961Z" fill="#23242E" />
            <path d="M12 16.75C7.73 16.75 4.25 13.27 4.25 9V6C4.25 3.38 6.38 1.25 9 1.25H15C17.62 1.25 19.75 3.38 19.75 6V9C19.75 13.27 16.27 16.75 12 16.75ZM9 2.75C7.21 2.75 5.75 4.21 5.75 6V9C5.75 12.45 8.55 15.25 12 15.25C15.45 15.25 18.25 12.45 18.25 9V6C18.25 4.21 16.79 2.75 15 2.75H9Z" fill="#23242E" />
          </svg>
          <h2 className="text-base font-extrabold text-foreground sm:text-lg">
            همراهی اختصاصی تا رسیدن به بهترین نتیجه (فرم درخواست مشاوره)
          </h2>
        </div>
        <p className="mt-2 text-sm leading-7 text-muted">
          مشاور اختصاصی در کنار شماست تا با بررسی وضعیت درسی، برنامه‌ریزی شخصی‌سازی شده و
          پیگیری مستمر، بهترین مسیر پیشرفت را برایتان طراحی کند.
        </p>
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
          >
            ثبت درخواست مشاوره VIP
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left size-5" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
          </Button>
        </div>
      </form>

      {showSuccess ? <SuccessAlert onClose={() => setShowSuccess(false)} /> : null}
    </section>
  );
}
