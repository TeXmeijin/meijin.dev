<template>
  <div class="page-tech-stock-index">
    <div class="header-area">
      <span class="header-area__text">
        Tech Stock
      </span>
    </div>
    <div class="heading-area">
      <span class="heading-area__text">
        名人@NoSchool CTOが
      </span>
      <span class="heading-area__text">
        3月に勉強したTech
      </span>
    </div>
    <div class="learned-contents-area">
      <div class="learned-contents-area__container">
        <section class="learned-contents">
          <div class="learned-contents-heading">
            <h1 class="learned-contents-heading__text">
              発信した記事
            </h1>
          </div>
          <a
            v-for="article in writtenArticles"
            :href="article.url"
            :key="article.id"
            target="_blank"
            rel="nofollow"
            class="written-content"
          >
            <figure v-if="article.cover" class="content-cover">
              <img
                :src="article.cover"
                :alt="article.title"
                class="content-cover__image"
              >
            </figure>
            <div class="content-title">
              {{ article.title }}
            </div>
            <div class="content-meta">
              <div class="content-meta__container">
                <div class="content-category">
                  <div class="content-category-item">
                    {{ article.category.name }}
                  </div>
                </div>
                <div class="date">
                  <span class="date-text">
                    {{ article.postDate }}
                  </span>
                </div>
              </div>
            </div>
          </a>
        </section>
        <section class="learned-contents">
          <div class="learned-contents-heading">
            <h1 class="learned-contents-heading__text">
              読んだ記事
            </h1>
          </div>
          <a
            v-for="article in readArticles"
            :href="article.url"
            :key="article.id"
            target="_blank"
            rel="nofollow"
            class="written-content"
          >
            <figure v-if="article.cover" class="content-cover">
              <img
                :src="article.cover"
                :alt="article.title"
                class="content-cover__image"
              >
            </figure>
            <div class="content-title">
              {{ article.title }}
            </div>
            <div class="content-meta">
              <div class="content-meta__container">
                <div class="content-category">
                  <div class="content-category-item">
                    {{ article.category.name }}
                  </div>
                </div>
                <div class="date">
                  <span class="date-text">
                    {{ article.readDate }}
                  </span>
                </div>
              </div>
            </div>
          </a>
        </section>
        <section class="learned-contents">
          <div class="learned-contents-heading">
            <h1 class="learned-contents-heading__text">
              読書
            </h1>
          </div>
          <a
            v-for="book in readBooks"
            :href="book.url"
            :key="book.id"
            target="_blank"
            rel="nofollow"
            class="written-content"
          >
            <figure v-if="book.cover" class="content-cover">
              <img
                :src="book.cover"
                :alt="book.title"
                class="content-cover__image"
              >
            </figure>
            <div class="content-title">
              {{ book.title }}
            </div>
            <div class="content-meta">
              <div class="content-meta__container">
                <div class="content-category">
                  <div class="content-category-item">
                    {{ book.category.name }}
                  </div>
                </div>
                <div class="percent">
                  <span class="percent-label">
                    今月の読書量/累計
                  </span>
                  <span class="percent-text">
                    {{ book.percent }}%/{{ book.sumPercent }}%
                  </span>
                </div>
              </div>
            </div>
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { format } from 'date-fns'

type LearnedContent = {
  id: string
  url: string
  category: {
    name: string
  }
  title?: string
  cover?: string
}

type WrittenContent = {
  postDate: string
} & LearnedContent

type ReadContent = {
  readDate: string
} & LearnedContent

type PercentContent = {
  percent: number
  sumPercent: number
} & ReadContent

function formatDate (dateString: string) {
  return format(new Date(dateString), 'yyyy/MM/dd')
}

