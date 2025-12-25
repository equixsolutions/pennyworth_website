import Image from "next/image";

const ImageGrid = () => {
  return (
    <div className="relative w-full h-[600px]">
      <div className="absolute top-0 left-0 w-[32%] h-[28%] overflow-hidden z-10">
        <Image
          src="/assets/images/design/about_2.png"
          alt="Professional suits on rack"
          fill
          className="object-cover pb-8"
          priority
        />
      </div>
      <div className="absolute top-[-2%] right-0 w-[52%] h-[45%] overflow-hidden z-20 border-8 border-r-0 border-secondary">
        <Image
          src="/assets/images/design/about_2.png"
          alt="Premium navy blazer collection"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-[24%] left-0 w-full h-[52%] overflow-hidden  z-10">
        <Image
          src="/assets/images/design/about.png"
          alt="Premium striped dress shirts"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGrid;
