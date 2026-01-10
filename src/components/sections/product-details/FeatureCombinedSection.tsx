import Image from "next/image";
import FeatureCard from "@/components/common/FeatureCard";

interface FeatureSectionProps {
  heading: string;
  topRow: {
    title: string;
    description?: string;
    points?: string[];
  }[];
  bottomHeading: string;
  bottomRow: {
    title: string;
    description?: string;
    points?: string[];
  }[];
  image?: {
    src: string;
    alt: string;
  };
}

function FeatureCombinedSection({
  heading,
  topRow,
  bottomHeading,
  bottomRow,
  image,
}: FeatureSectionProps) {
  return (
    <section className="bg-primary px-5 md:px-10 py-16">
      <div>
        {/* MAIN HEADING */}
        <div className="mb-10">
          <h2 className="text-secondary text-lg md:text-xl font-light mb-3">
            {heading}
          </h2>
          <hr className="border-secondary/20" />
        </div>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {topRow.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>

        {/* BOTTOM HEADING */}
        <h3 className="text-secondary/70 text-sm font-light mb-6">
          {bottomHeading}
        </h3>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomRow.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}

          {image && (
            <div className="relative min-h-[240px] border border-secondary/20 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeatureCombinedSection;
