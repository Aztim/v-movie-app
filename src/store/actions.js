import axios from 'axios'

export default {
  GET_FILMS_FROM_API ({ commit }) {
    return axios.get('http://localhost:3000/films')
      .then((response) => {
        commit('SET_DATA_TO_STATE', response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  },
  GET_ACTORS_FROM_API ({ commit }) {
    return axios.get('http://localhost:3000/actors')
      .then((response) => {
        commit('SET_DATA_TO_STATE', response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  },
  GET_TV_FROM_API ({ commit }) {
    return axios.get('http://localhost:3000/tv')
      .then((response) => {
        commit('SET_DATA_TO_STATE', response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }
}
