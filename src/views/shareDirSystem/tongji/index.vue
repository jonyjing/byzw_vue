<template>
  <div class="main">
    <div class="content">
      <el-row>
        <el-col :span="8"
                class="panel">
          <div class="chartTitle">接口总数：124个</div>
          <ratio-bar :ratioDataArray="ratioDataArray1"
                     id="ratio1"></ratio-bar>
        </el-col>
        <el-col :span="8"
                class="panel">
          <div class="chartTitle">活跃接口数：108个</div>
          <e-bar id="chart1"
                 :chartData="chartData1"
                 height="230px"></e-bar>
        </el-col>
        <el-col :span="8"
                class="panel">
          <div class="chartTitle">接入客户数：17个</div>
          <ratio-bar :ratioDataArray="ratioDataArray1"
                     id="ratio2"></ratio-bar>
        </el-col>
      </el-row>
      <el-row>
        <div class="title"><i class="el-icon-edit-outline"></i>申请趋势</div>
        <el-col :span="15"
                class="panel">
          <e-line id="chart3"
                  :chartData="chartData2"
                  height="270px"></e-line>
        </el-col>
        <el-col :span="9"
                class="panel">
          <div class="chartTitle small">最新一月申请接口数量373个，待审批86个，已审批287个</div>
          <e-pie id="chart4"
                 :chartData="chartData3"
                 height="260px"></e-pie>
        </el-col>
      </el-row>
      <el-row>
        <div class="title"><i class="el-icon-edit-outline"></i>调用趋势</div>
        <el-col :span="12"
                class="panel">
          <div class="chartTitle small">今日运行接口数102个，占比92.73%，未运行接口数8个，占比7.27%</div>
          <e-pie id="chart5"
                 :chartData="chartData3"
                 height="280px"></e-pie>
        </el-col>
        <el-col :span="12"
                class="panel">
          <div class="chartTitle small">今日调用总次数3475个，成功3453次，占比99.37%，失败22次，占比0.63%</div>
          <e-pie id="chart6"
                 :chartData="chartData3"
                 height="280px"></e-pie>
        </el-col>
        <el-row>
          <el-col :span="12"
                  class="panel">
            <e-line id="chart7"
                    :chartData="chartData4"
                    height="270px"></e-line>
          </el-col>
          <el-col :span="12"
                  class="panel">
            <e-line id="chart8"
                    :chartData="chartData4"
                    height="270px"></e-line>
          </el-col>
        </el-row>
      </el-row>
    </div>
  </div>
</template>

<script>
import eBar from '../components/bar.vue';
import eLine from '../components/line.vue';
import ePie from '../components/pie.vue';
import ratioBar from '../components/ratioBar.vue';
export default {
  data() {
    return {
      chartData1: {
        xAxisData: ['17日', '18日', '19日', '20日', '21日', '22日', '23日'],
        yAxisData: [97, 91, 99, 92, 102, 108, 102]
      },
      chartData2: {
        xAxisData: [
          '5/13',
          '5/14',
          '5/15',
          '5/16',
          '5/17',
          '5/18',
          '5/19',
          '5/20',
          '5/21',
          '5/22',
          '5/23',
          '5/24',
          '5/25',
          '5/26',
          '5/27',
          '5/28',
          '5/29',
          '5/30',
          '5/31',
          '6/3',
          '6/2',
          '6/3',
          '6/4',
          '6/5'
        ],
        yAxisData: [
          350,
          380,
          380,
          490,
          750,
          370,
          680,
          650,
          820,
          360,
          450,
          340,
          220,
          440,
          340,
          360,
          430,
          540,
          320,
          490,
          470,
          370,
          350,
          410
        ]
      },
      chartData3: {
        pieData: [
          {
            value: 86,
            name: '待审批'
          },
          {
            value: 287,
            name: '已审批'
          }
        ]
      },
      chartData4: {
        xAxisData: ['16日', '17日', '18日', '19日', '20日', '21日', '22日'],
        yAxisData: [350, 380, 380, 490, 750, 370, 680]
      },
      ratioDataArray1: [
        { name: '竞争分析', ratio: '50', num: 32 },
        { name: '客户画像', ratio: '47', num: 27 },
        { name: '用户分析', ratio: '40', num: 21 },
        { name: '社交服务', ratio: '38', num: 19 },
        { name: '位置分析', ratio: '30', num: 18 }
      ]
    }
  },
  components: { eBar, eLine, ePie, ratioBar }
}
</script>

<style lang="scss" scoped>
.main {
  background: #f6f6f6;
}
.content {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
}
.panel {
  padding: 20px 20px;
  max-height: 360px;
  .chartTitle {
    padding: 10px 0px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    &.small {
      font-size: 14px;
    }
  }
}
.title {
  border-bottom: 1px solid #0d88f1;
  padding: 5px 20px;
  font-size: 20px;
  i {
    font-size: 22px;
    margin-right: 10px;
    display: inline-block;
    color: #0d88f1;
  }
}
</style>