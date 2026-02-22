import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // These map to CSS variables so they respect dark/light theme
        ink: "var(--color-bg)",
        "ink-2": "var(--color-card)",
        "ink-3": "var(--color-alt)",
        line: "var(--color-line)",
        cyan: "var(--cyan)",
        purple: "var(--purple)",
        green: "var(--green)",
        amber: "var(--amber)",
        dim: "var(--color-dim)",
        muted: "var(--color-muted)",
        fg: "var(--color-fg)",
        border: "var(--color-line)",
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        card: { DEFAULT: "var(--color-card)", foreground: "var(--color-fg)" },
        primary: { DEFAULT: "var(--cyan)", foreground: "var(--color-bg)" },
        secondary: { DEFAULT: "var(--purple)", foreground: "var(--color-fg)" },
        ring: "var(--cyan)",
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
