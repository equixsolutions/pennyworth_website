import Linkedin from "@/assets/svg/LinkedIn.svg";
import Instagram from "@/assets/svg/Instagram.svg";
import Facebook from "@/assets/svg/Facebook.svg";
import Youtube from "@/assets/svg/youtube.svg";
import x from "@/assets/svg/X.svg";

import {
  ArrowUpRight,
  ShieldCheck,
  Factory,
  Boxes,
  Palette,
  Leaf,
} from "lucide-react";

export const menuItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];

export const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: x, href: "#", label: "Twitter" },
];

export const values = [
  { id: 0, heading: "ISO 9001", subHeading: "2015 Certified" },
  { id: 1, heading: "10+ Years", subHeading: "Experience" },
  { id: 2, heading: "100+", subHeading: "Corporate Clients" },
  { id: 3, heading: "Worldwide", subHeading: "Shipping" },
  { id: 4, heading: "500", subHeading: "Pieces Min. Order" },
];
export const features = [
  {
    icon: ShieldCheck,
    title: "Certified Safety Standards",
    description: "EN ISO 11612, NFPA 2112, EN 1149 compliant",
  },
  {
    icon: Factory,
    title: "Competitive Factory Pricing",
    description: "Direct manufacturer rates with no middlemen",
  },
  {
    icon: Boxes,
    title: "Seamless Bulk Production",
    description: "500 to 550,000+ pieces delivered on time",
  },
  {
    icon: Palette,
    title: "Custom Design Excellence",
    description:
      "Full branding, embroidery, and color matching and panton Dying",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description: "Eco-friendly materials and ethical manufacturing",
  },
];
