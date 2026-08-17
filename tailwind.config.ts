import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05050A",
          900: "#0A0A11",
          850: "#0F0F18",
          800: "#14141F",
          700: "#1C1C29",
          600: "#2A2A3A",
        },
        indigo: {
          400: "#8B7CFF",
          500: "#6E5DF6",
          600: "#5A48E0",
        },
        cyan: {
          400: "#4DE8F4",
          500: "#22D3EE",
        },
        amber: {
          400: "#FFC369",
          500: "#F5A623",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,5,10,1) 85%)",
        "radial-glow":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        "glow-indigo": "0 0 40px -5px rgba(110, 93, 246, 0.45)",
        "glow-cyan": "0 0 40px -5px rgba(34, 211, 238, 0.35)",
        "glow-amber": "0 0 40px -5px rgba(245, 166, 35, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "drift-slow": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.08)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "drift-slow-2": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-4%, 5%) scale(1.05)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "drift-slow": "drift-slow 18s ease-in-out infinite",
        "drift-slow-2": "drift-slow-2 22s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        shimmer: "shimmer 3s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
