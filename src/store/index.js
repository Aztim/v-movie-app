import Vue from 'vue'
import Vuex from 'vuex'
import popularFilms from './modules/popularFilms'
import popularFilmData from './modules/popularFilmData'
import popularActors from './modules/popularActors'
import popularActorData from './modules/popularActorData'
import searchFilms from './modules/searchFilms'
import upcomingMovies from './modules/upcomingMovies'
import loader from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    popularFilmData,
    popularFilms,
    popularActors,
    popularActorData,
    searchFilms,
    upcomingMovies,
    loader
  }
})
