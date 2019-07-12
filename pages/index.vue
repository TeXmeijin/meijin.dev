<template lang="pug">
.wrapper
  .main
    h1.heading
      transition(
        name="portfolio"
        @after-enter="onEntered"
      )
        span(v-if="state === 0").heading__label Portfolio
      .heading__label
        transition(
          name="first"
          @after-enter="onEntered"
        )
          span(v-if="state >= 1" :class="{isHide: atLeft}").heading__label__char M
        transition(
          name="second"
        ).char
          span(v-if="state >= 1" :class="{isHide: atLeft}").heading__label__char E
        transition(
          name="third"
        ).char
          span(v-if="state >= 1" :class="{isHide: atLeft}").heading__label__char I
        transition(
          name="fourth"
        ).char
          span(v-if="state >= 1" :class="{isHide: atLeft}").heading__label__char J
        transition(
          name="fifth"
        ).char
          span(v-if="state >= 1" :class="{isHide: atLeft}").heading__label__char I
        transition(
          name="sixth"
          @after-enter="atLeft = false"
        ).char
          span(v-if="state >= 1" :class="{isHide: atLeft}").heading__label__char N
      transition(
        name="description"
      )
        p(v-if="state >= 2").heading__subLabel
          span.heading__subLabel__description
            .text anegement
          span.heading__subLabel__description
            .text ngineering
          span.heading__subLabel__description
            .text maginative
          span.heading__subLabel__description
            .text avaScript
          span.heading__subLabel__description
            .text nquisitive
          span.heading__subLabel__description
            .text ovel
    transition(
      name="body"
    )
      div(v-if="state >= 2").body
        .profile
          .profile__image
            .profile__image__body(ref="profileImageBody" :style="{height: profileImageBodyHeight}")
          .profile__heading
            h1.profile__heading__name Meijin
              span.small (Yusuke Saito)
          .profile__description
            p 好奇心と行動力でゴリ押しするWebエンジニア。
            p 趣味の将棋にちなんでニックネームが「名人」。
            h2.profile__description__heading Career
            .flex
              .subheading 2011/04
              .desc 奈良高専情報工学科に入学
            .flex
              .subheading 2016/04
              .desc 株式会社LIFULL(当時NEXT)に入社
            .flex
              .subheading 2019/03
              .desc 株式会社NoSchoolのCTOに転職
            h2.profile__description__heading SNS/Blog
            ul.cardList
              li.card
                a(href="https://qiita.com/mejileben" rel="nofollow" target="_blank").card__title.qiita
                  h3.card__title__text Qiita
                ul.card__contents
                  li.card__contents__link
                    a(class="link" href="https://qiita.com/mejileben/items/f68a50ec9164b261b9cd" rel="nofollow" target="_blank") 【実録】WordPressサイトをAWS+Laravel+Nuxtにフルリプレイスした話（技術選定編）
                  li.card__contents__link
                    a(class="link" href="https://qiita.com/mejileben/items/69e5facdb60781927929" rel="nofollow" target="_blank") 【JavaScript】アロー関数式を学ぶついでにthisも復習する話
              li.card
                a(href="https://note.mu/meijin_garden" rel="nofollow" target="_blank").card__title.note
                  h3.card__title__text note
                ul.card__contents
                  li.card__contents__link
                    a(class="link" href="https://note.mu/meijin_garden/n/n71029117558e" rel="nofollow" target="_blank") 家にPCもネットもスマホも無かった中学3年生が、高専に入学し5年後Webエンジニアになった話
                  li.card__contents__link
                    a(class="link" href="https://note.mu/meijin_garden/n/n2d60b28569a8" rel="nofollow" target="_blank") 株式会社LIFULLを退職し、教育スタートアップのCTOとして転職します
              li.card
                a(href="https://twitter.com/meijin_garden" rel="nofollow" target="_blank").card__title.twitter
                  h3.card__title__text Twitter
            h2.profile__description__heading Technical Skill
            ul.skill
              template(v-for="(skill, key) in skills")
                li.skill__item
                  button(@click="skill.background = true").skill__item__name {{ skill.heading }}
                  transition(
                    name="modal-background"
                    @enter="skill.modal = true"
                  )
                    .skill__item__desc(@click.self="onClickedBackground(key)" v-if="skill.background")
                  transition(
                    name="modal"
                    @after-enter="skill.text = true"
                    @after-leave="skill.background = false"
                  )
                    .modal(v-if="skill.modal")
                      transition(
                        name="modal-text"
                        @after-leave="skill.modal = false"
                      )
                        .text(v-if="skill.text") {{ skill.sentence }}
