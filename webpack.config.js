var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: [
    'bootstrap/dist/css/bootstrap.css',
    //'jquery/dist/jquery.min.js',
    './asserts/css/style.css',
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  // devServer: { inline: true },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {           
            loader: 'babel-loader',
            options: {
              presets: ['es2015','react']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"],
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader"],
          fallback: "style-loader"
        })
      },
      {
        test: /\.woff$/,
        //use: [{ loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]" }]
         use: [{
          loader:"file-loader",
          options: {
            name: '[name].[ext]',
            outputPath:'images/',
            publicPath:'images/'
          }
        }]
      },
      {
        test: /\.(woff2|otf)$/,
       // use: [{ loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]" }]
        use: [{
          loader:"file-loader",
          options: {
            name: '[name].[ext]',
            outputPath:'images/',
            publicPath:'images/'
          }
        }]
      },
      {
        test: /\.(eot|ttf|svg|gif|png|jpg|jpeg)$/,
        use: [{
          loader:"file-loader",
          options: {
            name: '[name].[ext]',
            outputPath:'images/',
            publicPath:'images/'
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery"}),
    new ExtractTextPlugin("bundle.css"),
    new CleanWebpackPlugin(['dist'])
  ]  
}



