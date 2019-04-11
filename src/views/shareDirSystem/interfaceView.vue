<template>
  <div class="main">
    <div class="content">
      <div class="leftMenu">
        <ul class="firstLevel">
          <li v-for="(menu,index) in menuList"
              :key="index"
              class="item "
              :class="{'active':index==activeMenuIndex}">
            <div class="menuItem"
                 @click="clickMenu(index,$event)">
              <p><i :class="menu.icon"></i>{{menu.name}}</p>
            </div>
            <ul v-if="menu.submenu.length>0"
                class="secondLevel">
              <li v-for="(subMenu,subIndex) in menu.submenu"
                  :key="subIndex"
                  class="subItem"
                  :class="{'active':subIndex==activeSubMenuIndex}">
                <div class="menuItem"
                     @click="clickSubMenu(subIndex,$event)">
                  <p><i :class="subMenu.icon"></i>{{subMenu.name}}</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="rightContent">
        <div class="panel">
          <div class="title">
            <i class="el-icon-edit-outline"></i>接入项目：白云区交通大数据
          </div>
          <div class="searchBox">
            <input placeholder="对名称进行模糊查询"
                   type="text"><span><i class="el-icon-search"></i></span>
          </div>
          <div class="table">
            <table>
              <tr>
                <th width="10%">序号</th>
                <th>服务名称</th>
                <th>接口编码</th>
                <th>概述</th>
                <th width="10%">上架状态</th>
                <th>操作</th>
              </tr>
              <tr>
                <td>1</td>
                <td class="tl">机动车登记证信息</td>
                <td>JDCD_JK</td>
                <td class="tl">可获取指定机动车的登记证信息</td>
                <td>未上架</td>
                <td><a class="h-btn">详情</a><a class="h-btn red">上架</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td class="tl">可获取水路运输许可证信息</td>
                <td>SLYS_JK</td>
                <td class="tl">可获取水路运输许</td>
                <td>已上架</td>
                <td><a class="h-btn">详情</a><a class="h-btn blue">下架</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td class="tl">天地图Web地图服务</td>
                <td>TDTW_JK</td>
                <td class="tl">可获取地理位置的地图相关相关数据</td>
                <td>未上架</td>
                <td><a class="h-btn">详情</a><a class="h-btn red">上架</a></td>
              </tr>
            </table>
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
      activeMenuIndex: 0,
      activeSubMenuIndex: 0,
      menuList: [
        {
          name: '交通大数据',
          icon: 'el-icon-view',
          submenu: [{
            name: '白云区交通大数据',
            icon: 'el-icon-edit-outline'
          }, {
            name: '天河区交通大数据',
            icon: 'el-icon-edit-outline'
          }]
        },
        {
          name: '旅游大数据',
          icon: 'el-icon-view',
          submenu: []
        },
        {
          name: '会展大数据',
          icon: 'el-icon-view',
          submenu: []
        }
      ]
    }
  },
  methods: {
    /* clickMenu(e) {
      var clickEle = e.currentTarget
      var liBox = clickEle.parentNode
      var allLi = Array.from(liBox.parentNode.children).filter((child) =>
        child !== liBox
      )
      allLi.forEach(li => {
        li.classList.remove('active')
      })
      liBox.classList.toggle('active')
    } */
    clickMenu(index, e) {
      this.activeMenuIndex = index
    },
    clickSubMenu(index, e) {
      this.activeSubMenuIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: #f6f6f6;
  height: 100%;
}
.content {
  width: 1200px;
  height: 100%;
  padding: 15px 0px;
  position: relative;
  margin: 0 auto;
}
.leftMenu {
  position: absolute;
  top: 15px;
  bottom: 0px;
  background: #ecf7ff;
  width: 200px;
  .firstLevel {
    .item {
      width: 200px;
      position: relative;
      cursor: pointer;
      color: #c6e9ff;
      border-bottom: 1px solid #62bdf7;
      background: #349ee2;
      font-size: 16px;
      &:hover,
      &.active {
        color: #fff;
      }
      &.active {
        .secondLevel {
          display: block;
        }
      }
    }
    .menuItem {
      height: 50px;
      line-height: 50px;
      padding-left: 18px;
      position: relative;
      i {
        margin-right: 10px;
      }
    }
  }
}

.secondLevel {
  width: 200px;
  display: none;
  .subItem {
    cursor: pointer;
    background: #ecf7ff;
    font-size: 14px;
    color: #000;
    &:hover,
    &.active {
      background: #c7e8ff;
    }
  }
}

.rightContent {
  margin-left: 210px;
  background: #fff;
  height: 100%;
  .panel {
    padding: 0px 0px 0px 15px;
    .title {
      padding: 0px 10px;
      line-height: 40px;
      font-size: 20px;
      border-bottom: 1px solid #0d88f1;
      i {
        margin-right: 10px;
        font-size: 28px;
        color: #0d88f1;
        top: 3px;
        position: relative;
      }
    }
  }
  table {
    width: 100%;
    margin-top: 30px;
    font-size: 14px;
    border-spacing: 0px;
    border-collapse: collapse;
    tr {
      text-align: center;
      border-bottom: 1px solid #ececec;
      &:nth-child(even) {
        background: #f5f5f5;
      }
      th {
        font-weight: 600;
        padding: 15px 0px;
      }
      td {
        padding: 15px 0px;
        &.tl {
          text-align: left;
        }
        a.h-btn {
          cursor: pointer;
          padding: 3px 15px;
          color: #fff;
          border-radius: 5px;
          background: #66cc01;
          border: 1px solid #5ab400;
          margin-left: 10px;
        }
        .h-btn.red {
          background: #e35913;
          border: 1px solid #cb4b09;
        }
        .h-btn.blue {
          background: #34acd7;
          border: 1px solid #4195b3;
        }
      }
    }
  }
}

.searchBox {
  margin-top: 35px;
  width: 400px;
  position: relative;
  input {
    height: 50px;
    width: 340px;
    font-size: 16px;
    margin-right: 60px;
    padding: 0 15px;
    border: 1px solid #ececec;
    &::-webkit-input-placeholder {
      font-size: 16px;
    }
  }
  span {
    height: 50px;
    line-height: 50px;
    background: #0d88f1;
    position: absolute;
    right: 0px;
    width: 60px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-radius: 2px;
  }
}
</style>