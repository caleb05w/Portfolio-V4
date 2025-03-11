/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-orange": "#FF7F32", // Custom orange color
      },
      transitionTimingFunction: {
        // "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        // "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        slowEase: "cubic-bezier(0.7, 0, 0.2, 1)",
        fastEase: "cubic-bezier(0.62, 0.61, 0.02, 1)",
        fastfastEase: "cubic-bezier(0.5,0,0,1)",
      },
      transitionProperty: {
        width: "width",
        all: "all, border-radius",
      },
      animation: {
        openCase: "openCase 0.6s ease-out forwards",
        closeCase: "closeCase 0.4s ease-out forwards",
        // BGopenCase: "BGOpenCase 0.4s ease-out forwards",
        // BGcloseCase: "BGCloseCase 0.6s ease-out forwards",
      },
      keyframes: {
        openCase: {
          "0%": {
            top: "20vh",
            transform: "scale(0.9)",
            opacity: "0",
          },

          "100%": {
            top: "10vh",
            transform: "scale(1)",
            opacity: "1",
          },
        },
        closeCase: {
          "0%": {
            top: "10vh",
            transform: "scale(1)",
            opacity: "1",
          },

          "100%": {
            top: "20vh",
            transform: "scale(0.9)",
            opacity: "0",
          },
        },

        BGOpenCase: {
          "0%": {
            top: "20vh",
            transform: "scale(0.9)",
            opacity: "1",
          },

          "100%": {
            top: "10vh",
            transform: "scale(1)",
            opacity: "1",
          },
        },
        BGCloseCase: {
          "0%": {
            top: "10vh",
            transform: "scale(1)",
            opacity: "1",
          },

          "100%": {
            top: "20vh",
            transform: "scale(0.9)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
