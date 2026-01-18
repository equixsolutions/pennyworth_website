import React from "react";
import Menu from "@/assets/svg/menu.svg";
import Image from "next/image";
interface HeroSectionProps {
  onMenuOpen: () => void;
}

function HeroSection({ onMenuOpen }: HeroSectionProps) {
  return (
    <section className="relative bg-primary overflow-hidden md:min-h-[70vh] md:h-auto h-[50vh] ">
      <button
        onClick={onMenuOpen}
        className="absolute top-6 right-10 z-20 w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
      >
        <Menu className="text-primary" />
      </button>
      <div className="md:absolute inset-0 grid md:grid-cols-5 grid-cols-3 ">
        <div className="relative col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-8 grid-rows-4">
          <div className="relative col-span-6 row-span-1 flex items-start p-6 md:p-10">
            <Image
              src="/assets/images/design/penny-wort-logo.png"
              alt="Penny Wort Logo"
              width={160}
              height={40}
              priority
            />
          </div>
          <div className="col-span-6 row-span-1" />
          <div className="col-span-6 row-span-1" />
        </div>
        <div className="relative md:h-[100%] h-[50vh]  grid grid-cols-6 md:grid-cols-2 md:grid-rows-6 grid-rows-10 col-span-2 md:mr-16 gap-1">
          <div className="relative overflow-hidden col-span-3 col-start-3 sm:col-span-2 sm:col-start-3 md:col-span-1 md:row-span-6 row-span-6">
            <Image
              src="/assets/images/design/hero_about_1.png"
              alt="Workwear"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden md:row-start-6 md:row-end-3 row-start-11 row-end-5 col-start-6 col-span-10 md:col-start-2 md:col-span-1   ">
            <Image
              src="/assets/images/design/hero_about_2.png"
              alt="Workwear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] md:-bottom-[7%] z-10 md:min-h-[70vh] flex items-center lg:pt-0 lg:items-center">
        <div className="w-full text-center">
          <h1 className="md:text-body-lg text-body-md text-start text-secondary leading-tight md:ml-10 ml-5">
            About Pennywort
            <br />
            <span className="md:heading-xl-semibold heading-sub-hero">
              Engineering Excellence in <br />
              Every Stitch
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
