/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#11081f",
          "200": "rgba(39, 28, 56, 0.7)",
        },
        white: "#fff",
        slateblue: {
          "100": "#733ca8",
          "200": "rgba(135, 80, 189, 0.85)",
        },
      },
      spacing: {},
      fontFamily: {
        "body-text": "Poppins",
        outfit: "Outfit",
      },
      borderRadius: {
        "13xl": "32px",
        "6xl": "25px",
      },
    },
    fontSize: {
      xl: "20px",
      "36xl": "55px",
      lg: "18px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
