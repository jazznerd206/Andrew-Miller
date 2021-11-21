var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// load cjs node modules
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = {
    name: 'server',
    mode: 'production',
    target: 'node',
    entry: './server/server.js',
    output: {
        path: path.join(__dirname, '/bin'),
        publicPath: '/bin',
        filename: 'server.js',
        clean: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'portfolio', 'public', 'index.html'),
        }),
    ],
    externals: nodeModules,
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            { 
                test:  /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/,            
            },
            {
                test: /\.(pdf|gif|png|jpe?g|svg)$/,
                use: 'file-loader?name=[path][name].[ext]',
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
        ]
    },
};