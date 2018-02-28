const Vue = require('nativescript-vue/dist/index')
const Home = require('./views/home')
const router = require('./router/index')
global.process = {env: {}} 

router.replace('/home')
new Vue({
  router,
  template: `
  <page>
    <router-view></router-view>
  </page>
  `
}).$start()

