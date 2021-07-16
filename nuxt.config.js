import tailwindTypography from '@tailwindcss/typography'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  docs: {
    primaryColor: '#E24F55'
  },
  generate:{
    dir: "dist"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chinese-learning-house',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
  router: {
    extendRoutes (routes, resolve) {
      console.log(JSON.stringify(routes))
      return routes;
    },
    base: process.env.NODE_ENV === "production"? "/":"/"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/global.css",
    "~assets/css/materialdesignicons/css/materialdesignicons.min.css",
    "swiper/swiper-bundle.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~plugins/filters.js"
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},


  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  },
}
