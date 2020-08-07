const path = require('path'); // We want our bundle to join with the 'dist/js' OU
const HtmlWebpackPlugin = require('html-webpack-plugin');

//This will export your configurations object, so webpack can take the object and work with it.
module.exports = {
	// Entry point is where webpack will start bundling. Can export more than one extry files
	entry: ['babel-polyfill', './src/js/index.js'],
	// Output will tell webpack where to save or bundle files
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/, // Looks for all javascript files and see if they end in ".js"
				exclude: /node_modules/, // You want to exclude all node modules folder
				use: {
					loader: 'babel-loader' // babel loader will be applied if it is a js file
				}
			}
		]
	},
	devtool: 'eval-source-map'
};
