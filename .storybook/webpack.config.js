/* global module */
/* global __dirname */
const path = require("path");

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "production";
const isProduction = NODE_ENV === "production";

module.exports = {
  resolve: {
    modules: [
      'components',
      'node_modules',
    ],
    alias: {
      "@selfpub-ui": path.resolve(isProduction ? "dist/index.esm.js" : "src//components/index.js"),
    },
  },
};
