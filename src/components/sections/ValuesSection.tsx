import Image from "next/image";
import ValueCard from "../common/ValueCard";

const ValuesSection = () => {
  return (
    <section className="w-full md:px-10 px-5 md:mt-24 ">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2">
        <div className="relative h-[200px] md:aspect-square md:h-auto md:order-1">
          <Image
            src="/assets/images/design/value_1.png"
            alt="Sustainability"
            fill
            className="object-cover"
          />
        </div>

        <ValueCard
          title={
            <>
              Sustainability <br className="md:block hidden" /> Commitment
            </>
          }
          order="md:order-2"
          mobileHeight
        />
        <div className="relative h-[200px] md:aspect-square md:h-auto md:order-3">
          <Image
            src="/assets/images/design/value_2.png"
            alt="Fast Turnaround"
            fill
            className="object-cover"
          />
        </div>

        <ValueCard
          title={
            <>
              Fast <br className="md:block hidden" /> Turnaround
            </>
          }
          order="md:order-4"
          mobileHeight
        />
        <div className="relative h-[200px] md:aspect-square md:h-auto md:order-6">
          <Image
            src="/assets/images/design/value_3.png"
            alt="Global Standards"
            fill
            className="object-cover"
          />
        </div>

        <ValueCard
          title={
            <>
              Global Standards, <br className="md:block hidden" /> Local Prices
            </>
          }
          order="md:order-5"
          mobileHeight
        />
        <div className="relative h-[200px] md:aspect-square md:h-auto md:order-8">
          <Image
            src="/assets/images/design/value_4.png"
            alt="Customization"
            fill
            className="object-cover"
          />
        </div>

        <ValueCard
          title={
            <>
              Complete <br className="md:block hidden" /> Customization
            </>
          }
          order="md:order-7"
          mobileHeight
        />
      </div>
    </section>
  );
};

export default ValuesSection;
