const withSass = require('@zeit/next-sass')

/* eslint-disable */
const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => { }
}

const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
module.exports = withSass(withCss({
  webpack(config) {
    config = commonsChunkConfig(config, /\.(sass|scss|css)$/);
    return config
  }
}))