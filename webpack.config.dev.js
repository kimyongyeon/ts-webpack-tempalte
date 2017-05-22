const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/typescripts/main.ts",
    output: {
        filename: "scripts/bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new WebpackBrowserPlugin()
    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions', '> 10%', 'ie 9']
        })
    ],
    module: {
        loaders: [
            // ts -> ES6 -> babel -> ES5
            {   test: /\.tsx?$/, 
                loaders: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            }, 
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            }, 
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=fonts/[name].[ext]'
            }, 
            {
                test: /\.(jp(e)g|gif|png)?$/,
                loader: 'file?name=img/[name].[ext]'
            }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // 아래 주석을 풀면 디버깅이 걸리지 않습니다. 
    // devServer: {
    //     hot: true
    // }
};