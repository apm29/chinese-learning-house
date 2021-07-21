import tailwindTypography from '@tailwindcss/typography'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  docs: {
    primaryColor: '#E24F55'
  },
  generate:{
    dir: "dist",
    crawler: true
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '旅学中文',
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
    extendRoutes(routes, resolve) {
      return routes
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
    },
    "~plugins/axios"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // With options
    ['@nuxtjs/vuetify', { /* module options */ }],
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/toast',
    '@nuxtjs/dayjs'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:4000', // Used as fallback if no runtime config is provided
  },

  // server 和 浏览器的配置
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.NODE_ENV === "production"? "/":"http://118.195.173.182/"
    }
  },

  // server端配置,会覆盖 publicRuntimeConfig
  privateRuntimeConfig: {
    axios: {
      baseURL:  process.env.NODE_ENV === "production"? "http://172.17.0.1:9998/":"http://118.195.173.182/"
    }
  },

  toast: {
    position: 'top-center',
    duration: 6000,
    keepOnHover: true,
    closeOnSwipe: true
  },

  // Optional
  dayjs: {
    locales: ['zh'],
    defaultLocale: 'zh',
    defaultTimeZone: 'Asia/Shanghai',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ] // Your Day.js plugin
  },


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
