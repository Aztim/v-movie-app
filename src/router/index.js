import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmsFeed from '../views/FilmsFeed.vue'
import FilmData from '../views/FilmData.vue'
import ActorsFeed from '../views/ActorsFeed.vue'
import ActorData from '../views/ActorData.vue'
import UpcomingMovies from '../views/UpcomingMovies.vue'
import FavoriteList from '../views/FavoriteList.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'filmsFeed',
    component: FilmsFeed
  },
  {
    path: '/film/:id',
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
  },
  {
    path: '/favorite',
    name: 'FavoriteList',
    component: FavoriteList
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
