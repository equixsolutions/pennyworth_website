import FeatureCard from "@/components/common/FeatureCard";
import { features } from "@/constance/aboutUs";

export default function WhatSetsApartSection() {
  return (
    <section className="relative bg-primary py-16 md:py-18 px-5 md:px-10">
      <div className=" mx-auto">
        <div className="mb-12">
          <h2 className="md:text-body-lg text-body-sm text-secondary mb-2">
            What Sets Pennywort Apart
          </h2>
          <hr className="border-t border-main border-muted-foreground/50" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
