<template>
  <div>
    <div class="main">
      <div class="content clearfix">
        <div class="left">
          <div class="domain">
            <div class="title">数据领域</div>
            <div class="domainType">
              <div class="typeTitle">大类Ｉ</div>
              <ul class="typeList clearfix">
                <li class="item"><img src="../../assets/images/icon7 (2).png" />
                  <p>全部</p>
                </li>
                <li class="item"><img src="../../assets/images/icon1.png" />
                  <p>道路交通</p>
                </li>
                <li class="item"><img src="../../assets/images/icon2.png" />
                  <p>经济建设</p>
                </li>
                <li class="item"><img src="../../assets/images/icon3 (2).png" />
                  <p>科技教育</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="rightContent">
            <div class="titleBox clearfix">
              <span class="title">服务列表</span>
              <div class="search">
                <el-input placeholder="请输入关键字搜索"
                          v-model="searchContent">
                  <el-button slot="append"
                             icon="el-icon-search">搜索</el-button>
                </el-input>
              </div>
            </div>
            <div class="listTypeBox">
              <el-badge :value="124"
                        class="item"><span>全部</span></el-badge>
              <el-badge :value="18"
                        class="item"><span>道路交通</span></el-badge>
              <el-badge :value="7"
                        class="item"><span>经济建设</span></el-badge>
              <el-badge :value="19"
                        class="item"><span>教育科技</span></el-badge>
            </div>
            <div class="serviceList">
              <ul>
                <li>
                  <div class="infoBox">
                    <div class="li-top">
                      <h4><a href="ganshu.html">机动车登记证信息</a></h4><em><i class="el-icon-star-on"></i>收藏298</em>
                    </div>
                    <p class="infor">
                      <span>权威编号：A-2345982</span><span>版本号：V2.1</span><span>发布日期：2017.2.2 </span><span>使用范围： x市级、区级</span><span>时效性：长期有效 </span><span>共享方式：接口对接</span>
                    </p>
                    <p class="intro">概述：可获取指定机动车的登记证信息。</p>

                  </div>
                  <div class="btntools">
                    <a href="ganshu.html"
                       class="btn"><i class="el-icon-star-on"></i>
                      <div>收藏</div>
                    </a>
                    <a href="ganshu.html"
                       class="btn bottom"><i class="el-icon-edit-outline"></i>
                      <div>申请使用</div>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="infoBox">
                    <div class="li-top">
                      <h4><a href="ganshu.html">机动车登记证信息</a></h4><em><i class="el-icon-star-on"></i>收藏298</em>
                    </div>
                    <p class="infor">
                      <span>权威编号：A-2345982</span><span>版本号：V2.1</span><span>发布日期：2017.2.2 </span><span>使用范围： x市级、区级</span><span>时效性：长期有效 </span><span>共享方式：接口对接</span>
                    </p>
                    <p class="intro">概述：可获取指定机动车的登记证信息。</p>

                  </div>
                  <div class="btntools">
                    <a href="ganshu.html"
                       class="btn"><i class="el-icon-star-on"></i>
                      <div>收藏</div>
                    </a>
                    <a href="ganshu.html"
                       class="btn bottom"><i class="el-icon-edit-outline"></i>
                      <div>申请使用</div>
                    </a>
                  </div>
                </li>
                <li></li>
              </ul>
              <el-pagination background
                             layout="prev, pager, next"
                             :total="80"
                             class="pagelist">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: ''
    }
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
  background: #f6f6f6;
}
.content {
  position: relative;
  width: 1200px;
  margin: auto;
}

.right {
  padding-left: 15px;
  margin-left: 270px;
  padding: 20px 15px 0;
  .rightContent {
    padding: 10px 10px;
    background: #fff;
    font-size: 14px;
    .titleBox {
      width: 100%;
      padding: 0px 10px;
      height: 60px;
      margin-bottom: 5px;
      line-height: 60px;
      .title {
        font-size: 16px;
        float: left;
      }
      .search {
        float: right;
        width: 300px;
        height: 60px;
        line-height: 60px;
      }
    }
  }
}
.listTypeBox {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #eee;
  margin-bottom: 15px;
  .item {
    margin-top: 10px;
    margin-left: 40px;
    height: 30px;
    line-height: 30px;
  }
}

.serviceList {
  ul {
    width: 100%;
    li {
      width: 100%;
      border: 1px solid #eee;
      position: relative;
      margin-bottom: 20px;
      .infoBox {
        padding: 15px 15px;
        .li-top {
          margin-bottom: 15px;
          h4 {
            display: inline-block;
            font-size: 16px;
            vertical-align: middle;
          }
          em {
            display: inline-block;
            margin-left: 20px;
            color: #999;
          }
        }
        .infor {
          margin-bottom: 15px;
          color: #999;
          span {
            width: 170px;
            display: inline-block;
          }
        }
      }
      .btntools {
        height: 100%;
        width: 128px;
        position: absolute;
        right: 0px;
        top: 0px;
        .btn {
          height: 50%;
          background: #349ee2;
          color: #fff;
          text-align: center;
          padding: 5px 0px;
          display: block;
          font-size: 16px;
          padding-top: 12px;
          &.bottom {
            background: #157bbd;
          }
          i {
            font-size: 18px;
          }
        }
      }
    }
  }
}

.pagelist {
  margin-top: 15px;
  text-align: right;
}
.left {
  top: 20px;
  bottom: 0px;
  position: absolute;
  width: 270px;
  background: #fff;
  .domain {
    .title {
      width: 100%;
      padding: 10px 20px;
      font-size: 18px;
      color: #fff;
      background: #349ee2;
      height: 50px;
    }
    .domainType {
      padding: 30px 20px;
      .typeTitle {
        font-size: 18px;
      }
      .typeList {
        margin-top: 30px;
        .item {
          width: 50%;
          float: left;
          text-align: center;
          font-size: 16px;
          color: #999;
          margin-bottom: 30px;
          img {
            width: 38px;
            height: 38px;
          }
        }
      }
    }
  }
}
</style>