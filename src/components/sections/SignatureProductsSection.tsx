"use client";

import { useRef, useState } from "react";
import ProductCard from "../common/ProductCard";
import ArrowSide from "@/assets/svg/arrow_down.svg";

const products = [
  {
    title: "Flame-Resistant Coveralls",
    image: "/assets/images/design/news_1.png",
  },
  {
    title: "High-Visibility Safety Vests",
    image: "/assets/images/design/news_2.png",
  },
  { title: "Corporate Uniforms", image: "/assets/images/design/news_3.png" },
  { title: "Industrial Workwear", image: "/assets/images/design/news_4.png" },
];

function SignatureProductSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerLeft = container.getBoundingClientRect().left;

    const distances = cardRefs.current.map((card) => {
      if (!card) return Infinity;
      return Math.abs(card.getBoundingClientRect().left - containerLeft);
    });

    const closestIndex = distances.indexOf(Math.min(...distances));
    setActiveIndex(closestIndex);
  };

  return (
    <section className="bg-primary text-secondary md:pl-10 pl-5 py-10 md:mt-16 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
        <div className="col-span-1 md:col-span-1 flex items-center justify-start">
          <div className="flex flex-col  md:items-start  md:text-start">
            <h2 className="text-3xl font-light mb-4">
              Our Signature <br /> Product Lines
            </h2>

            <div className="flex gap-2 mt-6 ">
              <button
                onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-secondary flex items-center justify-center hover:border-secondary/60 transition"
              >
                <ArrowSide className="rotate-90" />
              </button>

              <button
                onClick={() =>
                  scrollToCard(Math.min(activeIndex + 1, products.length - 1))
                }
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-secondary flex items-center justify-center hover:border-secondary/60 transition"
              >
                <ArrowSide className="-rotate-90" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-5 w-full">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto no-scrollbar"
          >
            <div className="flex snap-x snap-mandatory gap-2">
              {products.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="relative snap-start"
                >
                  <hr className="absolute top-0 left-1 w-[98%] border-secondary/40" />

                  {i !== products.length - 1 && (
                    <hr className="absolute w-px h-[98%] top-1 bg-secondary/40 -right-1" />
                  )}

                  <hr className="absolute bottom-0 left-0 w-[99%] border-secondary/40" />

                  <div className="pb-5 pt-10 px-2">
                    <ProductCard image={item.image} title={item.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6 justify-center md:justify-start">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className={`h-[2px] w-12 transition-colors duration-300 ${
                  i === activeIndex ? "bg-secondary" : "bg-secondary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignatureProductSection;
