<template>
  <div class="title__header">
    <div class="title" v-if="title">
       <img :src="pages[title].icon" />
       <span v-if="title != 'platform'">{{ title }}</span>
       <img class="platform-logo" v-if="title == 'platform'" :src="require('@/assets/imgs/my-einstein-logo.png')" />
    </div>

    <div class="nav">
       <a href="javascript:0;" v-if="enableBack" v-on:click="goBack()">
        &lt;
        back
      </a>

      <a href="javascript:0;" v-if="enableHome" v-on:click="goHome()">
        &lt;
        home
      </a>
    </div>
  </div>
</template>

<script>
  import pages from '@/bits/Pages';
  export default {
    props: ['title', 'enableBack', 'enableHome'],
    name: 'TitleHeader',
    data () {
      return {
        pages
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1);
      },
      goHome () {
        this.$router.push('/main-menu')
      }
    }
  }
</script>

<style lang="scss">
  .title__header {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    display: flex;
    align-items: center;
    padding: 1vw 2vw;
    text-align: center;

    > div {
      font-size: 1.75vw;
    }

    .title {
      text-align: left;
      display: flex;
      align-items: center;

      img {
        width: 5vw;
        margin-right: 1.5vw;
      }

      .platform-logo {
        width: 6vw;
      }
    }

    .nav {
      text-align: right;
      margin-left: auto;
    }

    a {
      color: #fff;
      text-decoration: none !important;
      border: none !important;
    }
  }
</style>
