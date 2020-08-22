const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    historyApiFallback: true,
    contentBase: "./",
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env"),
    }),
  ],
});
