import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const NavigationMenu = ({ isOpen, onClose }: NavigationMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-overlay/95 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Menu content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative z-10 flex flex-col justify-between h-full p-8 md:p-16"
          >
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full border border-muted-foreground/30 flex items-center justify-center text-muted-foreground hover:text-hero-dark-foreground hover:border-hero-dark-foreground transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu items */}
            <nav className="flex-1 flex flex-col justify-center">
              <ul className="space-y-0">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="border-b border-menu-border"
                  >
                    <a
                      href={item.href}
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={onClose}
                      className="group flex items-center justify-between py-5 md:py-6 transition-colors duration-300"
                    >
                      <span
                        className={`font-serif text-3xl md:text-5xl transition-all duration-300 ${
                          hoveredItem === null || hoveredItem === item.label
                            ? "text-hero-dark-foreground"
                            : "text-muted-foreground/40"
                        }`}
                      >
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${
                          hoveredItem === item.label
                            ? "text-hero-dark-foreground translate-x-0 opacity-100"
                            : "text-muted-foreground -translate-x-2 opacity-50"
                        }`}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-6"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-hero-dark-foreground transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavigationMenu;
