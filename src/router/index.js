import Vue from 'vue'
import VueRouter from 'vue-router'
import FilmContent from '../views/FilmContent.vue'
import Film from '../views/film-content-item.vue'
import Actors from '../components/actors/v-actors-wrapper'
import TVwrapper from '../components/tvShows/v-tv-wrapper'
import TVShow from '../components/tvShows/v-tv-item'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'film_content',
    component: FilmContent
  },
  {
    path: '/film/:id',
    props: true,
    name: 'film',
    component: Film
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
