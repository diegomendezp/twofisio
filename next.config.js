const withFonts = require('next-fonts');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');

const debug = process.env.NODE_ENV !== 'production';
const assetPrefix = !debug ? '/twofisio' : '';


const nextConfig = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/nosotros': { page: '/nosotros' },
    '/tratamientos': { page: '/tratamientos' },
    '/pilates': { page: '/pilates' },
    '/ecografia': { page: '/ecografia' },
    '/fisioterapia': { page: '/fisioterapia' },
  }),
  assetPrefix,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    );

    return config;
  },
};

module.exports = withPlugins([
  [withCSS],
  [withFonts],
  [withImages],
], nextConfig);
