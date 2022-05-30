var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/view/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'out.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public-admin/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    historyApiFallback: {
      index: '/index.html'
    }
  }
}