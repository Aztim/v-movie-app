import popularFilmsApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    data: null,
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
  },

  actions: {
    async getPopularFilms ({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const popularFilms = await popularFilmsApi.getFilms()
        commit('getPopularFilms', popularFilms.data.results)
      } catch (err) {
        console.log(err)
        dispatch('toggleError', err, { root: true })
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}
