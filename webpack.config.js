
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    // stats: 'errors-only',
    // compress: true,
    open: true,
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','sass-loader']
        })
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['env'] },
      },
      { test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' },
      },
      { test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: { name: './img/[name].[ext]' },
      },
    ]
  },
  plugins: [
    // new UglifyJSPlugin(),
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
