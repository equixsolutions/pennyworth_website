module.exports = {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        lg2: "1300px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        overlay: "hsl(var(--overlay-bg))",
        "overlay-glass": "hsl(var(--overlay-glass))",
        "border-main": "hsla(var(--border-main))",
        danger: "hsl(var(--danger))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          background: "hsl(var(--secondary-background))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          secondary: "hsl(var(--muted-secondary))",
          secondary_light: "hsl(var(--muted-secondary-light))",
          background: "hsl(var(--muted-background))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      fontFamily: {
        cantata:["Playfair Display", "serif"],
        manrope: ["Manrope", "system-ui", "sans-serif"],
      },
      fontWeight: {
        thin: "200",
        regular: "400",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        "fs-lg": ["22px"],
        "fs-md": ["18px"],
        "fs-sm": ["16px"],
        "fs-xs": ["14px"],

        "ivy-50": ["50px", "60px"],
        "ivy-40": ["40px", "52px"],
        "ivy-32": ["32px", "100%"],
        "ivy-30": ["30px", "43px"],
        "ivy-28": ["28px", "35.2px"],
        "ivy-27": ["27px", "100%"],
        "ivy-26": ["26px", "43px"],
        "ivy-24": ["24px", "100%"],
        "ivy-18": ["18px", "34.47px"],
      },
      letterSpacing: {
        wide4: "0.04em",
        ivy: "0.04em",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
