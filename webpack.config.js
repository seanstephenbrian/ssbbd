const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/js/index.js",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "ssbbd.dev",
      minify: true,
      favicon: './src/img/favicon.png',
      meta: {
        'description': 'ssbbd.dev',
        'og:title': { property: 'og:title', content: 'ssbbd.dev'},
        // 'og:url': { property: 'og:url', content: ''},
        // 'og:type': { property: 'og:type', content: ''}
      },
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader",],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
