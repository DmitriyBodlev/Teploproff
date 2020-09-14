const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const withCSS = require('@zeit/next-css');const optimizedImages = require('next-optimized-images');/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// module.exports = optimizedImages(withCSS({ exportPathMap: function () { return { '/': { page: '/' }, '/log-in': { page: '/log-in'}, '/gallery': { page: '/gallery'}, '/add-album': { page: '/add-album'} } }}));

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
}
