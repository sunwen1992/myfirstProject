<template>
  <div id="app">
    <!-- <img class="logo" src="./assets/logo.png">
    <Hello></Hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
    <List></List> -->
    <div class="wrap_module">
      <div class="tab clearfix">
        <label @click="swift('qrcode')" :class="[isActive=='qrcode' ? 'active' : '', 'qrcode_login', 'f-left']"><router-link to="/login">账户登录</router-link></label>
        <label @click="swift('account')" :class="[isActive=='account' ? 'active' : '', 'account_login', 'f-left']"><router-link to="/qrcodelogin">扫码登录</router-link></label>
      </div>
      <router-view></router-view>
      <div class="bottom_link clearfix">
        <ul class="clearfix f-left">
          <li class="f-left">京东钱包</li>
          <li class="f-left">QQ</li>
          <li class="f-left">微信</li>
        </ul>
        <div class="f-right registerBtn">
          <a>立即注册</a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import Hello from './components/Hello'
import List from './components/List'
export default {
  data () {
    return {
      isActive: 'qrcode'
    }
  },
  components: {
    'Hello': Hello,
    'List': List
  },
  methods: {
    swift: function (value) {
      this.isActive = value
    }
  }
}

</script>

<style>
@import 'scss/index.min.css';
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  /*color: #42b983;*/
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
