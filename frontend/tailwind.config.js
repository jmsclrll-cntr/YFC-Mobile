/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ui: {
          bg: '#F2F2F7',
          surface: '#FFFFFF',
          border: '#E5E5EA',
          text: '#1C1C1E',
          muted: '#8E8E93',
          accent: '#3D991A',
          'accent-light': '#E8F5E3',
        },
      },
    },
  },
  plugins: [],
}