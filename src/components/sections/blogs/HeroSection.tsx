import Image from "next/image";
import Menu from "@/assets/svg/menu.svg";

interface HeroSectionProps {
  onMenuOpen: () => void;
}

function HeroSection({ onMenuOpen }: HeroSectionProps) {
  return (
    <section className="relative bg-primary text-secondary min-h-[70vh] flex flex-col">
      <div className="flex items-center justify-between px-5 md:px-10 pt-6">
        <Image
          src="/assets/images/design/penny-wort-logo.png"
          alt="Pennywort Logo"
          width={150}
          height={40}
          priority
        />

        <button
          onClick={onMenuOpen}
          className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
        >
          <Menu className="text-primary" />
        </button>
      </div>

      <div className="flex flex-1 items-center px-5 md:px-10">
        <div className="max-w-3xl">
          <h1 className="heading-lg-thin md:heading-xl-regular leading-tight mb-6">
            “Your Knowledge Hub for Workwear,
            <br />
            <span className="heading-lg-thin md:heading-xl-thin">
              Safety & Industry Trends”
            </span>
          </h1>

          <p className="text-sm md:text-base text-secondary/80 leading-relaxed">
            At Pennywort Clothing, we don’t just manufacture uniforms — we share
            knowledge. Stay updated with the latest on safety standards, fabric
            innovations, sustainability practices, and client success stories
            from around the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
