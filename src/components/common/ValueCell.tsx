import Points from "@/assets/svg/penny_points.svg";
import PennyWort from "@/assets/svg/penny_wort.svg";
import Image from "next/image";
function ValueCell({
  text,
  isRight,
  isBottom,
}: {
  text: string;
  isRight: boolean;
  isBottom: boolean;
}) {
  return (
    <div
      className={`
        relative p-6 md:p-8 flex items-center gap-4
        ${isRight ? "border-r border-primary/30" : ""}
        ${isBottom ? "border-b border-primary/30" : ""}
      `}
    >
      <span className="shrink-0 mt-1">
        <Points />
      </span>
      <Image
        src="/assets/images/logo/values.png"
        alt="values"
        width={40}
        height={40}
        className="object-cover absolute right-0 bottom-0"
      />
      <p className="text-sm md:text-base leading-relaxed max-w-sm">{text}</p>
      <div className="absolute right-4 bottom-4 opacity-[0.05] pointer-events-none">
        <PennyWort className="w-16 h-auto" />
      </div>
    </div>
  );
}

export default ValueCell;
