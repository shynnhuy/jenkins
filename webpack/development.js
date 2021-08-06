const paths = require("./paths");
const { merge } = require("webpack-merge");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const DotENV = require("dotenv-webpack");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const common = require("./common.js");

module.exports = merge(common, {
  // devtool: "eval-cheap-module-source-map",
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          "style-loader",
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
    new ReactRefreshPlugin(),
    new DotENV({ path: paths.dotenvDev }),
    new ESLintPlugin(),
    // new ForkTsCheckerWebpackPlugin({
    //   eslint: {
    //     enabled: true,
    //     files: "./src/**/*.{ts,tsx,js,jsx}",
    //   },
    //   typescript: {
    //     context: paths.tsconfig,
    //   },
    // }),
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    port: 3000,
    publicPath: "/",
    contentBase: paths.build,
    compress: true,
    watchContentBase: true,
    hot: true,
  },
});
