<template>
  <div class="header">
    <router-link to="/"> Lista de communidades </router-link>
    <router-link to="/communities/:communityID/"> Detalles comunidad </router-link>
 
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
    border-bottom: solid 1px $--color-gray;
  }

</style>

