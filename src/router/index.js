import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmsFeed from '../views/FilmsFeed.vue'
import FilmData from '../views/FilmData.vue'
import Actors from '../components/actors/v-actors-wrapper'
import TVwrapper from '../components/tvShows/v-tv-wrapper'
import TVShow from '../components/tvShows/v-tv-item'

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
    component: Actors
  },
  {
    path: '/tv',
    name: 'tv',
    component: TVwrapper
  },
  {
    path: '/tv/:id',
    props: true,
    name: 'tvshow',
    component: TVShow
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