</template>

<script>
export default {
  mounted() {
    this.state = 1;
  },
  methods: {
    onEntered() {
      this.state = 2;
      this.$nextTick().then(_ => {
        this.profileImageBodyHeight =
          (this.$refs.profileImageBody.clientWidth * 219) / 500 + "px";
      });
    },
    onClickedBackground(key) {
      this.skills[key].text = false;
      this.skills = Object.assign({}, this.skills);
    }
  },
  data() {
    return {
      state: 0,
      atLeft: false,
      profileImageBodyHeight: "0px",
      skills: {
        nuxt: {
          heading: "Nuxt.js",
          background: false,
          modal: false,
          text: false,
          sentence:
            "自社サイトのフロントエンド構築をNuxtを用いスクラッチで開発した経験があるため、GAの埋め込みやSSRはもちろん、ページネーションやパンくずリスト等もNuxt上でコンポーネントとして開発することが可能です。UIフレームワークはVuetifyの経験があります。"
        },
        pug: {
          heading: "Pug/Sass",
          background: false,
          modal: false,
          text: false,
          sentence:
            "HTMLおよびCSSを記述する際にはPugおよびSCSSの利用を得意としています。Vuetify等利用時はSCSSはほぼ利用しませんが、そうでないケースにおいては基幹コンポーネントの作成から粒度別にSCSSでコンポーネントにスタイルを当てる設計もある程度可能です。"
        },
        laravel: {
          heading: "Laravel",
          background: false,
          modal: false,
          text: false,
          sentence:
            "Controller/Repository/Modelの切り分けやAPI Resoruce、Form Request等を用いた仕組みを0から設計し構築することができます。OSSなので実際のソースを読みながらカスタマイズしたClassを拡張して利用するといった柔軟な対応もできます。"
        },
        aws: {
          heading: "AWS",
          background: false,
          modal: false,
          text: false,
          sentence:
            "CloudFront, S3, ALB, ASG, EC2, IAM, CodeDeploy, CodePipeline、Parameter Store、Lambdaなどを利用したベーシックなインフラ構築ができます。一方でコンテナ技術を活用したECSやFargateの実運用経験はまだありません。"
        },
        firebase: {
          heading: "Firebase",
          background: false,
          modal: false,
          text: false,
          sentence:
            "RTDB、Firestore、FCM、Auth、Hostingの利用経験がWebアプリにしてあります。ネイティブアプリでの利用についてはFCMのサーバーサイドの構築経験のみでほかはありません。AWSと合わせ適材適所でFirebaseを使うべきところを選定することが可能かと思います。"
        }
      }
    };
  }
};
</script>


<style lang="scss" scoped>
$baseSize: 40px;
$halfSize: calc(#{$baseSize} / 2);
$descSize: calc(#{$halfSize} - 6px);
$quarterSize: calc(#{$baseSize} / 4);
$text--large: 1.8rem;

.portfolio-leave-active {
  transition: 1.5s ease-in-out;
}
.portfolio-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.heading-enter {
  opacity: 0;
  transform: translateX(100%);
}
.heading-enter-active {
  transition: 1.5s ease-in-out;
}
.heading-leave-to {
  opacity: 1;
  transform: translateX(-100%);
}
.description-enter {
  opacity: 0;
}
.description-enter-active {
  transition: 2.5s ease-in-out;
}
.description-enter-to {
  opacity: 1;
}
.body-enter {
  opacity: 0;
}
.body-enter-active {
  transition: 1s ease-in-out;
}
.body-enter-to {
  opacity: 1;
  height: inherit;
  width: inherit;
}
.modal-background-enter {
  opacity: 0;
}
.modal-background-enter-to {
  opacity: 1;
}
.modal-background-enter-active,
.modal-background-leave-active,
.modal-enter-active,
.modal-leave-active {
  transition: 0.3s;
}
.modal-background-leave {
  opacity: 1;
}
.modal-background-leave-to {
  opacity: 0;
}
.modal-enter {
  height: 0;
  transform: translateY(27px);
}
.modal-enter-to,
.modal-leave {
  height: 282px;
  transform: translateY(54px);
}
.modal-leave-to {
  height: 0;
}
.modal-text-leave-to {
  height: 0;
}

$sequenceAnimeKeys: first, second, third, fourth, fifth, sixth;

@each $key in $sequenceAnimeKeys {
  .#{$key}-enter {
    opacity: 0;
    transform: translateX(1000%);
  }

  .#{$key}-leave-to {
    transform: translateX(0%);
  }

  .#{$key}-enter-active {
    transition: 1.5s
      ease-in-out
      #{(index($sequenceAnimeKeys, $key) - 1) *
      0.2}s;
  }
}

