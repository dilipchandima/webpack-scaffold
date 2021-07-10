const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const autoprefixer = require("autoprefixer");
module.exports = {
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new ImageminWebpWebpackPlugin(),
    // new autoprefixer(),
    // new HtmlWebpackPlugin({ template: "index.html", inject: true }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "*.html" }],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", {loader:"postcss-loader",options: {
          postcssOptions: {
            plugins: [
              [
                "autoprefixer",
                { cascade: false }
              ],
            ],
          },
        },}],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  // optimization: {
  //   runtimeChunk: "single",
  // },
};
