import popularFilmsApi from '@/api/films'

export default {
  namespaced: true,
  state: {
    favoriteMoviesIds: [],
    favoriteMoviesDetails: []
  },
  getters: {
    hasFilm: state => id => state.favoriteMoviesIds.some(fm => fm === id)
    // hasFilm: state => id => state.favoriteMoviesIds.find(fm => fm.id === id)
    // test: state => id => Boolean(state.favoriteMoviesIds.some(fm => fm === id))
  },

  mutations: {
    addToFavoriteMoviesIdsList (state, id) {
      state.favoriteMoviesIds.push(id)
    },
    removeFromFavoriteMoviesIdsList (state, id) {
      const index = state.favoriteMoviesIds.indexOf(id)
      state.favoriteMoviesIds.splice(index, 1)
      state.favoriteMoviesDetails = state.favoriteMoviesDetails.filter(f => f.id !== id)

      localStorage.setItem('favoriteMoviesIds', JSON.stringify(state.favoriteMoviesIds))
    },
    saveFavoriteMoviesDetails (state, payload) {
      state.favoriteMoviesDetails.push(payload)
    },
    loadIdsFromLocalStorage (state) {
      state.favoriteMoviesIds = JSON.parse(localStorage.getItem('favoriteMoviesIds')) || []
    },
    clearMovieDetails (state, payload) {
      state.favoriteMoviesDetails = payload
    }
  },
  actions: {
    addToFavoriteMoviesIdsList ({ state, getters, commit }, id) {
      if (!getters.hasFilm(id)) {
        commit('addToFavoriteMoviesIdsList', id)
        localStorage.setItem('favoriteMoviesIds', JSON.stringify(state.favoriteMoviesIds))
      } else {
        commit('removeFromFavoriteMoviesIdsList', id)
      }
    },

    async getFavoriteMoviesIdsFromAPI ({ commit, state, dispatch }) {
      try {
        commit('clearMovieDetails', [])
        dispatch('toggleLoader', true, { root: true })
        if (state.favoriteMoviesIds) {
          const arrayOfIds = state.favoriteMoviesIds
          for (let i = 0; i < arrayOfIds.length; i++) {
            const fm = await popularFilmsApi.getFilmData(arrayOfIds[i])
            commit('saveFavoriteMoviesDetails', fm.data)
          }
        }
      } catch (err) {
        dispatch('toggleError', err, { root: true })
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}
