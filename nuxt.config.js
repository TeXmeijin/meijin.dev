const baseName = "Meijin's Portfolio";
const baseDesc =
  'フルスタック従業員「名人」の自己紹介ページです。これまでの経歴（高専→LIFULL→NoSchool CTO）、スキルセット（フロントエンドからバックエンド、インフラまで）、SNS/Blogの各種リンクを載せています。';
const baseUrl = 'https://meijin.me';
const baseOgp = '/ogp.png';

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: `Meijin.me | ${baseName}`,
    meta: [{
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
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    }, ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#33b0dd',
  },
  modules: ['@nuxtjs/dotenv', '@nuxtjs/style-resources'],
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
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
