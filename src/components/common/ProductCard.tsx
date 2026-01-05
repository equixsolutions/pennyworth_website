"use client";

import { motion } from "framer-motion";
import ArrowRight from "@/assets/svg/Arrow_right.svg";

type Props = {
  image: string;
  title: string;
};

function ProductCard({ image, title }: Props) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="relative w-[320px] h-[460px] bg-primary cursor-pointer"
    >
      <div className="relative h-[420px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <motion.div
          variants={{
            rest: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 bg-primary/60 flex-col justify-between p-6 hidden md:flex"
        >
          <div>
            <p className="text-sm text-muted-secondary mb-4 leading-relaxed">
              Protection meets precision. Our FRC and IFR coveralls meet
              international safety standards for high-risk industries.
            </p>

            <div className="mb-4">
              <p className="text-xs font-semibold uppercase text-secondary">
                Materials
              </p>
              <p className="text-xs text-muted-secondary">
                100% Cotton FR | Aramid Fibers | Modacrylic Blends
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase text-secondary">
                Applications
              </p>
              <p className="text-xs text-muted-secondary">
                Oil & Gas, Welding, Petrochemical
              </p>
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 border border-secondary px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition">
            View Coverall Collection
            <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full bg-primary/80 p-4 flex justify-center md:hidden">
          <button className="inline-flex items-center gap-2 border border-secondary px-4 py-2 text-sm text-secondary">
            View Coverall Collection{" "}
            <ArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="h-[40px] flex items-center justify-center">
        <p className="text-sm tracking-wide text-secondary">{title}</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;
