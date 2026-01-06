"use client";

import Stat from "@/components/common/Stat";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function WhyCorporateLeadersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-secondary px-5 md:px-10 pt-16 md:pt-20">
      <div>
        <div className="mb-10">
          <h2 className="text-lg md:text-xl mb-2">
            Why Corporate Leaders Choose Pennywort
          </h2>
          <hr className="border-main" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start py-10">
          <div className="flex w-full gap-10">
            <Stat
              value={100}
              suffix="+"
              label="Satisfied Corporate Clients"
              isInView={isInView}
            />
            <Stat
              value={5000000}
              suffix="+"
              label="Garments Delivered Annually"
              isInView={isInView}
              format="comma"
            />
          </div>
          <p className="text-sm md:text-base leading-relaxed md:col-span-2">
            From multinational corporations to government projects, growing
            startups to established enterprises—Pennywort is the manufacturing
            partner trusted by industry leaders who refuse to compromise on
            quality or safety.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyCorporateLeadersSection;
