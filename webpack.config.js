  
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './assets/index.js',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Gareth Leake -- ZCruit Challenge',
      template: './assets/index.html'
    })],
    module: {
      rules: [ {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                  "syntax-async-functions", 
                  "@babel/plugin-proposal-class-properties",
                  "@babel/plugin-transform-regenerator"
                ],
            }
        }

        },
        { 
          test: /\.css$/,
          exclude: /node_modules/, 
          use: ['style-loader', 'css-loader']
         },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
          'file-loader',
          ],
        },
      ]
  },
  devServer: {
    contentBase: path.join(__dirname, './assets'),
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
  },
  devtool: 'source-map'

};