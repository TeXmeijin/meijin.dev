<template>
  <div class="page-learned-logs">
    <header class="header-area">
      <div class="service-name">
        <span class="service-name__text">
          Learned Logs
        </span>
      </div>
    </header>
    <div class="catch-area">
      <div class="catch-area__text">
        名人@NoSchool CTOさんが
      </div>
      <div class="catch-area__text">
        3月に勉強したJavaScript
      </div>
    </div>
    <div class="main-area">
      <div class="about-category">
        <div class="about-category__container">
          <div class="category-title">
            <span class="category-title__text">
              JavaScript
            </span>
          </div>
          <div class="category-detail">
            <span class="category-title__text">
              ES6, TypeScript, Test, PWA, Performance, Vue/React/Angular,
              webpack...
            </span>
          </div>
        </div>
      </div>
      <div class="learned-area">
        <div class="learned-area__container">
          <div class="category-titles">
            <div class="category-titles__container">
              <div v-for="n in 4" :key="n" class="learned-title">
                <span class="learned-title__text">
                  Inputした記事/書籍
                </span>
              </div>
            </div>
          </div>
          <div class="learned-list">
            <div
              v-for="(logs, index) in [
                inputtedLogs,
                outputtedLogs,
                impressionLogs,
                scheduledLogs,
              ]"
              :key="index"
              class="learned-category"
            >
              <div class="learned-category__container">
                <div class="learned-logs">
                  <div class="learned-logs__container">
                    <div v-for="log in logs" :key="log.id" class="log-item">
                      <div
                        v-if="log.presentation_type"
                        class="presentation-type"
                      >
                        <div class="presentation-type__item">
                          {{ log.presentation_type }}
                        </div>
                      </div>
                      <div v-if="log.image_url" class="log-image">
                        <img
                          :src="log.image_url"
                          :alt="log.page_title"
                          class="log-image__image"
                        >
                      </div>
                      <div v-if="log.page_title" class="log-page-title">
                        <span class="log-page-title__text">
                          {{ log.page_title }}
                        </span>
                      </div>
                      <div v-if="log.title" class="log-title">
                        <span class="log-title__text">
                          {{ log.title }}
                        </span>
                      </div>
                      <template v-if="log.body">
                        <div
                          v-if="log.type_code === 'scheduled'"
                          class="scheduled-area"
                        >
                          <div class="scheduled-area__text">
                            {{ log.body }}
                          </div>
                        </div>
                        <div v-else class="log-body">
                          <span class="log-body__text">
                            {{ log.body }}
                          </span>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type LearnedLog = {
  id: string
  type_code: 'input' | 'output' | 'impression' | 'scheduled'
  presentation_type?: 'Web記事' | '書籍' | '開発成果'
  title?: string
  page_title?: string
  url?: string
  category: {
    slug: string
    text: string
    description: string
  }
  body?: string
  read_percent?: number
  sum_read_percent?: number
  date: string
  image_url?: string
}

