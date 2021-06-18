export default {
  state: {
    isShowError: false
  },
  // getters: {
  //   isShowLoader: ({ isShowLoader }) => isShowLoader
  // },
  mutations: {
    toggleError (state, err) {
      state.isShowError = err
    }
  },
  actions: {
    toggleError ({ commit }, err) {
      commit('toggleError', err)
    }
  }
}
