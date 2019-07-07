<template lang="pug">
.wrapper
  .header
    .header__title
      span Meijin's portfolio
  nuxt
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 50px;
  padding: 0 27px;
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

