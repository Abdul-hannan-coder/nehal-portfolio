import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Client brand palette: ONLY blue (#188BF6) + white, with neutral
        // black/grey for text (as in the reference). No navy.
        // Token names are kept from the original build to avoid churn.
        olive: "#188bf6", //  brand blue — buttons, accent surfaces, emphasis
        "olive-dark": "#f4f6f8", //  light neutral card surface
        gold: "#188bf6", //  brand blue — accent (text, icons, arrows)
        "gold-dark": "#0f6fd0", //  blue hover
        cream: "#f4f6f8", //  light neutral section background (near-white)
        ink: "#101828", //  near-black text
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Sora", "sans-serif"],
      },
      keyframes: {
        marq: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        omUp: {
          from: { opacity: "0", transform: "translateY(26px)" },
          to: { opacity: "1", transform: "none" },
        },
        pageIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "none" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marq: "marq 90s linear infinite",
        omUp: "omUp .6s cubic-bezier(.2,.7,.2,1) both",
        pageIn: "pageIn .5s cubic-bezier(.2,.7,.2,1) both",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