export default Vue.extend({
  data (): {
    learnedLogs: {
      contents: LearnedLog[]
    }
    } {
    return {
      learnedLogs: {
        contents: [
          {
            id: 'hogehoge',
            category: {
              slug: 'javascript',
              text: 'JavaScript',
              description:
                'ES6, TypeScript, Test, PWA, Performance, Vue/React/Angular, webpack...',
            },
            url: 'https://qiita.com/mejileben/private/11f206a51861bb404e1a',
            presentation_type: 'Web記事',
            image_url:
              'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-1150d8b18a7c15795b701a55ae908f94.png?ixlib=rb-1.2.2&w=1200&mark=https%3A%2F%2Fqiita-user-contents.imgix.net%2F~text%3Fixlib%3Drb-1.2.2%26w%3D840%26h%3D380%26txt%3D%25E3%2583%2595%25E3%2583%25AD%25E3%2583%25B3%25E3%2583%2588%25E3%2582%25A8%25E3%2583%25B3%25E3%2583%2589%25E3%2581%25A7%25E5%25A7%258B%25E3%2582%2581%25E3%2582%258B%25E3%2580%258CAPI%2520%25E3%2581%25AE%25E5%259E%258B%25E5%25AE%259A%25E7%25BE%25A9%25E3%2580%258D%25E3%2581%25AE%25E3%2582%25B9%25E3%2582%25B9%25E3%2583%25A1%2528Nuxt%25C3%2597TS%25C3%2597aspida%2529%26txt-color%3D%2523333%26txt-font%3DAvenir-Black%26txt-size%3D54%26txt-clip%3Dellipsis%26txt-align%3Dcenter%252Cmiddle%26s%3Dc4709b96a54ccb06e3331a5181dfbb88&mark-align=center%2Cmiddle&blend=https%3A%2F%2Fqiita-user-contents.imgix.net%2F~text%3Fixlib%3Drb-1.2.2%26w%3D840%26h%3D500%26txt%3D%2540mejileben%26txt-color%3D%2523333%26txt-font%3DAvenir-Black%26txt-size%3D45%26txt-align%3Dright%252Cbottom%26s%3Dd6166f964a877fa3f4c0440731881242&blend-align=center%2Cmiddle&blend-mode=normal&s=f2b817643d89a74a3f288196f1c75c59',
            page_title:
              'フロントエンドで始める「API の型定義」のススメ(Nuxt×TS×aspida) - Qiita',
            date: '2020-03-18T15:00:00.000Z',
            type_code: 'input',
          },
          {
            id: 'hogehoge',
            category: {
              slug: 'javascript',
              text: 'JavaScript',
              description:
                'ES6, TypeScript, Test, PWA, Performance, Vue/React/Angular, webpack...',
            },
            url: 'https://qiita.com/mejileben/private/11f206a51861bb404e1a',
            presentation_type: 'Web記事',
            image_url:
              'https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-1150d8b18a7c15795b701a55ae908f94.png?ixlib=rb-1.2.2&w=1200&mark=https%3A%2F%2Fqiita-user-contents.imgix.net%2F~text%3Fixlib%3Drb-1.2.2%26w%3D840%26h%3D380%26txt%3D%25E3%2583%2595%25E3%2583%25AD%25E3%2583%25B3%25E3%2583%2588%25E3%2582%25A8%25E3%2583%25B3%25E3%2583%2589%25E3%2581%25A7%25E5%25A7%258B%25E3%2582%2581%25E3%2582%258B%25E3%2580%258CAPI%2520%25E3%2581%25AE%25E5%259E%258B%25E5%25AE%259A%25E7%25BE%25A9%25E3%2580%258D%25E3%2581%25AE%25E3%2582%25B9%25E3%2582%25B9%25E3%2583%25A1%2528Nuxt%25C3%2597TS%25C3%2597aspida%2529%26txt-color%3D%2523333%26txt-font%3DAvenir-Black%26txt-size%3D54%26txt-clip%3Dellipsis%26txt-align%3Dcenter%252Cmiddle%26s%3Dc4709b96a54ccb06e3331a5181dfbb88&mark-align=center%2Cmiddle&blend=https%3A%2F%2Fqiita-user-contents.imgix.net%2F~text%3Fixlib%3Drb-1.2.2%26w%3D840%26h%3D500%26txt%3D%2540mejileben%26txt-color%3D%2523333%26txt-font%3DAvenir-Black%26txt-size%3D45%26txt-align%3Dright%252Cbottom%26s%3Dd6166f964a877fa3f4c0440731881242&blend-align=center%2Cmiddle&blend-mode=normal&s=f2b817643d89a74a3f288196f1c75c59',
            page_title:
              'フロントエンドで始める「API の型定義」のススメ(Nuxt×TS×aspida) - Qiita',
            date: '2020-03-18T15:00:00.000Z',
            type_code: 'output',
          },
          {
            id: 'hogehoge',
            category: {
              slug: 'javascript',
              text: 'JavaScript',
              description:
                'ES6, TypeScript, Test, PWA, Performance, Vue/React/Angular, webpack...',
            },
            body:
              '会社での実装ではNuxt.jsに対して特にこれといった例外処理は実装しておらず、都度axios等の外部通信時にはcatch実装されていなければNuxt標準のServer Errorという画面が表示されてしまう。共通のエラーハンドリングを仕込まなければと感じた。',
            title: 'エラーハンドリング',
            date: '2020-03-18T15:00:00.000Z',
            type_code: 'impression',
          },
          {
            id: 'hogehoge',
            category: {
              slug: 'javascript',
              text: 'JavaScript',
              description:
                'ES6, TypeScript, Test, PWA, Performance, Vue/React/Angular, webpack...',
            },
            body:
              'TypeScriptのreadonlyについて調べる。できるだけ付ける方が良い？',
            date: '2020-03-18T15:00:00.000Z',
            type_code: 'scheduled',
          },
        ],
      },
    }
  },
  computed: {
    inputtedLogs (): LearnedLog[] {
      return this.learnedLogs.contents.filter((log) => {
        return log.type_code === 'input'
      })
    },
    outputtedLogs (): LearnedLog[] {
      return this.learnedLogs.contents.filter((log) => {
        return log.type_code === 'output'
      })
    },
    impressionLogs (): LearnedLog[] {
      return this.learnedLogs.contents.filter((log) => {
        return log.type_code === 'impression'
      })
    },
    scheduledLogs (): LearnedLog[] {
      return this.learnedLogs.contents.filter((log) => {
        return log.type_code === 'scheduled'
      })
    },
  },
})
</script>

