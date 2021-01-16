<template>
  <div>
    <div class="first-view">
      <img loading="lazy" :src="require('@/assets/img/v2/me_background-min.png')" alt="" class="first-view__bg">
      <img :src="require('@/assets/img/v2/me-min.png')" alt="" class="first-view__front">
      <h1 class="first-view__heading">
        Meijin
      </h1>
      <h2 class="first-view__subheading">
        A Progressive Web Developer
      </h2>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang='scss' scoped>
.first-view {
  position: relative;
  width: 100vw;
  height: calc(100vh - 100px);

  .first-view__bg {
    position: relative;
    object-fit: cover;

    width: 100%;
    height: 100%;
  }

  .first-view__front {
    width: 1000px;
    height: 600px;
    position: absolute;
    left: calc(50% - 500px);
    top: calc(50% - 300px);
    object-fit: cover;
  }

  .first-view__heading {
    color: $white;
    font-weight: bold;
    font-size: 6rem;
    position: absolute;
    left: calc(50% - 580px);
    top: calc(50% - 200px);
    letter-spacing: 6px;
  }

  .first-view__subheading {
    position: absolute;
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    padding: 2px 8px;
    background: $white;
    left: calc(50% - 580px);
    top: calc(50% - 70px);
    line-height: 2rem;
  }
}
</style>
