/* global module */
/* global __dirname */
const path = require("path");

module.exports = {
  resolve: {
    modules: [
      'components',
      'node_modules',
    ],
    alias: {
      "@selfpub-ui": path.resolve("src"),
    },
  },
};
