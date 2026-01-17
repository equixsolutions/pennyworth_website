import Image from "next/image";
import Points from "@/assets/svg/penny_points.svg";
import InfoCard from "@/components/common/InfoCard";

const missionPoints = [
  "Delivering world-class manufacturing quality at competitive Indian prices",
  "Pioneering sustainable and ethical production practices",
  "Empowering industries with customizable, certified safety apparel",
  "Building long-term partnerships based on trust, transparency, and timely delivery",
];

export default function MissionVisionSection() {
  return (
    <section className="bg-secondary py-16 md:py-24 px-5 md:px-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <InfoCard title="Our Mission">
          <p className="md:text-body-md text-body-sm text-primary mb-4">
            Protecting People, Elevating Performance
          </p>

          <p className="leading-relaxed md:text-body-md text-body-xs mb-6">
            We exist to engineer workwear that doesn’t just meet safety
            standards—it exceeds them. Every garment that leaves our facility is
            built to withstand the toughest conditions while keeping wearers
            comfortable, confident, and safe.
          </p>

          <p className="leading-relaxed md:text-body-md text-body-xs mb-4">We're committed to:</p>

          <ul className="space-y-4">
            {missionPoints.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Points />
                <span className="leading-relaxed md:text-body-md text-body-xs">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title="Our Vision">
          <p className="md:text-body-md text-body-xs leading-relaxed mb-4">
            To be Asia’s most trusted and biggest clothing manufacturer by 2030
          </p>

          <p className="leading-relaxed md:text-body-md text-body-xs">
            We're not just making clothes—we're building a legacy of safety,
            innovation, and industrial excellence. Our vision extends beyond
            garments to creating a safer, more sustainable future for workers
            worldwide.
          </p>

          <div className="absolute bottom-6 right-6 opacity-100 pointer-events-none">
            <Image
              src="/assets/images/logo/pennywort_shadow_logo.png"
              alt="Pennywort watermark"
              width={240}
              height={240}
              className="object-contain"
            />
          </div>
        </InfoCard>
      </div>
    </section>
  );
}
