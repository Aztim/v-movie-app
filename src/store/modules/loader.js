export default {
  state: {
    isShowLoader: false
  },
  // getters: {
  //   isShowLoader: ({ isShowLoader }) => isShowLoader
  // },
  mutations: {
    toggleLoader (state, bool) {
      console.log(state.isShowLoader = bool)
      state.isShowLoader = bool
    }
  },
  actions: {
    toggleLoader ({ commit }, bool) {
      commit('toggleLoader', bool)
    }
  }
}
