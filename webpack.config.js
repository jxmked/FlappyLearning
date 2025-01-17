const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const GA4WebpackPlugin = require('ga4-webpack-plugin');
const package = require('./package.json');

/**
 * First Webpack Config
 *
 * I just try to put too much effort for this to try and look
 * for other possibilities and to figure out other features
 * */

const APP_URL = package.repository.url.replace(/^git\+/i, "");

var devMode = process.env['NODE' + '_ENV'] !== 'production';
const CONFIG = {
  output: {
    name: '[name].[contenthash]',
    chunk: '[id].[contenthash]',
    dir: 'dist' // Do not include './' or '/'
  },
  input: {
    entry: './src/index.ts', // Typescript only
    dir: 'src'
  },

  windowResizeable: false,

  // Manifesting and information

  // For site.webmanifest
  appName: 'Flappy Learning',
  shortAppName: 'AIBirds',
  description: 'Canvas animation',
  colors: {
    background: '#3a3a3c',
    theme: '#272738' // also injected into html
  },
  favicon: 'favicon.ico', // Must be ends with .ico
  icons: {
    src: path.resolve('src/assets/icon.png'),
    sizes: [96, 128, 192, 256, 384, 512]
  }
};

module.exports = function (env, config) {
  if (process.env['NODE' + '_ENV'] === void 0) {
    // From flag '--mode'
    devMode = config.mode !== 'production';
  }

  console.log('DEV MODE: ' + String(devMode) + '\n');

  if (devMode) {
    CONFIG.output.name = '[name]';
    CONFIG.output.chunk = '[id]';
  }

  return {
    entry: CONFIG.input.entry,
    module: {
      rules: [{
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }, {
          test: /\.(jpe?g|png|gif|svg|webp)$/i,
          loader: 'file-loader'
        }, {
          test: /\.(woff|ttf|otf|eot|woff2)$/i,
          loader: 'file-loader'
        }, {
          test: /\.(wav|mp3|mp4|avi)$/i,
          loader: 'file-loader'
        }, {
          test: /\.((s[ca]|c)ss)$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
      }]
    },

    resolve: {
      extensions: ['.ts', '.tsx', 'scss', 'sass', 'css']
    },

    output: {
      filename: CONFIG.output.name + '.js',
      chunkFilename: CONFIG.output.chunk + '.js',
      path: path.resolve(__dirname, './' + CONFIG.output.dir),
      clean: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },

    plugins: [
      new GA4WebpackPlugin({
        id: "G-TFPC622JKX",
        inject: !devMode, // Only inject in build mode
        callPageView: true
      }),

      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: {
          baseDir: [CONFIG.output.dir]
        },

        files: ['./' + CONFIG.output.dir + '/*'],
        notify: false,
        ui: false, // Web UI for BrowserSyncPlugin
        open: false // Open browser after initiation
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        favicon: './' + path.join(CONFIG.input.dir, CONFIG.favicon),
        template: './' + path.join(CONFIG.input.dir, 'index.html'),
        //   manifest: './src/site.webmanifest',
        showErrors: devMode, // Include html error on emitted file
        meta: {
          'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no' + (CONFIG.windowResizeable?'':',user-scalable=no'),
          'robots': 'index,follow',
          'referrer': 'origin',
          'charset': { charset: 'UTF-8' },
          'http-equiv': {
            'http-equiv': 'Content-Type',
            'content': 'text/html; charset=UTF-8'
          },
          'color-scheme': 'light dark',
          'description': package.description,

          // Extended
          'version': package.version,
          'author': package.author,
          'dc.creator': package.author,
          'keywords': package.keywords.join(','),

          // Open Graph
          'og:title': {
            property: 'og:title',
            content: package.name
          },
          'og:description': {
            property: 'og:description',
            content: package.description
          },
          'og:url': {
            property: 'og:url',
            content: package.homepage
          },
          'og:site_name': {
            property: 'og:site_name',
            content: 'Github Pages'
          },
          'og:image:url': {
            property: 'og:image:url',
            content: 'https://raw.githubusercontent.com/jxmked/resources/xio/assets/icons/light/Windows/Square310x310Logo.scale-400.png'
          },
          'og:image:width': {
            property: 'og:image:width',
            content: '1240'
          },
          'og:image:height': {
            property: 'og:image:height',
            content: '1240'
          },
          'og:image:alt': {
            property: 'og:image:alt',
            content: 'Logo'
          }
        }
      }),

      new MiniCssExtractPlugin({
        filename: CONFIG.output.name + '.css',
        chunkFilename: CONFIG.output.chunk + '.css'
      }),

      new WebpackPwaManifest({
        name: CONFIG.appName,
        short_name: CONFIG.shortAppName,
        description: CONFIG.description,
        orientation: 'portrait',
        start_url: '.',
        background_color: CONFIG.colors.background,
        theme_color: CONFIG.colors.theme,
        icons: [
          {
            src: CONFIG.icons.src,
            sizes: CONFIG.icons.sizes,
            purpose: 'maskable'
          }
        ],

        // Asset config
        fingerprints: false, // Remove hashed in filename
        publicPath: './', // Make sure the url starts with
        inject: true, // Insert html tag <link rel="manifest" ... />
        filename: 'site.webmanifest'
      }),

      new InterpolateHtmlPlugin({
        CDN: '',
        PUBLIC_URL: '',
        TITLE: CONFIG.appName,
        APP_VERSION: package.version,
        APP_URL: APP_URL
      })
    ]
  };
};
