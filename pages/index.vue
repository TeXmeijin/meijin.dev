<template>
  <main class="main-area">
    <section class="catch-area">
      <div class="slide-back" />
      <h1 class="large-nick-name">
        Meijin
      </h1>
    </section>
    <section class="message-area">
      <template v-for="(message, index) in catchMessages">
        <span
          :key="index"
          class="message-char"
          :class="{ '--is-hidden': index >= catchCopyIndex }"
          v-html="message"
        />
      </template>
    </section>
    <section class="personal-area" :class="{ '--is-hidden': !showProfileArea }">
      <div class="personal-inner">
        <div
          v-lazy:background-image.container="
            require('@/assets/img/background/background_source_green.svg')
          "
          class="personal-area__container personal-area__container--src"
        >
          <div class="personal-data">
            <div class="personal-data__line">
              <figure class="personal-image">
                <img
                  v-lazy="require('@/assets/img/self.png')"
                  class="personal-image__image"
                >
              </figure>
              <div class="personal-info">
                <h2 class="personal-info__head">
                  Yusuke Saito
                </h2>
                <p class="personal-info__description">
                  ニックネームは”名人”
                </p>
                <p class="personal-info__description">
                  奈良高専を卒業後、2016年に株式会社LIFULLにてWebサイト開発と新規事業立案に取り組む。
                </p>
                <p class="personal-info__description">
                  2019年に教育ベンチャーNoSchoolに転職し、以後同社のCTOとしてWebサイト、スマートフォンアプリの開発を統括。
                </p>
                <p class="personal-info__description">
                  Web技術を中心にデザインも含めたカバー範囲の広いスキルセットと、
                  要件定義からリリースまでワンストップでプロジェクトマネジメントできる点がセールスポイント。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="personal-simple-area">
        <div class="personal-simple-area__container">
          <h2 class="personal-simple-area__head">
            Related Web Pages
          </h2>
          <a
            class="profile-blog"
            href="https://twitter.com/meijin_garden"
            target="_blank"
            rel="nofollow"
          >
            <figure class="profile-blog__image">
              <img
                v-lazy="require('@/assets/img/blog/icon-twitter.png')"
                class="profile-blog-icon"
                alt="twitter"
              >
            </figure>
          </a>
          <a
            class="profile-blog"
            href="https://github.com/texmeijin"
            target="_blank"
            rel="nofollow"
          >
            <figure class="profile-blog__image">
              <img
                v-lazy="require('@/assets/img/blog/icon-github.png')"
                class="profile-blog-icon"
                alt="github"
              >
            </figure>
          </a>
          <a
            class="profile-blog"
            href="https://qiita.com/mejileben"
            target="_blank"
            rel="nofollow"
          >
            <figure class="profile-blog__image">
              <img
                v-lazy="require('@/assets/img/blog/icon-qiita.png')"
                class="profile-blog-icon"
                alt="qiita"
              >
            </figure>
          </a>
          <a
            class="profile-blog"
            href="https://lapras.com/public/OF7HQIA"
            target="_blank"
            rel="nofollow"
          >
            <figure class="profile-blog__image">
              <img
                v-lazy="require('@/assets/img/blog/lapras.svg')"
                class="profile-blog-icon"
                alt="LAPRAS"
              >
            </figure>
          </a>
          <a
            class="profile-blog"
            href="https://note.com/meijin_garden"
            target="_blank"
            rel="nofollow"
          >
            <figure class="profile-blog__image">
              <img
                v-lazy="require('@/assets/img/blog/icon-note.svg')"
                class="profile-blog-icon"
                alt="note"
              >
            </figure>
          </a>
        </div>
      </div>
    </section>
    <section class="personal-area" :class="{ '--is-hidden': !showProfileArea }">
      <div class="personal-inner personal-inner--skill">
        <div class="personal-area__container personal-area__container--skill">
          <h2 class="personal-heading">
            Technical Skill
          </h2>
          <div v-for="skill in skills" :key="skill.id" class="personal-data">
            <div class="personal-data__line">
              <figure class="personal-image">
                <img
                  v-lazy="skill.icon.url"
                  class="personal-image__image personal-image__image--square"
                >
              </figure>
              <div class="personal-info">
                <h2 class="personal-info__head">
                  {{ skill.title }}
                </h2>
                <div v-html="skill.body" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="personal-area" :class="{ '--is-hidden': !showProfileArea }">
      <div class="personal-simple-area">
        <div class="personal-simple-area__container">
          <h2 class="personal-simple-area__head">
            Contact
          </h2>
          <p
            class="personal-simple-area__message personal-simple-area__message--last"
          >
            ご連絡は
            <a href="https://twitter.com/meijin_garden">Twitter</a>
            までお願いします。
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
let timeoutID
function delayedAlert (slowAlert) {
  timeoutID = window.setTimeout(slowAlert, 60)
}

