<template>
  <div :id="id"
       :style="style">
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'eLine',
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
      style.width = this.width || '100%'
      style.height = this.height || '100%'
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
        color: ['#0096ff', '#fd7632', '#e6e14f', '#fb3456'],
        legend: {
          show: false,
          top: 15,
          right: 10,
          // orient: 'horizontal',
          itemHeight: 10,
          itemWidth: 10,

          textStyle: {
            color: '#cdd1d0',
            fontSize: 12
          },
          data: []
        },
        title: {
          text: '最近1月申请接口趋势图',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16
          }
        },
        tooltip: {
          trigger: 'axis',
          // backgroundColor: 'rgba(11,63,83,0.7)',
          padding: [6, 15],
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          backgroundColor: 'rgba(108,121,129,0.8)'
        },
        grid: {
          show: true,
          top: 70,
          left: 70,
          right: 50,
          bottom: 30,
          backgroundColor: 'transparent',
          borderColor: 'transparent'
        },
        xAxis: [{
          type: 'category',
          name: '日期',
          nameTextStyle: {
            color: '#666',
            fontSize: 14
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#aaaaaa',
              width: 1
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: '#aaa',
              width: 1
            }
          },
          axisLabel: {
            show: true,
            rotate: '45',
            interval: 0,
            textStyle: {
              color: '#666',
              fontSize: 12
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#ddd',
              width: 1,
              type: 'solid'
            }
          },

          data: this.chartData.xAxisData
        }],
        yAxis: [{
          name: '调用走势',
          nameTextStyle: {
            color: '#333',
            fontSize: 14
          },
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#aaa',
              width: 1
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#666',
              fontSize: 12
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#ddd',
              width: 1,
              type: 'solid'
            }
          },
          splitNumber: 4
        }],
        series: [
          {
            name: '申请接口数',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            data: this.chartData.yAxisData,
            label: {
              normal: {
                show: false,
                position: 'top',
                color: '#FFF'
              }
            }
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