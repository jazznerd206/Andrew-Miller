const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.jsx',
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
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
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html' )}),
    new MiniCssExtractPlugin()
  ]
};