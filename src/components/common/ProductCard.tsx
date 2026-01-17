import { motion } from "framer-motion";
import ArrowRight from "@/assets/svg/Arrow_right.svg";
import { Props } from "@/types/products";

function ProductCard({ product, textColor = "text-secondary" }: Props) {
  const { title, image, overlay } = product;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="relative w-[320px] h-[460px] cursor-pointer "
    >
      <div className="relative h-[420px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />{" "}
        <motion.div
          variants={{
            rest: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 bg-primary/60 flex-col justify-between p-6 hidden md:flex"
        >
          <div>
            <p className="text-body-sm text-muted-secondary mb-4 leading-relaxed">
              {overlay.description}
            </p>

            <div className="mb-4">
              <p className="text-xs font-semibold uppercase text-secondary">
                Materials
              </p>
              <p className="text-xs text-muted-secondary">
                {overlay.materials}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold uppercase text-secondary">
                Applications
              </p>
              <p className="text-xs text-muted-secondary">
                {overlay.applications}
              </p>
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-2 border border-secondary px-4 py-2 text-sm hover:bg-secondary hover:text-primary text-secondary transition">
            {overlay.cta}
            <ArrowRight className="transition-transform" />
          </button>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full bg-primary/80 p-4 flex justify-center md:hidden">
          <button className="inline-flex items-center gap-2 border border-secondary px-4 py-2 text-sm text-secondary">
            {overlay.cta}
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="h-[60px] flex items-center justify-center">
        <p className={`heading-caption tracking-wide ${textColor}`}>{title}</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;
