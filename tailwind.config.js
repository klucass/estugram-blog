/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          success: "#01d1d1",
          error: "#fe0f62",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        blue: "#376eff",
        red: "#fe0f62",
        purple: "#5a35b6",
        green: "#01d1d1",
      },
      fontFamily: {
        poppins: ["poppins, sans-serif"],
        poppinsbold: ["Poppins-Bold"],
        poppinsextra: ["Poppins-ExtraBold"],
      },
    },
  },
  plugins: [require("daisyui")],
};
