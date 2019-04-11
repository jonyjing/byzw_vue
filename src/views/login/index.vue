<template>
  <div class="main">
    <div class="head"></div>
    <div class="loginPanel">
      <div class="header">
        <div class="title">用户登录</div>
        <div class="headLine"></div>
      </div>
      <el-form :model="loginForm"
               :rules="rules"
               ref="loginForm"
               class="loginForm">
        <div class="row">
          <el-form-item label=""
                        prop="username">
            <el-input placeholder="请输入帐号"
                      prefix-icon="icon-byzw-shouji"
                      v-model="loginForm.username"></el-input>
          </el-form-item>
        </div>
        <div class="row">
          <el-form-item label=""
                        prop="password">
            <el-input placeholder="请输入密码"
                      type="password"
                      prefix-icon="icon-byzw-jiesuo"
                      v-model="loginForm.password"></el-input>
          </el-form-item>
        </div>
        <div class="row">
          <div class="el-input pointer userTypeBox"
               @click.stop="showUserTypeList">
            <input type="text"
                   name="userType"
                   class="el-input__inner pointer"
                   :value="loginForm.userType"
                   readonly>
            <span class="el-input__prefix">
              <i class="el-input__icon"
                 :class="[isShowUserTypeList?'icon-byzw-ln_sanjiaoshang':'icon-byzw-ln_sanjiaoxia']"></i>
            </span>
            <span class="splitLine">|</span>
          </div>
          <transition name="self-bounce">
            <ul class="userTypeList pointer"
                v-show="isShowUserTypeList">
              <li v-for="(item, index) in userTypes"
                  :key="index"
                  :data-index="index"
                  @click.stop="defaultUser=item ; isShowUserTypeList=false">
                {{item}}
              </li>
            </ul>
          </transition>
        </div>
        <div class="row">
          <el-form-item label=""
                        prop="verifycode">
            <el-input placeholder="验证码"
                      prefix-icon="icon-byzw-yanzhengma"
                      v-model="loginForm.verifycode"
                      class="verifyInput"></el-input>
            <span class="verifyCode">3489</span>
          </el-form-item>
        </div>
        <div class="row">
          <button type="button"
                  class="loginBtn"
                  　@click="submitForm('loginForm')">登录</button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateVerify = (rule, value, callback) => {
      if (value !== '3489') {
        callback(new Error('验证码输入错误'))
      } else {
        callback()
      }
    }
    return {
      isShowUserTypeList: false,
      userTypes: ['后台用户', '前台用户'],
      loginForm: {
        username: '',
        password: '',
        verifycode: '',
        userType: '后台用户'
      },
      rules: {
        username: [{ required: true, message: '请输入帐号', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'change' }],
        verifycode: [{ required: true, message: '请输入验证码', trigger: 'change' }, { trigger: 'change', validator: validateVerify }]
      }
    }
  },
  mounted() {
    /* this.$refs.loginForm.getElementsByClassName(
      'userTypeBox'
    )[0].onclick = () => {
      this.$refs.loginForm.getElementsByClassName(
        'userTypeList'
      )[0].style.display = 'block'
    } */
    document.getElementsByTagName('body')[0].onclick = (el) => {
      this.isShowUserTypeList = false
    }
  },
  methods: {
    showUserTypeList(e) {
      this.isShowUserTypeList = !this.isShowUserTypeList

      /*  this.$refs.loginForm.getElementsByClassName(
        'userTypeList'
      )[0].style.display = 'block' */
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/main' })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$fontFamily: PingFangSC-Regular;

.loginForm .el-input__inner {
  height: 40px;
  line-height: 40px;
  padding-left: 45px;
  border: 1px solid #8074ff;
  border-radius: 4px;
  color: #cfcbff;
  font-size: 16px;
  background-color: transparent;
}

.loginForm .el-input__icon {
  line-height: 40px;
  font-size: 20px;
  padding: 0 5px;
}
.loginForm .el-input__inner::-webkit-input-placeholder {
  font-family: $fontFamily;
  font-size: 16px;
  color: #cfcbff;
}

.loginForm .el-form-item.is-success .el-input__inner {
  border: 1px solid #8074ff;
}
</style>

<style lang='scss' scoped>
$fontFamily: PingFangSC-Regular;
.main {
  background: url("../../assets/images/login-bg.png") no-repeat;
  background-size: 100% 100%;
  height: 100%;
  .head {
    position: absolute;
    width: 100%;
    height: 36px;
    top: 80px;
    background: url("../../assets/images/login-title.png") no-repeat center top;
    background-size: auto 36px;
  }
  .loginPanel {
    position: absolute;
    left: 950px;
    top: 220px;
    padding: 10px 30px;
    width: 330px;
    height: 400px;
    background: url(../../assets/images/login-form.png) no-repeat;
    background-size: 100% 100%;
    box-shadow: inset 0 0 34px 0 rgba(76, 46, 135, 0.69);
    border-radius: 10px;
    .header {
      text-align: center;
      .title {
        font-family: MicrosoftYaHei;
        font-size: 20px;
        color: #dfc7ff;
        padding: 15px 0px;
      }
      .headLine {
        width: 263px;
        height: 2px;
        background: linear-gradient(to right, #110523, #d2b3fc, #140827);
      }
    }
    .loginForm {
      margin-top: 20px;
      padding: 0px 5px;
      .row {
        margin-bottom: 15px;
      }
      .verifyInput {
        width: 150px;
      }
      .verifyCode {
        margin-left: 10px;
        font-family: $fontFamily;
        font-size: 16px;
        color: #cfcbff;
      }
      .loginBtn {
        background: #2c49e6;
        border-radius: 3px;
        font-family: $fontFamily;
        font-size: 20px;
        color: #ffffff;
        width: 260px;
        height: 40px;
        cursor: pointer;
      }
      .splitLine {
        position: absolute;
        left: 35px;
        top: 5px;
        font-size: 20px;
        color: #cfcbff5e;
      }
      .pointer {
        cursor: pointer;
      }
      .userTypeList {
        position: absolute;
        width: 260px;
        border: 1px solid #8074ff;
        border-radius: 4px;
        color: #cfcbff;
        z-index: 2;
        height: 82px;
        font-size: 16px;
        overflow: hidden;
        background-color: rgb(25, 27, 88);
        li {
          height: 40px;
          line-height: 40px;
          padding-left: 45px;
          &:hover {
            background-color: rgb(34, 37, 105);
          }
        }
      }
      .self-bounce-enter-active,
      .self-bounce-leave-active {
        transition: all 0.3s;
      }
      .self-bounce-enter, .self-bounce-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(20px);
      }
    }
  }
}
</style>