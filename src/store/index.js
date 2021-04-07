import Vue from 'vue'
import Vuex from 'vuex'
import popularFilms from './modules/popularFilms'
// import filmData from './modules/filmData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // filmData,
    popularFilms
  }
})
