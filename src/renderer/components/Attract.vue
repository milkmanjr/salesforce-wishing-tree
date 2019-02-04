<template>
  <div class="attract">

      <br />
      <h2>Welcome to the</h2>
      <h1>Einstein Prediction Tree</h1>

      <router-link :to="'main-menu'" class="btn btn-white btn-action">Predict</router-link>
  </div>
</template>

<script>
  import ColorChanger from '@/bits/ColorChanger'
  export default {
    name: 'Attract',
    data () {
      return {}
    },
    mounted () {
      ColorChanger.change('off')
    }
  }
</script>

<style lang="scss">
  .attract {
    background-image: url('~@/assets/imgs/attract-bg.png');
    background-color: #70cae8;
    background-size: cover;
    background-position: center center;

    padding-top: 12vh;
    width: 100%;
    height: 100%;
    text-align: center;

    h1, h2 {
      color: #fff;
    }

    h1 {
      font-size: 6vw;
      font-family: 'NeutrafaceText-Bold';
      text-transform: uppercase;
      margin: 0;
    }

    h2 {
      font-size: 4vw;
    }

    .btn-action {
      position: absolute;
      left: 50%;
      bottom: 10vh;
      transform: translateX(-50%);
    }
  }
</style>