import Image from "next/image";

function CertItem({
  src,
  desc,
  showDivider,
  width,
}: {
  src: string;
  desc: string;
  showDivider?: boolean;
  width: string;
}) {
  return (
    <div className={`relative flex flex-col items-center text-center ${width}`}>
      <div className="relative w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] mb-3">
        <Image src={src} alt={desc} fill className="object-contain" />
      </div>
      <div className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
        {desc}
      </div>
      {showDivider && (
        <span className="absolute right-[-4%] top-4 h-16 w-px bg-primary/20" />
      )}
    </div>
  );
}

export default CertItem;
