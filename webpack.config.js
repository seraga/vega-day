
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    port: 3000,
    stats: 'errors-only',
    // compress: true,
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vega-Day',
      template: './src/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
    }),
  ]
}
