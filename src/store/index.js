import Vue from 'vue'
import Vuex from 'vuex'
import popularFilms from './modules/popularFilms'
import popularFilmData from './modules/popularFilmData'
import popularActors from './modules/popularActors'
import popularActorData from './modules/popularActorData'
import favoriteMovies from './modules/favoriteMovies'
import searchFilms from './modules/searchFilms'
import upcomingMovies from './modules/upcomingMovies'
import loader from './modules/loader'
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    popularFilmData,
    popularFilms,
    popularActors,
    popularActorData,
    favoriteMovies,
    searchFilms,
    upcomingMovies,
    loader,
    error
  }
})
