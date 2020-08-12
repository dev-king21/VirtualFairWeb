<template>
    <div class="video-card">
        <div class="h6 mb-2 mx-8 text-center">
            {{title}}
        </div>
        <div class="flex w-full items-center justify-center card-header grey-real">
          <vs-icon size="4rem" class="play-icon" color="red" icon-pack="material-icons" icon="play_circle_filled" />
        </div>
        <div class="vx-row">
            <div class="vx-col flex items-center justify-center text-white w-3/5 bg-dark">
              {{readed}} vistars
            </div>
            <div class="vx-col w-2/5">
                <div @click="removeVideo(id)" class="flex items-center justify-center text-white py-2 yellow-dark w-full cursor-pointer">
                    <svg-icon size="w-5 h-5" icon="erase" />
                    <div class="ml-2" style="font-size: 0.9rem">BORRAR</div>
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
    remove: {
      type: Function,
      required: false  
    },
    show: {
      type: Function,
      required: false
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeVideo (id) {
      this.remove(id)  
    },
    showVideo (id) {
      this.show(id)  
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