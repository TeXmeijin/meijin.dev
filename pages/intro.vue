<template lang="pug">
.main
  h1.heading
    transition(
      name="portfolio"
      @after-enter="afterHeadingEnter"
    )
      span(v-if="state === 0").heading__label Portfolio
    .heading__label
      transition(
        name="first"
        @after-enter="afterHeadingEnter"
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
    transition(name="description")
      span(v-if="state >= 2").heading__subLabel
        span.heading__subLabel__description
          .text anegement
        span.heading__subLabel__description
          .text ngineering
        span.heading__subLabel__description
          .text magination
        span.heading__subLabel__description
          .text avaScript
        span.heading__subLabel__description
          .text nsomnia
        span.heading__subLabel__description
          .text uxt.js
</template>

<script>
export default {
  layout: "intro",
  mounted() {
    this.state = 1;
  },
  methods: {
    afterHeadingEnter() {
      this.state = 2;
    }
  },
  data() {
    return {
      state: 0,
      atLeft: false
    };
  }
};
</script>


<style lang="scss" scoped>
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

.main {
  min-height: 700px;
  width: 100%;
  padding-top: 25px;
  padding-left: 25px;
  background-image: url("~assets/img/background/dot_green.png");
  background-repeat: repeat;
  background-size: 50px 50px;

  .heading {
    display: flex;
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.2rem;
    position: relative;

    &__label {
      position: absolute;
      left: 0;
      &__char {
        display: flex;
        justify-content: center;
        height: 50px;
        min-width: 50px;
      }
    }

    &__subLabel {
      position: absolute;
      left: 50px;

      &__description {
        display: flex;
        padding-bottom: 2px;
        align-items: flex-end;
        color: #999;
        height: 50px;
        font-size: 2rem;
        line-height: 2rem;
      }
    }
  }
}
</style>
