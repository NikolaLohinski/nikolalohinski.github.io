<template>
  <div class="info-chart">
    <canvas class="info-chart" :id="id"></canvas>
  </div>
</template>
<script>
  import ChartJS from 'chart.js';
  export default {
    data () {
      return {
        id: Math.round(Math.random() * 1000000),
        chart: null
      };
    },
    props: {
      options: {
        type: Object
      },
      type: {
        type: String
      },
      data: {
        type: Array,
        required: true
      },
      labels: {
        type: Array,
        required: true
      }
    },
    mounted () {
      const ctx = document.getElementById(this.id).getContext('2d');
      this.chart = new ChartJS(ctx, {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: this.data
        },
        options: this.options
      });
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss">
  .info-chart {
    width: 100%;
    height: 100%;
    position: relative;
    margin: 25px 0;
  }
</style>
