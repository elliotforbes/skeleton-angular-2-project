var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'app','index.js'),
    output: {
        path: path.join(__dirname, 'src', 'dist'),
        filename: 'vendor.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
        ]
    }
}