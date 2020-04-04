const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }= require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './public'),
    filename: '[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  }, 
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  // devServer: {
  //   contentBase: './public',
  // },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './index.ejs'
    }),
    new CleanWebpackPlugin()
  ]
}