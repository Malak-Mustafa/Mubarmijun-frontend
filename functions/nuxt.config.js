// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'final-project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/styles/style.css','material-design-icons-iconfont/dist/material-design-icons.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module',
  ],
  vuetify: {
    rtl: true,
    dark: true,
    treeShake: true,
    customVariables: ['~/assets/styles/variables.scss'],
    icons: {
      iconfont: 'md',
    },
    theme: {
      options: {
        customProperties: true
      },
      themes:{
        light: {
          primary: '#4ECCA3',
          background: '#FCFCFC',
          qBoxBg:'#fff',
          textColor:'#000',
          boxShadowColor:'#c1c1c1',
        },
        dark: {
          primary: '#4ECCA3',
          background: '#232931',
          qBoxBg:'#393E46',
          textColor:'#fff',
          boxShadowColor:'#000'
        },
      }
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "vue2-editor/nuxt",
    'cookie-universal-nuxt'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'https://europe-west1-programmers-qanda.cloudfunctions.net/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    middleware: 'checkToken'
  }
}