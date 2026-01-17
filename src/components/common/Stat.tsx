import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
function Stat({
  value,
  suffix,
  label,
  isInView,
  format,
}: {
  value: number;
  suffix?: string;
  label: string;
  isInView: boolean;
  format?: "comma";
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * value);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  const displayValue = format === "comma" ? count.toLocaleString() : count;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="md:heading-md heading-xs font-serif mb-2"
      >
        {displayValue}
        {suffix}
      </motion.div>

      <div className="leading-relaxed md:col-span-2 text-primary/80">
        {label}
      </div>
    </div>
  );
}

export default Stat;
