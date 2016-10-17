<template>
  <div class="qrcodeLogin-content clearfix">
    <div class="wrap_qrcode clearfix" @mouseenter="hover = true" @mouseleave="hover = false">
      <div class="qrcode_box f-left">
        <img src="../scss/images/show.png" alt="扫码登录" width="150px" height= "150px" />
      </div>
      <transition name="bounce" mode="out-in">
        <div v-show="hover" class="tipImg f-left"></div>
      </transition>
    </div>
    <ul class="clearfix text-center desc_lik">
      <li class="">打开新版手机京东，扫描二维码</li>
      <li class="">实用帮助</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '公共场所不建议自动登录，以防账号丢失',
      account: '',
      password: '',
      hover: false
    }
  },
  methods: {
    greet: function () {
      this.password = '213'
      this.account = 'hello sunny'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
