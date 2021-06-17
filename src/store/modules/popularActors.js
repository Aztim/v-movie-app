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
    async getActors ({ commit, dispatch }, page) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const popularActors = await actors.getActors(page)
        commit('getPopularActors', popularActors.data.results)
      } catch (err) {
        commit('getPopularActorsError', err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}
