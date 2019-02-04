<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Content',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  .content {
    height: 100%;
    width: 100%;
    overflow: hidden;

    > div {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
    }
  }
</style>
