<template>
  <div class="player">
      <TitleHeader
        :enableHome="true" />

      <div class="player__video">
        <video
          @ended="onVideoFinished"
          autoplay="1"
          :src="videoUrl" />
      </div>
  </div>
</template>

<script>
  import pages from '@/bits/Pages';
  export default {
    name: 'VideoPlayer',
    components: {
      'TitleHeader': require('@/bits/Header')
    },
    data () {
      return {
        pagename: this.$route.params.id,
        videoIndex: this.$route.params.index,
        videoUrl: pages[this.$route.params.id].items[this.$route.params.index].video,
        videoTitle: pages[this.$route.params.id].items[this.$route.params.index].title
      }
    },
    methods: {
      onVideoFinished() {
        this.$router.push({name: 'cta', params: {id: this.pagename}})
      }
    }
  }
</script>

<style lang="scss">
  .player {
    background: #27160a;
    display: flex;
    flex-direction: column;
  }

  .player__video {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    video {
      height: 90%;
    }
  }
</style>