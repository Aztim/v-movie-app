import popularActorsApi from '@/api/actors'

export default {
  namespaced: true,
  state: {
    actorData: null,
    credits: null,
    socialDetails: null
  },

  mutations: {
    getActorDataFailure (state, payload) {
      state.error = payload
    },
    getActorDataSuccess (state, payload) {
      state.actorData = payload
      // state.filmCredit = payload.key2
    },
    getCombinedCreditsSuccess (state, payload) {
      state.credits = payload
    },
    getSocialDetailsSuccess (state, payload) {
      state.socialDetails = payload
    },
    getActorDataStart (state) {
      state.actorData = null
    }
    // getCreditsDataStart (state) {
    //   state.credits = null
    // }
  },

  actions: {
    async getActor ({ commit, dispatch }, id) {
      commit('getActorDataStart')
      try {
        dispatch('toggleLoader', true, { root: true })
        const actorData = await popularActorsApi.getActorData(id)
        const credits = await popularActorsApi.getCombinedCredits(id)
        const socialDetails = await popularActorsApi.getSocialDetails(id)

        commit('getActorDataSuccess', actorData.data)
        commit('getCombinedCreditsSuccess', credits.data.cast.slice(0, 5))
        commit('getSocialDetailsSuccess', socialDetails.data)
      } catch (err) {
        // commit('getActorDataFailure', err)
        dispatch('toggleError', err, { root: true })
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}
