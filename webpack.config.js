var path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './jquery.jscroll.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'jquery.jscroll.min.js',
        library: 'jscroll'
    },
    module: {
        rules: [
            ...(process.env.TEST === 'true' ? [{
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }] : [])
        ]
    }
}