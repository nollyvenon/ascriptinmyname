module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f7f7f7",
          500: "#949494",
          600: "#6c6c71",
          700: "#565656",
          900: "#131313",
          "900_01": "#111111",
        },
        black: {
          "900_3d": "#0000003d",
          "900_19": "#00000019",
          "900_1e": "#0000001e",
        },
        orange: { A200: "#dcb53e" },
        blue_gray: { 900: "#232233" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        dmsans: "DM Sans",
        sfprotext: "SF Pro Text",
        josefinsans: "Josefin Sans",
      },
      boxShadow: {
        bs: "0px 4px  64px 0px #0000001e",
        bs1: "0px 1px  10px 0px #00000019",
        bs2: "0px 10px  100px 0px #0000003d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
