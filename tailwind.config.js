/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Gilroy",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        // 🌿 Base colors for a clean SaaS look
        background: "#F8FAFC", // Slate 50
        surface: "#FFFFFF",
        
        // 🎨 Primary Brand Palette (Indigo)
        primary: {
          DEFAULT: "#4F46E5", // Indigo 600
          hover: "#4338CA",    // Indigo 700
          light: "#EEF2FF",    // Indigo 50
        },

        // 🎨 Secondary Palette (Slate/Blue)
        secondary: {
          DEFAULT: "#64748B", // Slate 500
          hover: "#475569",    // Slate 600
          light: "#F1F5F9",    // Slate 100
        },

        // 🎨 Accent colors
        accent: {
          purple: "#8B5CF6",
          pink: "#EC4899",
          amber: "#F59E0B",
        },

        // 📝 Text Hierarchy
        text: {
          primary: "#0F172A",   // Slate 900
          secondary: "#475569", // Slate 600
          muted: "#94A3B8",     // Slate 400
        },

        // 📌 UI States
        border: "#E2E8F0",      // Slate 200
        input: "#F1F5F9",       // Slate 100
        ring: "#CBD5E1",        // Slate 300

        // ⚠️ Semantic Colors
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",

        // 🌑 Dark Mode (Ready for implementation)
        dark: {
          bg: "#0F172A",
          surface: "#1E293B",
          border: "#334155",
          text: "#F8FAFC",
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
};
