const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './index.jsx',
    output: {
      filename: 'bundle.min.js',
      path: path.resolve(__dirname, 'prodbuild')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
            terserOptions: {
              format: {
                comments: false,
              },
            },
          }),
        ],
    },
    module: {
        rules: [
          {
            test: /\.(js|ts)x?$/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          },
          {
            test: /\.(pdf|gif|png|jpe?g|svg)$/,
            use: 'file-loader?name=[path][name].[ext]',
          }
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
      },
  }