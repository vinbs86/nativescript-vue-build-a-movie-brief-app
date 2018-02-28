tapVue.component('image-viewer', {
  props: ['imgSrc'],

  data() {
      return {
          img: ''
      }
  },

  template: `
      <stack-layout>
          <image style="height: 200;" :src="img"></image>
          <scroll-view orientation="horizontal" style="height: 100">
              <stack-layout orientation="horizontal">
                  <image v-for="i in 10" key="i" 
                  :src="i%2 ? '~/images/apple.jpg' : '~/images/vue.png'" 
                  @tap="img = i%2 ? '~/images/apple.jpg' : '~/images/vue.png'"></image>
              </stack-layout>
          </scroll-view>
      </stack-layout>
  `,

  mounted() {
      this.img = this.imgSrc
  }
})

new Vue({
  template: `
      <page>
          <scroll-view>
              <stack-layout>
                  <button @tap="onTap">TAP HERE</button>
                  <button @tap="textRed = !textRed" style="color: white; background-color: darkcyan;">TAP HERE</button>
                  <label :style="{color: textRed ? 'red' : 'blue'}"
                          style="text-align: center; margin-top: 20; font-size: 40"
                          :text="showTrick ? 'Poof!' : 'Wait for it!'"></label>
                  <button @tap="showTrick = !showTrick">Tap to see a trick!</button>
                  
                  <image-viewer v-if="showTrick" :imgSrc="imgSrc"></image-viewer>
              </stack-layout>
          </scroll-view>
      </page>
  `,

  data: {
      textRed: false,
      showTrick: false,
      imgSrc: '~/images/apple.jpg'
  },

  methods: {
      onTap() {
          alert('Nice Tap!')
      }
  }
}).$start()

const Vue = require('nativescript-vue/dist/index')
const http = require("http")
const Page = require('ui/page').Page
const StackLayout = require('ui/layouts/stack-layout').StackLayout
const Image = require('ui/image').Image
const Label = require('ui/label').Label

Vue.prototype.$http = http

new Vue({
  data: {
      subreddit: '/r/funny',
      items: []
  },

  template: `
      <page ref="page">
          <stack-layout>
              <button class="btn btn-primary" :text="subreddit" @tap="chooseSubreddit"></button>
              <list-view :items="items" class="list-group" :templateSelector="templateSelector" @itemTap="onItemTap">
                  <template scope="item">
                      <stack-layout orientation="horizontal" class="list-group-item">
                          <image :src="item.image" class="thumb"></image>
                          <stack-layout>
                              <label class="list-group-item-heading" :text="item.title"></label>
                              <label class="list-group-item-text" text="The rest of the content" textWrap="true"></label>
                          </stack-layout>
                      </stack-layout>
                  </template>
                  <template name="active" scope="item">
                      <stack-layout orientation="horizontal" class="list-group-item active">
                          <image :src="item.image" class="thumb"></image>
                          <stack-layout>
                              <label class="list-group-item-heading" :text="item.title"></label>
                              <label class="list-group-item-text" text="The rest of the content" textWrap="true"></label>
                          </stack-layout>
                      </stack-layout>
                  </template>
              </list-view>
          </stack-layout>
      </page>
  `,

  created() {
      this.fetchItems()
  },

  methods: {
      onItemTap(e) {
          let item = this.items[e.index]
          let detailsPage = new Page()
          let layout = new StackLayout()

          let label = new Label()
          label.text = item.title
          label.className = 'h2'
          label.textAlignment = 'center'

          let image = new Image()
          image.src = item.fullImage

          layout.addChild(label)
          layout.addChild(image)

          detailsPage.content = layout
          this.$refs.page.nativeView.showModal(detailsPage)
      },

      templateSelector(item) {
          return item.$index === 0 ? 'active' : 'default'
      },

      chooseSubreddit() {
          prompt({
              title: 'Change subreddit:',
              defaultText: this.subreddit,
              okButtonText: "Ok",
              cancelButtonText: "Cancel",
          }).then((r) => {
              if (r.result) {
                  this.subreddit = r.text
                  this.fetchItems()
              }
          })
      },

      fetchItems() {
          this.$http.getJSON(`https://www.reddit.com/${this.subreddit}.json`).then((res) => {
              this.items = res.data.children.map((item) => {
                  return {
                      title: item.data.title,
                      image: item.data.thumbnail,
                      fullImage: item.data.preview.images[0].source.url
                  }
              })
          }).catch((err) => {
              console.log('err..' + err)
          })
      }
  }
}).$start()