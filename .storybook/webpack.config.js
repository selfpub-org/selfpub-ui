/* global module */
/* global __dirname */
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [path.resolve(__dirname, "../src/assets/icons")],
        options: {
          extract: false,
          runtimeCompat: true,
          esModule: false,
          spriteFilename: "icons.svg",
        },
      },
    ],
  },
  resolve: {
    modules: ["components", "node_modules"],
    alias: {
      "@selfpub-ui": path.resolve("src"),
    },
  },
};
