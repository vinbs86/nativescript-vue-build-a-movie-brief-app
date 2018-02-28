const Vue = require('nativescript-vue/dist/index')
const MoreList = require('../components/more-list')
const Loading = require('../components/loading')

module.exports = Vue.component('more', {
  data: function() {
     return { allMovies: [] }
  },
  template: `
    <scroll-view v-if="allMovies.length">
      <more-list :movies="allMovies" />
    </scroll-view>
    <loading v-else />
  `,
  created () {
    this.allMovies = this.$route.params.allMovies
  }
})
