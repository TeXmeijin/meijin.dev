<template lang="pug">
main.main-area
  section.catch-area
    .slide-back
    span.large-nick-name Meijin
  section.message-area
    template(v-for="(message, index) in catchMessages")
      span.message-char(
        v-html="message"
        :class="{ '--is-hidden': index >= catchCopyIndex }"
      )
  section(
    v-if="showProfileArea"
  ).profile-area
    .profile-area__container
      .profile-data
        figure.profile-image
          img(
            :src="require('@/assets/img/self.png')"
          ).profile-image__image
        .profile-name
          .profile-name__text Yusuke Saito
  .main
    section.heading
      transition(
        name="portfolio"
        @after-enter="onEntered"
      )
        h1(v-if="state === 0").heading__title Meijin's Profile
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
        name="profile"
      )
        section(v-if="state >= 2").profile
          .profile__avatar(ref="profileImageBody")
          .profile__contents
            .profile__heading
              h1.profile__heading__name Meijin
                span.small (Yusuke Saito)
            .profile__catchcopy
              p 好奇心と発想力が取り柄のエンジニア
              p 趣味の将棋にちなんでニックネームが「名人」
    transition(
      name="body"
    )
      section(v-if="state >= 2").body
        .body__description
          h2.body__description__heading Career
          .flex
            .subheading 2011/04
            .desc 奈良高専情報工学科に入学
          .flex
            .subheading 2016/04
            .desc 株式会社LIFULL(当時NEXT)に入社
          .flex
            .subheading 2019/03
            .desc 株式会社NoSchoolのCTOに転職
          h2.body__description__heading SNS/Blog
          ul.cardList
            li.card
              a(href="https://qiita.com/mejileben" rel="nofollow" target="_blank").card__title.qiita
              ul.card__contents
                h3.card__contents__text Qiita
                li.card__contents__link
                  a(class="link" href="https://qiita.com/mejileben/items/f68a50ec9164b261b9cd" rel="nofollow" target="_blank") 【実録】WordPressサイトをAWS+Laravel+Nuxtにフルリプレイスした話（技術選定編）
                li.card__contents__link
                  a(class="link" href="https://qiita.com/mejileben/items/69e5facdb60781927929" rel="nofollow" target="_blank") 【JavaScript】アロー関数式を学ぶついでにthisも復習する話
            li.card
              a(href="https://note.mu/meijin_garden" rel="nofollow" target="_blank").card__title.note
              ul.card__contents
                h3.card__contents__text note
                li.card__contents__link
                  a(class="link" href="https://note.mu/meijin_garden/n/n71029117558e" rel="nofollow" target="_blank") 家にPCもネットもスマホも無かった中学3年生が、高専に入学し5年後Webエンジニアになった話
                li.card__contents__link
                  a(class="link" href="https://note.mu/meijin_garden/n/n2d60b28569a8" rel="nofollow" target="_blank") 株式会社LIFULLを退職し、教育スタートアップのCTOとして転職します
            li.card
              a(href="https://twitter.com/meijin_garden" rel="nofollow" target="_blank").card__title.twitter
              ul.card__contents
                h3.card__contents__text Twitter
          h2.body__description__heading Technical Skill
          ul.skill
            template(v-for="(skill, key) in skills")
              li.skill__item
                button(@click="onClickedSkillButton(key)").skill__item__name
                    span {{ skill.heading }}
                    span(:class="{opened: skills[key].modal}").chevron
                transition(
                  name="modal"
                  @after-enter="skill.text = true"
                )
                  .skill__item__modal(v-if="skill.modal")
                    transition(
                      name="modal-text"
                      @after-leave="skill.modal = false"
                    )
                      .text(v-if="skill.text") {{ skill.sentence }}
</template>

<script lang="ts">
import Vue from 'vue'

let timeoutID

function delayedAlert (slowAlert) {
  timeoutID = window.setTimeout(slowAlert, 40)
}

function clearAlert () {
  window.clearTimeout(timeoutID)
}

