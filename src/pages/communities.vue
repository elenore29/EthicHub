<template>
  <eh-layout>
    <p class="title"> <b>Conectamos</b> personas. <b>Cosechamos</b> riquezas.</p>
    <p class="sub-title">Inversiones <b>desde 50€</b> en comunidades agrícolas</p>
    <p class="sub-title">productivas y rentables de todo el mundo sed so eiusmod</p>
    <Card />
  </eh-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Vuex from 'vuex'
import Card from '../components/Card.vue'
// Here goes the "main screen" with communitie's cards
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
  },
  methods: {
    ...Vuex.mapActions(['getData']),
  },
  components: {
    'eh-layout': BaseLayout, 
    Card
  }
}
</script>

<style lang="scss" scoped>
//estilos para el contenido de las cards
.title {
  font-size: 34px;
  text-align: left;
  padding-left: 10%;
  padding-bottom: 20px;
}

.sub-title {
  text-align: left;
  padding-left: 10%;
  font-size: 20px;
}

</style>
