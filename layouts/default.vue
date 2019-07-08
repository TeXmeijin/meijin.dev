<template lang="pug">
.wrapper
  .header
    .header__title
      span Meijin's portfolio
  nuxt
</template>

<style lang="scss">
@import "@/assets/css/base/reset.scss";

.header {
  display: flex;
  height: 50px;
  padding: 0 23px;
  background: $primary;
  border-bottom: 1px solid $primary;
  &__title {
    display: flex;
    align-items: center;
    color: $white;
    font-size: 2rem;
  }
}
</style>

