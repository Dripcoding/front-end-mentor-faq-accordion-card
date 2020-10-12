const { merge } = require("webpack-merge")
const path = require("path")
const commonConfig = require("./webpack-common.config");

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: { 
        contentBase: path.join(__dirname, "public"), 
        compress: true, 
        hot: true, 
        port: 9000
    },
    devtool: 'inline-source-map',
})