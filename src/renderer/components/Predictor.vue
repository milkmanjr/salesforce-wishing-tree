<template>
  <div class="predictor" :class="`predictor-${pagename}`">

   <div class="predictor__content">
        <TitleHeader
          :title="pagename"
          :enableBack="true" />

        <div class="predictor__inner">
          <h2>I want Einstein to Predict:</h2>
          <ul>
            <li class="animated fadeInUp" v-for="(item, index) in pages[pagename].items">

              <h3 v-html="item.title"></h3>
              <p>{{ item.copy }}</p>

              <router-link class="button" :to="{name: 'videos', params: {id: pagename, index: index} }">
                Select
              </router-link>
            </li>
          </ul>
        </div>
    </div>

    <img :src="require('@/assets/imgs/einstein.png')" class="einstein" />
  </div>
</template>

<script>
  import ColorChanger from '@/bits/ColorChanger'
  import pages from '@/bits/Pages'
  export default {
    name: 'Predictor',
    data () {
      return {
        pagename: this.$route.params.id,
        pages
      }
    },
    components: {
      'TitleHeader': require('@/bits/Header')
    },
    methods: { },
    mounted () {
      ColorChanger.change(this.pagename);
    }
  }
</script>

<style lang="scss">
  $salesColor: #00b0a9;
  $serviceColor: #af0a5b;
  $marketingColor: #eb8d2b;
  $commerceColor: #42693a;
  $platformColor: #032e61;

  .predictor {
    background-image: url('~@/assets/imgs/main-menu-bg.png');
    position: relative;

    .einstein {
      width: 10vw;
      position: absolute;
      bottom: 0;
      right: 25%;
    }
  }

  .predictor__content {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
  }

  .predictor__inner {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-size: 4vw;
      color: #fff;
      margin: 0 2vw;
    }

    h3 {
      font-size: 2vw;
      color: #fff;
      font-family: 'SalesforceSans-Bold';
    }

    p {
      font-size: 1.5vw;
      color: #fff;
    }

    ul {
      width: 80%;
      height: 20vw;
      margin: 0;
      list-style: none;
      padding: 0;
      display: flex;
      margin-bottom: 10vw;
      margin-top: 5vw;
      align-items: center;
      justify-content: center;
    }

    li {
      background: rgba(255,255,255,0.8);
      display: inline-block;
      width: 30%;
      height: 100%;
      border-radius: 2vw;
      margin: 0 1.5%;
      flex: 0 0 30%;
      padding: 2vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 2vw;

      &:nth-of-type(1) {
        -webkit-animation-duration: 0.5s;
      }

      &:nth-of-type(2) {
        -webkit-animation-duration: 1s;
      }

      &:nth-of-type(3) {
        -webkit-animation-duration: 1.5s;
      }


      a {
        text-decoration: none;
        color: #fff;

        span {
          font-family: ''
        }
      }

      .button {
        display: inline-block;
        margin-top: auto;
        background: #fff;
        padding: 1.5vw 3.5vw;
        border-radius: 100px;
        font-family: 'SalesforceSans-Bold';
        text-transform: uppercase;
        font-size: 1.45vw;
        box-shadow: 0 0.3vw rgba(0,0,0,0.25);
      }

      strong {
        font-family: 'SalesforceSans-Bold';
      }
    }
  }

  .predictor-service .predictor__inner {
    ul li {
      background-color: $serviceColor;

      .button {
        color: $serviceColor;
      }
    }
  }

  .predictor-marketing .predictor__inner {
    ul li {
      background-color: $marketingColor;

      .button {
        color: $marketingColor;
      }
    }
  }

  .predictor-commerce .predictor__inner {
    ul li {
      background-color: $commerceColor;

      .button {
        color: $commerceColor;
      }
    }
  }

  .predictor-platform .predictor__inner {
    ul li {
      background-color: $platformColor;

      .button {
        color: $platformColor;
      }
    }
  }

  .predictor-sales .predictor__inner {
    ul li {
      background-color: $salesColor;

      .button {
        color: $salesColor;
      }
    }
  }
</style>