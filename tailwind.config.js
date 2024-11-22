/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Primary-Green": "#9EDC63",
        "Primary-Yellow": "#FFD54F",
        "Primary-Orange": "#FF914D",
        "Primary-Gray": "#2D2F3A",
        "Secondary-Pink": "#FF8AB1",
        "Secondary-Blue": "#2D4381",
        "Secondary-Navy": "#26488C",
        "custom-Green": "#9EDC63",
        "custom-cream": "#FDF7E6",
        "custom-orange": "#FFBB36",
        "custom-yellow": "#FFF500",
        "custom-thick-yellow": "#FFE711",
        "custom-light-green": "#BDFF00",
        "custom-thick-orange": "#FF6B00",
        "custom-thick-red": "#FF0505",
        "custom-white": "#f8f9fa",
        "custom-gray": "#6A6A6A",
        "custom-dark-gray": "#000000CC",
        "custom-dark-green": "#24EE12",
        "custom-red": "#DF2D2D",
        "custom-button-color": "#00FF1A",
        "custom-light-gray": "#B7B7B2",
      },
      fontFamily: {
        "sf-pro": ['"SF Pro Display"', "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        malgun: ["Malgun Gothic", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        oxygen: ['"Oxygen"', "sans-serif"],
        fredoka: ["var(--font-fredoka)", "sans-serif"],
      },
      fontSize: {
        custom: ["28px", "57.28px"],
        "custom-h1": ["60px", { lineHeight: "1.2" }],
        "custom-lg": "18.31px",
        "custom-sm": "18.35px",
        "custom-md": "18.2px",
        "custom-xl": "48px",
        lg: "22px",
      },
      lineHeight: {
        custom: "47.28px",
        "custom-lg": "41.64px",
        "custom-sm": "22.21px",
        "custom-md": "25.45px",
        "custom-xl": "57.28px",
        "extra-loose": "55.82px",
      },
      letterSpacing: {
        "tight-custom": "-0.02em",
      },
      backgroundImage: {
        "dual-gradient":
          "linear-gradient(180deg, #3A76FF 5.23%, #173997 95%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
      },
      screens: {
        // Add your custom breakpoints if needed
      },
    },
  },
  plugins: [],
};
