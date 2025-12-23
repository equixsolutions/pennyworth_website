"use client";

import ArrowRight from "@/assets/svg/Arrow_right.svg";
import ArrowDown from "@/assets/svg/arrow_down.svg";
import Menu from "@/assets/svg/menu.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  onMenuOpen: () => void;
}

const HeroSection = ({ onMenuOpen }: HeroSectionProps) => {
  return (
    <section className="relative bg-primary min-h-screen  overflow-hidden">
      <div className="md:absolute inset-0 grid grid-cols-3 min-h-screen">
        <div className="relative col-span-1 md:col-span-2 grid grid-cols-8 grid-rows-4">
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
          <div className="relative col-span-2 row-start-4 row-span-1 overflow-hidden ml-10">
            <Image
              src="/assets/images/design/hero_2.png"
              alt="Workwear background"
              fill
              className="object-containe"
            />
          </div>
        </div>

        <div className="relative grid grid-cols-3 md:grid-cols-2 grid-rows-6 col-span-2 md:col-span-1">
          <div className="relative overflow-hidden col-span-2 md:col-span-1 row-span-5">
            <Image
              src="/assets/images/design/hero.png"
              alt="Workwear"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative overflow-hidden col-span-1 row-span-6">
            <Image
              src="/assets/images/design/hero.png"
              alt="Workwear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center lg:pt-0 lg:items-center">
        <div className="w-full text-center">
          <h1 className="heading-xl-regular text-start  text-white leading-tight ml-10 ">
            Premium Workwear & Uniforms
            <br />
            <span className="heading-xl-thin">— Where Safety Meets Style,</span>
          </h1>
          <div className="w-full flex justify-center">
            <p className="text-gray-300 text-base md:text-lg  mb-8 mt-20 text-left">
              India&apos;s Biggest Manufacturer of Flame-Resistant Workwear{" "}
              <br /> & Custom Uniforms{" "}
              <span className="text-white font-medium">Since 2014</span>
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="heroPrimary"
              size="lg"
              className="group text-secondary"
            >
              Talk to Us
              <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>

            <Button
              variant="destructive"
              size="lg"
              className="group bg-secondary text-primary"
            >
              Explore Our Products
              <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform " />
            </Button>
          </div>
        </div>
      </div>
      <button
        onClick={onMenuOpen}
        className="fixed top-6 right-6 z-20 w-12 h-12 rounded-full bg-black flex items-center justify-center"
      >
        <Menu className="text-black" />
      </button>
      <div className="absolute bottom-6 right-6 z-20">
        <a href="#about" className="w-12 h-12 flex items-center justify-center">
          <ArrowDown className="animate-bounce text-white" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
