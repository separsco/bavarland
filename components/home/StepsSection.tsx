const steps = [
  {
    number: 1,
    title: "ثبت‌نام و شناخت مسیر",
    description:
      "با یک ثبت‌نام کوتاه، وضعیت فعلی و هدفت مشخص می‌شود تا مسیر مناسبت طراحی شود.",
    side: "start" as const,
  },
  {
    number: 2,
    title: "دریافت برنامه اختصاصی",
    description:
      "برنامه مطالعاتی شخصی‌سازی‌شده بر اساس سطح، هدف و زمان آزادت دریافت می‌کنی.",
    side: "end" as const,
  },
  {
    number: 3,
    title: "تنها درس نخون",
    description:
      "با پیگیری مشاور، گزارش پیشرفت و همراهی مستمر، مسیرت را منظم جلو می‌بری.",
    side: "start" as const,
  },
  {
    number: 4,
    title: "نتیجه تلاش‌هایت را ببین",
    description:
      "عملکردت را پایش می‌کنی و نتیجه واقعی تلاش‌هایت را قدم‌به‌قدم می‌بینی.",
    side: "end" as const,
  },
];

export function StepsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="text-xl font-extrabold leading-snug text-foreground sm:text-3xl lg:text-4xl">
            فقط در ۴ قدم،{" "}
            <span className="text-primary">مسیر مطالعه‌ات</span> را متحول کن!
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:mt-4 sm:text-base sm:leading-8">
            از ثبت‌نام تا نتیجه، مسیرت را ساده، شفاف و قابل پیگیری کرده‌ایم.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div
            aria-hidden
            className="absolute start-6 top-4 bottom-4 w-px border-s border-dashed border-border md:start-1/2 md:-translate-x-1/2"
          />

          <ol className="relative flex flex-col gap-8 md:gap-10">
            {steps.map((step, index) => {
              const isStart = step.side === "start";
              const dotColor = index % 2 === 0 ? "bg-accent-line" : "bg-primary";

              return (
                <li
                  key={step.number}
                  className={`relative flex md:grid md:grid-cols-2 md:gap-12 ${
                    isStart ? "md:justify-items-start" : "md:justify-items-end"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute start-[1.125rem] top-8 z-10 size-3 -translate-x-1/2 rounded-full ring-4 ring-white md:start-1/2 ${dotColor}`}
                  />

                  <article
                    className={`ms-12 w-full rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-6 md:ms-0 ${
                      isStart
                        ? "md:col-start-1 md:me-auto md:max-w-md"
                        : "md:col-start-2 md:ms-auto md:max-w-md"
                    }`}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                        {step.number}
                      </span>
                      <h3 className="text-base font-bold text-foreground sm:text-lg">
                        {step.number}. {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-muted">{step.description}</p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
