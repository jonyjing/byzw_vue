<template>
  <div :id="id" :style="style"></div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "eBar",
  data() {
    return {
      chart: null
    };
  },
  props: {
    id: String,
    chartData: Object,
    width: [String, Number],
    height: [String, Number]
  },
  computed: {
    style() {
      const style = {};
      style.width = this.width || "100%";
      style.height = this.height || "100%";
      return style;
    }
  },
  mounted() {
    var dom = document.getElementById(this.id);
    this.chart = echarts.init(dom);
    this.initEchart();
    window.onresize = function() {
      this.chart.resize();
    };
  },
  methods: {
    initEchart() {
      var option = {
        color: ["#0096ff", "#fd7632", "#e6e14f", "#fb3456"],
        legend: {
          show: false,
          top: 15,
          right: 10,
          itemHeight: 10,
          itemWidth: 10,

          textStyle: {
            color: "#cdd1d0",
            fontSize: 12
          },
          data: []
        },
        tooltip: {
          trigger: "axis",
          padding: [6, 15],
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          backgroundColor: "rgba(108,121,129,0.8)"
        },
        grid: {
          show: true,
          top: 30,
          left: 30,
          right: 10,
          bottom: 20,
          backgroundColor: "transparent",
          borderColor: "transparent"
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#aaaaaa",
                width: 1
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: "#23759b",
                width: 1
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#5b5b5b",
                fontSize: 14
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#FFF",
                width: 1,
                type: "solid"
              }
            },
            splitArea: {
              show: false,
              areaStyle: {
                color: ["#eee", "#f6f6f6"]
              }
            },
            data: this.chartData.xAxisData
          }
        ],
        yAxis: [
          {
            name: "调用个数",
            nameTextStyle: {
              color: "#333",
              fontSize: 14
            },
            type: "value",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#aaaaaa",
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: "#fff",
                fontSize: 14
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#234762",
                width: 1,
                type: "solid"
              }
            },
            splitNumber: 4
          }
        ],
        series: [
          {
            name: "调用走势",
            type: "bar",
            barWidth: "60%",
            data: this.chartData.yAxisData,
            label: {
              normal: {
                show: true,
                position: "top",
                color: "#666",
                fontSize: 14
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>
