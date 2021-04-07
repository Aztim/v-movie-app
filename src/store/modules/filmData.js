import filmDataApi from '@/api/films'

const state = {
  data: null,
  error: null
}

const mutations = {
  setFilmData (state, payload) {
    state.data = payload
  },
  getFilmsError (state, payload) {
    state.error = payload
  }
}

const actions = {
  async getFilm (context, { id }) {
    try {
      context.commit('')
      const filmData = await filmDataApi.getFilmData(id)
      console.log(filmData)
      context.commit('setFilmData', filmData.data.results)
    } catch (err) {
      context.commit('getFilmsError', err)
    }
  },
  test () {
    console.log('!!!!')
  }
}

export default {
  state,
  actions,
  mutations
}
