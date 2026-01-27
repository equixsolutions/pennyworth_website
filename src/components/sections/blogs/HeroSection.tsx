"use client";

import Image from "next/image";
import Menu from "@/assets/svg/menu.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

interface HeroSectionProps {
  onMenuOpen: () => void;
}

function HeroSection({ onMenuOpen }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !paraRef.current) return;

    const ctx = gsap.context(() => {
      /* HEADER (logo + menu) */
      gsap.from(".hero-header", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out",
      });

      /* WORD-BY-WORD HEADING */
      const words: any = headingRef.current?.querySelectorAll(".hero-word");

      gsap.from(words, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.2,
      });

      /* PARAGRAPH */
      gsap.from(paraRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="hero-word inline-block mr-2">
        {word}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="relative bg-primary text-secondary min-h-[70vh] flex flex-col"
    >
      {/* HEADER */}
      <div className="hero-header flex items-center justify-between px-5 md:px-10 pt-6">
        <Link href="/" aria-label="Go to home">
          <Image
            src="/assets/images/design/penny-wort-logo.png"
            alt="Penny Wort Logo"
            width={160}
            height={40}
            priority
            className="cursor-pointer"
          />
        </Link>

        <button
          onClick={onMenuOpen}
          className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
        >
          <Menu className="text-primary" />
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 items-center px-5 md:px-10">
        <div className="max-w-5xl">
          <h1
            ref={headingRef}
            className="md:heading-xl-semibold heading-md leading-tight mb-6"
          >
            {splitWords("“Your Knowledge Hub for Workwear,")}
            <br />
            <span>{splitWords("Safety & Industry Trends”")}</span>
          </h1>

          <p
            ref={paraRef}
            className="md:text-body-lg text-body-sm text-secondary/80 leading-relaxed"
          >
            At Pennywort Clothing, we don’t just manufacture uniforms — we share
            knowledge. Stay updated with the latest on safety standards, fabric
            innovations, sustainability practices, and client success stories
            from around the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
