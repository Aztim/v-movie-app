import axios from 'axios'

export default {
  GET_FILMS_FROM_API ({ commit }) {
    return axios.get('http://localhost:3000/films')
      .then((response) => {
        commit('SET_FILMS_TO_STATE', response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }
}
