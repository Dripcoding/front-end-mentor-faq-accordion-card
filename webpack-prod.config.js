const {merge} = require("webpack-merge")
const commonConfig = require("./webpack-common.config")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
    }
})