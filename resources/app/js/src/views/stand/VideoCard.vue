<template>
    <div class="video-card">
        <div class="fs-14 font-bold mb-2 mx-8 text-center">
            {{title}}
        </div>
        <div class="flex w-full items-center justify-center card-header card-grey">
          <vs-icon @click="showVideo" size="4rem" class="play-icon cursor-pointer" color="red" icon-pack="material-icons" icon="play_circle_filled" />
        </div>
        <div class="vx-row">
          <div class="vx-col flex items-center justify-center text-white w-3/5 bg-dark" style="padding: 0.5rem 0 !important">
            {{readed}} {{$t('Viewers')}}
          </div>
          <div class="vx-col w-2/5">
              <div @click="downloadVideo" class="flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer">
                  <feather-icon size="w-6 h-6" icon="DownloadIcon" />
                  <div class="ml-2 uppercase" style="font-size: 0.9rem">{{$t('Download')}}</div>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    readed: {
      type: Number,
      required: true
    }, 
    show: {
      type: Function,
      required: false
    },
    download: {
      type: Function,
      required: false
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    showVideo () {
      this.show(this.id)  
    },
    downloadVideo () {
      this.download(this.id)
    }


  }
}
</script>
<style lang="scss">
.video-card {
    margin: 0 1.5rem;
    font-size: 1rem;
    font-weight: normal;
    
    .card-header {
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        height: 15rem;
    }

}
</style>