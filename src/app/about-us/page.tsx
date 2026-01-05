"use client";

import ArrowRight from "@/assets/svg/Arrow_right.svg";
import ArrowDown from "@/assets/svg/arrow_down.svg";
import Menu from "@/assets/svg/menu.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  onMenuOpen: () => void;
}

const AboutUsPage = ({ onMenuOpen }: HeroSectionProps) => {
  return (
    <section className="relative bg-primary overflow-hidden md:min-h-[70vh] ">
      <div className="md:absolute inset-0 grid grid-cols-5 ">
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
        <div className="relative grid grid-cols-6 md:grid-cols-2 md:grid-rows-6 grid-rows-10 col-span-2 md:mr-16 gap-1">
          <div className="relative overflow-hidden col-span-4 sm:col-span-2 sm:col-start-3 md:col-span-1 md:row-span-6  row-span-8">
            <Image
              src="/assets/images/design/hero.png"
              alt="Workwear"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden col-start-5 col-span-2 md:col-start-auto md:col-span-1 md:row-span-3  ">
            <Image
              src="/assets/images/design/hero.png"
              alt="Workwear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:relative z-10 md:min-h-[70vh]   flex items-center lg:pt-0 lg:items-center">
        <div className="w-full text-center">
          <h1 className="md:heading-xl-regular heading-lg-thin text-start text-secondary leading-tight md:ml-10 ml-5">
            Crafted for Comfort.
            <br />
            <span className="md:heading-xl-thin">Designed for You.</span>
          </h1>
        </div>
      </div>
      <button
        onClick={onMenuOpen}
        className="fixed top-6 right-6 z-20 w-12 text-primary h-12 rounded-full bg-secondary flex items-center justify-center"
      >
        <Menu className="text-primary" />
      </button>
    </section>
  );
};

export default AboutUsPage;
