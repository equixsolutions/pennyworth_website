import ValueCell from "@/components/common/ValueCell";
import { values } from "@/constance/aboutUs";

export default function PartnerValuesSection() {
  return (
    <section className="bg-secondary ">
      <div className="px-5 md:px-0 ">
        <div className="mb-10 px-5 md:px-10 ">
          <h2 className="">
            What Our Partners Value Most
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-primary/30">
          {values.map((text, i) => (
            <ValueCell
              key={i}
              text={text}
              isRight={(i + 1) % 3 !== 0}
              isBottom={i < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

