const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      }
    ]
  }
} 