module.exports = {
    devtool: "#inline-source-map",
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, loaders: ['jsx-loader?harmony']}
        ]
    }
};