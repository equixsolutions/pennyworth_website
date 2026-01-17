import { FitStyleSectionProps } from "@/types/products";
import Image from "next/image";

function FitStyleSection({
  title = "Fit Styles",
  fitStyles,
  images,
}: FitStyleSectionProps) {
  return (
    <section className=" px-5 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div>
          <h4 className="md:text-body-md-bold text-body-xs-bold">{title}:</h4>

          <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
            {fitStyles.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 h-[300px] grid grid-cols-1 sm:grid-cols-3 gap-2 ">
          {images.map((image, i) => (
            <div
              key={i}
              className={`relative bg-muted
              ${i === 0 ? "sm:col-span-1" : "sm:col-span-2"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FitStyleSection;
