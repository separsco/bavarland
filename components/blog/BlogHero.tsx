import { MediaSlot } from "@/components/ui/MediaSlot";

export function BlogHero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8">
      <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] lg:rounded-[2.5rem]">
        <MediaSlot
          label="blog-hero-image"
          className="aspect-[16/10] w-full sm:aspect-[21/9] lg:aspect-[2.4/1]"
        />

        <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 lg:inset-x-6 lg:bottom-6">
          <div className="rounded-2xl bg-black/70 px-4 py-4 backdrop-blur-sm sm:rounded-3xl sm:px-6 sm:py-5 lg:px-8 lg:py-6">
            <h1 className="text-lg font-extrabold leading-8 text-white sm:text-2xl sm:leading-10 lg:text-3xl">
              مجله آموزشی{" "}
              <span className="text-primary">باورلند</span>؛ همراه مسیر تحصیلی تو
            </h1>
            <p className="mt-2 max-w-3xl text-xs leading-6 text-white/80 sm:mt-3 sm:text-sm sm:leading-7 lg:text-base">
              از برنامه‌ریزی تحصیلی و روش‌های مطالعه تا کنکور، انتخاب رشته و
              مهارت‌های فردی؛ مقاله‌هایی کاربردی برای مسیر موفقیت تو.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
