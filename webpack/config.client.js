/* eslint-disable max-len */

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { isProduction } from '../server/config';
import path from 'path';
import lost from 'lost';
import postcssClearfix from 'postcss-clearfix';
import { DefinePlugin, ProvidePlugin } from 'webpack';
import * as clientConfigFromServer from '_client/config.from_server';

module.exports = {
  entry: {
    admin_page: './frontend/admin_page/client_entry.js',
    home_page: './frontend/home_page/client_entry.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: '[name].client_entry.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          // optional: ['runtime'],
          plugins: 'babel-plugin-object-assign',
        },
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&localIdentName=[path][name]__[local]___[hash:base64:5]!postcss-loader'
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
    new ExtractTextPlugin('[name].client.css', { allChunks: true }),
    new ProvidePlugin({ React: 'react', Reflect: 'core-js/es6/reflect' }),
    new DefinePlugin({ _CLIENT_CONFIG_FROM_SERVER: JSON.stringify(clientConfigFromServer) }),
  ],

  resolve: {
    root: path.resolve(__dirname, '..', 'lib'),
  },

  postcss: () => [lost, postcssClearfix],
};
