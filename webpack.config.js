var webpack = require('webpack');
module.exports = {
    devtool: "#inline-source-map",
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel?stage=0'] },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};