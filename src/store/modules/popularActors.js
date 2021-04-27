import actors from '@/api/actors'

export default {
  namespaced: true,
  state: {
    data: null,
    error: null
  },

  mutations: {
    getPopularActors (state, payload) {
      state.data = payload
    },
    getPopularActorsError (state, payload) {
      state.error = payload
    }
  },

  actions: {
    async getActors (context) {
      try {
        const popularActors = await actors.getActors()
        context.commit('getPopularActors', popularActors.data.results)
        // console.log(popularActors.data.results)
      } catch (err) {
        context.commit('getPopularActorsError', err)
      }
    }
  }
}
