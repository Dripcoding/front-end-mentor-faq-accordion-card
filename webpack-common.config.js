const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './public/index.js',
        module: {
        rules: [
            {
                test: /\.scss|css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ttf)$/,
                use: [
                    {
                        loader: 'url-loader', 
                    }
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new CopyPlugin({
            patterns: [
              { from: './public/assets/', to: 'assets'},
            ],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            scriptLoading: 'defer'
        }),
        new MiniCssExtractPlugin()
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "dist"),
    }
}