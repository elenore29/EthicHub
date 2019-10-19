<template>
    <el-col 
    :xs="24"
    :span="8">
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
</template>

<script>
import Vuex from 'vuex'

// Here goes the detail cards

export default {

    data () {
        return {
            customColor: '#062f4f',
        }
    },
    computed: {
        ...Vuex.mapState(['details'])
    },
    methods: {
    },
    mounted () {
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>

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