function clearAlert () {
  window.clearTimeout(timeoutID)
}

export default Vue.extend({
  data: () => {
    return {
      catchCopy: 'A Curious Web-Application Engineer',
      catchCopyIndex: 0,
      showProfileArea: false,
      skills: [] as {
        id: string
        icon: {
          url: string
        }
        title: string
        body: string
      }[],
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
  async mounted () {
    // 一度きりの利用なのでAPI-KEY含めベタ打ち。このKEYはGETのみの利用なので公開できる
    const skillsResponse = await fetch(
      'https://meijin-dot-me.microcms.io/api/v1/skills',
      {
        headers: {
          'X-API-KEY': '31a6edf1-c4cd-48b3-a1c9-f5f01e80d42f',
        },
      }
    )
    this.skills = (await skillsResponse.json()).contents
    setTimeout(() => delayedAlert.call(this, this.slowAlert), 600)
  },
  methods: {
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
  background: $orange-0;
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
  background: linear-gradient(to right, lighten($primary, 25%), $primary);
  will-change: transform;

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
  color: $orange-0;
  font-weight: bold;

  @include mq('tb') {
    left: 20%;
  }

  @include mq {
    font-size: 8rem;
    left: 25%;
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
  position: relative;
  padding: 16px;
  box-sizing: border-box;

  &:before {
    content: '';
    position: absolute;
    height: 200vh;
    border-right: 2px solid $orange-1;
    top: 0;
    transform: rotate(30deg);
    transform-origin: 0 0;

    animation-name: message-area-after;
    animation-duration: 1.6s;
    animation-timing-function: ease-in-out;
  }

  @include mq('sp-only') {
    height: 236px;

    &:before {
      box-sizing: border-box;
      height: 100vh;
      left: calc(18px * 16);
    }
  }

  @include mq('tb') {
    width: 60%;
    margin: 0 auto;
    padding-left: 18rem;

    &:before {
      left: calc(17rem + 0.5rem);
    }
  }

  @include mq {
    padding-left: 29rem;

    &:before {
      left: calc(28rem + 0.7rem);
    }
  }
}

@keyframes message-area-after {
  0% {
    height: 0;
  }

  50% {
    height: 0;
  }

  60% {
    height: 236px;
  }

  100% {
    height: 150vh;
  }
}

.message-char {
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: bold;
  letter-spacing: 1px;
  white-space: pre;

  transition: opacity 0.15s;
  will-change: opacity;
}

.personal-area {
  overflow: hidden;
  margin-top: -16px;
  margin-bottom: -32px;

  padding: 60px 0;
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

    &--skill {
      background: linear-gradient($red-7, lighten($red-7, 10%));
      transform: rotate(-3deg);
    }

    &--src {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  }
}

.personal-inner {
  overflow: hidden;
  margin-left: -25%;
  transform: rotate(-3deg);
  transition: opacity 0.8s;
  width: 150%;

  &--skill {
    transform: rotate(3deg);
  }
}

.personal-heading {
  text-align: center;
  font-weight: bold;
  margin-top: 80px;
  font-size: 1.8rem;
  color: $white;

  @include mq {
    font-size: 2.2rem;
  }
}

.personal-data {
  margin-top: 48px;
  margin-left: 20%;

  width: 85vw;

  @include mq {
    margin-left: 25%;
    padding: 64px 0 16px;
    margin-top: 56px;
    width: 80vw;
  }

  &__line {
    display: flex;
  }

  &:last-child {
    margin-bottom: 32px;

    @include mq {
      margin-bottom: 80px;
    }
  }
}

.personal-image {
  display: flex;

  &__image {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;

    &--square {
      border-radius: 8px;
    }

    @include mq {
      width: 72px;
      height: 72px;
    }
  }
}

.personal-info {
  margin-left: 16px;
  padding-top: 4px;
  color: $white;

  @include mq {
    padding-top: calc(36px - 2.4rem / 2);
  }

  &__head {
    font-weight: bold;
    font-size: 1.8rem;

    @include mq {
      font-size: 2.4rem;
    }
  }

  /**
   * スキルはmicroCMSから取得しているコンテンツなのでv-htmlで表示する
   */
  & ::v-deep p {
    margin-top: 24px;
    color: $white;
    font-size: 1rem;
    line-height: 1.8;

    @include mq {
      font-size: 1.2rem;
    }
  }

  & ::v-deep br {
    content: '';
    display: block;
    margin-top: 16px;
  }
}

.personal-simple-area {
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

    @include mq {
      font-size: 2.2rem;
    }
  }

  &__message {
    padding: 0 16px;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 16px;

    &--last {
      margin-bottom: 64px;
    }
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
</style>
