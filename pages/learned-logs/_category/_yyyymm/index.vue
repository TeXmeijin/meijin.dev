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
              <div
                v-for="title in [
                  'Inputした記事/書籍',
                  'Outputした記事/成果',
                  '感想/学んだこと',
                  '今後の勉強予定',
                ]"
                :key="title"
                class="learned-title"
              >
                <span class="learned-title__text">
                  {{ title }}
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
                          v-lazy="log.image_url"
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
import { format } from 'date-fns'

type LearnedLog = {
  id: string
  type_code: 'input' | 'output' | 'impression' | 'scheduled'
  presentation_type?: 'Web記事' | '書籍' | '開発成果'
  title?: string
  page_title?: string
  url?: string
  category: {
    slug: string
    name: string
    description: string
  }
  body?: string
  read_percent?: number
  sum_read_percent?: number
  date: string
  image_url?: string
}

function formatDate (dateString: string) {
  return format(new Date(dateString), 'yyyy/MM/dd')
}

export default Vue.extend({
  async asyncData () {
    const learnedLogResponse = await fetch(
      'https://meijin-dot-me.microcms.io/api/v1/learned-log',
      {
        headers: {
          'X-API-KEY': '31a6edf1-c4cd-48b3-a1c9-f5f01e80d42f',
        },
      }
    )
    const learnedLogs = (await learnedLogResponse.json()) as {
      contents: LearnedLog[]
    }
    for (const cont of learnedLogs.contents) {
      if (!cont.url) {
        continue
      }
      const contMeta = await fetch(
        `https://noschool.asia/api/url-preview?url=${encodeURIComponent(
          cont.url
        )}`
      )
      const meta = await contMeta.json()
      cont.page_title = meta.title
      cont.image_url = meta.cover
      cont.date = formatDate(cont.date)
    }
    return {
      learnedLogs,
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
    color: $grey;
  }
}

.scheduled-area {
  & + & {
    margin-top: 16px;
  }

  padding: 12px 8px;
  border: 2px solid $main;

  &__text {
    color: $grey;
  }
}
</style>
