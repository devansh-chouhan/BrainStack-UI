/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🌿 Base
        background: "#F2EAE0",
        surface: "#FFFFFF",

        // 🎨 Your Palette
        primary: "#9B8EC7", // main actions
        primaryHover: "#887AC0",

        secondary: "#B4D3D9", // sidebar / soft surfaces
        secondaryHover: "#A0C4CB",

        accent: {
          500: "#d9bdedff",
          600: "#bda6ce",
        }, // tags / secondary buttons

        // 📝 Text
        textPrimary: "#2E2E2E",
        textSecondary: "#6B6B6B",
        textMuted: "#9E9E9E",

        // 📌 UI States
        border: "#E0E0E0",
        highlight: "#E6DDF5",

        // ⚠️ Semantic Colors
        success: "#A8D5BA",
        warning: "#F6C177",
        error: "#E27D7D",
        info: "#B4D3D9",

        // 🌑 Optional Dark Mode (future)
        darkBg: "#1E1E2F",
        darkSurface: "#2A2A40",
      },
    },
  },
  plugins: [],
};
