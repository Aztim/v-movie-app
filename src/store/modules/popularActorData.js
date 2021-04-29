import popularActorsApi from '@/api/actors'

export default {
  namespaced: true,
  state: {
    error: null,
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
    async getActor (context, { id }) {
      context.commit('getActorDataStart')
      // context.commit('getCreditsDataStart')
      try {
        const actorData = await popularActorsApi.getActorData(id)
        const credits = await popularActorsApi.getCombinedCredits(id)
        const socialDetails = await popularActorsApi.getSocialDetails(id)

        context.commit('getActorDataSuccess', actorData.data)
        context.commit('getCombinedCreditsSuccess', credits.data.cast.slice(0, 5))
        context.commit('getSocialDetailsSuccess', socialDetails.data)
      } catch (err) {
        context.commit('getActorDataFailure', err)
      }
    }
  }
}
