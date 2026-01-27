"use client";

import Stat from "@/components/common/Stat";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function WhyCorporateLeadersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.section
      ref={ref}
      className="bg-secondary px-5 md:px-10 py-16 md:py-20"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
            Why Corporate Leaders Choose Pennywort
          </h2>
          <hr className="border-t border-main border-muted-foreground/50" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start md:py-10">
          {/* STATS */}
          <div className="flex w-full gap-10">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 12,
                delay: 0.3,
              }}
            >
              <Stat
                value={100}
                suffix="+"
                label="Satisfied Corporate Clients"
                isInView={isInView}
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 12,
                delay: 0.45,
              }}
            >
              <Stat
                value={5000000}
                suffix="+"
                label="Garments Delivered Annually"
                isInView={isInView}
                format="comma"
              />
            </motion.div>
          </div>

          {/* TEXT REVEAL */}
          <motion.p
            className="md:text-body-md text-body-sm leading-relaxed md:col-span-2 text-primary/80"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            From multinational corporations to government projects, growing
            startups to established enterprises—Pennywort is the manufacturing
            partner trusted by industry leaders who refuse to compromise on
            quality or safety.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

export default WhyCorporateLeadersSection;
