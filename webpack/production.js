const paths = require("./paths");
const { merge } = require("webpack-merge");
const DotENV = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const common = require("./common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "expanded",
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new DotENV({ path: paths.dotenvProd }),
    new MiniCssExtractPlugin(),
  ].filter(Boolean),
});