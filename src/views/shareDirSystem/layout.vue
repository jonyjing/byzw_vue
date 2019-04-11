<template>
  <div class="layout">
    <head-box></head-box>
    <router-view :key="key"></router-view>
    <foot-box>广州市白云区政府政务管理办公室 版权所有 粤ICP备12055861号-1 网站统计：5014044 网站标识码：4401110001</foot-box>
  </div>
</template>

<script>
import { headBox, footBox } from './components/index'
export default {
  components: {
    headBox,
    footBox
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
</style>