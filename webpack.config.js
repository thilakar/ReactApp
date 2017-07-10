var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'bootstrap/dist/css/bootstrap.css',
    'jquery/dist/jquery.min.js',
    './asserts/css/style.css',
    './index.js'
  ],
  output: {
    pathinfo: true,
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: { inline: true }, 
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
      { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]" },
      { test: /\.(woff2|otf)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]" },
      { test: /\.(eot|ttf|svg|gif|png|jpg|jpeg)$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ExtractTextPlugin("bundle.css")

  ],
  postcss: function () {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    root: [path.resolve('./js/', path.resolve('./js/lib')) ]
  }
}

