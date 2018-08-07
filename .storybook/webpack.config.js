/* global module */
/* global __dirname */
const path = require("path");

console.log(path.resolve("src"))

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
  module: {
    rules: [
      {
        test: /\.(woff2?|ttf|eot|svg|jpe?g|png|gif)$/,
        use: ["file-loader?name=[path][name].[hash:8].[ext]"],
      },
    ]
  }
};
