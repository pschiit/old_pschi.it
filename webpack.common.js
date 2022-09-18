const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEFAULT_PATH = 'src';

module.exports = {
    entry: `./${DEFAULT_PATH}/index.js`,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'pschi.it',
        }),
    ],
    output: {
        filename: 'pschi.it.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, DEFAULT_PATH),
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, DEFAULT_PATH),
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.glsl$/,
                include: path.resolve(__dirname, DEFAULT_PATH),
                type: 'asset/source',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                include: path.resolve(__dirname, DEFAULT_PATH),
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                include: path.resolve(__dirname, DEFAULT_PATH),
                type: 'asset/resource',
            },
        ]
    }
};