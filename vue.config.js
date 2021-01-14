module.exports = {
  "transpileDependencies": [
    "vuetify",
    'x5-gmaps'
  ],
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 80, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
    disableHostCheck: true  
  },
}