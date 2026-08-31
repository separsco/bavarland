"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { authSlides } from "@/data/auth";

export function AuthSidebar() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = authSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % authSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside className="relative hidden min-h-[720px] w-[42%] shrink-0 overflow-hidden lg:flex lg:flex-col">
      <Image
        src="/images/Union.svg"
        alt=""
        fill
        priority
        className="object-cover bg-[#164685]"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-10">
        <div className="relative mx-auto w-full max-w-[320px]">
          <Image
            src="/images/Group 1171274854.svg"
            alt="تصویر محیط مطالعه باور لند"
            width={543}
            height={433}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="relative z-10 px-6 pb-8">
        <div className="rounded-3xl bg-navy/55 px-5 py-5 text-white backdrop-blur-sm sm:px-6 sm:py-6">
          <h2 className="text-base font-bold leading-8 sm:text-lg">
            {slide.title}
          </h2>
          <p className="mt-2 text-sm leading-7 text-white/80">
            {slide.description}
          </p>

          <div className="mt-5 flex items-center justify-center gap-2">
            {authSlides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`اسلاید ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeSlide
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-full border-y-[14px] border-y-transparent border-l-[18px] border-l-white"
      />
    </aside>
  );
}
