import Image from "next/image";
import Menu from "@/assets/svg/menu.svg";
import { HeroSectionProps } from "@/types/products";

function HeroSection({
  onMenuOpen,
  badge,
  title,
  logo,
  images,
}: HeroSectionProps) {
  return (
    <section className="relative bg-primary text-secondary overflow-hidden">
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-5 md:px-10 pt-6 z-20">
        <Image
          src={logo.src}
          alt={logo.alt}
          className="w-[100px] md:w-[140px] lg:w-[180px] h-auto"
          width={180}
          height={60}
          priority
        />

        <button
          onClick={onMenuOpen}
          className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
        >
          <Menu className="text-primary" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 md:items-center grid-cols-3">
        <div className="w-full md:relative absolute md:bottom-0 bottom-20 px-5 z-10">
          <p className="text-sm mb-3 md:text-body-lg text-body-md opacity-80">{badge}</p>

          <h1 className="md:heading-xl-semibold heading-sub-semibold leading-tight">
            {title}
          </h1>
        </div>

        <div className="w-full relative md:left-0 left-[30px] md:col-span-1 md:col-start-2 col-start-2 col-span-2 md:h-[100vh] h-[80vh] grid md:grid-cols-2 grid-cols-3 grid-rows-6">
          {images.map((img, i) => (
            <div key={i} className={img.className}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
