<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'

</script>

<template>
  <div id="app">
    <RouterView />
    <Navbar />
  </div>
</template>
<style lang="less">
@import "./common/style/mixin.less";

</style>


