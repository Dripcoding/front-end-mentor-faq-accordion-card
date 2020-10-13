const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './public/index.js',
        module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',  
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/assets/images'
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',  
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/assets/fonts'
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
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