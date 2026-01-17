import Image from "next/image";
import FeatureCard from "@/components/common/FeatureCard";
import { FeatureSectionProps } from "@/types/products";

function FeatureGridSection({
  heading,
  features,
  benefits,
  image,
}: FeatureSectionProps) {
  return (
    <section
      className={`bg-primary px-5 md:px-10 pt-16 ${
        image?.colSpan == 1 ? "md:pb-16" : "md:pb-36"
      }`}
    >
      <div>
        <div className="mb-10">
          <h2 className="text-secondary md:text-body-lg text-body-sm  mb-2">
            {heading}
          </h2>
          <hr className="border-secondary/20" />
        </div>
        <div
          className={`
            grid gap-6 
            ${
              image
                ? "grid-cols-1 md:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }
          `}
        >
          {features.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}

          {image && ( 
            <div
              className={`relative w-full md:col-span-${image.colSpan} h-full  min-h-[260px] md:h-[100%] md:min-h-[100%]`}
            >
              <div className="md:absolute top-0 w-full h-[364px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          {benefits && (
            <div className="space-y-6">
              {benefits.map((item) => (
                <div key={item.head}>
                  <h4 className="text-secondary text-sm font-medium mb-1">
                    {item.head}
                  </h4>
                  <p className="text-secondary/70 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FeatureGridSection;
