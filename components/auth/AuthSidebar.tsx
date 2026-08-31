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
    <aside className="relative z-10 hidden  min-h-[750px] w-[50%] shrink-0 overflow-visible  lg:flex lg:flex-col">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Union.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 h-full w-auto max-w-none"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
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

      <div className="relative z-10 flex w-full justify-center px-6 pb-8">
        <div className="w-full mx-auto max-w-[240px] rounded-2xl bg-navy/55 px-4 py-4 text-center text-white backdrop-blur-sm sm:max-w-[460px]">
          <h2 className="text-sm font-bold leading-7 sm:text-base sm:leading-8">
            {slide.title}
          </h2>
          <p className="mt-2 text-xs leading-6 text-white/80 sm:text-sm sm:leading-7">
            {slide.description}
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
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
    </aside>
  );
}
