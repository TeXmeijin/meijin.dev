<template lang="pug">
.topPanel
  h1.heading
    transition(name="portfolio")
      span(v-if="state === 0").label Portfolio
    transition(
      name="heading"
      @after-enter="afterHeadingEnter"
    )
      span(v-if="state >= 1").label
        span.char.first M
        span.char.second E
        span.char.third I
        span.char.fourth J
        span.char.fifth I
        span.char.sixth N
    transition(name="description")
      span(v-if="state >= 2").subLabel
        span.description
          .text anegement
        span.description
          .text ngineering
        span.description
          .text magination
        span.description
          .text avaScript
        span.description
          .text nsomnia
        span.description
          .text uxt.js
</template>

<script>
export default {
  mounted() {
    this.state = 1
  },
  methods: {
    afterHeadingEnter() {
      this.state = 2
    }
  },
  data() {
    return {
      state: 0
    }
  },
}
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
  transition: 0.5s;
}
.description-enter-to {
  opacity: 1;
}

.topPanel {
  height: 700px;
  width: 100%;
  padding-top: 25px;
  padding-left: 25px;
  background-image: url('~assets/img/background/dot_green.png');
  background-repeat: repeat;
  background-size: 50px 50px;

  .heading {
    display: flex;
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.2rem;
    position: relative;

    .label {
      position: absolute;
      left: 0;
    }

    .subLabel {
      position: absolute;
      left: 50px;

      .description {
        display: flex;
        padding-bottom: 2px;
        align-items: flex-end;
        color: #999;
        height: 50px;
        font-size: 2rem;
        line-height: 2rem;
      }
    }

    .char {
      display: flex;
      justify-content: center;
      height: 50px;
      min-width: 50px;
    }

    .first {
      animation: heading 1.5s ease-in-out;
    }
    .second {
      animation: heading 1.5s ease-in-out 0.2s;
    }
    .third {
      animation: heading 1.5s ease-in-out 0.4s;
    }
    .fourth {
      animation: heading 1.5s ease-in-out 0.6s;
    }
    .fifth {
      animation: heading 1.5s ease-in-out 0.8s;
    }
    .sixth {
      animation: heading 1.5s ease-in-out 1.0s;
    }
  }

  @keyframes heading {
    0% {
      transform: translateX(1200%)
    }
    100% {
      transform: translateX(0%)
    }
  }
}
</style>