.wrapper {
  min-height: 700px;
  padding-top: $halfSize;
  background-image: url("~assets/img/background/dot_green.png");
  background-repeat: repeat;
  background-size: calc(#{$baseSize} + 1px);

  .main {
    max-width: 900px;
    @include mq {
      margin: 0 auto;
    }
  }

  .heading {
    display: flex;
    font-weight: bold;
    font-size: $baseSize;
    line-height: $baseSize;
    position: relative;
    @include mq("sp") {
      height: calc(#{$baseSize} * 6);
    }

    &__label {
      position: absolute;
      left: $halfSize;
      &__char {
        display: flex;
        justify-content: center;
        height: $baseSize;
        min-width: $baseSize;
      }
    }

    &__subLabel {
      position: absolute;
      left: calc(#{$baseSize} + #{$halfSize});

      &__description {
        display: flex;
        padding-bottom: 3px;
        align-items: flex-end;
        color: #999;
        height: $baseSize;
        font-size: calc(#{$baseSize} / 1.6);
        line-height: calc(#{$baseSize} / 1.6);
      }
    }
  }

  .profile {
    padding: $halfSize;

    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(#{$baseSize} * 4);
      max-height: calc(#{$baseSize} * 6);
      @include mq {
        margin-left: calc(#{$baseSize} * 4);
      }

      &__body {
        height: auto;
        width: 100%;
        max-width: 500px;
        border-radius: 10px;
        background-image: url("~assets/img/pinsya.png");
        background-size: cover;
        box-shadow: 0 2px 4px 0 $grey-light2;
        margin-bottom: 4px;
      }
    }

    &__heading {
      margin-top: $halfSize;
      &__name {
        height: $baseSize;
        line-height: $baseSize;
        font-size: $text--large;

        .small {
          margin-left: 8px;
          font-size: 1.2rem;
        }
      }
    }

    &__description {
      line-height: $baseSize;
      font-size: $descSize;

      &__heading {
        font-size: $text--large;
        color: $primary;
        font-weight: bold;
        margin-top: $baseSize;
      }

      .flex {
        display: flex;
        align-items: top;
      }

      .subheading {
        min-width: 90px;
        font-size: $halfSize;
        font-weight: bold;
        margin-right: $halfSize;
      }

      .desc {
        margin-top: calc(#{$halfSize} / 2);
        flex: 1;
        line-height: $halfSize;
      }

      .cardList {
        display: flex;
        @include mq("sp") {
          flex-direction: column;
        }
        @include mq {
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .card {
          display: flex;
          @include mq {
            width: 375px;
          }
          flex-direction: column;
          justify-content: center;
          margin-bottom: $halfSize;
          text-decoration: none;
          border-radius: 10px;
          box-shadow: 0 2px 4px 0 $grey-light2;
          background: $white;
          color: $primary;

          &__title {
            width: 100%;
            height: 200px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;

            &.qiita {
              background-image: url("~assets/img/blog/qiita.png");
            }

            &.twitter {
              background-image: url("~assets/img/blog/twitter.png");
            }

            &.note {
              background-image: url("~assets/img/blog/note.png");
            }

            &__text {
              position: absolute;
              right: $halfSize;
              bottom: 0;
              font-size: $text--large;
              font-weight: bold;
              color: $primary;
            }
          }

          &__contents {
            padding: $halfSize;
            &__link {
              list-style: none;
              line-height: 1.6rem;
              .link {
                text-decoration: none;
                color: $primary;
              }

              &:not(:first-child) {
                margin-top: $halfSize;
              }
            }
          }
        }
      }

      .skill {
        display: flex;
        flex-direction: column;
        margin-top: $halfSize;

        &__item {
          display: flex;
          flex: 1;
          list-style: none;

          @include mq {
            width: 50%;
            padding: $halfSize;
          }

          &__name {
            flex: 1;
            border: 1px solid $primary;
            padding: $quarterSize $halfSize;
            background: transparent;
            font-size: $text--large;
            font-weight: bold;
            color: $primary;
          }

          &__desc {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .modal {
          position: absolute;
          width: 335px;
          border: 1px solid $primary;
          background: $white;
          box-sizing: border-box;

          transform: translateY(54px);

          @include mq {
            transform: translateX(calc(410px - 167px)) translateY(-141px);
          }

          .text {
            color: $body;
            margin: $halfSize;
          }
        }
      }
    }
  }
}
</style>
