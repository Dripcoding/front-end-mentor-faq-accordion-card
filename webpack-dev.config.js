const { merge } = require('webpack-merge')
const commonConfig = require('./webpack-common.config')

module.exports = merge(commonConfig, {
	mode: 'development',
	devServer: {
        contentBase: './public',
		compress: true,
        hot: true,
        open: true,
        port: 9000,
	},
    devtool: 'inline-source-map',
    watch: true
})