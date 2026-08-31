const HERO_SNAIL_SRC =
  "/images/ChatGPT Image Aug 3, 2026, 03_14_26 AM-Photoroom 1.svg";

type HeroIllustrationProps = {
  className?: string;
};

export function HeroIllustration({ className = "" }: HeroIllustrationProps) {
  return (
    <div
      dir="ltr"
      className={`relative mx-auto aspect-[520/405] w-full max-w-[520px] ${className}`}
    >
      <img
        src="/images/Group.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-contain object-center"
      />

      <img
        src={HERO_SNAIL_SRC}
        alt="حلزون باورلند پشت لپ‌تاپ"
        className="absolute bottom-0 left-1/2 z-10 w-[88%] max-w-[460px] -translate-x-1/2 object-contain"
      />

      <img
        src="/images/home.svg"
        alt="از اولین برنامه تا روز قبولی، کنارت هستیم"
        className="absolute left-[59%] top-[6%] z-20 w-[44%] max-w-[233px] object-contain drop-shadow-md"
      />
    </div>
  );
}
