<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full setting-download-main bg-white-grey">
            <bread-crumb icon="DownloadIcon" text="mis descargars" />
            <div class="w-full px-10 pb-4">
                <div class="m-2 p-4 flex flex-row items-center bg-white">
                    <span class="h6 font-bold">(6 DISPONIBLES)</span>
                    <span class="h6 ml-10 flex flex-row items-center ml-2 chevron-border">
                        <span class="mr-6">CATEGORIA</span> <feather-icon icon="ChevronRightIcon" />
                    </span>
                </div>
                <div class="w-full mb-8 pb-4 bg-white">
                    <div class="m-2 p-4 flex items-center w-full mt-1 mx-2 mb-4">
                        <feather-icon svgClasses="w-8 h-8" icon="BookIcon" />
                        <span class="h4 font-bold ml-4">CATALOGOS O BROCHURES</span>
                    </div>
                    <div class="vx-row w-full">
                        <div class="vx-col w-1/4" :key="`catalog-item-${index}`" v-for="(item, index) in catalog_list">
                            <catalog-card
                                title="Catalog de Productos Ecologicos"
                                item="123"
                            />
                        </div>
                    </div>
                </div>
                <div class="w-full mb-8 pb-4 bg-white">
                    <div class="m-2 p-4 flex items-center w-full mt-1 mx-2 mb-4">
                        <feather-icon svgClasses="w-8 h-8" icon="PlayCircleIcon" />
                        <span class="h4 font-bold ml-4">VIDEOS</span>
                    </div>
                    <div class="vx-row w-full">
                        <div class="vx-col w-1/4" :key="`video-item-${index}`" v-for="(item, index) in video_list">
                            <video-card
                                title="Titulo del Video"
                                item="123"
                                readed="12323"
                            />
                        </div>
                    </div>
                </div>
                <div class="w-full mb-8 pb-4 bg-white">
                    <div class="m-2 p-4 flex items-center w-full mt-1 mx-2">
                        <feather-icon svgClasses="w-8 h-8" icon="MonitorIcon" />
                        <span class="h4 font-bold ml-4">WEBINAR</span>
                    </div>
                    <div class="vx-row w-full">
                        <div class="vx-col w-1/4" :key="`webinar-item-${index}`" v-for="(item, index) in webinar_list">
                            <webinar-card 
                                workdate = "01 DE AGOSTO"
                                time="5 pm - 6:00 pm"
                                title="Desarrollo de estrategias virtuales para desarrollo de marcas."
                                expositor_company="Felipe Alenso Guererro"
                                expositor_profession="Especilista en estrategias de marcas"
                                user_img="maintenance-2.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import Datepicker from 'vuejs-datepicker'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import WebinarCard from './WebinarCard.vue'
import CatalogCard from './CatalogCard.vue'
import VideoCard from './VideoCard.vue'
export default {
  components: {
    AppHeader,
    NavBackButton,
    BreadCrumb,
    Datepicker,
    
    WebinarCard,
    CatalogCard,
    VideoCard
  },
  data () {
    return {
      catalog_list: [],  
      video_list: [],
      webinar_list: []
    }
  },
  created () {
    const list = []
    for (let i = 0; i < 3; i++) {
      list.push(i)
    }
    this.catalog_list = list
    this.video_list = list.filter((it) => it < 2)
    this.webinar_list =  list.filter((it) => it < 1)
    
  }
}
</script>
<style lang="scss">

.setting-download-main {
  
  .vx-row {
      margin: 0 !important;
  }

  .vx-col {
      padding: 0 !important;
  }
}


</style>