import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/v-content'
import Film from '../components/films/v-film-item'
import Actors from '../components/actors/v-actors-wrapper'
import TVwrapper from '../components/tvShows/v-tv-wrapper'
import TVShow from '../components/tvShows/v-tv-item'

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
