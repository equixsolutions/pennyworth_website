import ZigZagCard from "@/components/common/ZigZagCard";
import { items } from "@/constance/aboutUs";
import { motion } from "framer-motion";

export default function ThreePillarsSection() {
  return (
    <section className="relative overflow-hidden md:py-6 py-12 bg-secondary">
      <div className="text-center mb-20">
        <p className="text-sm tracking-widest uppercase text-primary">
          Founded on Three Pillars
        </p>
      </div>
      <motion.div
        className="flex w-max md:mb-36 mb-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, i) => {
          const isUp = i % 2 === 0;
          return (
            <ZigZagCard key={i} src={item.src} label={item.label} isUp={isUp} />
          );
        })}
      </motion.div>

      <div className="mx-auto px-6 grid md:grid-cols-2 gap-12 text-sm md:text-base leading-relaxed">
        <p className="leading-7">
          In an era where workwear was often seen as generic and disposable, we
          dared to reimagine it. We believed that people who build nations, heal
          communities, and power industries deserve clothing that protects,
          performs, and lasts.
        </p>

        <p className="leading-7">
          Today, Pennywort manufactures over 500,000 garments annually, serving
          clients across construction, healthcare, energy, hospitality, and
          corporate sectors. Our ISO 9001:2015 certification is a promise of
          consistency, reliability, and excellence in every thread.
        </p>
      </div>
    </section>
  );
}
