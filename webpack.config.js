var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');

module.exports = {
   entry: [
      './node_modules/bootstrap/dist/css/bootstrap.css',
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
         {test: /\.css$/, loaders: ['style', 'css'] }, 
         {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass']}, 
         {test: /\.less$/, loaders: ['style', 'css', 'less']},
         {test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"},
         {test: /\.woff2$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"},
         {test: /\.(eot|ttf|svg|gif|png)$/, loader: "file-loader"}
       ]
      },
      plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
         })
      ],
      postcss: function() {
         return [autoprefixer({
            browsers: ['last 3 versions']
         })];
      }
}

