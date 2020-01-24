const path = require('path');
const srcPath = path.resolve(__dirname,'src');

module.exports = {
  mode: 'universal',
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: 't_o_d-portfolio',
    titleTemplate: 't_o_d-portfolio',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['@/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-purgecss',
    
  ],
  

  /*
  ** PurgeCSS
  ** https://github.com/Developmint/nuxt-purgecss
  */
  purgeCSS: {
    mode: 'postcss'
  },

  /*
  ** This option is given directly to the vue-router Router constructor
  */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** PostCSS setup
    */
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: {
        'postcss-url': {},
        'tailwindcss': path.resolve(__dirname, './tailwind.config.js'),
        'cssnano': {
          preset: 'default',
          discardComments: { removeAll: true },
          zIndex: false
        }
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
