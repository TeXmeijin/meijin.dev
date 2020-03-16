<template lang="pug">
main.main-area
  section.catch-area
    .slide-back
    h1.large-nick-name Meijin
  section.message-area
    template(v-for="(message, index) in catchMessages")
      span.message-char(
        v-html="message"
        :class="{ '--is-hidden': index >= catchCopyIndex }"
      )
  section(
    :class="{ '--is-hidden': !showProfileArea }"
  ).profile-area
    .profile-inner
      .profile-area__container
        .profile-data
          .profile-data__line
            figure.profile-image
              img(
                :src="require('@/assets/img/self.png')"
              ).profile-image__image
            .profile-info
              h2.profile-info__head Yusuke Saito
              p.profile-info__description ニックネームは”名人”
              p.profile-info__description 奈良高専を卒業後、LIFULLにてWebサイト開発と新規事業立案に取り組む。2019年3月に教育ベンチャーNoSchoolに転職し、以後同社のCTOとしてWebサイト、iOSアプリの開発を統括。
    .profile-blogs
      .profile-blogs__container
        h2.profile-blogs__head Related Pages
        a(
          href="https://twitter.com/meijin_garden"
        ).profile-blog
          figure.profile-blog__image
            img(
              :src="require('@/assets/img/blog/icon-twitter.png')"
              alt="twitter"
            ).profile-blog-icon
        a(
          href="https://github.com/texmeijin"
        ).profile-blog
          figure.profile-blog__image
            img(
              :src="require('@/assets/img/blog/icon-github.png')"
              alt="github"
            ).profile-blog-icon
        a(
          href="https://qiita.com/mejileben"
        ).profile-blog
          figure.profile-blog__image
            img(
              :src="require('@/assets/img/blog/icon-qiita.png')"
              alt="qiita"
            ).profile-blog-icon
        a(
          href="https://note.com/meijin_garden"
        ).profile-blog
          figure.profile-blog__image
            img(
              :src="require('@/assets/img/blog/icon-note.svg')"
              alt="note"
            ).profile-blog-icon
</template>

<script lang="ts">
import Vue from 'vue'

let timeoutID

function delayedAlert (slowAlert) {
  timeoutID = window.setTimeout(slowAlert, 30)
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
}

.main-area {
  background: $white;
  overflow: hidden;
}
.catch-area {
  position: relative;
  height: 100vw;
  max-height: 400px;
  width: 100vw;
  overflow: hidden;
}
.slide-back {
  height: 100vw;
  max-height: 400px;
  width: 100vw;
  background: linear-gradient(lighten($primary, 20%), $primary);

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

  @include mq {
    left: 20%;
  }

  &:after {
    content: '';
    position: absolute;
    height: 200vw;
    border-left: 2px solid $white;
    position: absolute;
    bottom: -2rem;
    right: 1.6rem;
    transform: rotate(30deg);
    transform-origin: 100% 100%;

    animation-name: large-nick-name-after;
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
  }
}

@keyframes large-nick-name-after {
  0% {
    height: 0;
  }

  70% {
    height: 0;
  }

  80% {
    height: 40vw;
  }

  100% {
    height: 200vw;
  }
}

.message-area {
  padding: 16px;

  @include mq('sp') {
    height: 236px;
  }

  @include mq {
    width: 60%;
    margin: 0 auto;
    padding-left: 18rem;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      height: 100vh;
      border-left: 2px solid $grey-light4;
      position: absolute;
      top: 0;
      left: calc(17rem + 0.5rem);
      transform: rotate(30deg);
      transform-origin: 0% 0%;

      animation-name: message-area-after;
      animation-duration: 1.2s;
      animation-timing-function: ease-in-out;
    }
  }
}

@keyframes message-area-after {
  0% {
    height: 0;
  }

  70% {
    height: 0;
  }

  80% {
    height: calc(236px);
  }

  100% {
    height: 100vh;
  }
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
  overflow: hidden;
  margin-top: -16px;
  margin-bottom: -32px;

  padding: 40px 0;
  transition: 0.8s;

  &__container {
    margin-top: -32px;
    margin-bottom: -32px;

    @include mq {
      margin-top: -64px;
      margin-bottom: -64px;
    }

    transform: rotate(3deg);
    box-sizing: border-box;
    background: $teal-7;
    padding: 40px 0;
  }
}

.profile-inner {
  overflow: hidden;
  margin-left: -25%;
  transform: rotate(-3deg);
  transition: opacity 0.8s;
  width: 150%;
}

.profile-data {
  margin-top: 40px;

  @include mq {
    padding: 32px 0;
    margin-top: 64px;
  }

  width: 85vw;

  &__line {
    display: flex;
  }

  &:nth-child(odd) {
    margin-left: calc(25%);
  }

  &:last-child {
    margin-bottom: 32px;

    @include mq {
      margin-bottom: 64px;
    }
  }
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

.profile-info {
  margin-left: 16px;
  padding-top: calc(28px - 1.8rem / 2);
  color: $white;

  &__head {
    font-weight: bold;
    font-size: 1.8rem;
  }

  &__description {
    margin-top: 16px;
    color: $white;
    font-size: 1rem;
    line-height: 1.5;
  }
}

.profile-blogs {
  margin-top: 48px;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__head {
    margin-top: 16px;
    margin-bottom: 32px;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
  }
}

.profile-blog {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &__image {
    height: 80px;
    width: 155px;
    display: flex;
    justify-content: center;
  }

  &__name {
    font-weight: bold;
    margin-left: 8px;
    font-size: 1.4rem;
  }
}

.profile-blog-icon {
  max-width: 100%;
  height: auto;
  object-fit: contain;
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
