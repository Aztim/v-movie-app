import popularFilmsApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    // error: null,
    filmData: null
  },

  mutations: {
    getFilmDataFailure (state, payload) {
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
    async getFilm ({ commit, dispatch }, id) {
      commit('getFilmDataStart')
      try {
        dispatch('toggleLoader', true, { root: true })
        const filmData = await popularFilmsApi.getFilmData(id)
        // const payload = { key1: filmData.data, key2: filmCredits.cast }
        commit('getFilmDataSuccess', filmData.data)
      } catch (err) {
        // commit('getFilmDataFailure', err)
        dispatch('toggleError', err, { root: true })
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}
