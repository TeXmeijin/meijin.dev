module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Meijin.me | フルスタック従業員「名人」の自己紹介ページ',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'フルスタック従業員「名人」の自己紹介ページです。これまでの経歴（高専→LIFULL→NoSchool CTO）、スキルセット（フロントエンドからバックエンド、インフラまで）、SNS/Blogの各種リンクを載せています。'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    // Vuetify の設定はここに書く
    theme: {
      primary: '#E0C032',
      secondary: '#33b0dd',
      accent: '#4633dd',
      error: '#dd4133'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
