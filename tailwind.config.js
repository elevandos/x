/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        roboto : ["Roboto", "sans-serif"],
      },
      opacity: {
        98: "0.98",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "boyner-cinnabar": {
          DEFAULT: "#EB3E3A",
          10: "#FDECEC",
        },
        "boyner-neon": "#DBFC00",
        "boyner-neon-text" : "#D5DC32",
        "boyner-very-peri": {
          DEFAULT: "#2C3CC2",
          10: "#EAECF9",
        },
        "boyner-niagara": {
          DEFAULT: "#277C2E",
          10: "#EAF2E9",
        },
        "boyner-bn-green": {
          DEFAULT: "#45DACC",
          10: "#C7F3FF",
        },
        "boyner-agenda": "#EDEDEE",
        "boyner-about": "#D5DD32",
        "boyner-marigold": "#f49123",
        "boyner-code-black": "#2B2B38",
        "boyner-mine-shaft": "#515151",
        "boyner-dusty-gray": "#999999",
        "boyner-alto": "#BBBBBB",
        "boyner-gallery": "#D0D1D3",
        "boyner-alabaster": "#E5E5E5",
        "boyner-bg-color": "#F8F6F7",
        "boyner-skeleton": {
          DEFAULT: "#EEEEEE",
          10: "#F8F6F7",
        },
      },
      boxShadow: {
        "hover-1": "1px 1px 0 0 rgba(43,43,56,1.0)",
        "hover-2": "2px 2px 0 0 rgba(255,255,255,1.0)",
        "shadow-regular": "0px 0px 8px rgba(0, 0, 0, 0.08)",
        "shadow-medium": "1px 2px 4px rgba(0, 0, 0, 0.16)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
