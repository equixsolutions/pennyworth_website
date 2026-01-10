"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductOverviewProps } from "@/types/products";
import Accordion from "@/components/common/Accordion";

function ProductOverview({
  title,
  images,
  accordionItems,
  imagePosition = "left",
}: ProductOverviewProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  const isImageLeft = imagePosition === "left";

  return (
    <section className="px-5 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-medium text-primary">
            {title}
          </h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`}>
          <div className={isImageLeft ? "" : "lg:order-2"}>
            <div className="relative w-full h-[420px] md:h-[520px] bg-gray-100 mb-6">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex gap-4">
              {images.map((img) => {
                const isActive = img.id === activeImage.id;

                return (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-28 border transition
                      ${
                        isActive
                          ? "border-primary opacity-100"
                          : "border-transparent opacity-40 hover:opacity-70"
                      }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className={isImageLeft ? "" : "lg:order-1"}>
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;
