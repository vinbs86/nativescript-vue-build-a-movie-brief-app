const Vue = require('nativescript-vue/dist/index')
const VueRouter = require('vue-router')
Vue.use(VueRouter)

const Home = require('../views/home')
const More = require('../views/more')

const router = new VueRouter({
  routes: [
    {path: '*', redirect: '/home'},
    {name: 'home', path: '/home', component: Home},
    {name: 'more', path: '/more', component: More}
  ]
})

module.exports = router
