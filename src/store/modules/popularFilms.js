import popularFilmsApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    data: null,
    // error: null,
    search: null
  },

  mutations: {
    getPopularFilms  (state, payload) {
      state.data = payload
    },
    getPopularFilmsError (state, payload) {
      state.error = payload
    },
    getSearchSuccess (state, payload) {
      state.search = payload
    }
    // getFilmDataSuccess (state, payload) {
    //   state.filmData = payload
    //   // state.filmCredit = payload.key2
    // },
    // getFilmDataStart (state) {
    //   state.filmData = null
    // }
  },

  actions: {
    async getPopularFilms ({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const popularFilms = await popularFilmsApi.getFilms()
        commit('getPopularFilms', popularFilms.data.results)
      } catch (err) {
        // commit('getPopularFilmsError', err)
        console.log(err)
        dispatch('toggleError', err, { root: true })
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
    // async getFilm (context, { id }) {
    //   context.commit('getFilmDataStart')
    //   try {
    //     const filmData = await popularFilmsApi.getFilmData(id)
    //     // const payload = { key1: filmData.data, key2: filmCredits.cast }

    //     context.commit('getFilmDataSuccess', filmData.data)
    //   } catch (err) {
    //     context.commit('getFilmDataFailure', err)
    //   }
    // }
  }
}
