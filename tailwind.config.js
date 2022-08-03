module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inconsolata: ["Inconsolata"],
    },
    extend: {
      colors: {
        "petit-purple": "#7F87BD",
        "petit-light-purple": "#CFD3F1",
        "petit-grey": "#4F4F4F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
