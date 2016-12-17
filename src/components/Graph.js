import { Bar } from 'vue-chartjs'

export default Bar.extend({
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'Crimes',
          backgroundColor: '#321aba',
          data: this.chartData,
        },
      ],
    });
  },
  props: ['chartData', 'labels'],
  watch: {
    chartData: function() {
      // Every time renderChart is called, it appends a new iframe under the generated div
      // In order to get around this, we can just remove the first instance of an iframe under
      // the parent element
      this.$el.removeChild(this.$el.children[0]);
      this.renderChart({
        labels: this.labels,
        datasets: [
          {
            label: 'Crimes',
            backgroundColor: '#321aba',
            data: this.chartData,
          },
        ],
      })
    }
  }
})
