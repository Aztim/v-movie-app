import popularFilmsApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    filmData: null
  },

  mutations: {
    getFilmDataFailure (state, payload) {
      state.error = payload
    },
    getFilmDataSuccess (state, payload) {
      state.filmData = payload
    },
    getFilmDataStart (state) {
      state.filmData = null
    }
  },

  actions: {
    async getFilm ({ commit, dispatch }, id) {
      commit('getFilmDataStart')
      try {
        dispatch('toggleLoader', true, { root: true })
        const filmData = await popularFilmsApi.getFilmData(id)
        commit('getFilmDataSuccess', filmData.data)
      } catch (err) {
        dispatch('toggleError', err, { root: true })
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}
