const baseName = "Meijin's Portfolio"
const baseDesc =
  'Webを中心にITに関わるものづくりを仕事としている名人（Yusuke Saito）のポートフォリオページ。略歴、Twitterやnote、GitHub等の関連ページを掲載。'
const baseUrl = 'https://meijin.me'
const baseOgp = '/ogp.png'

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: `Meijin.me | ${baseName}`,
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: baseDesc,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: baseName,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'artice',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseUrl,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: baseName,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: baseDesc,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: baseOgp,
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: '@Meijin_garden',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon_20200316.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Comfortaa&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#33b0dd',
  },
  modules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-143780066-1',
      },
    ],
  ],
  buildModules: ['@nuxt/typescript-build'],
  styleResources: {
    scss: ['~/assets/css/main.scss'],
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
