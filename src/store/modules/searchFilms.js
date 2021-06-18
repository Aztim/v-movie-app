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
        console.log(searchData)
        // let search = []
        // search = searchData.results.filter(function (p) {
        //   return p.title.includes(data.toUpperCase())
        // })
        commit('getSearchSuccess', searchData.results)
      } catch (err) {
        console.log('error')
      }
    }
  }
}
