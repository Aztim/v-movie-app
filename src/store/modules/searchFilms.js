import popularFilmsApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    films: null
  },
  mutations: {
    getSearchSuccess (state, payload) {
      state.films = payload
    }
  },

  actions: {
    async getSearchFilms ({ commit }, data) {
      try {
        const searchData = await popularFilmsApi.getsearchResults(data)
        commit('getSearchSuccess', searchData.results.slice(0, 10))
      } catch (err) {
        console.log('error')
      }
    }
  }
}
