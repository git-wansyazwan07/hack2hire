const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    host: "192.168.100.24",
    port: 8087,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "signin",
      filename: "remoteEntry.js",
      exposes: {
        "./SiginApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
