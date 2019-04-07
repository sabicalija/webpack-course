const { resolve } = require("path");

module.exports = {
  entry: {
    main: ["./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist"
  }
};
