import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmsFeed from '../views/FilmsFeed.vue'
import FilmData from '../views/FilmData.vue'
import ActorsFeed from '../views/ActorsFeed.vue'
import ActorData from '../views/ActorData.vue'
import UpcomingMovies from '../views/UpcomingMovies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'filmsFeed',
    component: FilmsFeed
  },
  {
    path: '/films/:id',
    // props: true,
    name: 'filmData',
    component: FilmData
  },
  {
    path: '/actors',
    name: 'actors',
    component: ActorsFeed
  },
  {
    path: '/actors/:id',
    name: 'actorData',
    component: ActorData
  },
  {
    path: '/upcoming',
    name: 'upcomingMovies',
    component: UpcomingMovies
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
