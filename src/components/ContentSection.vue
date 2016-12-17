<template>
  <div class="contentSection">
    <graph class="graph" :chartData="barchartData[chartSelected]" :labels="barchartLabels[chartSelected]"></graph>
    <button v-on:click="change">Update chart</button>
  </div>
</template>

<script>
import Graph from './Graph.js';
import axios from 'axios';
import token from '../../auth.js';

export default {
  beforeCreate() {
    axios.get('https://data.cityofchicago.org/resource/6zsd-86xi.json', {
        params: {
          "$$app_token" : token,
        }
      })
      .then((response) => {
        let arrestData = [0,0];
        let domesticData = [0,0];
        response.data.map((item) => {
          if(item.arrest) {
            arrestData[0]++;
          } else {
            arrestData[1]++;
          }
          this.barchartData.push(arrestData);
          if(item.domestic) {
            domesticData[0]++;
          } else {
            domesticData[1]++;
          }
          this.barchartData.push(domesticData);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  name: 'contentSection',
  components: {
    Graph,
  },
  methods: {
    change: function() {
      this.chartSelected = (this.chartSelected === 0) ? 1 : 0;
    },
  },
  data () {
    return {
      barchartData: [],
      barchartLabels: [['Arrested', 'Not Arrested'], ['Domestic', 'Not Domestic']],
      chartSelected: 0,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentSection {
  height: calc(100vh - 60px);
  background-color: #fefcf9;
}
.graph {
  height: 300px;
  width: 300px;
}
</style>
