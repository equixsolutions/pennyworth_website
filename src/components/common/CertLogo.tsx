import Image from "next/image";

type Props = {
  src: string;
  className: string;
};

export function CertLogo({ src, className }: Props) {
  return (
    <div
      className={`absolute w-10 h-10 md:w-24 md:h-24  
      flex items-center justify-center ${className}`}
    >
      <Image
        src={src}
        alt="Certification"
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
}
