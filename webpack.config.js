const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  watch: false,
  performance: { 
    hints: false 
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: false,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [
            /__tests__\//,
            /node_modules/,
            /\/dist/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
              extends: path.resolve(__dirname, '.babelrc'),
              babelrc: false
          }
      }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};