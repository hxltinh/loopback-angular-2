/*
 *  webpack common config for all enviroment
 */
const path = require('path');
const webpack = require('webpack');
const envConfig = require('./config.json')[process.env.NODE_ENV];
console.log('envConfig:', envConfig);

module.exports = {
  cache: true,
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: [
      './front-end/typescript/main.ts',
    ],
    vendor: [
      './front-end/typescript/polyfills.browser.ts',
      './front-end/typescript/vendor.ts',
    ],
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./client/app')
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./front-end/typescript/'),
    alias: {
      // 'app': 'front-end/typescript/',
      'angular2': path.join(__dirname, 'node_modules', '@angularclass', 'angular2-beta-to-rc-alias', 'dist', 'beta-17')
    }
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/] },
      { test: /\.(html|tpl)$/, loader: 'raw' },
      { test: /.(gif|jpg|png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader' },
      // { test: /\.tpl$/, loader: 'html' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'DOMAIN': JSON.stringify((()=> {
          const host = envConfig.api.port !== '' ? (':' + envConfig.api.port) : '';
          return `${envConfig.api.host}${host}`;
        })()),
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  stats: {
    cached: true,
    cachedAssets: true,
    chunks: true,
    chunkModules: false,
    colors: true,
    hash: false,
    reasons: true,
    timings: true,
    version: false
  }
};
