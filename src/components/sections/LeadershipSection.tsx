import Image from "next/image";
import Comma from "@/assets/svg/comma.svg";

const LeadershipSection = () => {
  return (
    <section className="md:px-10 px-5 pb-5">
      <div className="mb-12">
        <h2 className="text-m-md mb-2">Meet Our Leadership</h2>
        <hr className="border-t border-main" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 ">
        <div className="relative w-full flex items-end h-[320px] md:h-[420px] order-2 lg:order-1">
          <Image
            src="/assets/images/persons/anand_paul.png"
            alt="Anand Paul"
            width={"320"}
            height={"320"}
            className="object-contain"
          />
          <div className="lg:hidden lg:col-span-2 flex flex-col justify-end">
            <h3 className="heading-l-lg">Anand Paul</h3>
            <p className="text-xsm">Managing Director</p>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-6 order-1 lg:order-2">
          <p className="text-sm text-gray-700 leading-7">
            With over 10 years in textile manufacturing and industrial safety
            apparel, Anand Paul has steered Pennywort from a regional player to
            a nationally recognized brand. His vision of combining international
            quality standards with competitive pricing has been the cornerstone
            of Pennywort’s growth.
          </p>
          <div className="relative">
            <span className="flex justify-end relative top-10 sm:top-auto text-[120px] leading-none text-gray-200 font-serif">
              <Comma />
              <Comma />
            </span>

            <p className="absolute top-[0px] lg:top-[170px] text-sm text-gray-700 leading-7 z-10">
              Every piece of workwear we produce carries the weight of someone’s
              safety. That responsibility drives us to never compromise on
              quality, no matter the order size or timeline pressure.{" "}
              <br className="lg:hidden block" />
              <span>— AnandPaul</span>
            </p>
          </div>
          <div className="lg:block lg:col-span-2 mt-20 hidden">
            <h3 className="lg:heading-xmd">Anand Paul</h3>
            <p className="text-m-sm">Managing Director</p>
          </div>
        </div>
      </div>
      <hr className="border-t border-main" />
    </section>
  );
};

export default LeadershipSection;
