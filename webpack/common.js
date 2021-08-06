const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: paths.app,
  entry: paths.entry,
  resolve: {
    alias: paths.alias,
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: "ts-loader",
      //   exclude: /node_modules/,
      //   options: {
      //     transpileOnly: true,
      //   },
      // },
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: paths.build,
    filename: "bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ],
  stats: "errors-only",
};
