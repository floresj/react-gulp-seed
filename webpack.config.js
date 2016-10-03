var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');


module.exports = {
    devtool: debug ? "inline-sourcemap" : null,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties'],
                }
            }
        ]
    },
    output: {
        filename: "app.js"
    },

    // If not debug, do all the good minifying stuff
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
