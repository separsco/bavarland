import { Button } from "@/components/ui/Button";
import { IconSlot } from "@/components/ui/IconSlot";
import { MediaSlot } from "@/components/ui/MediaSlot";

const avatarSlots = ["consultant-1", "consultant-2", "consultant-3"] as const;

export function ConsultantsBanner() {
  return (
    <section className="pb-10 sm:pb-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-white px-5 py-6 text-center lg:flex-row lg:justify-between sm:gap-6 sm:px-8 sm:py-5 sm:text-start">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <div className="flex items-center">
              {avatarSlots.map((slot, index) => (
                <img
                  key={slot}
                  src="/images/pic.svg"
                  alt=""
                  aria-hidden
                  className={`relative size-11 rounded-full border-2 border-white bg-sky object-cover ${index > 0 ? "-ms-3" : ""
                    }`}
                  style={{ zIndex: index + 1 }}
                />
              ))}
            </div>
            <p className="max-w-sm text-sm font-medium leading-7 text-foreground sm:max-w-none sm:text-base">
              بیش از ۲۰ مشاور و کارشناس در مجموعه ما فعالیت می‌کنند.
            </p>
          </div>

          {/* <Button
            href="/contact"
            variant="navy"
            size="lg"
            className="w-full sm:w-auto"
            startSlot={<IconSlot label="contact-phone-icon" className="size-4 " />}
          >
            تماس با مجموعه
          </Button> */}
          <button className="bg-[#164685] text-white px-6 py-3 rounded-full flex items-center gap-2">
           <img src="/images/call.svg" alt="" />
            تماس با مجموعه
          </button>
        </div>
      </div>
    </section>
  );
}
