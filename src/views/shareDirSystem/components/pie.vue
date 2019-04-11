<template>
  <div :id="id"
       :style="style">
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'ePie',
  data() {
    return {
      chart: null
    }
  },
  props: {
    id: String,
    chartData: Object,
    width: [String, Number],
    height: [String, Number]
  },
  computed: {
    style() {
      const style = {}
      style.width = this.width || '100%';
      style.height = this.height || '100%';
      return style
    }
  },
  mounted() {
    var dom = document.getElementById(this.id)
    this.chart = echarts.init(dom)
    this.initEchart()
  },
  methods: {
    initEchart() {
      var option = {
        color: ['#ff8383', '#6dcbff'],
        tooltip: {
          trigger: 'item',
          formatter: '{b}{c}个<br/>占比{d}%',
          backgroundColor: 'rgba(108,121,129,0.8)'
        },
        series: [
          {
            type: 'pie',
            radius: ['0%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                formatter: '{b}{c}个\n\n占比{d}%',
                textStyle: {
                  color: '#333',
                  fontSize: 14
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: '#444'
                }
              }
            },
            labelLine: {
              normal: {
                show: false,
                length: 20,
                length2: 25,
                lineStyle: {
                  color: '#666'
                }
              },
              emphasis: {
                show: false,
                lineStyle: {
                  color: '#666'
                }
              }
            },

            data: this.chartData.pieData
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style scoped>
</style>