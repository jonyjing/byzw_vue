<template>
  <div class="main">
    <div class="head">
      <router-link to="/"
                   class="back">返回</router-link>
    </div>
    <div class="content">
      <ul>
        <li v-for="(menu,index) in menuList"
            :key="index">
          <router-link :to="{name:menu.pathName}"><i class="icon"></i>
            <p v-html="menu.name"></p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      menuList: [{
        name: 'ETL调度子系统',
        pathName: 'diaodu'
      }, {
        name: '数据共享<br>交换子系统',
        pathName: 'a'
      }, {
        name: '数据共享<br>目录子系统',
        pathName: 'shareDirSystem'
      }, {
        name: '数据治理平台',
        pathName: 'c'
      }, {
        name: '大数据展现<br>子系统',
        pathName: 'd'
      }, {
        name: '大数据应用<br>门户系统',
        pathName: 'e'
      }, {
        name: '安全管理系统',
        pathName: 'f'
      }]
    }
  },
  mounted() {
    setTimeout(function() {
      $('.content ul li').each(function() {
        var _that = $(this)
        setTimeout(function() {
          _that.show().addClass('bounceIn')
        }, 300 * _that.index())
      })
    }, 500)
  }
}
</script>

<style lang="scss" scoped >
.clearfix {
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.main {
  height: 100%;
  background: url("../../assets/images/houtai-bg.png") no-repeat;
  background-size: 100% 100%;
  .head {
    position: absolute;
    width: 100%;
    height: 55px;
    top: 80px;
    background: url("../../assets/images/houtai-title.png") no-repeat center top;
    background-size: auto 55px;
  }
  .back {
    width: 60px;
    height: 25px;
    border-radius: 10px;
    border: 1px solid #74bdff;
    position: absolute;
    line-height: 27px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
  .content {
    width: 884px;
    height: 376px;
    margin: 0 auto;
    position: relative;
    top: 240px;
    ul {
      @extend .clearfix;
      overflow: hidden;
      li {
        display: none;
        width: 200px;
        height: 160px;
        margin-right: 20px;
        float: left;
        font-size: 22px;
        text-align: center;
        margin-bottom: 20px;
        background: linear-gradient(
          rgba(97, 84, 240, 0.8),
          rgba(61, 45, 232, 0.8),
          rgba(51, 7, 147, 0.8)
        );
        a {
          color: #bdacff;
        }
        .icon {
          width: 61px;
          height: 60.9px;
          display: block;
          margin: 0 auto;
          margin-top: 20px;
          margin-bottom: 12.1px;
        }
        &:nth-child(1) {
          .icon {
            background: url("../../assets/images/icon1-b.png") no-repeat center
              top;
            background-size: 100% 100%;
          }
          &:hover {
            .icon {
              background: url("../../assets/images/icon12.png") no-repeat center
                top;
            }
            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>