export default Vue.extend({
  data: () => {
    return {
      writtenArticles: [] as WrittenContent[],
      readBooks: [] as PercentContent[],
      readArticles: [] as ReadContent[],
    }
  },
  async asyncData () {
    const writtenArticlesResponse = await fetch(
      'https://meijin-dot-me.microcms.io/api/v1/exp-blogs',
      {
        headers: {
          'X-API-KEY': '31a6edf1-c4cd-48b3-a1c9-f5f01e80d42f',
        },
      }
    )
    const readBooksResponse = await fetch(
      'https://meijin-dot-me.microcms.io/api/v1/exp-read-books',
      {
        headers: {
          'X-API-KEY': '31a6edf1-c4cd-48b3-a1c9-f5f01e80d42f',
        },
      }
    )
    const readArticlesResponse = await fetch(
      'https://meijin-dot-me.microcms.io/api/v1/exp-read-articles',
      {
        headers: {
          'X-API-KEY': '31a6edf1-c4cd-48b3-a1c9-f5f01e80d42f',
        },
      }
    )
    const writtenArticles = (await writtenArticlesResponse.json())
      .contents as WrittenContent[]
    for (const cont of writtenArticles) {
      const contMeta = await fetch(
        `https://noschool.asia/api/url-preview?url=${encodeURIComponent(
          cont.url
        )}`
      )
      const meta = await contMeta.json()
      cont.title = meta.title
      cont.cover = meta.cover
      cont.postDate = formatDate(cont.postDate)
    }
    const readBooks = (await readBooksResponse.json())
      .contents as PercentContent[]
    for (const cont of readBooks) {
      const contMeta = await fetch(
        `https://noschool.asia/api/url-preview?url=${encodeURIComponent(
          cont.url
        )}`
      )
      const meta = await contMeta.json()
      cont.title = meta.title
      cont.cover = meta.cover
      cont.readDate = formatDate(cont.readDate)
    }
    const readArticles = (await readArticlesResponse.json())
      .contents as ReadContent[]
    for (const cont of readArticles) {
      try {
        const contMeta = await fetch(
          `https://noschool.asia/api/url-preview?url=${encodeURIComponent(
            cont.url
          )}`
        )
        const meta = await contMeta.json()
        cont.title = meta.title
        cont.cover = meta.cover
        cont.readDate = formatDate(cont.readDate)
      } catch (error) {}
    }
    return {
      writtenArticles,
      readBooks,
      readArticles,
    }
  },
  async created () {},
  head () {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato&display=swap',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.page-tech-stock-index {
  font-family: 'Lato', sans-serif;
}

.header-area {
  display: flex;
  justify-content: center;

  &__text {
    font-weight: bold;
    font-size: 2rem;
    color: $red-7;
    padding: 16px 16px 12px;
    text-transform: uppercase;
  }
}

.heading-area {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 10px solid $red-7;

  &__text {
    font-size: 1.4rem;
    color: $red-7;
    font-weight: bold;
    letter-spacing: 1px;
  }
}

.learned-contents-heading {
  padding: 24px 16px 0;

  &__text {
    letter-spacing: 1px;
    color: $grey-light2;
    font-weight: bold;
    font-size: 2rem;
  }
}

.written-content {
  display: block;
  padding-bottom: 16px;
  border-top: 1px solid $grey-light4;
  border-bottom: 1px solid $grey-light4;
}

.content-cover {
  max-width: 100%;

  &__image {
    max-width: 100%;
  }
}

.content-title {
  margin-top: 8px;
  padding: 0 16px;
  font-weight: bold;
  font-size: 1.2rem;
}

.content-meta {
  margin-top: 8px;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.content-category {
  display: flex;
  padding: 0 16px;
}

.content-category-item {
  padding: 4px 12px;
  border-radius: 4px;
  background: $grey-light4;
  font-size: 0.9rem;
}

.date {
  padding: 0 16px;
  color: $grey;
  font-size: 0.8rem;
}

.percent {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
}

.percent-label {
  font-weight: bold;
  font-size: 0.8rem;
}

@include mq {
  .learned-contents-area {
    &__container {
      display: flex;
    }
  }

  .learned-contents {
    width: calc(100% / 3);

    & + & {
      margin-left: 8px;
    }
  }
}
</style>
