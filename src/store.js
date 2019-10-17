import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    communities: []
  },
  mutations: {
    dataFunc(state, datos){
      state.communities = datos
    }
  },
  actions: {
    getData: async function({ commit }){
      const data = await fetch('https://fantasyhub.herokuapp.com/communities/');
      const communities = await data.json();
      commit('dataFunc', communities)
      console.log(communities);
    },  
  },
})
