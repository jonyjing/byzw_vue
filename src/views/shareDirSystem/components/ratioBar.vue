<template>
  <div :id="id">
    <ul class="ratioBarUl">
      <li v-for="(item,index) in ratioDataArray"
          :key="index">
        <p>top{{index+1}}{{item.name}},{{item.num}}个</p>
        <div class="bottom">
          <transition appear
                      @before-appear="beforeEnter"
                      @appear="enter"
                      :css="false">
            <div class="top"
                 :key="index"
                 :data-width="item.ratio">
            </div>
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import Velocity from 'velocity-animate'//通过es６引入
// import Velocity from 'velocity-animate'// 通过externals引入
import $ from 'jquery'
export default {
  name: 'ratioBar',
  data() {
    return {
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0
      el.style.width = '0px'
    },
    enter: function(el, done) {
      // Velocity(el, { opacity: 1, width: el.dataset.width + '%' }, { duration: 500, complete: done })
      $(el).velocity({ opacity: 1, width: el.dataset.width + '%' }, { duration: 500, complete: done })
    }
  },
  mounted() {
  },
  props: {
    id: String,
    ratioDataArray: Array
  }
}
</script>

<style lang="scss" scoped>
.ratioBarUl {
  p {
    font-size: 14px;
    padding: 5px 0px;
  }
  > li {
    margin-bottom: 5px;
  }
  > li:nth-child(1) {
    .top {
      background: #fe0000;
    }
  }
  .bottom {
    width: 100%;
    height: 10px;
    background: #ddd;
    border-radius: 8px;
    position: relative;
  }
  .top {
    position: absolute;
    border-radius: 8px;
    top: 0;
    left: 0;
    background: #adadad;
    height: 100%;
  }
}
.grow-enter-active {
  transition: all 2s ease;
}
.grow-enter {
  width: 0;
  opacity: 0;
}
</style>