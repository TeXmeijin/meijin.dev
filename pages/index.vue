<template lang="pug">
  v-layout(column wrap)
    v-flex
      v-card.mb-5.mod-about
        v-layout(row wrap)
          v-flex(sm5 xs12)
            v-img(
              :src="require('@/assets/img/self.png')"
              aspect-ratio="1"
            )
          v-flex(sm7 xs12)
            v-card-title(primary-title)
              v-flex(row)
                v-flex(tag="h2").mb-1.display-2.font-weight-bold About
                v-divider.mb-2
                v-flex(tag="h1").headline.font-weight-bold
                  a(href="https://twitter.com/meijin_garden").secondary--text @Meijin_garden
                v-flex Web Engineer, CTO
            v-card-text
              v-flex 2016年に奈良高専を卒業後、株式会社LIFULLに入社。
              v-flex 不動産情報サイトLIFULL HOME'Sの開発に関わりながら、新規事業提案にも積極的に挑戦。
              v-flex 2017年12月には入賞を果たし、以後自身でサービス開発から法人営業までこなす。
              v-flex
              v-flex
      v-card.mb-5.mod-skill
        v-layout(column)
          v-card-title(primary-title)
            v-flex(column)
              v-flex(tag="h2").mb-1.display-2.font-weight-bold Skill Set
              v-divider.mb-2
          v-container(grid-list-xl)
            v-layout(row wrap)
              v-flex(
                v-for="n in 9"
                :key="n"
                xs4
                align-self-center
              )
                v-tooltip(v-model="skills[n].tooltip" top)
                  span {{ skills[n].detail }}
                  template(v-slot:activator="{ on }")
                    v-card(flat v-on="on" hover)
                      v-img(
                        :src="require('@/assets/img/skill/' + skills[n].name + '.png')"
                        lazy-src
                        contain
                        transition
                        @click="skills[n].tooltip = !skills[n].tooltip"
                      ).mb-3.mx-2
      v-card.mb-5.pb-5.mod-blog
        v-layout(column)
          v-card-title(primary-title)
            v-flex(column)
              v-flex(tag="h2").mb-1.display-2.font-weight-bold SNS/Blog
              v-divider.mb-2
          v-container(grid-list-md)
            v-layout(row wrap)
              v-flex(xs12 md4).mb-2
                v-card(href="https://note.mu/meijin_garden" hover)
                  v-img(
                    :src="require('@/assets/img/blog/note.png')"
                    aspect-ratio="1.7"
                  )
                  v-card-title
                    v-flex(tag="h3" row).headline.font-weight-bold
                      v-flex.green--text note
              v-flex(xs12 md4).mb-2
                v-card(href="https://twitter.com/meijin_garden" hover)
                  v-img(
                    :src="require('@/assets/img/blog/twitter.png')"
                    aspect-ratio="1.7"
                  )
                  v-card-title
                    v-flex(tag="h3" row).headline.font-weight-bold
                      v-flex.secondary--text twitter
              v-flex(xs12 md4).mb-2
                v-card(href="https://qiita.com/mejileben" hover)
                  v-img(
                    :src="require('@/assets/img/blog/qiita.png')"
                    aspect-ratio="1.7"
                  )
                  v-card-title
                    v-flex(tag="h3" row).headline.font-weight-bold
                      v-flex.lime--text Qiita
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {},
        {
          name: 'nuxt',
          tooltip: false,
          detail: 'Vueのおかげで前職の新規事業開発時に自前でプロトタイピングできました。Nuxtで大規模開発も怖くない！（きっと）',
        },
        {
          name: 'sass',
          tooltip: false,
          detail: '当初はただの変数が使えるCSSくらいに思っていた件については本当に申し訳なく思っております',
        },
        {
          name: 'pug',
          tooltip: false,
          detail: '閉じタグ書かなくていいのホント楽。楽すぎてコンポーネントの切り分けサボっちゃいそう',
        },
        {
          name: 'ruby',
          tooltip: false,
          detail: '配列周りの関数が豊富で楽しいのと、設計思想が言語全体で統一されてるのが好き。RSpecも好き',
        },
        {
          name: 'laravel',
          tooltip: false,
          detail: 'PHPはプログラミング言語として認めていないけどLaravelの優秀さは認めてやろうじゃないか',
        },
        {
          name: 'mysql',
          tooltip: false,
          detail: 'インデックス貼るときの内部的なツリー構造の持ち方とかまでドキュメントに書いてあって丁寧でよき',
        },
        {
          name: 'nginx',
          tooltip: false,
          detail: 'なんだかんだいってNginxは良いサーバーですわ。リバースプロキシとしても使いやすいし',
        },
        {
          name: 'firebase',
          tooltip: false,
          detail: 'Vue.js＋Firebaseのサイト構築ほんと楽よね。RTDBの設計は難しすぎて草生えたけど',
        },
        {
          name: 'aws',
          tooltip: false,
          detail: 'コンソールのデザインいつになったら良くなるの。EC2/RDS/S3/ALB/CloudFront/CodeDeploy/WAF/IAMあたり使えます',
        },
      ],
    }
  },
}
</script>


<style lang="scss" scoped>
</style>
