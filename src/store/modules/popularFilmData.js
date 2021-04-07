import popularFilmsApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    error: null,
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
