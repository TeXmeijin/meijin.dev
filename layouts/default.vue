<template lang="pug">
v-app
  v-toolbar(app flat dark color="primary")
    //- v-toolbar-side-icon
    v-toolbar-title Meijin.me
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn(flat @click="$vuetify.goTo('.mod-about', 'duration')") About
      v-btn(flat @click="$vuetify.goTo('.mod-skill', 'duration')") Skill
      v-btn(flat @click="$vuetify.goTo('.mod-blog', 'duration')") SNS/Blog
  v-content
    v-container(fluid pa-0).primary.lighten-5
      nuxt
  v-footer(app).pa-2
    v-flex(text-md-center).grey--text Copyright 2019 Meijin. All right reserved.
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

