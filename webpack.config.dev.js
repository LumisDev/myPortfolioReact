const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx$/,
				use: 'ts-loader'
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		compress: true,
		port: 9000,
		hot: true
	}
}
