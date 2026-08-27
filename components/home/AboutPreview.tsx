import { Button } from "@/components/ui/Button";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

export function AboutPreview() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <MediaSlot
          label="about-preview-image"
          className="mx-auto aspect-[4/3] w-full max-w-lg rounded-[2rem] sm:rotate-[-2deg] sm:rounded-[2.5rem] lg:order-2"
        />

        <div className="flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-start">
          <h2 className="flex items-center gap-3 text-xl font-extrabold text-foreground sm:text-2xl lg:text-3xl">
            <span className="hidden h-8 w-1 rounded-full bg-accent-line lg:inline-block" />
            درباره{" "}
            <span className="text-primary">باورلند</span>
          </h2>

          <p className="max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            باورلند فقط یک مرکز مشاوره نیست؛ همراهی تخصصی برای ساختن مسیر موفقیت
            هر دانش‌آموز است. ما با برنامه‌ریزی دقیق، پیگیری مستمر و تیمی از
            مشاوران باتجربه، کمک می‌کنیم تا مطالعه هدفمند باشد و نتیجه واقعی رقم
            بخورد.
          </p>

          <Button
            href="/subscriptions"
            variant="primary"
            size="lg"
            className="w-full max-w-xs lg:w-auto"
            endSlot={<IconSlot label="arrow-icon" className="size-4" />}
          >
            شروع رایگان
          </Button>
        </div>
      </div>
    </section>
  );
}
