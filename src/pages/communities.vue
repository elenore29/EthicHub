<template>
    <eh-layout>
      Main Communities Page
    </eh-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
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
    this.getCommunities()
  },
  methods: {
    getCommunities () {

    }
  },
  components: {
    'eh-layout': BaseLayout
  }
}
</script>

<style lang="scss" scoped>

</style>
