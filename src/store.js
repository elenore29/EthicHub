import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    communities: [],
    details: []
  },
  mutations: {
    dataFunc (state, datos) {
      state.communities = datos
    },
    dataDetails (state, datas) {
      state.details = datas
    }

  },
  actions: {
    getData: async function ({commit}) {
      try {
        const communities = await axios.get('https://fantasyhub.herokuapp.com/communities/')
        console.log(communities);
        commit('dataFunc', communities)
      }catch(error){
        console.log(error);
      }
    },
    getDetails: async function ({commit}, id) {
      try {
        const details = await axios.get('https://fantasyhub.herokuapp.com/communities/' + id + '_community')
        console.log(details);
        commit('dataDetails', details)
      }catch(error){
        console.log(error);
      }
    }
  }
})
