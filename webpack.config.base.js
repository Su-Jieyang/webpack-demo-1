const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "胖胖",
      template: "src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          {
            loader: "sass-loader",
            options: { implementation: require("dart-sass") },
          },
        ],
      },
    ],
  },
};
