const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[hash].js'
  },
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './index.ejs'
    })
  ]
}