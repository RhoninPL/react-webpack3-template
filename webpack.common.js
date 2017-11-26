const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js|.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template : __dirname + '/src/index.html',
            title: 'Production'
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        }), 
    ], 
    output: {
        path: __dirname + "/dist/",
        filename: "app.js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
};