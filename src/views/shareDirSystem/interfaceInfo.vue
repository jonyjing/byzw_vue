<template>
  <div class="main">
    <div class="infoPanel-head">
      <p class="title">机动车登记证信息</p>
      <p>标签：<span class="tag">机动车</span><span class="tag">登记证</span></p>
      <p class="infor">
        <span>权威编号：A-2345982</span><span>版本号：V2.1</span><span>发布日期：2017.2.2 </span><span>使用范围： x市级、区级</span><span>时效性：长期有效 </span><span>共享方式：接口对接</span>
        <span>权威编号：A-2345982</span><span>版本号：V2.1</span><span>发布日期：2017.2.2 </span><span>使用范围： x市级、区级</span>
      </p>
      <div class="btns">
        <span><i class="el-icon-star-on"></i>数据 | 下载次数：987</span><span><i class="el-icon-star-on"> </i>接口 | 接入数：14</span>
        <div class="rightBtn">
          <a href=""
             class="red"><i class="el-icon-star-on"></i>取消收藏</a><a class="blue"
             href=""
             @click.prevent="showDialog=true"><i class="el-icon-star-on"></i>{{isSubmitSuccesful?'已申请':'申请使用'}}</a>
        </div>
      </div>
      <div class="collectBtn">
        <i class="el-icon-star-on"></i>已收藏
      </div>
    </div>
    <div class="infoPanel-content">
      <ul class="ul1">
        <li data-item='1'
            class="item active">概述内容</li>
        <li data-item='2'
            class="item">接口信息样例</li>
        <li data-item='3'
            class="item">接口接入指南</li>
        <li data-item='4'
            class="item">接口测试</li>
      </ul>
      <div class="infos">
        <transition enter-active-class="animated faster bounceInRight"
                    leave-active-class="animated faster bounceOutLeft"
                    mode="out-in">
          <div class="info1"
               key="info1"
               v-if="showDivIndex==1">
            <table>
              <tr>
                <td width="8%">资源名称</td>
                <td width="92%">机动车登记证信息</td>
              </tr>
              <tr>
                <td>资源摘要</td>
                <td>通过调用该接口，可以获取指定机动车的登记证信息。</td>
              </tr>
            </table>
          </div>
          <div class="info2"
               key="info2"
               v-else-if="showDivIndex==2"></div>
          <div class="info3"
               key="info3"
               v-else-if="showDivIndex==3">
            <h4>接入指南</h4>
            <div class="content clearfix">
              <div class="leftContent">
                <ul class="ul2">
                  <li :class="{'active':showInterfaceAdd}"
                      @click="activeLi(0,$event)">接口地址</li>
                  <li :class="{'active':showInterfaceParam}"
                      @click="activeLi(1,$event)">接口参数</li>
                </ul>
              </div>
              <div class="rightContent">
                <div v-show="showInterfaceAdd"
                     class="subItem">
                  <h3>服务地址</h3>
                  <div class="item2">
                    <div class="title">接口地址格式串</div>
                    <div class="content">http:// {API_ROOT}/ZHWBSID/services/query/sqlService?wsdl</div>
                  </div>
                  <div class="item2">
                    <div class="title">接口地址格式串</div>
                    <div class="content">http:// {API_ROOT}/ZHWBSID/services/query/sqlService?wsdl</div>
                  </div>
                  <div class="item2">
                    <div class="title">接口地址格式串</div>
                    <div class="content">http:// {API_ROOT}/ZHWBSID/services/query/sqlService?wsdl</div>
                  </div>
                  <div class="item2">
                    <div class="title">接口地址格式串</div>
                    <div class="content">http:// {API_ROOT}/ZHWBSID/services/query/sqlService?wsdl</div>
                  </div>
                </div>
                <div v-show="showInterfaceParam"
                     class="subItem">
                  <dl class="style-dl">
                    <dt>接口参数</dt>
                    <dd>
                      <table class="wfx-table">
                        <tr>
                          <th>查询编码qry_code</th>
                          <th colspan="4">queryWbyyAppoint</th>
                        </tr>
                        <tr>
                          <th colspan="5"
                              class="bg-blue1">输入参数</th>
                        </tr>
                        <tr>
                          <th class="bg-blue2"
                              width="20%">参数</th>
                          <th class="bg-blue2"
                              width="40%">名称</th>
                          <th class="bg-blue2"
                              width="20%">类型</th>
                          <th class="bg-blue2"
                              width="10%">必填</th>
                          <th class="bg-blue2"
                              width="10%">说明</th>
                        </tr>
                        <tr>
                          <td>car_num</td>
                          <td>机动车序号</td>
                          <td>varchar2</td>
                          <td>否</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>plate_num</td>
                          <td>车牌号码</td>
                          <td>varchar2</td>
                          <td>否</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>plate_type</td>
                          <td>号牌种类</td>
                          <td>varchar2</td>
                          <td>否</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>liscense_depart</td>
                          <td>发证单位</td>
                          <td>varchar2</td>
                          <td>否</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>page</td>
                          <td>当前页数</td>
                          <td>int</td>
                          <td>否</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th colspan="5"
                              class="bg-blue1">输出参数</th>
                        </tr>
                        <tr>
                          <th class="bg-blue2">参数</th>
                          <th class="bg-blue2">名称</th>
                          <th class="bg-blue2">类型</th>
                          <th class="bg-blue2"
                              colspan="2">说明</th>
                        </tr>
                        <tr>
                          <td>car_num</td>
                          <td>机动车序号</td>
                          <td>varchar2</td>
                          <td colspan="2"></td>
                        </tr>
                        <tr>
                          <td>plate_num</td>
                          <td>车牌号码</td>
                          <td>varchar2</td>
                          <td colspan="2"></td>
                        </tr>
                        <tr>
                          <td>plate_type</td>
                          <td>号牌种类</td>
                          <td>varchar2</td>
                          <td colspan="2"></td>
                        </tr>
                        <tr>
                          <td>liscense_depart</td>
                          <td>发证单位</td>
                          <td>varchar2</td>
                          <td colspan="2"></td>
                        </tr>
                        <tr>
                          <td>active_date</td>
                          <td>检验有效期</td>
                          <td>date</td>
                          <td colspan="2"></td>
                        </tr>
                        <tr>
                          <td>disable_date</td>
                          <td>强制报废日期</td>
                          <td>date</td>
                          <td colspan="2"></td>
                        </tr>
                        <tr>
                          <td>update_time</td>
                          <td>更新时间</td>
                          <td>timestamp</td>
                          <td colspan="2"></td>
                        </tr>
                        <tr>
                          <td>total</td>
                          <td>返回总条数</td>
                          <td>int</td>
                          <td colspan="2"></td>
                        </tr>
                        <tr>
                          <td>RN</td>
                          <td>系统自动生成的数据所处行数，非数据源数据</td>
                          <td>int</td>
                          <td colspan="2"></td>
                        </tr>
                      </table>
                    </dd>
                  </dl>

                </div>
              </div>
            </div>
          </div>
          <div class="info4"
               key="info4"
               v-else-if="showDivIndex==4"></div>
        </transition>
      </div>
    </div>
    <self-dialog width="35%"
                 :visible.sync="showDialog"
                 title="申请使用">
      <el-form ref="form"
               :model="form"
               label-width="160px">
        <el-form-item label="使用接口项目的类型：">
          <el-select v-model="form.interfaceType"
                     style="width:90%;"
                     placeholder="请选择接口项目的类型">
            <el-option label="交通大数据"
                       value="1"></el-option>
            <el-option label="旅游大数据"
                       value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目名称：">
          <el-select v-model="form.projectName"
                     style="width:90%;"
                     placeholder="请选择接口项目的类型">
            <el-option label="白云区交通大数据"
                       value="1"></el-option>
            <el-option label="白云区机动车管理大数据"
                       value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="申请描述：">
          <el-input type="textarea"
                    　style="width:90%;"
                    v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="申请文档：">
          <el-input v-model="fileName"
                    style="width:65%;"
                    readonly=true
                    placeholder=""></el-input>
          <a href=""
             class="file-btn">
            <span>选择文档</span>
            <input type="file"
                   ref="file"
                   @change="getFile">
          </a>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="slot-dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary"
                   @click="submitForm()">确　定</el-button>
      </div>
    </self-dialog>
  </div>
