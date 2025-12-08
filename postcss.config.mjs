import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const config = {
  plugins: {
    "postcss-export-custom-variables": {
      exportTo: path.resolve(configDir, "theme-vars.json"),
    },
    tailwindcss: {},
    autoprefixer: {}, 
  },
};

export default config;
