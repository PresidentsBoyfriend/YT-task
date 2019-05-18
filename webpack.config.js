let path = require('path');

let conf = {
    entry : './src/main.js',
    output : {
        path: path.resolve(__dirname,'./dist'),
        filename: 'index.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node_modules/',
            }
        ]
    }
};

module.exports = conf;