<template>
  <div class="wrapper">
    <div class="first-view">
      <img :src="require('@/assets/img/v2/me_background-min.png')" alt="" class="first-view__bg" loading="lazy">
      <img :src="require('@/assets/img/v2/me-min.png')" alt="" class="first-view__front" loading="lazy">
      <div class="first-view__content">
        <h1 class="first-view__heading">
          Meijin
        </h1>
        <h2 class="first-view__subheading">
          A Progressive Web Developer
        </h2>
        <ul class="first-view__list">
          <li class="first-view__list-item">
            <a href="#about">
              About
            </a>
          </li>
          <li class="first-view__list-item">
            <a href="#skill">
              Skill
            </a>
          </li>
          <li class="first-view__list-item">
            <a href="#career">
              Career
            </a>
          </li>
          <li class="first-view__list-item">
            <a href="#blogs">
              Blogs
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="section__content">
        <h2 id="about">
          About
        </h2>
        <p>
          1995年生、奈良県出身
          <br>
          名人(meijin)という名前で活動しているWebエンジニアです。
        </p>
      </div>
    </div>
    <div class="section">
      <div class="section__content">
        <h2 id="career">
          Career
        </h2>
        <div class="career-item">
          <div class="career-range">
            2011-2016
          </div>
          <div class="career-desc">
            Nara National College Of Technology
            <br>
            Department of Computer Science
          </div>
        </div>
        <div class="career-item">
          <div class="career-range">
            2016-2019
          </div>
          <div class="career-desc">
            Web engineer at LIFULL corp
          </div>
        </div>
        <div class="career-item">
          <div class="career-range">
            2019-
          </div>
          <div class="career-desc">
            CTO at NoSchool inc
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__content">
        <h2 id="skill">
          Skill
        </h2>
        <div class="graph-area">
          <div class="column-names">
            <div class="column-names__name">
              <span>Basis</span>
            </div>
            <div class="column-names__name">
              <span>Job</span>
            </div>
            <div class="column-names__name">
              <span>Reviewer</span>
            </div>
            <div class="column-names__name">
              <span>0 to 1</span>
            </div>
            <div class="column-names__name">
              <span>Tech Lead</span>
            </div>
          </div>
          <Intersect v-for="skillItem in skillClassList" :key="skillItem.label" @enter="skillItem.width = skillItem.toWidth">
            <div class="skill-item">
              <div class="skill-item__name">
                {{ skillItem.label }}
              </div>
              <div class="skill-item__graph-container">
                <div class="skill-item__graph" :class="{ [`w${skillItem.width}`]: true }" />
              </div>
            </div>
          </Intersect>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__content">
        <h2 id="blogs">
          Blogs
        </h2>
        <ul class="web-links">
          <li class="profile-blog">
            <a
              class="profile-blog"
              href="https://twitter.com/meijin_garden"
              rel="nofollow"
              target="_blank"
            >
              <figure class="profile-blog__image">
                <img
                  v-lazy="require('@/assets/img/blog/icon-twitter.png')"
                  alt="twitter"
                  class="profile-blog-icon"
                >
              </figure>
            </a>
          </li>
          <li class="profile-blog">
            <a
              class="profile-blog"
              href="https://github.com/texmeijin"
              rel="nofollow"
              target="_blank"
            >
              <figure class="profile-blog__image">
                <img
                  v-lazy="require('@/assets/img/blog/icon-github.png')"
                  alt="github"
                  class="profile-blog-icon"
                >
              </figure>
            </a>
          </li>
          <li class="profile-blog">
            <a
              class="profile-blog"
              href="https://qiita.com/mejileben"
              rel="nofollow"
              target="_blank"
            >
              <figure class="profile-blog__image">
                <img
                  v-lazy="require('@/assets/img/blog/icon-qiita.png')"
                  alt="qiita"
                  class="profile-blog-icon"
                >
              </figure>
            </a>
          </li>
          <li class="profile-blog">
            <a
              class="profile-blog"
              href="https://lapras.com/public/OF7HQIA"
              rel="nofollow"
              target="_blank"
            >
              <figure class="profile-blog__image">
                <img
                  v-lazy="require('@/assets/img/blog/lapras.svg')"
                  alt="LAPRAS"
                  class="profile-blog-icon"
                >
              </figure>
            </a>
          </li>
          <li class="profile-blog">
            <a
              class="profile-blog"
              href="https://note.com/meijin_garden"
              rel="nofollow"
              target="_blank"
            >
              <figure class="profile-blog__image">
                <img
                  v-lazy="require('@/assets/img/blog/icon-note.svg')"
                  alt="note"
                  class="profile-blog-icon"
                >
              </figure>
            </a>
          </li>
        </ul>
        <ul class="articles">
          <li v-for="article in showPosts" :key="article.link" class="articles__item article">
            <a :href="article.link" target="_blank" rel="nofollow" class="article__link link">
              <span class="link__meta">
                <div class="blog">
                  <img :src="getFaviconSrcFromURL(article.link)" :alt="article.authorName" width="24" height="24">
                  <span class="blog__name">
                    {{ getHostFromURL(article.link) }}
                  </span>
                </div>
                <span class="date">
                  {{ formatISODate(article.isoDate) }}
                </span>
              </span>
              <span class="link__name">
                {{ article.title }}
              </span>
            </a>
          </li>
        </ul>
        <div v-if="showLinkCount > 0" class="load-more">
          <button class="load-more__button" @click="showLinkCount = 0">
            <span>LOAD MORE...</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { elementScrollIntoViewPolyfill } from 'seamless-scroll-polyfill'
