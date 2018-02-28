const Vue = require('nativescript-vue/dist/index')
const MoreList = require('../components/more-list')

module.exports = Vue.component('more', {
  data: {
    allMovies: []
  },
  template: `
  <scroll-view>
    <more-list :movies="allMovies" />
  </scroll-view>
  `,
  created () {
    this.allMovies = this.$route.params.allMovies
  }
})
