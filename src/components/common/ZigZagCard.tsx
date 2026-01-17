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
      <span
        className={`absolute -top-2 text-lg md:heading-xs heading-caption   text-primary-900 transition-opacity ${
          isUp ? "opacity-100" : "opacity-0"
        }`}
      >
        {label}
      </span>

      <motion.div
        className="absolute w-full h-full"
        animate={{ y: isUp ? 40 : -40 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
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
