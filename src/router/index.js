import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Pages/Home/Home'
import City from '@/Pages/City/City'
import Detail from '@/Pages/Detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
