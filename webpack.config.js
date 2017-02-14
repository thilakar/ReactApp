var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
   entry: [
      'bootstrap/dist/css/bootstrap.css',
      './css/style.css',
      './main.js'
   ],	
   output: {
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
         {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader!sass-loader") },
         {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader") },    
         {test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"},
         {test: /\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"},
         {test: /\.(eot|ttf|svg|gif|png)$/, loader: "file-loader"}
       ]
      },
      plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
         }),
         new ExtractTextPlugin("styles.css")

      ],
      postcss: function() {
         return [autoprefixer({
            browsers: ['last 3 versions']
         })];
      }
}

