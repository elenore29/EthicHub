import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    communities: [],
    details: [],
  },
  mutations: {
    dataFunc(state, datos){
      state.communities = datos
    },
    dataDetails(state, datas){
      state.details = datas
    }
  },
  actions: {
    getData: async function({ commit }){
      const data = await fetch('https://fantasyhub.herokuapp.com/communities/');
      const communities = await data.json();
      commit('dataFunc', communities);
      console.log(communities);
    },  
    getDetails: async function({ commit }, cardId){
      let id = await cardId.id;
      console.log(id);
      const data2 = await fetch('https://fantasyhub.herokuapp.com/communities/'+id+'_community');
      const details = await data2.json();
      commit('dataDetails', details);
      console.log(details); 
    }
  },
})
