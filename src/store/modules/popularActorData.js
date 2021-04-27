import popularActorsApi from '@/api/actors'

export default {
  namespaced: true,
  state: {
    error: null,
    actorData: null,
    credits: null
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
    getActorDataStart (state) {
      state.actorData = null
    },
    getCreditsDataStart (state) {
      state.credits = null
    }
  },

  actions: {
    async getActor (context, { id }) {
      context.commit('getActorDataStart')
      context.commit('getCreditsDataStart')
      try {
        const actorData = await popularActorsApi.getActorData(id)
        const combinedCredits = await popularActorsApi.getCombinedCredits(id)
        const test = await popularActorsApi.getExternal(id)
        console.log(test.data.homepage)
        context.commit('getActorDataSuccess', actorData.data)
        context.commit('getCombinedCreditsSuccess', combinedCredits.data)
      } catch (err) {
        context.commit('getActorDataFailure', err)
      }
    }
  }
}
