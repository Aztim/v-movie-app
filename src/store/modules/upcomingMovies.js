import UpcomingApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    error: null,
    upcomingData: null
  },

  mutations: {
    getUpcomingMovies (state, payload) {
      state.upcomingData = payload
    },
    getError (state, payload) {
      state.error = payload
    }
  },

  actions: {
    async getUpcomingMovies (context) {
      try {
        const response = await UpcomingApi.getUpcomingMovies()
        const upcomingMovies = response.results.slice(1, 6)
        context.commit('getUpcomingMovies', upcomingMovies)
      } catch (err) {
        context.commit('getError', err)
      }
    }
  }
}
