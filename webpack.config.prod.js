const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/typescripts/main.ts",
    output: {
        filename: "./dist/bundle.js",
    },
    // devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('/dist/styles/bundle.css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions', '> 10%', 'ie 9']
    })
  ],
    module: {
        loaders: [
            // ts -> ES6 -> babel -> ES5
            { test: /\.tsx?$/, loaders: ["babel-loader", "ts-loader"] },
            { test: /\.js$/, loader: 'babel',  exclude: /(node_modules|bower_components)/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')  },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')  },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'}, 
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file?name=fonts/[name].[ext]'}, 
            { test: /\.(jp(e)g|gif|png)?$/, loader: 'file?name=img/[name].[ext]'}
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};