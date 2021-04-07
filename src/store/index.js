import Vue from 'vue'
import Vuex from 'vuex'
import popularFilms from './modules/popularFilms'
import popularFilmData from './modules/popularFilmData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    popularFilmData,
    popularFilms
  }
})
