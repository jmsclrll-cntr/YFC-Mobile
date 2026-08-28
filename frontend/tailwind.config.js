/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        glass: {
          light: "rgba(255, 255, 255, 0.15)",
          border: "rgba(255, 255, 255, 0.25)",
          dark: "rgba(15, 23, 42, 0.45)",
          accent: "rgba(139, 92, 246, 0.25)",
        },
        yfc: {
          purple: "#7c3aed",
          pink: "#ec4899",
          cyan: "#06b6d4",
          violet: "#8b5cf6",
          dark: "#0b0914",
        }
      },
    },
  },
  plugins: [],
}
