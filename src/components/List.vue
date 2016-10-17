<template>
  <ul class="list">
    <template v-for="item in items">
      <li>{{ item.msg }}</li>
      <li>common code</li>
    </template>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {msg: '111'}, {msg: '112'}
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  list-style: none;
  color: #39f;
  text-align: left;
}
</style>
