<template>
  <eh-layout>
    <div class="details-page">
      <el-row :gutter="40">
        <el-col
        :xs="24" 
        :span="16">
          <div class="grid-content bg-purple">
            <img class="img" v-bind:src="details.data.image" alt="">
          </div>
        </el-col>
        <Minicard /> 
        <el-col 
        :xs="24"
        :span="16">
          <p class="title"><b>{{details.data.name}}: {{details.data.project.name}}</b></p>
          <p>{{details.data.project.description}}</p>
          <p class="title">Comunidad de {{details.data.name}}</p>
          <p>{{details.data.location}}</p>
          <p>{{details.data.description}}</p>
          <br>
          <br>
          <img class="img" src="../assets/images/Map.jpg"/>
        </el-col>
      </el-row>
    </div>
  </eh-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Vuex from 'vuex'
import Minicard from '../components/Minicard.vue'

// Here goes the detail cards

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
      id: this.$route.params.communityID,
      community: null
    }
  },
  computed: {
    ...Vuex.mapState(['details'])
  },
  methods: {
    ...Vuex.mapActions(['getDetails'])
  },
  mounted () {
    this.getDetails(this.id)
  },
  components: {
    'eh-layout': BaseLayout, 
    Minicard
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.details-page {
  display: flex;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 100px;
}

.title {
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
}

//Estilos de element
.text {
  font-size: 10px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>
