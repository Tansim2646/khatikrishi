/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "320px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // write betuiful ovelay animation keyframe
        "overlay-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "overlay-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "dropdown-down": "dropdown-down 0.2s ease-out",
        "dropdown-up": "dropdown-up 0.3s ease-out",
        "overlay-in": "overlay-in 0.2s ease-out",
        "overlay-out": "overlay-out 0.2s ease-out",
      },
      colors: {
        neutral: {
          50: "#F9FAFA",
          100: "#EDEFEF",
          200: "#DBE0DE",
          300: "#C9D0CE",
          400: "#B7C0BE",
          500: "#879692",
          600: "#64726E",
          700: "#434C49",
          800: "#212625",
          900: "#111312",
        },
        primary: {
          50: "#EBFEF9",
          100: "#C4FBED",
          200: "#75F5D4",
          300: "#26EFBB",
          400: "#0DB388",
          500: "#06503D",
          600: "#053C2E",
          700: "#03281F",
          800: "#02140F",
          900: "#010A08",
        },
        secondary: {
          50: "#F8FBF5",
          100: "#EBF3E0",
          200: "#D8E6C0",
          300: "#C4DAA1",
          400: "#B1CE82",
          500: "#799D3E",
          600: "#5B762F",
          700: "#3D4F1F",
          800: "#1E2710",
          900: "#0F1408",
        },
        overlay: {
          100: "#959595",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
