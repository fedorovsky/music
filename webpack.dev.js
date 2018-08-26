const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const templateParameters = require('./src/template-data.js');

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                sourceMap: true,
                importLoaders: 1,
                modules: false,
                localIdentName: '[path]-[local]-[hash:base64:8]',
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                sourceMap: true,
                config: {
                  path: 'postcss.config.js',
                },
              },
            },
          ],
        }),
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/views'),
        use: ['raw-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: './public',
    watchContentBase: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9000,
    disableHostCheck: true,
    stats: {
      colors: true,
      modules: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      env: true,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('css/style.css'),
    new OpenBrowserPlugin({ url: 'http://localhost:9000' }),
    new HtmlWebpackHarddiskPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/fonts'),
        to: path.resolve(__dirname, 'public/fonts'),
      },
      {
        from: path.resolve(__dirname, 'src/img'),
        to: path.resolve(__dirname, 'public/img'),
      },
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src/index.html'),
      filename: path.resolve(__dirname, 'public/index.html'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      templateParameters,
      template: path.resolve(__dirname, 'src/privacy.html'),
      filename: path.resolve(__dirname, 'public/privacy.html'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      templateParameters,
      template: path.resolve(__dirname, 'src/404.html'),
      filename: path.resolve(__dirname, 'public/404.html'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      templateParameters,
      template: path.resolve(__dirname, 'src/500.html'),
      filename: path.resolve(__dirname, 'public/500.html'),
      alwaysWriteToDisk: true,
    }),
  ],
};
