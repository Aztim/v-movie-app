export default {
  namespased: true,
  state: {
    favoriteMoviesIds: [],
    test: '!!!'
  },
  getters: {
    hasFilm: state => id => state.favoriteMoviesIds.some(fm => fm === id)
  },

  mutations: {
    addToFavoriteMoviesIdsList (state, id) {
      state.favoriteMoviesIds.push(id)
    }
  },
  actions: {
    addToFavoriteMoviesIdsList ({ state, getters, commit }, id) {
      if (!getters.hasFilm(id)) {
        commit('addToFavoriteMoviesIdsList', id)
        localStorage.setItem('favoriteMoviesIds', JSON.stringify(state.favoriteMoviesIds))
      }
    }
  }
}
