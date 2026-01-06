import Image from "next/image";
import ArrowUpRight from "@/assets/svg/arrow_right.svg";

const requirements = [
  "ISO 9001 or equivalent quality certification",
  "Minimum 50-machine capacity",
  "Compliance with labor and safety regulations",
];

const benefits = [
  "Steady stream of production orders",
  "Technical and quality assurance support",
  "On-site QC assistance during production",
  "Certification of manufacturing capability",
  "Revenue growth opportunities",
];

export default function PartnerWithUsSection() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto px-5 md:px-10 pt-20">
        <h2 className="text-lg md:text-xl font-medium mb-4">Partner with Us</h2>

        <hr className="border-primary/30 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col pb-10">
            <div>
              <h3 className="text-base font-medium mb-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
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
