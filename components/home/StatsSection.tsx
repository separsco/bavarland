const stats = [
  {
    id: "students",
    value: "+۲۰۰۰",
    label: "دانش آموز فعال",
    img: "/images/profile-2user.svg",
  },
  {
    id: "mentors",
    value: "+۱۲۰",
    label: "مشاور و مدرس",
    img: "/images/teacher.svg",
  },
  {
    id: "hours",
    value: "+۱۰۰۰",
    label: "ساعت مطالعه ثبت‌شده",
    img: "/images/clipboard-tick.svg",
  },
] as const;

export function StatsSection() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] px-5 py-10 sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[url('/images/bg-home.svg')] bg-cover bg-center bg-no-repeat"
          />

          <div className="relative mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <h2 className="text-xl font-medium leading-snug text-white sm:text-2xl">
              اعدادی که حاصل اعتماد هزاران{" "}
              <span className="text-primary">دانش‌آموز</span> است
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/80 sm:mt-4 sm:text-lg">
              از اولین روز، تیم باور لند کنار توست تا با برنامه‌ریزی، پیگیری و
              رقابت سالم، بهترین نسخه خودت باشی.
            </p>
          </div>

          <div className="relative grid gap-3 grid-cols-1 md:grid-cols-3 ">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex items-center gap-2 rounded-2xl bg-white w-[80%] lg:w-[70%] px-4 py-2 sm:px-5 sm:py-2"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#164685] sm:size-14">
                  <img
                    src={stat.img}
                    alt=""
                    aria-hidden
                    className="size-6 object-contain sm:size-7"
                  />
                </span>
                <div className="flex min-w-0 flex-col gap-0.5 text-start">
                    <span className=" font-bold leading-none text-primary text-lg">
                      {stat.value}
                  </span>
                  <span className="text-sm font-medium leading-6 text-foreground">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
