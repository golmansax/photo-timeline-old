/* eslint-disable max-len */

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { NODE_ENV } from '../server/config';
import path from 'path';
import { DefinePlugin, ProvidePlugin } from 'webpack';
import * as clientConfig from '../client/config';

module.exports = {
  entry: {
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
        loader: 'babel',
        query: {
          // optional: ['runtime'],
          plugins: 'babel-plugin-object-assign',
        },
      },
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&localIdentName=[path][name]__[local]___[hash:base64:5]'
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

    postLoaders: NODE_ENV === 'production' ? [{ loader: 'transform?envify' }] : undefined,
  },

  plugins: [
    new ExtractTextPlugin('[name].client.css', { allChunks: true }),
    new ProvidePlugin({ React: 'react' }),
    new DefinePlugin({ _CLIENT_CONFIG: JSON.stringify(clientConfig) }),
  ],
};
