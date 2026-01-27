"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface IntroLoaderProps {
  onFinish: () => void;
}

const IntroLoader = ({ onFinish }: IntroLoaderProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (
      !overlayRef.current ||
      !logoRef.current ||
      !leftPanelRef.current ||
      !rightPanelRef.current
    ) {
      return;
    }

    gsap.set(logoRef.current, {
      scale: 0.85,
      opacity: 0,
    });

    gsap.set([leftPanelRef.current, rightPanelRef.current], {
      y: 0,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
    })
      .to(logoRef.current, {
        scale: 1.05,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
      })

      .to(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.1",
      )

      .to(
        leftPanelRef.current,
        {
          y: "-100%",
          duration: 1.2,
          ease: "expo.inOut",
        },
        "+=0.2",
      )
      .to(
        rightPanelRef.current,
        {
          y: "-100%",
          duration: 1.4,
          ease: "expo.inOut",
        },
        "-=1.0",
      )
      .add(() => {
        onFinish();
      }, "-=.09");

    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none"
    >
      <div
        ref={leftPanelRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-black"
      />
      <div
        ref={rightPanelRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-black"
      />
      <div
        ref={logoRef}
        className="absolute left-1/2 top-1/2 w-[160px]
  -translate-x-1/2 -translate-y-1/2 z-10 opacity-0"
      >
        <img
          src="/assets/images/design/penny-wort-logo.png"
          alt="Logo"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default IntroLoader;
