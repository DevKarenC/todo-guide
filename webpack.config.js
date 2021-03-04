const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'eval-cheap-module-source-map',
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // writeToDisk: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List',
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.IgnorePlugin(/^\.\/locale\/(en)\.js$/, /moment$/),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
