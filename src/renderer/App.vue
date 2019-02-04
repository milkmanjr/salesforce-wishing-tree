<template>
  <div id="app">
      <router-view name="content"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'salesforce-wishingtree-touch',
  }
</script>

<style lang="scss">
  @import "~bootstrap/dist/css/bootstrap.min.css";
  @import '~font-awesome/css/font-awesome.css';
  @import './assets/styles/index';
  @import '~animate.css';

  #app {
    width: 100%;
    height: 100%;
  }
</style>
