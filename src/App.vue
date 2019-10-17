<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';

export default {
  name: 'app',
  components: {},
  computed: {
    ...Vuex.mapState(['details'])
  },
  methods: {
    ...Vuex.mapActions(['getDetails']),
  },
  mounted () {
    this.getDetails(); 
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
 
*{
  margin: 0; 
}

#app {
  text-align: center;
  color: #2c3e50;
  font-family: 'Nunito', sans-serif;
}
</style>
