"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroSectionProps {
  onMenuOpen: () => void;
}
const HeroSection = ({ onMenuOpen }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-hero-dark overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="relative z-10 flex flex-col justify-between p-6 md:p-10 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/assets/images/design/penny-wort-logo.png"
              alt="Penny Wort Logo"
              width={160}
              height={40}
              priority
            />
          </motion.div>
          <div className="flex-1 flex flex-col justify-center py-12 lg:py-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-hero-dark-foreground leading-tight mb-6"
            >
              Premium Workwear & Uniforms
              <br />
              <span className="italic">— Where Safety Meets Style.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg mb-10 max-w-md"
            >
              India's Biggest Manufacturer of Flame-Resistant Workwear & Custom
              Uniforms{" "}
              <span className="text-hero-dark-foreground font-medium">
                Since 2014
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="heroPrimary" size="lg" className="group">
                Talk to Us
                <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button variant="heroOutline" size="lg" className="group">
                Explore Our Products
                <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative lg:hidden mt-8 h-32 w-48"
          >
            <Image
              src="/assets/images/design/hero.png"
              alt="Premium workwear"
              fill
              className="object-cover rounded-md"
            />
          </motion.div>
        </div>

        <div className="hidden lg:grid grid-cols-2 relative">
          <motion.button
            onClick={onMenuOpen}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-6 right-6 z-20 w-14 h-14 rounded-full bg-hero-dark flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-5 h-0.5 bg-hero-dark-foreground" />
              <span className="w-5 h-0.5 bg-hero-dark-foreground" />
            </div>
          </motion.button>
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className={`relative overflow-hidden ${
                i === 1 ? "row-span-2" : ""
              }`}
            >
              <Image
                src="/assets/images/design/hero.png"
                alt="Premium workwear"
                fill
                className="object-cover"
                priority={i === 0}
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-6 right-6 z-20"
          >
            <a
              href="#about"
              className="w-12 h-12 rounded-full border border-foreground/30 bg-background flex items-center justify-center"
            >
              <ArrowDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>
        <motion.button
          onClick={onMenuOpen}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:hidden fixed top-6 right-6 z-20 w-12 h-12 rounded-full bg-hero-dark-foreground flex items-center justify-center"
        >
          <div className="flex flex-col gap-1.5">
            <span className="w-4 h-0.5 bg-hero-dark" />
            <span className="w-4 h-0.5 bg-hero-dark" />
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
