const pkg = require('./package')
// const webpack = require('webpack')
// const env = process.env.NODE_ENV === 'testing'
//   ? require("./config/test.env")
//   : require("./config/prod.env")

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://cdn.punchng.com/wp-content/uploads/2016/06/19220759/favicon.jpg' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': env
    // }),
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt'
  ],


  /*
  ** Axios module configuration
  */
  // axios: {
  //   // See https://github.com/nuxt-community/axios-module#options
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    },
    // buildPath: '/public/',
    
  }
}
