<template lang="pug">
.wrapper
  .header
    .header__title
      span Meijin's Profile
  nuxt
</template>

<style lang="scss">
@import "@/assets/css/base/reset.scss";

.header {
  display: flex;
  height: 50px;
  padding: 0 12px;
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
