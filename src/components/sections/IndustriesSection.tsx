"use client";

import { useState } from "react";
import Image from "next/image";
import { industries } from "@/constance/ui";

export default function IndustriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-primary text-secondary md:px-10 px-5 py-16 md:mt-36 mt-20">
      <div className="pt-4 mb-8">
        <h2 className="text-m-md mb-2">
          Trusted by Leading Sectors Across India and Beyond
        </h2>
        <hr className="border-t border-main" />
      </div>

      <div className="grid md:grid-cols-3 items-start">
        <div className="relative w-full max-w-sm">
          <div className="bg-primary">
            <Image
              src="/assets/images/design/jacket.png"
              alt="Workwear"
              width={400}
              height={520}
              className="object-contain"
            />
          </div>
          <p className="text-xsm md:text-m-sm text-muted-foreground mt-10">
            Safety vests, coveralls, work gloves, high-vis jackets
          </p>
        </div>
        <div className="w-full md:col-span-2">
          <ul className="grid-cols-3 ">
            {industries.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;

              return (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`
                    flex items-center gap-4 px-5 py-5 cursor-pointer
                    border-b border-white/20
                    first:border-t-0 last:border-b-0
                    transition-all duration-200
                    ${
                      isHovered ? "bg-secondary text-primary" : "text-secondary"
                    }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors
                     ${isHovered ? "text-primary" : "text-secondary"}`}
                  />
                  <span className="text-sm md:text-base font-light">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
