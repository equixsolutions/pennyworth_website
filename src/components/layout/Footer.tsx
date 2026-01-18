import React from "react";
// import ArrowRight from "@/assets/svg/Arrow_right.svg";
import {
  footerLinksData,
  navigationLinks,
  visitUsData,
} from "@/constance/home";

export default function Footer() {
  return (
    <footer className="relative ">
      <section className="relative bg-primary overflow-hidden md:h-auto h-[1000px]">
        <img
          src="/assets/images/design/footer_cover.png"
          alt="Footer Background"
          className="block absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/50" />

        <div className="relative z-10 px-4 md:px-10 pb-5 pt-12 md:py-[85px]">
          <h2 className="text-secondary md:text-body-md text-body-sm mb-10 md:mb-[53px]">
            Ready to Get Started?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10">
              {footerLinksData.map((link, i) => (
                <div key={i} className="w-[250px]">
                  <div className="flex justify-between mb-4">
                    <span className="text-secondary text-base md:text-body-md-bold text-body-sm-bold">
                      {link.label}
                    </span>
                    {/* <ArrowRight className="text-secondary" /> */}
                  </div>
                  <hr className="border-muted-secondary_light mb-3" />
                  <p className="text-muted-secondary md:text-body-md text-body-xs">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-[350px] md:hidden block" />
      <section className="bg-secondary px-4 md:px-[43px] md:pt-[40px]">
        <div className="max-w-md">
          <img
            src="/assets/images/design/penny-wort-logo_black.png"
            alt="Logo"
            className="w-[120px] md:w-[177px] mb-6"
          />

          <p className="text-primary md:text-body-md text-body-sm mb-4">
            Partner with India&apos;s Most Trusted <br />
            Workwear Manufacturer
          </p>

          <p className="text-primary md:text-body-md text-body-sm leading-6">
            Minimum Order: 500 Pieces | Worldwide Shipping |{" "}
            <br className="md:hidden block" /> ISO 9001:2015 Certified
          </p>
        </div>

        <hr className="mt-10" />

        <div className="flex flex-col md:flex-row justify-between text-body-xs text-primary/50 gap-3 my-4">
          <span>© 2025 Pennyworth Clothing | All rights reserved.</span>
          <span>Powered by Equixsolutions</span>
        </div>
      </section>

      <div className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[90%] max-w-[680px] bg-secondary-background text-secondary px-6 py-8 z-30 md:top-[120px] md:left-auto md:right-[10px] lg:right-[63px] md:translate-x-0 md:w-[50%] md:px-[56px] md:py-[48px]">
        <h2 className="md:text-body-lg text-body-sm mb-10">Visit Us</h2>

        {visitUsData.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="md:text-body-md text-body-sm mb-3">{section.title}</h3>

            <hr className="border-muted-secondary_light/40 mb-3" />

            <div className="space-y-1">
              {section.lines.map((line, i) => (
                <p
                  key={i}
                  className={`md:text-body-lg text-body-xs ${
                    section.highlightLast && i === section.lines.length - 1
                      ? "text-danger"
                      : "text-muted-secondary"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}

        <nav className="flex flex-col lg:flex-row items-start md:gap-6 gap-2 text-base">
          {navigationLinks.map((link, i) => (
            <button key={i} className="hover:opacity-70 text-xsm md:text-m-sm">
              {link}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
