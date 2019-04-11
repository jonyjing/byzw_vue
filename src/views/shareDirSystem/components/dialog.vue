<template>

  <div class="dialog-wrapper"
       v-show="visible">
    <transition enter-active-class="animated bounceIn"
                leave-active-class="animated bounceOut">
      <div class="dialog"
           ref="dialog"
           v-show="visible"
           :style="style">
        <div class="dialog-header">
          <slot name="title">
            <span class="dialog-title">{{title}}</span>
          </slot>
          <button type='button'
                  class="dialog-headerBtn"
                  @click="handelClose"><i class="el-icon el-icon-close"></i></button>
        </div>
        <div class="dialog-body">
          <slot></slot>
        </div>
        <div class="dialog-footer"
             v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'selfDialog',
  data() {
    return {
    }
  },
  props: {
    width: {
      type: String
    },
    visible: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    modal: {
      type: Boolean,
      default: true
    },
    top: {
      type: String,
      default: '15vh'
    }
  },
  methods: {
    handelClose() {
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  },
  computed: {
    style() {
      const style = {}
      if (!this.fullscreen) {
        style.marginTop = this.top
        if (this.width) {
          style.width = this.width
        }
      }
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-wrapper {
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}
.dialog {
  background: #fff;
  margin: 0 auto;
}
.dialog-header {
  position: relative;
  padding: 10px 15px;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  background: #ececec;
  .dialog-headerBtn {
    position: absolute;
    right: 0px;
    cursor: pointer;
    i {
      font-size: 22px;
    }
  }
}
.dialog-body {
  padding: 15px 20px;
}
.dialog-footer {
  padding: 0px 0px 20px;
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