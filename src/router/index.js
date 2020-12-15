import Vue from 'vue'
import Router from 'vue-router'
import Temp from '../views/temp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Temp',
      component: Temp
    }
  ]
})
