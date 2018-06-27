<template>
  <v-section size="S">
    <span slot="title">
      <div class="icon">
        <i class="fa fa-laptop"></i>
      </div>
      {{ $t('it-skills.title')}}
    </span>
    <div class="chart-box" slot="content">
      <canvas class="chart-box" :id="id"></canvas>
    </div>
  </v-section>
</template>
<script>
  import Section from './section.vue';
  import ChartJS from 'chart.js';
  export default {
    data () {
      return {
        id: Math.round(Math.random() * 1000000),
        chart: null,
        data: [
          { name: 'JS, NodeJS', level: 4, moreInfo: 'VueJS, Webpack, AngularJS, Electron...' },
          { name: 'HTML5, CSS', level: 4, moreInfo: 'SASS, LESS, offline web-apps...' },
          { name: 'Python', level: 4, moreInfo: 'PySpark, Flask, Luigi...' },
          { name: 'Docker', level: 3, moreInfo: '' },
          { name: 'R', level: 3, moreInfo: '' },
          { name: 'MongoDB, PgSQL', level: 3, moreInfo: '' },
          { name: 'ElasticSearch', level: 2, moreInfo: 'Kibana, Sense, Logstash' },
          { name: 'JAVA', level: 2, moreInfo: '' },
          { name: 'C/C++', level: 2, moreInfo: '' }
        ],
        labels: ['beginner', 'basics', 'intermediate', 'experienced', 'expert']
      };
    },
    components: {
      'v-section': Section
    },
    computed: {
      options () {
        const self = this;
        return {
          elements: {
            rectangle: {
              borderWidth: 1
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                display: false,
                max: 4.5
              },
              gridLines: {
                color: 'rgba(0, 0, 0, 0)'
              }
            }]
          },
          tooltips: {
            callbacks: {
              label (tooltipItem) {
                return self.$t(`it-skills.labels.${self.labels[tooltipItem.xLabel]}`);
              },
              footer (tooltipItem) {
                return self.data[tooltipItem[0].index].moreInfo;
              }
            },
            displayColors: false
          }
        };
      },
      labelset () {
        return this.data.map((e) => e.name);
      },
      dataset () {
        const dataSet = {
          backgroundColor: 'rgba(160,209,245,0.3)',
          borderColor: '#0070c9',
          data: []
        };
        this.data.forEach((e) => {
          dataSet.data.push(e.level);
        });
        return [dataSet];
      }
    },
    mounted () {
      const ctx = document.getElementById(this.id).getContext('2d');
      this.chart = new ChartJS(ctx, {
        type: 'horizontalBar',
        data: {
          labels: this.labelset,
          datasets: this.dataset
        },
        options: this.options
      });
    }
  };
</script>
<style lang="sass" type="text/scss" rel="stylesheet/scss" scoped>
  @import '../scss/fonts';
  .chart-box {
    width: 100%;
    height: 100%;
    min-height: 345px;
    margin-top: 5px;
    position: relative;
    @media print {
      width: 250px;
    }
  }
</style>
