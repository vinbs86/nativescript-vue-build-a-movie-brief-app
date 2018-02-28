const Vue = require('nativescript-vue/dist/index')
Vue.registerElement('Gif', () => require('nativescript-gif').Gif)

module.exports = Vue.component('loading', {
  data () {
    return {
      text: `正在努力加载! (●'◡'●)...`
    }
  },
  template: `
    <flexbox-layout flexDirection="column" alignItems="center">
      <Gif style="height: 60; width: 60; margin-top: 100" src="~/images/lemon-loading.gif" />
      <label :text="text"><label>
    </flexbox-layout>
  `
})