import Intersect from 'vue-intersect'
import { getFaviconSrcFromHostname, getHostFromURL } from '~/modules/shared'
import { PostItem } from '~/types'
import posts from '~/.contents/posts.json'

export default Vue.extend({
  components: {
    Intersect,
  },
  data () {
    return {
      showLinkCount: 5,
      skillClassList: [
        {
          width: 0,
          toWidth: 70,
          label: 'TypeScript',
        },
        {
          width: 0,
          toWidth: 70,
          label: 'JavaScript',
        },
        {
          width: 0,
          toWidth: 80,
          label: 'Nuxt.js',
        },
        {
          width: 0,
          toWidth: 50,
          label: 'Vue3',
        },
        {
          width: 0,
          toWidth: 70,
          label: 'CSS',
        },
        {
          width: 0,
          toWidth: 30,
          label: 'Next.js',
        },
        {
          width: 0,
          toWidth: 40,
          label: 'MySQL',
        },
        {
          width: 0,
          toWidth: 60,
          label: 'Laravel',
        },
        {
          width: 0,
          toWidth: 70,
          label: 'AWS',
        },
        {
          width: 0,
          toWidth: 70,
          label: 'Firebase',
        },
        {
          width: 0,
          toWidth: 30,
          label: 'UI Design',
        },
        {
          width: 0,
          toWidth: 60,
          label: 'DDD',
        },
        {
          width: 0,
          toWidth: 60,
          label: 'Testing',
        },
      ],
    }
  },
  computed: {
    showPosts (): PostItem[] {
      const showPosts = posts as PostItem[]
      if (this.showLinkCount) {
        return showPosts.slice(0, this.showLinkCount)
      }
      return showPosts
    },
  },
  mounted () {
    elementScrollIntoViewPolyfill()
    /**
     * @see https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
     */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    })
  },
  methods: {
    getHostFromURL (url: string) {
      return getHostFromURL(url)
    },
    getFaviconSrcFromURL (url: string) {
      return getFaviconSrcFromHostname(getHostFromURL(url))
    },
    formatISODate (isoDate?: string) {
      const date = new Date(isoDate ?? '')
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    },
  },
})
</script>

<style lang='scss' scoped>
a {
  text-decoration: none;
}

.first-view {
  position: relative;
  width: 100vw;
  height: 800px;
  padding-bottom: 80px;

  .first-view__bg {
    position: relative;
    object-fit: cover;

    width: 100%;
    max-height: 800px;
  }

  .first-view__content {
    width: auto;
    height: 600px;
    position: absolute;
    left: calc(20vw - 9rem);
    top: 12vw;
    display: flex;
    flex-direction: column;
  }

  .first-view__front {
    position: absolute;
    width: 70vw;
    height: 42vw;
    left: 18vw;
    top: 5vw;
    object-fit: cover;
    box-shadow: 4px 4px 4px 0 #444444aa;
  }

  .first-view__heading {
    color: $white;
    font-weight: bold;
    font-size: 7rem;
    letter-spacing: 6px;
    line-height: 7rem;
  }

  .first-view__subheading {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    padding: 0 8px;
    background: $white;
    line-height: 1.9rem;
  }

  .first-view__list {
    margin-top: 40px;
    list-style: none;
    width: 256px;
  }

  .first-view__list-item {
    padding: 4px 24px;
    color: $white;
    font-weight: bold;
    border: 2px solid $white;
    font-size: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:after {
      content: '';
      width: 12px;
      height: 12px;
      border-top: 3px solid $white;
      border-right: 3px solid $white;
      transform: rotate(45deg);
      display: block;
    }
  }

  .first-view__list-item + .first-view__list-item {
    border-top: none;
  }
}

.wrapper {
  background: #FFFCF5;
  min-height: 100vh;
  padding-bottom: 100px;
}

.section {
  padding: 32px 0;

  .section__content {
    width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
}

.column-names {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 24px 0 24px 240px;
  background: #FFFCF5;
}

.skill-item {
  display: flex;
  align-items: center;
  padding: 8px 0;

  .skill-item__name {
    font-size: 2rem;
    width: 240px;
  }

  .skill-item__graph-container {
    flex: 1;
  }

  .skill-item__graph {
    background: $grey;
    height: 1.5rem;
    transition-duration: .9s;
    transition-timing-function: ease-in-out;

    &.w0 {
      width: 0;
    }
    @for $i from 1 through 10 {
      &.w#{$i}0 {
        width: 10% * $i;
      }
    }
  }
}

.career-item {
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  & + & {
    margin-top: 16px;
  }

  .career-range {
    width: 260px;
  }
}

.web-links {
  display: flex;
  justify-content: center;
  padding: 16px 0;

  .profile-blog {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;

    &__image {
      height: 80px;
      max-width: 155px;
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
}

.articles {
  margin: 16px auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article {
  @include mq {
    width: 632px;
  }
  padding: 24px 8px;
  border-top: 1px solid $grey-light4;
  display: flex;

  .link {
    width: 100%;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    &__meta {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__name {
      margin-top: 8px;
    }
  }

  .blog {
    display: flex;
    align-items: center;
    font-size: .8rem;
    color: $grey;

    &__name {
      margin-left: 8px;
    }
  }

  .date {
    font-size: .8rem;
    color: $grey;
  }
}

.load-more {
  display: flex;
  justify-content: center;
  padding: 8px;

  &__button {
    padding: 8px;
    border: 0;
    border-bottom: 1px solid $grey-light4;
    font-size: 1.2rem;
    background: transparent;
    color: $body;
  }
}
</style>
