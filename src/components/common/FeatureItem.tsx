"use client";

import { LucideIcon } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Points from "./Points";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.from(iconRef.current, {
      scale: 0.6,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <div className="flex items-start gap-4">
      <div
        ref={iconRef}
        className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
      >
        <Points />
      </div>
      <div className="space-y-1 flex flex-col gap-2">
        <h2 className="md:text-body-md-bold text-body-xs-bold">{title}</h2>
        <p className="md:text-body-md text-body-xs text-primary/70">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
