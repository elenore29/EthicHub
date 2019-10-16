import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    cursos: []
  },
  mutations: {
    dataFunc(state, datos){
      state.cursos = datos
    }
  },
  actions: {
    getData: async function({ commit }){
      const data = await fetch('https://fantasyhub.herokuapp.com/communities/');
      const cursos = await data.json();
      commit('dataFunc', cursos)
      console.log(cursos);
    },  
  },
})
