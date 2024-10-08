/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "860px",
      lg: "1200px",
    },
    colors: {
      red: { primary: "#e30818", secondary: "#ef4444", tertiary: "#b91c1c" },
      gray: { primary: "#a1a1a1", secondary: "#fafafa" },
      green: "#22c55e",
      yellow: "#facc15",
      white: "#ffffff",
      slate: { primary: "#f1f5f9", secondary: "#e2e8f0" },
      black: "#0f172a",
      sky: "#f3fafb",
    },
    fontFamily: {
      cairo: ["Cairo"],
    },
  },
  plugins: [],
};
