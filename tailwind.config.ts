import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B16",
        "ink-2": "#111827",
        "ink-3": "#1a2235",
        line: "#1E2D45",
        cyan: "#00C2FF",
        purple: "#7C3AED",
        green: "#10B981",
        amber: "#F59E0B",
        dim: "#94A3B8",
        muted: "#64748B",
        border: "#1E2D45",
        background: "#070B16",
        foreground: "#F1F5F9",
        card: { DEFAULT: "#111827", foreground: "#F1F5F9" },
        primary: { DEFAULT: "#00C2FF", foreground: "#070B16" },
        secondary: { DEFAULT: "#7C3AED", foreground: "#F1F5F9" },
        ring: "#00C2FF",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grad: "linear-gradient(90deg,#00C2FF,#7C3AED)",
      },
      animation: {
        "orb-drift": "orbDrift 22s ease-in-out infinite alternate",
        "pulse-dot": "pulseDot 2s infinite",
        float: "float 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        blink: "blink 1s step-end infinite",
        "word-in": "wordIn 0.65s ease forwards",
        "tool-in": "toolIn 0.45s ease forwards",
        "nav-in": "navIn 0.6s 0.15s both",
      },
      keyframes: {
        orbDrift: {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(30px,40px) scale(1.08)" },
        },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(16,185,129,0.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(16,185,129,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(16,185,129,0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        wordIn: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        toolIn: {
          to: { opacity: "1", transform: "translateX(0)" },
        },
        navIn: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
