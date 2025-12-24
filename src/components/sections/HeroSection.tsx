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
      <div className="md:absolute inset-0 grid grid-cols-3 md:min-h-screen">
        <div className="relative col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-8 grid-rows-4">
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
          <div className="relative col-span-3 row-start-4 row-span-1 overflow-hidden ml-10 md:block hidden">
            <Image
              src="/assets/images/design/hero_2.png"
              alt="Workwear background"
              fill
              className="object-containe"
            />
          </div>
        </div>
        <div className="relative grid grid-cols-6 md:grid-cols-2 md:grid-rows-6 grid-rows-10 col-span-2 md:col-span-1 gap-1">
          <div className="relative overflow-hidden col-span-4 sm:col-span-2 sm:col-start-3 md:col-span-1 md:row-span-5 row-span-8">
            <Image
              src="/assets/images/design/hero.png"
              alt="Workwear"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden col-start-5 col-span-2 md:col-start-auto md:col-span-1 md:row-span-6 row-span-10">
            <Image
              src="/assets/images/design/hero.png"
              alt="Workwear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:relative z-10 md:min-h-screen  flex items-center lg:pt-0 lg:items-center">
        <div className="w-full text-center">
          <h1 className="md:heading-xl-regular heading-lg-thin text-start text-white leading-tight md:ml-10 ml-5">
            Premium Workwear & Uniforms
            <br />
            <span className="md:heading-xl-thin">
              — Where Safety Meets Style,
            </span>
          </h1>
          <div className="w-full flex justify-center">
            <p className="text-gray-300 text-base text-md md:text-lg mb-8 md:mt-20 mt-14  text-left ml-5">
              India&apos;s Biggest Manufacturer of Flame-Resistant Workwear
              <br className="hidden md:block" />& Custom Uniforms{" "}
              <span className="text-white font-medium">Since 2014</span>
            </p>
          </div>

          <div className="flex justify-center gap-3 md:gap-4">
            <Button
              variant="heroPrimary"
              size="lg"
              className="group text-secondary 
               text-sm px-4 py-2 
               md:text-base md:px-6 md:py-3"
            >
              Talk to Us
              <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>

            <Button
              variant="destructive"
              size="lg"
              className="group bg-secondary text-primary
               text-sm px-4 py-2
               md:text-base md:px-6 md:py-3"
            >
              Explore Our Products
              <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
          <img
            src="/assets/images/design/hero_2.png"
            alt="Workwear background"
            className="object-containe mt-10 md:hidden ml-5"
          />
        </div>
      </div>
      <button
        onClick={onMenuOpen}
        className="fixed top-6 right-6 z-20 w-12 h-12 rounded-full bg-black flex items-center justify-center"
      >
        <Menu className="text-black" />
      </button>
      <div className="absolute bottom-6 right-6 z-20 rounded-full border  border-secondary  md:border-primary">
        <a href="#about" className="w-12 h-12 flex items-center justify-center">
          <ArrowDown className="animate-bounce text-secondary md:text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
