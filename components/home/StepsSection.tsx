const steps = [
  {
    number: 1,
    title: "ثبت‌نام و شناخت مسیرت",
    description:
      "با چند کلیک ساده عضو باور اسکول شو و با انجام آزمون تشخیصی، سطح واقعی خودت را بشناس تا مسیر مناسب خودت را آغاز کنی.",
    side: "start" as const,
  },
  {
    number: 2,
    title: "دریافت برنامه اختصاصی",
    description:
      "بر اساس هدفت، رشته و زمان آزادت، یک برنامه شخصی‌سازی‌شده دریافت می‌کنی تا هر روز دقیقاً بدانی چه کاری باید انجام دهی.",
    side: "end" as const,
  },
  {
    number: 3,
    title: "تنها درس نخون",
    description:
      "در کنار صدها دانش‌آموز پرتلاش، به پانسیون آنلاین وارد شو، زیر نظر سوپروایزرها مطالعه کن و انگیزه‌ات را هر روز حفظ کن.",
    side: "start" as const,
  },
  {
    number: 4,
    title: "نتیجه تلاش‌هایت را ببین",
    description:
      "با هر ساعت مطالعه امتیاز بگیر، در جدول رتبه‌بندی بالا برو، گزارش پیشرفتت را ببین و با اعتماد‌به‌نفس به هدفت نزدیک‌تر شو.",
    side: "end" as const,
  },
];

function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-3xl  bg-white ">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-5">
        <div className="flex w-full items-center gap-2 rounded-xl border border-[#F2F2F3] p-2">
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full !bg-[#164685] text-sm font-bold text-white">
            {number}
          </span>
          <h3 className="text-sm text-foreground sm:text-base">{title}</h3>
        </div>
      </div>
      <p className="flex-1 px-4 py-4 text-sm leading-7 text-muted sm:px-5 sm:leading-8">
        {description}
      </p>
    </article>
  );
}

export function StepsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="text-xl font-medium leading-snug text-foreground sm:text-3xl lg:text-3xl">
            فقط در ۴ قدم،{" "}
            <span className="text-primary">مسیر مطالعه‌ات</span> را متحول کن!
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
            از اولین روز مطالعه تا رسیدن به هدفت، در هر قدم همراهت هستیم.
          </p>
        </div>

        {/* موبایل: کارت‌ها زیر هم */}
        <ol className="mx-auto flex max-w-xl flex-col gap-4 md:hidden">
          {steps.map((step) => (
            <li key={step.number}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </li>
          ))}
        </ol>

        {/* دسکتاپ: دو ردیف، کارت‌ها روبه‌روی هم با خط وسط */}
        <div className="relative mx-auto hidden max-w-5xl md:block">
          <img
            src="/images/line.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 z-0 h-[calc(100%-0.3rem)] w-auto -translate-x-1/2 object-contain"
          />

          <ol className="relative z-10 grid grid-cols-2 items-stretch gap-x-16 gap-y-10 lg:gap-x-24 lg:gap-y-14">
            {steps.map((step) => {
              const isStart = step.side === "start";

              return (
                <li
                  key={step.number}
                  className={`h-full w-full max-w-sm ${
                    isStart ? "justify-self-end pe-2" : "justify-self-start ps-2"
                  }`}
                >
                  <StepCard
                    number={step.number}
                    title={step.title}
                    description={step.description}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
