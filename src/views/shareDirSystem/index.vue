<template>
  <div class="main">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img alt=""
               src="../../assets/images/banner1.png"
               width="100%"></div>
        <div class="swiper-slide"><img alt=""
               src="../../assets/images/banner2.png"
               width="100%"></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="content">
      <div class="estable">
        <div class="title">
          <span><i class="el-icon-edit-outline"></i>最新推介接口</span>
          <router-link to="/"
                       class="more">查看更多></router-link>
        </div>
        <table>
          <tr>
            <th width="15%">序号</th>
            <th width="25%">服务名</th>
            <th width="15%">接口编码</th>
            <th width="30%">描述</th>
            <th width="15%">状态</th>
          </tr>
          <tr>
            <td>1</td>
            <td>机动车登记证信息</td>
            <td>JDCD_JK</td>
            <td>可获取指定机动车的登记证信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>2</td>
            <td>水路运输许可证信息</td>
            <td>SLYS_JK</td>
            <td>可获取水路运输许可证信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>3</td>
            <td>天地图Web地图服务</td>
            <td>TDTW_JK</td>
            <td>可获取地理位置的地图相关相关数据</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>4</td>
            <td>企业执照照面信息（多证合一链路）</td>
            <td>QYZZ_JK</td>
            <td>可获取企业执照信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>5</td>
            <td>个体工商户基本信息（两证整合链路）</td>
            <td>GTGS_JK</td>
            <td>可获取个体工商户基本信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>6</td>
            <td>地税税务登记信息</td>
            <td>DSSW_JK</td>
            <td>可获取地方税务登记信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>7</td>
            <td>广东省科学技术奖</td>
            <td>GDSK_JK</td>
            <td>可获取广东省科学技术奖信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>8</td>
            <td>高新技术企业认定信息</td>
            <td>GXJS_JK</td>
            <td>可获取高新技术企业认定信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>9</td>
            <td>产品质量检验机构验收（授予）证书信息</td>
            <td>CPZL_JK</td>
            <td>可获取企业产品质量相关证书信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>10</td>
            <td>广东省行政处罚信息</td>
            <td>GDSX_JK</td>
            <td>可获取广东省行政处罚的信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>11</td>
            <td>零售药店基本信息</td>
            <td>LSYD_JK</td>
            <td>可获取零售药店基本信息</td>
            <td>有效</td>
          </tr>
          <tr>
            <td>12</td>
            <td>农专分支异常名录详细信息</td>
            <td>LZFZ_JK</td>
            <td>可获取农专分支异常名录的信息</td>
            <td>有效</td>
          </tr>
        </table>
      </div>
      <div class="domainBox">
        <div class="title">
          <span><i class="el-icon-edit-outline"></i>服务领域</span>
          <router-link to="/"
                       class="more">查看更多></router-link>
        </div>
        <div class="contend">
          <ul class="clearfix">
            <li>
              <router-link :to="{name:'traffic'}">
                <img src="../../assets/images/icon1.png"
                     alt="">
                <p>道路交通</p>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="../../assets/images/icon1.png"
                     alt="">
                <p>道路交通</p>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="../../assets/images/icon1.png"
                     alt="">
                <p>道路交通</p>
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <img src="../../assets/images/icon1.png"
                     alt="">
                <p>道路交通</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  mounted() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: true,
      autoplayDisableOnInteraction: false,
      paginationClickable: true,
      loop: true
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
.content {
  width: 1200px;
  margin: auto;
  .title {
    margin-top: 15px;
    width: 100%;
    line-height: 40px;
    font-size: 20px;
    border-bottom: 1px solid #0d88f1;
    padding-left: 8px;
    position: relative;
    i {
      margin-right: 10px;
      color: #0d88f1;
      font-size: 20px;
    }
    .more {
      right: 0px;
      font-size: 14px;
      position: absolute;
    }
  }
  .estable {
    table {
      width: 100%;
      border: 0;
      padding-top: 10px;
      font-size: 14px;
      border-collapse: collapse;
      border-spacing: 0;
      word-break: break-all;
      tr {
        th,
        td {
          border-bottom: 1px solid #ddd;
          padding: 10px 6px;
          text-align: center;
          vertical-align: middle;
        }
        th {
          font-weight: 600;
        }
        &:nth-child(even) {
          background-color: #f5f5f5;
        }
      }
    }
  }

  .domainBox {
    width: 100%;
    ul {
      padding: 40px 0 0;
      li {
        float: left;
        padding: 0 60px 40px;
        width: 33.3%;
      }
    }
    .contend {
      a {
        border-radius: 10px;
        background: #f4f4f4;
        text-align: center;
        padding: 50px 0px;
        display: block;
        border: 1px solid #f4f4f4;
        &:hover {
          border: 1px solid #0d88f1;
        }
        p {
          margin-top: 10px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>