import popularFilmsApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    data: null,
    error: null,
    filmData: null
  },

  // getters: {
  //   getFilmsData (state, { id }) {
  //     return state.data.find(film => film.id === id)
  //   }
  // },

  mutations: {
    setPopularFilms (state, payload) {
      state.data = payload
    },
    getFilmsError (state, payload) {
      state.error = payload
    },
    getFilmDataSuccess (state, payload) {
      state.filmData = payload
      // state.filmCredit = payload.key2
    },
    getFilmDataStart (state) {
      state.filmData = null
    }
  },

  actions: {
    async getPopularFilms (context) {
      try {
        const popularFilms = await popularFilmsApi.getFilms()
        context.commit('setPopularFilms', popularFilms.data.results)
      } catch (err) {
        context.commit('getFilmsError', err)
      }
    },

    async getFilm (context, { id }) {
      context.commit('getFilmDataStart')
      try {
        const filmData = await popularFilmsApi.getFilmData(id)
        // const payload = { key1: filmData.data, key2: filmCredits.cast }

        context.commit('getFilmDataSuccess', filmData.data)
      } catch (err) {
        context.commit('getFilmDataFailure', err)
      }
    }
  }
}
