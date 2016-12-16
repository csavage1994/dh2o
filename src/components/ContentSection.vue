<template>
  <div class="contentSection">
    <graph class="graph" :chartData="chartData"></graph>
    <button v-on:click="change">Update chart</button>
  </div>
</template>

<script>
import Graph from './Graph.js';

export default {
  name: 'contentSection',
  components: {
    Graph,
  },
  methods: {
    change: function() {
      this.chartData = [11, 32, 1, 59];
    },
  },
  data () {
    return {
      chartData: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentSection {
  height: calc(100vh - 60px);
  border: 1px solid black;
  background-color: teal;
}
.graph {
  height: 300px;
  width: 300px;
}
</style>
