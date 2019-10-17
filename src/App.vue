<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
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
