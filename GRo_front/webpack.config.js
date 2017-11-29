const path = require('path');
const webpack = require('webpack');
const config = require('./config');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      proxy: {
        target: `${config.localhost}`,
        secure: false,
        changeOrigin: true
      },
    })
  ],
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        loader: "url-loader?mimetype=image/gif"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?name=public/fonts/[name].[ext]'
      }
    ]
  }
};