</template>

<script>
import selfDialog from './components/dialog.vue';
export default {
  data() {
    return {
      showInterfaceAdd: true,
      showInterfaceParam: false,
      showDivIndex: 1,
      showDialog: false,
      isSubmitSuccesful: false,
      form: {
        interfaceType: '',
        projectName: '',
        desc: '',
        files: []
      }
    }
  },
  computed: {
    fileName() {
      var fullFileName = '';
      Array.from(this.form.files).forEach(file => {
        fullFileName = fullFileName + file.name
      })
      return fullFileName
    }
  },
  components: {
    selfDialog
  },
  methods: {
    activeLi(index, event) {
      if (index === 0) {
        this.showInterfaceAdd = true
        this.showInterfaceParam = false
      } else {
        this.showInterfaceAdd = false
        this.showInterfaceParam = true
      }
    },
    submitForm() {
      this.showDialog = false
      this.isSubmitSuccesful = true
    },
    cancel() {
      this.showDialog = false
    },
    getFile() {
      this.form.files = this.$refs.file.files
    }
  },
  mounted() {
    var navUl = document.getElementsByClassName('ul1')[0]
    navUl.addEventListener('click', event => {
      event = event || window.event
      var targer = event.target
      if (targer.nodeName === 'LI') {
        var sliderNodes = Array.from(targer.parentNode.children).filter(
          child => child !== targer
        )
        sliderNodes.forEach(li => {
          li.classList.remove('active')
        })
        targer.classList.add('active')
        var itemIndex = targer.dataset.item
        this.showDivIndex = Number(itemIndex)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.clearfix {
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.main {
  width: 1200px;
  margin: 0 auto;
}
.infoPanel-head {
  background: #ececec;
  height: 200px;
  padding: 15px 15px;
  margin-top: 20px;
  color: #999;
  font-size: 14px;
  position: relative;
  .title {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 15px;
  }
  .collectBtn {
    position: absolute;
    font-size: 14px;
    color: #fff;
    padding: 5px 20px;
    background: #ceb35f;
    border-radius: 15px;
    top: 15px;
    right: 10px;
    i {
      margin-right: 5px;
    }
  }
  .tag {
    width: 30px;
    height: 15px;
    font-size: 14px;
    padding: 2px 4px;
    border-radius: 10px;
    border: 1px solid #fff;
    background: #fff;
    margin-left: 15px;
  }
  .infor {
    font-size: 14px;
    margin-top: 20px;
    span {
      margin-right: 30px;
      margin-bottom: 5px;
      display: inline-block;
      width: 15%;
    }
  }
  .btns {
    margin-top: 10px;
    position: relative;
    span {
      display: inline-block;
      margin-right: 30px;
      padding: 10px 20px;
      border: 1px solid #ddd;
      background: #fff;
    }
    i {
      margin-right: 10px;
    }
    .rightBtn {
      position: absolute;
      right: 0px;
      top: 0px;
      a {
        padding: 10px 20px;
        margin-left: 20px;
        color: #fff;
        font-size: 16px;
        border-radius: 5px;
        display: inline-block;
      }
      .red {
        background: #e38989;
      }
      .blue {
        background: #157bbd;
      }
    }
  }
}
.infoPanel-content {
  margin-top: 20px;
  .ul1 {
    border-bottom: 1px solid #ddd;
    li {
      padding: 15px 20px;
      font-size: 16px;
      text-align: center;
      display: inline-block;
      position: relative;
      cursor: pointer;
      &:hover,
      &.active {
        border-bottom: 2px solid #349ee2;
        color: #349ee2;
        &::after {
          content: "";
          border-width: 8px;
          border-color: transparent transparent #349ee2 transparent;
          border-style: dotted dotted solid;
          position: absolute;
          bottom: 0px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}
.infos {
  padding: 30px 20px;
  .item {
    display: none;
  }
  .info1 {
    > table {
      font-size: 14px;
      border-collapse: collapse;
      border-spacing: 0;
      td {
        text-align: left;
        padding: 10px 10px;
        &:nth-child(1) {
          color: #999;
        }
      }
    }
  }
  .info3 {
    h4 {
      color: #999;
      font-size: 14px;
    }
    .content {
      margin-top: 15px;
      .leftContent {
        float: left;
        padding: 0px 20px 0px 0px;
        .ul2 {
          > li {
            padding: 5px 10px;
            width: 100px;
            margin-bottom: 10px;
            font-size: 14px;
            display: block;
            border-radius: 3px;
            text-align: left;
            cursor: pointer;
            position: relative;
            &.active {
              border: 1px solid #157bbd;
              background: #157bbd;
              color: #fff;
              &::after {
                content: "";
                border-color: transparent transparent transparent #157bbd;
                border-style: dotted dotted dotted solid;
                border-width: 8px;
                position: absolute;
                top: 8px;
                right: -15px;
              }
              &::before {
                content: "";
                width: 10px;
                background: #157bbd;
                border-radius: 5px;
                height: 10px;
                position: absolute;
                top: 11px;
                right: -26px;
              }
            }
          }
        }
      }
      .rightContent {
        border-left: 1px dotted #999;
        float: left;
        width: calc(100% - 130px);
        .subItem {
          margin-left: 30px;
          h3 {
            font-size: 16px;
            color: #349ee2;
          }
          .item2 {
            margin-top: 20px;
            font-size: 14px;
            .title,
            .content {
              margin-top: 0px;
              text-align: left;
              padding: 10px 0 10px 30px;
              border: 1px solid #ddd;
            }
            .title {
              background: #ececec;
            }
          }
        }
      }
      .none {
        display: none;
      }
      .style-dl {
        dt {
          //color: $color;
          font-size: 16px;
          margin-bottom: 10px;
        }
        dd {
          padding-right: 20px;
        }
        .style-dd-list {
          margin: 20px 0 0 0;
          border: 1px solid #ddd;
          .tit {
            background: #eee;
            padding: 8px 30px;
          }
          .bod {
            padding: 8px 30px;
            border-top: 1px solid #ddd;
          }
        }
      }

      .wfx-table {
        border: 1px solid #ddd;
        font-size: 14px;
        th,
        td {
          padding: 6px 10px 6px 20px;
          border: 1px solid #ddd;
        }
        th {
          background: #eee;
          &.bg-blue1 {
            background: #c7e5f3;
            color: #000;
          }
          &.bg-blue2 {
            background: #f1f8fc;
          }
        }
      }
    }
  }
}
.slot-dialog-footer {
  text-align: center;
  button:nth-child(1) {
    margin-right: 10px;
  }
  button:nth-child(2) {
    margin-left: 10px;
  }
}
.file-btn {
  display: inline-block;
  margin-left: 5px;
  position: relative;
  span {
    display: inline-block;
    width: 80px;
    background: #ffab14;
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
}

@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-200px, 0, 0);
    transform: translate3d(-200px, 0, 0);
  }
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}
</style>