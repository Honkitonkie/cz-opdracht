module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#393938",
        },
        grey: {
          DEFAULT: "#bfbfbb",
        },
        yellow: {
          DEFAULT: "#FFC938",
        },
      },
    },
    fontFamily: {
      sans: '"Arial"',
    },
    fontSize: {
      base: ["16px", "24px"],
    },
  },
  plugins: [],
};
