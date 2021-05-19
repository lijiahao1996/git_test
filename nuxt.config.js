export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VOS系统介绍',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/common.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    styleResources: {
      scss: './assets/styles/variables.scss',
    }
  },
  server: {
    host: '0.0.0.0',
    port: '8080'
  }
}
