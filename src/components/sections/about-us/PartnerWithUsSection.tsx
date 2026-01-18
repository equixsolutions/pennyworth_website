import Image from "next/image";
import ArrowUpRight from "@/assets/svg/arrow.svg";
import { benefits, requirements } from "@/constance/aboutUs";

export default function PartnerWithUsSection() {
  return (
    <section className="">
      <div className="mx-auto  pt-20">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2 px-5 md:px-10">
          Partner with Us
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
        <div className="grid grid-cols-1 lg:grid-cols-3  pt-10">
          <div className="lg:col-span-2 flex flex-col ">
            <div className="px-5 md:px-10">
              <h3 className="md:text-body-md text-body-xs font-medium mb-4">
                Become a Pennywort Production Partner
              </h3>

              <p className="text-sm md:text-base mb-4">
                Are you a manufacturer looking to expand your order book?
              </p>

              <p className="text-sm md:text-base text-primary/80 max-w-xl">
                Pennywort’s partnership program connects quality-certified
                production houses with our growing order flow.
              </p>
            </div>
            <div className="mt-10 bg-primary/10 px-5 md:px-10 py-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 ">
                <div>
                  <h4 className="font-medium mb-6">Partnership Benefits:</h4>

                  <ul className="space-y-4">
                    {benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-6">Requirements:</h4>

                  <ul className="space-y-4">
                    {requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 ">
                <button className="inline-flex items-center gap-2 border border-primary px-6 py-3 text-sm md:text-base hover:bg-primary hover:text-secondary transition">
                  Apply for Partnership
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[360px] md:h-[420px] lg:h-full">
            <Image
              src="/assets/images/design/PartnerWithUs.png"
              alt="Pennywort Partner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
