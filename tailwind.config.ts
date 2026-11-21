import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          woodDark: "#7A1C18",
          woodLight: "#96241F",
          goldAntique: "#C59B27",
          goldSoft: "#F5E1A4",
          crimson: "#B91C1C",
          moss: "#2E6F40",
          amber: "#B45309",
          amberSoft: "#FEF3C7",
          emerald: "#1F5E3B",
          emeraldSoft: "#ECFDF5",
          indigo: "#1E3A5F",
          indigoSoft: "#EFF6FF",
          bronze: "#854D0E",
          ivory: "#FFFFFF",
          ivoryLight: "#FDF8F6",
          ivoryDeep: "#F9ECE8",
          ink: "#2B1816",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        museum: "0 12px 32px -10px rgba(122, 28, 24, 0.10)",
        museumHover: "0 18px 38px -12px rgba(122, 28, 24, 0.16)",
        cabinet: "0 18px 40px -12px rgba(92, 16, 14, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
