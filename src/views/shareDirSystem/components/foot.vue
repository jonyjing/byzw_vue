<template>
  <div class="foot">
    <div class="footBox">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  background: #919191;
  color: #fff;
  .footBox {
    width: 1200px;
    margin: 0 auto;
    height: 90px;
    text-align: center;
    font-size: 14px;
    line-height: 90px;
  }
}
</style>