<template>
  <div class="head">
    <div class="headBox">
      <router-link to="/"
                   class="logo-title"></router-link>
      <div class="search">
        <p class="searchInfo">现已开放6大类，124个接口服务，超过1.39亿条信息数据</p>
        <div class="searchBox">
          <el-input placeholder="请输入关键字搜索"
                    v-model="searchContent">
            <el-button slot="append"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="buttonTools">
        <router-link to="/">登录</router-link>
        <router-link to="/regiest">注册</router-link>
        <router-link to="/help"><i class="el-icon-question"></i>帮助</router-link>
      </div>
    </div>
    <div class="menuBox">
      <ul class="clearfix">
        <li>
          <router-link :to="{name:'shareDirSystem'}">首页</router-link>
        </li>
        <li><a>数据集</a></li>
        <li><a>接口管理</a>
          <ul class="subUl">
            <li>
              <router-link :to="{name:'traffic'}">接口查询</router-link>
            </li>
            <li>
              <router-link :to="{name:'interfaceView'}">接口开放视图</router-link>
            </li>
            <li>
              <router-link :to="{name:'interfaceInfo'}">接口详情</router-link>
            </li>
          </ul>
        </li>
        <li><a>服务申请</a></li>
        <li>
          <router-link :to="{name:'tongji'}">服务运营</router-link>
        </li>
        <li><a>服务动态</a></li>
        <li><a>系统管理</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headBox',
  data() {
    return {
      searchContent: ''
    }
  }
}
</script>
<style lang="scss">
.head .el-input__inner {
  height: 45px;
  line-height: 45px;
  border: 1px solid #ababab;
  border-right: 0;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
  color: #666;
}

.head .el-input-group__append {
  width: 80px;
  text-align: center;
  cursor: pointer;
  background: #00b0ff;
  color: #9fe7ff;
  font-size: 24px;
  border-radius: 0 4px 4px 0;
}
</style>

<style lang="scss" scoped>
.clearfix {
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.head {
  width: 100%;
  position: relative;
  .headBox {
    padding-top: 15px;
    margin: 0 auto;
    height: 142px;
    width: 1200px;
    background: url("../../../assets/images/top-gz.png") 150px 10px no-repeat;
    background-size: 395px 133px;
  }
  .bg {
    position: absolute;
  }
  .logo-title {
    position: relative;
    top: 50%;
    height: 42px;
    width: 365px;
    background: url("../../../assets/images/logo-title.png") no-repeat;
    background-size: 100% 100%;
    float: left;
    transform: translateY(-50%);
  }
  .search {
    position: relative;
    float: left;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 40px;
    .searchInfo {
      color: #00b0ff;
      position: absolute;
      top: -28px;
      margin-bottom: 5px;
      font-size: 14px;
    }
    .searchBox {
      width: 465px;
      height: 45px;
    }
  }
  .buttonTools {
    float: right;
    top: 50%;
    transform: translateY(-50%);
    position: relative;
    a {
      height: 40px;
      display: inline-block;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      background: #00b0ff;
      padding: 0px 25px;
      color: #fff;
      margin-left: 15px;
      border-radius: 4px;
      i {
        font-size: 18px;
        margin-right: 3px;
        vertical-align: -2px;
      }
    }
  }
  .menuBox {
    background-color: #000;
    > ul {
      width: 1200px;
      margin: 0 auto;
      height: 45px;
      li {
        font-size: 16px;
        color: #fff;
        position: relative;
        float: left;
        line-height: 45px;
        cursor: pointer;
        &:hover,
        .active {
          background-color: #444;
          .subUl {
            display: block;
          }
        }
        a {
          color: #fff;
          padding: 0px 40px;
          display: inline-block;
        }
        .subUl {
          display: none;
          position: absolute;
          background: #5c5c5c;
          left: 0px;
          z-index: 2;
          li {
            font-size: 14px;
            height: 35px;
            line-height: 35px;
            color: #fff;
            width: 100%;
            padding: 0 15px;
            a {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>