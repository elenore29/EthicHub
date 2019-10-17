<template id="templates">
  <div class="header">
    <img id="logo" class="icons" src="../assets/images/ethichub.png" alt="">
    <div class="fantasy">Fantasy Hub</div>
    <img id="hamburger" class="icons" src="../assets/images/Hamburguer_background.svg" alt="">
    <!-- <router-link to="/"> Lista de communidades </router-link>
    <router-link to="/communities/:communityID/"> Detalles comunidad </router-link> -->
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {

  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/element-variables.scss";

  .header {
    display: flex;
  }

  #logo {
    width: 5%;
    padding-left: 25px;
  }

  .fantasy {
    text-align: left;
    width: 90%;
    font-size: 20px;
    padding-top: 15px;
  }

</style>

