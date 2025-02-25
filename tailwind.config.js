/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        BeVietNamPro: ["BeVietNamPro-Bold", "sans-serif"],
        "BeVietNamPro-Italic": ["BeVietNamPro-Italic", "sans-serif"],
        "BeVietNamPro-Light": ["BeVietNamPro-Light", "sans-serif"],
        "BeVietNamPro-Medium": ["BeVietNamPro-Medium", "sans-serif"],
        "BeVietNamPro-Regular": ["BeVietNamPro-Regular", "sans-serif"],
        "BeVietNamPro-SemiBold": ["BeVietNamPro-SemiBold", "sans-serif"],
        "BeVietNamPro-ExtraBold": ["BeVietNamPro-ExtraBold", "sans-serif"],   
      },
      colors: {
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
        },
        accent: {
          100: "#FBFBFD",
        },
        black: {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876",
          300: "#191D31",
        },
        danger: "#F75555",
        blue: "#0061FF",
      },
    },
  },
  plugins: [],
};
