<template>
    <eh-layout>
      Main Communities Page
      <br> 
      Aqui va el cuerpo de la página
      <button @click="getData">Hola</button>
      <ul v-for="item in cursos" :key="item.id">
        <li >{{item.name}}</li>
        <img class="imagenes" v-bind:src="item.image" alt="">
    </ul>
    </eh-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Vue from 'vue'
import Vuex from 'vuex'
/**
 * Here goes the "main screen" with communitie's cards
 */

export default {
  name: 'Communities',
  data () {
    return {

    }
  },
  mounted () {
  },
  computed: {
    ...Vuex.mapState(['cursos'])
  },

  methods: {
    ...Vuex.mapActions(['getData'])

  },
  components: {
    'eh-layout': BaseLayout
  }
}
</script>

<style lang="scss" scoped>
.imagenes {
  width: 100px;
}
</style>
