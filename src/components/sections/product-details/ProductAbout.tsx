"use client";

import { useState } from "react";
import Image from "next/image";

const productImages = [
  "/assets/images/design/product_1.png",
  "/assets/images/design/product_2.png",
  "/assets/images/design/product_3.png",
  "/assets/images/design/product_4.png",
];

function ProductAbout() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="px-5 md:px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative w-full">
          <div
            className="
              flex md:hidden
              overflow-x-auto
              snap-x snap-mandatory
              scroll-smooth
              no-scrollbar
            "
            onScroll={(e) => {
              const index = Math.round(
                e.currentTarget.scrollLeft / e.currentTarget.clientWidth
              );
              setActiveImage(index);
            }}
          >
            {productImages.map((img, i) => (
              <div
                key={img}
                className="relative w-full h-[420px] flex-shrink-0 snap-center"
              >
                <Image
                  src={img}
                  alt="Product image"
                  fill
                  className="object-contain"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          <div className="hidden md:block relative h-[520px]">
            <Image
              src={productImages[activeImage]}
              alt="Selected product"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-medium text-primary mb-6">
            Built for the Toughest Environments. Engineered for Maximum Safety.
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-10">
            When flash fires, molten metal, and extreme heat are part of the
            job, ordinary workwear isn’t enough. Pennywort’s coveralls combine
            cutting-edge fabric technology with precision manufacturing to
            deliver protection that meets—and exceeds—international safety
            standards.
          </p>

          <div className="flex gap-4">
            {productImages.map((img, i) => {
              const isActive = activeImage === i;

              return (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-28 border transition
                    ${
                      isActive
                        ? "border-primary opacity-100"
                        : "border-transparent opacity-40 hover:opacity-70"
                    }`}
                >
                  <Image
                    src={img}
                    alt="Product thumbnail"
                    fill
                    className="object-contain"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductAbout;
