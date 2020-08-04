<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="BookOpenIcon" text="videos" />
        <div class="w-full setting-stand-video bg-white-grey">
            <div class="w-full px-10 pb-4 mt-4">
                <div class="vx-row w-full">
                    <div class="vx-col w-1/4" :key="`catalog-item-${index}`" v-for="(item, index) in video_list">
                       <video-card
                            title="Titulo del Video"
                            item="123"
                            readed="12323"
                        />
                    </div>
                    <div class="vx-col w-1/4 flex flex-col items-center justify-center">
                        <div class="mt-4 blue-dark flex items-center justify-center text-white" style="border-radius: 50%; width: 4rem; height: 4rem">
                            <feather-icon svgClases="w-10 h-10" icon="PlusIcon"/>
                        </div>
                        <div class="mt-4 text-center">
                            SUBIR VIDEO <br>
                            (Peso maximo 100mb)
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import VideoCard from '../VideoCard.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    VideoCard
  },
  data () {
    return {
      video_list: []
    }
  },
  created () {
    const list = []
    for (let i = 0; i < 3; i++) {
      list.push(i)
    }
    this.video_list = list    
  }
}
</script>
<style lang="scss">
.setting-stand-video {
    min-height: calc(var(--vh, 1vh) * 100 - 152px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>
    