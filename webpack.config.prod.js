const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: 'production',
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
	}
}
