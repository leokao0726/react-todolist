module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname+'/dist'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets:['es2015','react']
			}
		}]
	}

}