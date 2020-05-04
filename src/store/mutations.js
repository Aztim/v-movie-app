export default {
  SET_DATA_TO_STATE: (state, response) => {
    state.films = response
  },
  GET_ACTORS_FROM_API: (state, response) => {
    state.films = response
  }
}