<style lang="scss" scoped>
$main: #10a7a9;
$grey: #7b8c8c;
$lightGrey: #d5d5d5;
$backgroundMain: #fafaf1;
$white: #fafafa;

.page-learned-logs {
  background: $backgroundMain;
  font-family: 'Helvetica Neue', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans',
    Meiryo, sans-serif;
  letter-spacing: 0.1em;
}

.header-area {
  height: 60px;
  padding: 0 32px;
  display: flex;
  align-items: center;
}

.service-name {
  letter-spacing: 0.15rem;
  font-size: 1.5rem;
  color: $grey;
  font-weight: bold;
}

.catch-area {
  padding: 32px;
  background: $main;

  &__text {
    font-weight: bold;
    color: $white;
    letter-spacing: 0.15rem;
    font-size: 1.5rem;
  }
}

.main-area {
  padding: 32px;
}

.about-category {
  display: flex;

  &__container {
    border: 1px solid $main;
    padding: 12px 16px;
    color: $main;
  }
}

.category-title {
  font-weight: bold;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
}

.category-detail {
}

.learned-area {
  margin-top: 32px;

  &__container {
    // FIXME: 無理やり実装
    height: calc(100vh - 380px);
    margin: 0 -16px;
  }
}

.category-titles {
  &__container {
    display: flex;
  }
}

.learned-list {
  display: flex;
  height: 100%;
}

.learned-category {
  flex: 1;
  height: 100%;

  & + & {
    border-left: 1px solid $lightGrey;
  }

  &__container {
    padding: 0 16px;
  }
}

.learned-title {
  flex: 1;
  border-bottom: 2px solid $grey;
  margin: 0 16px;

  &__text {
    font-size: 1.25rem;
    font-weight: bold;
    color: $main;
  }
}

.learned-logs {
  margin-top: 16px;
}

.log-item {
  & + & {
    margin-top: 16px;
  }
}

.log-image {
  margin-top: 8px;
  width: 100%;
  display: flex;

  &__image {
    width: 100%;
  }
}

.presentation-type {
  display: flex;

  &__item {
    padding: 4px 12px;
    font-weight: bold;
    background: $grey;
    color: $white;
  }
}

.log-page-title {
  margin-top: 8px;
  color: $grey;
}

.log-title {
  &__text {
    font-weight: bold;
    font-size: 1.25rem;
    color: $grey;
  }
}

.log-body {
  margin-top: 4px;

  &__text {
    line-height: 1.9;
  }
}
</style>