export default Vue.extend({
  data: () => {
    return {
      catchCopy: 'An Inquisitive Web-Application Engineer',
      catchCopyIndex: 0,
      showProfileArea: false,
      state: 0,
      atLeft: false,
      skills: {
        nuxt: {
          heading: 'Nuxt.js',
          background: true,
          modal: true,
          text: true,
          sentence:
            '自社サイトのフロントエンド構築をNuxtを用いスクラッチで開発した経験があるため、GAの埋め込みやSSRはもちろん、ページネーションやパンくずリスト等もNuxt上でコンポーネントとして開発することが可能です。UIフレームワークはVuetifyの経験があります。',
        },
        pug: {
          heading: 'Pug/Sass',
          background: false,
          modal: false,
          text: false,
          sentence:
            'HTMLおよびCSSを記述する際にはPugおよびSCSSの利用を得意としています。Vuetify等利用時はSCSSはほぼ利用しませんが、そうでないケースにおいては基幹コンポーネントの作成から粒度別にSCSSでコンポーネントにスタイルを当てる設計もある程度可能です。',
        },
        laravel: {
          heading: 'Laravel',
          background: false,
          modal: false,
          text: false,
          sentence:
            'Controller/Repository/Modelの切り分けやAPI Resoruce、Form Request等を用いた仕組みを0から設計し構築することができます。OSSなので実際のソースを読みながらカスタマイズしたClassを拡張して利用するといった柔軟な対応もできます。',
        },
        aws: {
          heading: 'AWS',
          background: false,
          modal: false,
          text: false,
          sentence:
            'CloudFront, S3, ALB, ASG, EC2, IAM, CodeDeploy, CodePipeline、Parameter Store、Lambdaなどを利用したベーシックなインフラ構築ができます。一方でコンテナ技術を活用したECSやFargateの実運用経験はまだありません。',
        },
        firebase: {
          heading: 'Firebase',
          background: false,
          modal: false,
          text: false,
          sentence:
            'RTDB、Firestore、FCM、Auth、Hostingの利用経験がWebアプリにしてあります。ネイティブアプリでの利用についてはFCMのサーバーサイドの構築経験のみでほかはありません。AWSと合わせ適材適所でFirebaseを使うべきところを選定することが可能かと思います。',
        },
      },
    }
  },
  computed: {
    catchMessages (): string[] {
      return Array.from(this.catchCopy).map((char) => {
        if (char === ' ') {
          return '<br>'
        }
        return `<span>${char}</span>`
      })
    },
  },
  mounted () {
    this.state = 1

    setTimeout(() => delayedAlert.call(this, this.slowAlert), 600)
  },
  methods: {
    onEntered () {
      this.state = 2
    },
    onClickedSkillButton (key) {
      if (!this.skills[key].modal) {
        this.skills[key].modal = true
        return
      }
      this.skills[key].text = false
    },
    slowAlert () {
      this.catchCopyIndex++

      if (this.catchCopyIndex > this.catchCopy.length) {
        clearAlert()
        this.showProfileArea = true
        return
      }
      delayedAlert(this.slowAlert)
    },
  },
})
</script>

<style lang="scss" scoped>
.--is-hidden {
  visibility: hidden;
  opacity: 0;
  // display: none;
}

.main-area {
  background: $white;
}
.catch-area {
  position: relative;
  height: 100vw;
  width: 100vw;
}
.slide-back {
  height: 100vw;
  width: 100vw;
  background: $primary;

  animation-name: catch-area;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
}

@keyframes catch-area {
  0% {
    transform: translateX(100vw);
  }

  40% {
    transform: translateX(90vw);
  }

  100% {
    transform: translateX(0);
  }
}

.large-nick-name {
  position: absolute;
  bottom: 20px;
  left: 8px;
  font-size: 6rem;
  color: $white;
  font-weight: bold;
}

.message-area {
  padding: 16px;
  height: 236px;
}

.message-char {
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: bold;
  font-weight: bold;
  letter-spacing: 1.5px;

  transition: opacity 0.2s;
  will-change: opacity;
}

