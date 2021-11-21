const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'bundle': './index.jsx',
    'bundle.min': '/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html' )}),
    new MiniCssExtractPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    hot: true,
    proxy: {
      '/access': {
        target: 'http://localhost:8080',
      },
      '/token': {
        target: 'http://localhost:8080',
      }
    },
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
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};