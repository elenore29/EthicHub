<template>
  <div class="card-container">
    <el-row :gutter="20">
      <el-col   
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
        :xl="6"
        :span="6"
        class="community-card" v-for="item in communities.data" :key="item.id">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <router-link :to="'/communities/'+ item.id"><h2>{{item.name}}</h2></router-link>
          <router-link :to="'/communities/'+ item.id"><div class="img" :style="{ backgroundImage: `url(${item.image})` }"></div></router-link>
          <div class="card-body" style="padding: 14px;">
            <div class="card-info">
              <p>Faltan {{parseFloat(item.project.goal)-parseFloat(item.project.contributed)}} €</p>
              <el-progress :percentage="item.project.contributed*100/item.project.goal" :color="customColor"></el-progress>
              <p class="project-name"><b>{{item.project.name}}</b></p>
              <div class="select-amount">
                <div class="text"><b>INVERTIR</b></div>
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
              <p>RECIBIRÁS <b>+ {{item.project.interest}}%</b></p>
              <p>(Interés anual en moneda local)</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vuex from 'vuex'
// Here goes the "main screen" with communitie's cards
export default {
  data () {
    return {
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
  },
  computed: {
    ...Vuex.mapState(['communities']),
  },
  methods: {
    format (percentage) {
      return percentage === 100 ? 'Full' : `${percentage}%`
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
//estilos para el contenido de las cards
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
  height: 250px;
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
