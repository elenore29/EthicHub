<template>
  <eh-layout>
    <div class="details-page">
      <el-row :gutter="40">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <img class="img" v-bind:src="details.data.image" alt="">
            <p class="title"><b>{{details.data.name}}: {{details.data.project.name}}</b></p>
            <p>{{details.data.project.description}}</p>
            <p class="title">Comunidad de {{details.data.name}}</p>
            <p>{{details.data.location}}</p>
            <p>{{details.data.description}}</p>
            <br>
            <br>
            <img class="img" src="../assets/images/Map.jpg"/>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple card">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>Meta:</span>
                <div style="float: right; padding: 3px 0" type="text"><b>{{details.data.project.goal}} €</b></div>
              </div>
              <br>
               <div slot="header" class="clearfix">
                <span>Interés anual <br>en moneda local:</span>
                <div style="float: right; padding: 3px 0" type="text"><b>{{details.data.project.interest}} %</b></div>
              </div>
             <div>
                <span>Faltan:</span>
                <div style="float: right; padding: 3px 0" type="text"><b>{{parseFloat(details.data.project.goal)-parseFloat(details.data.project.contributed)}} €</b></div>
                <el-progress :percentage="details.data.project.contributed*100/details.data.project.goal" :color="customColor"></el-progress>
              </div>
                <button class="button"><b>CONTRIBUIR</b></button>

            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </eh-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'
import Vue from 'vue'
import Vuex from 'vuex'

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
      customColor: '#062f4f'
      // community: null
    }
  },
  computed: {
    ...Vuex.mapState(['details'])
  },
  methods: {
    ...Vuex.mapActions(['getDetails'])
  },
  mounted () {
  },
  components: {
    'eh-layout': BaseLayout
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

.button {
  width: 80%;
  background-color: #87f96e;
  padding: 15px;
  border-radius: 5px;
  margin: 10%;
  border-width: 0px;
}

.card {
  color: #062f4f;
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
