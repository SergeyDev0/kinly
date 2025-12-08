const vars = require("./theme-vars.json");

const toTailwindColors = Object.fromEntries(
  Object.entries(vars).map(([key, value]) => [
    key.replace(/^--/, ""), // drop the leading `--`
    `var(${key})`,
  ])
);

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: toTailwindColors,
    },
		screens: {
      xs: "320px",
			xxs: "360px",
			sm: "425px",
			ssm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1920px",
    },
  },
};
