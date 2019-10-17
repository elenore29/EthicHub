<template>
  <eh-layout>
    <p class="title"> <b>Conectamos</b> personas. <b>Cosechamos</b> riquezas.</p>
    <p class="sub-title">Inversiones <b>desde 50€</b> en comunidades agrícolas</p>
    <p class="sub-title">productivas y rentables de todo el mundo sed so eiusmod</p>
    <div class="card-container">
      <el-row :gutter="20">
        <el-col class="community-card" :span="6" v-for="item in communities" :key="item.id">
          <el-card :body-style="{ padding: '0px' }" shadow="never">
            <h2>{{item.name}}</h2>
            <div  class="img" :style="{ backgroundImage: `url(${item.image})` }"></div>
            <div class="card-body" style="padding: 14px;">
              <div class="card-info">
                <p>Faltan € 000.000</p> 
                <el-progress :percentage="50" :color="customColor"></el-progress>
                <p class="project-name"><b>{{item.project.name}}</b></p>
                <div class="select-amount">
                  <router-link to="/communities/:communityID/" class="text"><div @click="getDetails(item)"><b>INVERTIR</b></div></router-link>
                  <div class="selector">  
                    <select>
                      <option   
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">              
                      </option>
                    </select>
                  </div>
                </div>
            <br>
            <p>RECIBIRÁS <b>+ 00%</b></p>
            <p>(Interés anual en moneda local)</p>
            </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </eh-layout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue'; 
import Vue from 'vue';
import Vuex from 'vuex'; 

//Here goes the "main screen" with communitie's cards

export default {
  data () {
    return {
      cardId: document.getElementsByClassName('img'),
      customColor: '#062f4f',
      options: [{
              value: '25',
              label: '€ 25'
            }, {
              value: '50',
              label: '€ 50'
            }, {
              value: '100',
              label: '€ 100'
            }],
            value: ''
    }
  },

  mounted () {
    this.getData();
  },

  computed: {
    ...Vuex.mapState(['communities']),
    ...Vuex.mapState(['details'])

  },

  methods: {
    ...Vuex.mapActions(['getData']),
    ...Vuex.mapActions(['getDetails']),

    format(percentage) {
      return percentage === 100 ? 'Full' : `${percentage}%`;
    },
  },

  components: {
    'eh-layout': BaseLayout
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

h2 {
  text-align: left;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 20px;
  color: #062f4f;
  font-size: 14px;
}

.el-card{
  border-width: 0px;
}

.card-container {
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;
}

.community-card {
  padding-bottom: 50px;
}

.img {
  width: 100%;
  height: 180px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-info {
  background-color: white;
  width: 90%;
  height: 200px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.33); 
  box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.33); 
  position: relative;
  top: -40px;
  padding: 5%; 
  color: #2c3e50;
  font-size: 12px;
}

.project-name {
  font-size: 14px;
}

.select-amount {
  background-color: #87f96e;
  -webkit-box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.33); 
  box-shadow: 0px 3px 8px 1px rgba(0,0,0,0.33); 
  padding-top: 5px;
  padding-bottom: 5px; 
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
}

select {
   background: white;
   border: none;
   font-size: 14px;
   height: 30px;
   padding: 5px;
   color: #2c3e50;
   margin-bottom: 5px;
   margin-top: 5px;
}

select:focus{ outline: none;}

.text {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%
}

.selector {
  width: 40%;
}

.card-body {
  background-color: #edefec;
}

// estilos de element 
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
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
