<template>
  <div class="login-content">
    <h3 class="tips">{{title}}</h3>
    <div class="account">
      <label></label>
      <input placeholder="邮箱/用户名/已验证手机" class="input_box" type="text" name="account" v-model="account">
    </div>
    <div class="password">
      <label></label>
      <input placeholder="密码" class="input_box" type="password" name="password" v-model="password">
    </div>
    <div class="op_line clearfix">
      <div class="f-left">
        <input name="autoLogin" type="checkbox" />
        <label for="autoLogin">自动登录</label>
      </div>
      <a class="f-right">忘记密码</a>
    </div>
    <button @click="greet" class="text-center" type="button" name="button">登&nbsp;&nbsp;&nbsp;录</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '公共场所不建议自动登录，以防账号丢失',
      account: '',
      password: ''
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
