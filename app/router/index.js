const Vue = require('nativescript-vue/dist/index')
const VueRouter = require('vue-router')
Vue.use(VueRouter)

const Home = require('../views/home')
const More = require('../views/more')
const Detail = require('../views/detail')
const Cinemas = require('../views/cinemas')

const router = new VueRouter({
  routes: [
    {path: '*', redirect: '/home'},
    {name: 'home', path: '/home', component: Home},
    {name: 'more', path: '/more', component: More},
    {name: 'detail', path: '/detail', component: Detail},
    {name: 'cinemas', path: '/cinemas', component: Cinemas}
  ]
})

module.exports = router
