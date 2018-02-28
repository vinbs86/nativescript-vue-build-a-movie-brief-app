const Vue = require('nativescript-vue/dist/index')
const getCinemas = require('../api/api').getCinemas
const CinemaList = require('../components/cinema-list')
const Loading = require('../components/loading')

module.exports = Vue.component('cinemas', {
  data: function () {
    return {
      cinemas: []
    }
  },
  template: `
    <scroll-view>
      <cinema-list :cinemas="cinemas"/>
    </scroll-view>
  `,
  created () {
    getCinemas().then(res => {
      this.cinemas = res.result.list
    })
  }
})