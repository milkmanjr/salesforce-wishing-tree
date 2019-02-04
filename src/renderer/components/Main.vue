<template>
  <div class="main-menu">

      <div class="main-menu__header">
        <h2>Select a product to get started:</h2>
      </div>

      <div class="main-menu__icons">
        <ul>
          <li v-for="page in pages">
            <router-link :to="{path: page.url}">
              <div><img :src="page.icon" /></div>
              <span v-if="page.name != 'Platform'">{{page.name}}</span>
              <img class="platform-logo" v-if="page.name == 'Platform'" :src="require('@/assets/imgs/my-einstein-logo.png')" />
            </router-link>
          </li>
        </ul>
      </div>

      <img :src="require('@/assets/imgs/einstein.png')" class="einstein" />
  </div>
</template>

<script>
  import ColorChanger from '@/bits/ColorChanger'
  import pages from '@/bits/Pages'
  export default {
    name: 'Main',
    data () {
      return {
        pages
      }
    },
    components: {},
    destroyed () {
      clearTimeout(this.timeout);
    },
    methods: {},
    mounted () {
      ColorChanger.change('off');
      this.timeout = setTimeout(() => {
        this.$router.push('/attract')
      }, 14000);
    }
  }
</script>

<style lang="scss">
  .main-menu {
    background-image: url('~@/assets/imgs/main-menu-bg.png');
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .einstein {
      position: absolute;
      bottom: 0;
      width: 10vw;
      right: 25%;
    }
  }

  .main-menu__header {
    padding: 1rem;

    h2 {
      margin: 0;
      font-size: 3.5vw;
      color: #fff;
    }
  }

  .main-menu__icons {
    margin-top: 5rem;

    ul {
      padding: 0;
      margin: 0;

      li {
        list-style: none;
        display: inline-block;
        margin: 0 4vw;
        text-align: center;

        a { color: #fff; }
      }

      img {
        margin-bottom: 10px;
        height: auto;
        width: 6vw;
      }

      img.platform-logo {
        width: 8.5vw;
      }

      span {
        font-size: 1.5vw;
        font-family: 'SalesforceSans-Regular';
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        display: inline-block;
      }
    }
  }
</style>