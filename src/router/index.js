import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/v-content.vue'
import Film from '../components/films/v-film-item.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'content',
    component: Content
  },
  {
    path: '/film/:id',
    props: true,
    name: 'film',
    component: Film
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
