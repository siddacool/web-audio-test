module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/web-audio-test/' : '/',
};
