<template>
  <div id="index">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
html,body{
  width: 100%;
  height: 100%;
}
#index {
  width: 100%;
  height: 100%;
  font-size: 16px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 0;
  left: 0;
}
#index::-webkit-scrollbar{
  display: none;
}
</style>
