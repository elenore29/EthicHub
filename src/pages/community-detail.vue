<template>
  <eh-layout>
    Detail
  </eh-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'

/**
 * Here goes the detail cards
 */
export default {
  name: 'CommunityDetail',
  props: {
    communityID: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      community: null
    }
  },
  computed: {

  },
  watch: {
  },
  methods: {
    getCommunity () {
      // Fetch backend data
    }
  },
  mounted () {
    this.getCommunity()
  },
  components: {
    'eh-layout': BaseLayout
  }
}
</script>

<style lang="scss" scoped>

</style>
