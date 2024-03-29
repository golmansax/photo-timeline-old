/* eslint-disable max-len */

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { isDevelopment, isProduction } from '../server/config';
import ManifestPlugin from 'webpack-manifest-plugin';
import path from 'path';
import lost from 'lost';
import clearfix from 'postcss-clearfix';
import mediaMinmax from 'postcss-media-minmax';
import customMedia from 'postcss-custom-media';
import atImport from 'postcss-import';
import { DefinePlugin, ProvidePlugin, ContextReplacementPlugin } from 'webpack';
import * as clientConfigFromServer from '_client/config.from_server';

const CSS_CLASS_NAME_PATTERN = isDevelopment() ?
  '[path][name]__[local]___[hash:base64:5]' :
  '[hash:base64:16]';

module.exports = {
  devtool: isDevelopment() ? '#cheap-module-eval-source-map' : null,

  entry: {
    admin_page: './frontend/admin_page/client_entry.js',
    home_page: './frontend/home_page/client_entry.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: `[name]${isProduction() ? '.[chunkhash]' : ''}.js`,
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-object-assign'],
        },
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          `css-loader?modules&localIdentName=${CSS_CLASS_NAME_PATTERN}!postcss-loader`
        ),
      },
      {
        test: /\.woff\d?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[path][name].[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],

    postLoaders: isProduction() ? [{ loader: 'transform?envify' }] : undefined,
  },

  plugins: [
    new ExtractTextPlugin(`[name]${isProduction() ? '.[chunkhash]' : ''}.css`, { allChunks: true }),
    new ProvidePlugin({ React: 'react', Reflect: 'core-js/es6/reflect' }),
    new DefinePlugin({ _CLIENT_CONFIG_FROM_SERVER: JSON.stringify(clientConfigFromServer) }),
    new ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new ManifestPlugin(),
  ],

  resolve: {
    root: path.resolve(__dirname, '..', 'lib'),
  },

  postcss: (webpack) => [
    atImport({
      addDependencyTo: webpack,
      path: path.resolve(__dirname, '..', 'lib'),
    }),
    customMedia,
    mediaMinmax,
    lost,
    clearfix,
  ],
};
