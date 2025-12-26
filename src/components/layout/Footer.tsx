import React from "react";

const footerLinksData = [
  {
    label: "Request a Quote",
    description: "Get custom pricing for your bulk order",
  },
  { label: "Order Samples", description: "Test quality before bulk order" },
  {
    label: "Design Your Uniform",
    description: "Use our online customization tool",
  },
  {
    label: "Download Catalog",
    description: "Browse our complete product range",
  },
];

const navigationLinks = [
  "HOME",
  "ABOUT US",
  "CUSTOMIZE WEAR",
  "BLOG",
  "CONTACT US",
];
function Footer() {
  return (
    <footer className="relative mt-8 md:mt-[183px]">
      <div className="relative w-full h-auto md:h-[586px] bg-black py-8 md:py-0">
        <img
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          alt="Rectangle"
          src="/assets/images/design/footer_cover.png"
        />
        <div className="inset-0 bg-black opacity-60" />

        <div className="relative z-10 px-4 md:px-[63px] py-6 md:py-[85px]">
          {/* Heading */}
          <div className="[font-family:'Manrope',Helvetica] font-normal text-white text-lg md:text-[22px] mb-8 md:mb-[83px]">
            Ready to Get Started?
          </div>

          {/* Two Halves */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT HALF – 2x2 GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {footerLinksData.map((link, index) => (
                <div key={index}>
                  {/* Label + Arrow */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-base md:text-lg">
                      {link.label}
                    </span>
                    <img
                      src="/figmaAssets/arrow-1.svg"
                      alt="Arrow"
                      className="w-3 h-3"
                    />
                  </div>

                  {/* Divider */}
                  <hr className="border-white/30 mb-3" />

                  {/* Description */}
                  <p className="[font-family:'Manrope',Helvetica] text-[#bbbbbb] text-sm md:text-lg leading-relaxed">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>

      <div className="relative px-4 md:px-[63px] py-6 md:py-[66px]">
        {/* TWO HALVES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT HALF — Logo + Text (LIKE IMAGE) */}
          <div className="max-w-md">
            <img
              className="w-[120px] md:w-[177px] h-auto mb-6"
              alt="Pennywort Logo"
              src="/assets/images/design/penny-wort-logo_black.png"
            />

            <p className="font-manrope text-black text-base md:text-lg mb-4">
              Partner with India&apos;s Most Trusted <br />
              Workwear Manufacturer
            </p>

            <p className="font-manrope text-black text-xs md:text-sm leading-6">
              Minimum Order: 500 Pieces | Worldwide Shipping | ISO 9001:2015
              Certified
            </p>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <hr className="my-6 md:my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-black gap-3">
          <span>© 2025 Pennyworth Clothing | All rights reserved.</span>
          <span>Powered by Equixsolutions</span>
        </div>
      </div>
      <div className="block absolute top-[146px] right-[3px] w-[682px] bg-[#131313] px-[56px] py-[48px] text-white">
        {/* Title */}
        <h2 className="font-manrope text-[22px] font-normal mb-10">Visit Us</h2>

        {/* Address */}
        <div className="mb-12">
          <h3 className="font-manrope text-lg font-medium mb-3">Address</h3>
          <hr className="border-white/40 mb-6" />
          <p className="font-manrope text-lg text-[#bbbbbb] leading-8">
            2nd Floor, AIM Shopping Complex <br />
            Vivekananda Road, Opposite Police Station <br />
            Adimaly - 685561, Idukki District <br />
            Kerala, India
          </p>
        </div>

        {/* Contact */}
        <div className="mb-12">
          <h3 className="font-manrope text-lg font-medium mb-3">Contact</h3>
          <hr className="border-white/40 mb-6" />

          <div className="space-y-4 text-[#bbbbbb] text-lg">
            <div className="flex items-center gap-4">
              <img src="/icons/phone.svg" className="w-5 h-5" />
              <span>+91-9446666055 | +91-9447544448</span>
            </div>

            <div className="flex items-center gap-4">
              <img src="/icons/mail.svg" className="w-5 h-5" />
              <span>office@pennywort.in</span>
            </div>

            <div className="flex items-center gap-4">
              <img src="/icons/web.svg" className="w-5 h-5" />
              <span>www.pwort.com</span>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mb-12">
          <h3 className="font-manrope text-lg font-medium mb-3">
            Business Hours
          </h3>
          <hr className="border-white/40 mb-6" />

          <div className="flex items-center justify-between text-lg">
            <span className="text-[#bbbbbb]">
              Monday – Friday: 9:00 AM – 6:00 PM
            </span>
            <span className="text-[#c42323]">Sat – Sunday: Closed</span>
          </div>
        </div>

        <nav className="flex gap-6 text-base">
          {navigationLinks.map((link, index) => (
            <button
              key={index}
              className="font-manrope text-white hover:opacity-70 transition"
            >
              {link}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
