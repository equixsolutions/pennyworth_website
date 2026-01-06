import CertItem from "@/components/common/CertItem";
import Image from "next/image";

const rowOne = [
  {
    src: "/assets/images/logo/iso_certification.png",
    desc: "2015 Quality Management",
  },
  {
    src: "/assets/images/logo/EN_certification.png",
    desc: "Heat & Flame Protection",
  },
  {
    src: "/assets/images/logo/NFPA_certification.png",
    desc: "Flash Fire Protection",
  },
  {
    src: "/assets/images/logo/EN_1149_certification.png",
    desc: "Anti-Static Properties",
  },
];

const rowTwo = [
  {
    src: "/assets/images/logo/EN_ISO_certification.png",
    label: "EN ISO 20471",
    desc: "High Visibility Clothing",
  },
  {
    src: "/assets/images/logo/ASTM_certification.png",
    desc: "Arc-Rated and Flame-Resistant Protective Clothing",
  },
  {
    src: "/assets/images/logo/oeko_certification.png",
    desc: "Textile Safety (Select Products)",
  },
];

 function CertificationsSection() {
  return (
    <section className="bg-secondary md:mb-10 py-14 md:py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className="md:text-m-md text-xm">★</span>
          <h2 className="md:text-m-md md:text-xm  tracking-wide uppercase">
            Certifications & Compliance
          </h2>
          <span className="md:text-m-md text-xm ">★</span>
        </div>

        <div className="flex md:justify-center justify-between">
          {rowOne.map((item, i) => (
            <CertItem
              key={i}
              {...item}
              width="w-[20%]"
              showDivider={i !== rowOne.length - 1}
            />
          ))}
        </div>

        <div className="flex justify-center md:gap-0 gap-[30px] mt-16">
          {rowTwo.map((item, i) => (
            <CertItem
              key={i}
              {...item}
              width="w-[24%]"
              showDivider={i !== rowTwo.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default CertificationsSection