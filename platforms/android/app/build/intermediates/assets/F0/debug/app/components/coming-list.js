const Vue = require('nativescript-vue/dist/index')

module.exports = Vue.component('coming-list',{
  props: ['subjects'],
  template: `
  <scroll-view orientation="horizontal" class="coming-list-wrapper">
    <stack-layout orientation="horizontal">
      <stack-layout v-for="item in subjects" class="coming-item">
        <image :src="item.images.small" class="coming-image" />
        <label :text="item.title" class="coming-Font"></label>
      </stack-layout>
    </stack-layout>
  </scroll-view>
  `
})


