<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="CalendarIcon" text="mis citas" />
        <div class="w-full setting-stand-video bg-white-grey">
            <div class="w-full px-10 mt-4">
                <div class="h5 mt-8 ml-6 font-bold">
                    JUEVES 04 de AGOSTO
                </div>
                <div class="vx-row w-full">
                    <div class="vx-col w-1/3" :key="`catalog-item-${index}`" v-for="(item, index) in video_list">
                       <div class="flex flex-col justify-between mx-3 my-3 bg-white" style="border: 1px solid #f0f0f0">
                           <div class="flex items-start w-full px-3 mt-8">
                                <feather-icon class="ml-2 text-cyan-dark" icon="ClockIcon"/>
                                <div class="mx-4">
                                    <div>11:00 am - 11:30 pm</div>
                                    <div>Nombre: Karla Loazia Brenes</div>
                                    <div>Compania: Grupo House</div>
                                    <div>Pais: Costa Rica</div>
                                </div>
                            </div>
                            <div class="flex mt-6 justify-end">
                                <vs-button class="cyan-dark">IR A LA CITA</vs-button>
                            </div>
                       </div>
                    </div>
                </div>
                <div class="h5 mt-8 ml-6 font-bold">
                    JUEVES 05 de AGOSTO
                </div>
                <div class="vx-row w-full">
                    <div class="vx-col w-1/3" :key="`catalog-item-${index}`" v-for="(item, index) in video_list">
                       <div class="flex flex-col justify-between mx-3 my-3 bg-white" style="border: 1px solid #f0f0f0">
                           <div class="flex items-start w-full px-3 mt-8">
                                <feather-icon class="ml-2 text-cyan-dark" icon="ClockIcon"/>
                                <div class="mx-4">
                                    <div>12:00 am - 12:30 pm</div>
                                    <div>Nombre: Karla Loazia Brenes</div>
                                    <div>Compania: Grupo House</div>
                                    <div>Pais: Costa Rica</div>
                                </div>
                            </div>
                            <div class="flex mt-6 justify-end">
                                <vs-button class="cyan-dark">IR A LA CITA</vs-button>
                            </div>
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
    