@keyframes message-char {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.profile-area {
  padding: 40px 16px;
  border-top: 1px solid $grey-light4;

  animation-name: profile-area;
  animation-duration: 0.4s;
  animation-timing-function: ease-in-out;
}

@keyframes profile-area {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.profile-data {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  display: flex;

  &__image {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
  }
}

.profile-name {
  margin-left: 16px;

  &__text {
    font-weight: bold;
    font-size: 1.8rem;
  }
}

// -----------

.main {
  margin-top: 1500px;
}

$baseSize: 40px;
$halfSize: calc(#{$baseSize} / 2);
$descSize: calc(#{$halfSize} - 6px);
$quarterSize: calc(#{$baseSize} / 4);
$text--large: 1.8rem;

.portfolio-leave-active {
  transition: 1.5s ease-in-out 0.5s;
}
.portfolio-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.heading-enter {
  opacity: 0;
  transform: translateX(100%);
  will-change: opacity, transform;
}
.heading-enter-active {
  transition: 1.5s ease-in-out 0.5s;
}
.heading-leave-to {
  opacity: 1;
  transform: translateX(-100%);
}
.profile-enter {
  opacity: 0;
  will-change: opacity;
}
.profile-enter-active {
  transition: 1s ease-in-out 0.5s;
}
.profile-leave-to {
  opacity: 1;
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
.modal-enter-active,
.modal-leave-active {
  transition: 0.3s;
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
    will-change: opacity, transform;
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
  background-image: url('~assets/img/background/dot_double.png');
  background-repeat: repeat;
  background-size: calc(#{$baseSize} * 2);
  padding-bottom: 12px;

  .main {
    max-width: 900px;
    @include mq {
      margin: 0 auto;
    }
  }

  .heading {
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
    line-height: 1.5;
    position: relative;

    @include mq {
      font-size: $baseSize * 1.5;
    }
    @include mq('sp') {
      padding: 0 8px;
      font-size: $baseSize;
    }

    &__title {
      position: absolute;
      left: 12px;
      text-shadow: 1px 2px 2px $grey-light4;
    }

    &__label {
      &__char {
        display: flex;
        justify-content: center;
        height: $baseSize;
        min-width: $baseSize;
        text-shadow: 2px 2px 2px $grey-light3;

        @include mq {
          font-size: $baseSize * 1.5;
          height: calc(#{$baseSize} * 1.5);
        }
      }
    }

    &__subLabel {
      padding-top: 12px;
      margin-left: 4px;

      &__description {
        display: flex;
        padding-bottom: 3px;
        align-items: center;
        color: $grey-light1;
        height: $baseSize;
        font-size: calc(#{$baseSize} / 1.6);
        line-height: calc(#{$baseSize} / 1.6);
        @include mq {
          height: $baseSize * 1.5 + 1px;
          font-size: calc(#{$baseSize} / 1.6 * 1.5);
          line-height: calc(#{$baseSize} / 1.6 * 1.5);
        }
      }
    }
  }

  .profile {
    padding: 12px;

    @include mq {
      padding-top: 24px;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @include mq('sp') {
      width: 100%;
    }

    &__avatar {
      margin: 0 auto;
      height: 240px;
      width: 240px;
      border-radius: 10px;
      background-image: url('~assets/img/self.png');
      background-size: cover;
    }

    &__contents {
      @include mq {
        padding: 24px 0 0;
        display: flex;
        align-items: center;
      }
    }

    &__heading {
      @include mq {
        flex: 1;
        margin-right: 8px;
        text-align: right;
      }

      @include mq('sp') {
        text-align: center;
      }

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

    &__catchcopy {
      @include mq {
        flex: 1;
      }
      margin-top: 12px;
      text-align: center;
      font-size: 1rem;
    }
  }

  .body {
    padding: 0 12px;

    &__description {
      line-height: $baseSize;
      font-size: $descSize;

      @include mq {
        margin-top: calc(#{$halfSize} + 12px);
        font-size: $halfSize;
      }

      &__heading {
        font-size: $text--large;
        @include mq {
          padding: 8px 0;
          font-size: $baseSize;
        }

        color: $primary;
        font-weight: bold;
        margin-top: $baseSize;
      }

      .flex {
        display: flex;
        align-items: center;
      }

      .subheading {
        min-width: 90px;
        font-size: $halfSize;
        font-weight: bold;
        margin-right: $halfSize;

        @include mq {
          font-size: $text--large;
        }
      }

      .desc {
        flex: 1;
        line-height: $halfSize;

        @include mq {
          padding: 12px 0;
        }
      }

      .cardList {
        display: flex;
        margin-top: 8px;

        @include mq('sp') {
          flex-direction: column;
        }
        @include mq {
          overflow-x: scroll;
        }
        .card {
          display: flex;
          overflow: hidden;
          @include mq {
            width: 400px;
            &:not(:last-child) {
              margin-right: $halfSize;
            }
          }
          @include mq('sp') {
            justify-content: center;
          }
          flex-direction: column;
          margin-bottom: $halfSize;
          text-decoration: none;
          border-radius: 4px;
          box-shadow: 0 1px 2px 0 $grey-light2;
          background: $white;
          color: $primary;

          &__title {
            width: 100%;
            height: 200px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;

            &.qiita {
              background-image: url('~assets/img/blog/qiita.png');
            }

            &.twitter {
              background-image: url('~assets/img/blog/twitter.png');
            }

            &.note {
              background-image: url('~assets/img/blog/note.png');
            }
          }

          &__contents {
            padding: $halfSize;

            &__text {
              left: $halfSize;
              font-size: $text--large;
              font-weight: bold;
              color: $body;
            }

            &__link {
              list-style: none;
              line-height: 1.6rem;
              font-size: $descSize;

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
        margin-top: $halfSize;

        @include mq('sp') {
          flex-direction: column;
        }

        @include mq {
          width: 100vw;
          margin: 0 calc((900px - 100vw) / 2);
          overflow-x: scroll;
        }

        &__item {
          display: flex;
          flex-direction: column;
          flex: 1;
          list-style: none;

          @include mq {
            width: 50%;
            padding: $halfSize 0;
          }

          &__name {
            position: relative;
            flex: 1;
            border: 1px solid $primary;
            padding: $quarterSize $halfSize;
            font-size: $text--large;
            font-weight: bold;
            color: $primary;
            background: $white;

            @include mq {
              width: 335px;
            }

            .chevron {
              position: absolute;
              width: 15px;
              display: flex;
              right: $halfSize;
              top: 22px;
              height: 15px;
              border-bottom: 2px solid $primary;
              border-left: 2px solid $primary;
              transform: rotate(-225deg);
              transition: 0.3s;

              &.opened {
                top: 15px;
                transform: rotate(-45deg);
              }
            }
          }

          &__modal {
            @include mq {
              width: 335px;
            }
            border: 1px solid $primary;
            box-sizing: border-box;
            transform: translateY(0);

            .text {
              color: $body;
              margin: $halfSize;
              font-size: $descSize;
            }
          }
        }
      }
    }
  }
}
</style>
