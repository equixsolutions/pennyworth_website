import { motion } from "framer-motion";
import Image from "next/image";

function ZigZagCard({
  src,
  label,
  isUp,
}: {
  src: string;
  label: string;
  isUp: boolean;
}) {
  return (
    <div className="relative w-[260px] h-[320px] shrink-0 flex items-center justify-center">
      {/* TOP LABEL */}
      <span
        className={`absolute -top-2 text-lg md:heading-xs heading-caption text-primary-900 transition-opacity ${
          isUp ? "opacity-100" : "opacity-0"
        }`}
      >
        {label}
      </span>

      {/* IMAGE */}
      <motion.div
        className="absolute w-full h-full"
        initial={{
          opacity: 0,
          y: isUp ? -80 : 80, // 👈 TOP if isUp, BOTTOM if not
        }}
        whileInView={{
          opacity: 1,
          y: isUp ? 40 : -40, // final zig-zag position
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <Image src={src} alt={label} fill className="object-cover" />
      </motion.div>

      <span
        className={`absolute -bottom-2 text-lg md:heading-xs heading-caption text-primary-900 transition-opacity ${
          !isUp ? "opacity-100" : "opacity-0"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default ZigZagCard;
