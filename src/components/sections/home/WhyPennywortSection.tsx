"use client";

import Image from "next/image";
import { CertLogo } from "../../common/CertLogo";

export default function WhyPennywortSection() {
  return (
    <section className="bg-secondary text-primary md:px-10 px-5 md:mt-24 ">
      <div className="">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2">
          Why Pennywort Leads the Industry
        </h2>
        <hr className="border-t border-main border-muted-foreground/50" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:text-body-md text-body-sm leading-relaxed text-primary mt-10">
          <div className="space-y-4">
            <p>
              At Pennywort Limited (PW), we connect global businesses with the
              power of India’s leading production sectors.
            </p>

            <p>
              We collaborate with some of the biggest and most trusted companies
              in India to bring high-quality products to life. Over the years,
              PW has built strong, long-term relationships with top
              manufacturers across the country—giving us unmatched access to
              India’s production capacity.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              With our nationwide network, PW can manufacture and deliver almost
              any product on time and at scale, ensuring consistency,
              reliability, and competitive turnaround.
            </p>

            <p>
              Our reputation for trust, transparency, and deep connection with
              high-end companies worldwide makes Pennywort Limited a preferred
              partner for businesses seeking quality production and seamless
              delivery.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-20 mb-10 md:text-m-md text-xm">
          <span>★</span>
          <span className="text-body-lg">We are Certified by</span>
          <span>★</span>
        </div>
        <div className="relative flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] md:w-[680px] md:h-[680px]">
            <Image
              src="/assets/images/design/glob.png"
              alt="Global Certifications"
              fill
              className="object-contain opacity-90"
              priority
            />
            <CertLogo
              src="/assets/images/logo/EGAC.png"
              className="top-[4%] md:top-[0%] left-[40%] -translate-x-1/2"
            />

            <CertLogo
              src="/assets/images/logo/QRO.png"
              className="top-[22%] left-[5%]"
            />

            <CertLogo
              src="/assets/images/logo/EGAC.png"
              className="top-[20%] right-[6%]"
            />

            <CertLogo
              src="/assets/images/logo/ISO.png"
              className="top-[53%] left-[14%] -translate-y-1/2"
            />

            <CertLogo
              src="/assets/images/logo/QVA.png"
              className="top-[27%] right-[35%] -translate-y-1/2"
            />
            <CertLogo
              src="/assets/images/logo/GMP.png"
              className="top-[50%] right-[24%] -translate-y-1/2"
            />

            <CertLogo
              src="/assets/images/logo/IAF.png"
              className="top-[30%] left-[30%]"
            />

            <CertLogo
              src="/assets/images/logo/CE.png"
              className="bottom-[30%] right-[5%]"
            />

            <CertLogo
              src="/assets/images/logo/QVA_2.png"
              className="bottom-[16%] left-[74%] -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
