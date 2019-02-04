<template>
  <div class="cta" :class="`cta-${pagename}`">

      <div class="cta__content">
        <h3>Follow the map below to learn<br/>more about Salesforce Einstein</h3>
      </div>

      <div class="cta__map"></div>
  </div>
</template>

<script>
  import ColorChanger from '@/bits/ColorChanger'
  export default {
    name: 'Cta',
    components: {
      HeaderTitle: require('@/bits/Header')
    },
    data () {
      return {
        pagename: this.$route.params.id
      }
    },
    methods: {},
    mounted () {
      ColorChanger.change('off');
      this.timeout = setTimeout(() => {
        this.$router.push('/attract')
      }, 14000);
    },
    destroyed () {
      clearTimeout(this.timeout);
    }
  }
</script>

<style lang="scss">
  .cta {
    background-image: url('~@/assets/imgs/main-menu-bg.png');
    height: 100%;
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
  }

  .cta__content {
    text-align: center;

    h3,
    h4 {
      color: #fff;
      font-size: 3vw;
      padding: 0 5vw;
    }

    h4 {
      font-size: 1.8vw;
      padding: 0;
      margin: 0 0 3vw;
    }

    img {
      max-width: 100%;
    }
  }

  .cta__map {
    background-image: url('~@/assets/imgs/map.png');
    height: 30vw;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin: 2vw;
  }

  .cta-sales .cta__map {
    background-image: url('~@/assets/imgs/sales-map.png');
  }

  .cta-commerce .cta__map {
    background-image: url('~@/assets/imgs/commerce-map.png');
  }

  .cta-marketing .cta__map {
    background-image: url('~@/assets/imgs/marketing-map.png');
  }

  .cta-service .cta__map {
    background-image: url('~@/assets/imgs/service-map.png');
  }

  .cta-platform .cta__map {
    background-image: url('~@/assets/imgs/platform-map.png');
  }
</style>