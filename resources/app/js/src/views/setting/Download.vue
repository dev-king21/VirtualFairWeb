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
                        <svg-icon size="w-8 h-8 text-black" icon="brochure" />
                        <span class="h4 font-bold ml-4">CATALOGOS O BROCHURES</span>
                    </div>
                    <div class="vx-row w-full">
                        <div class="vx-col w-1/4" :key="`catalog-item-${index}`" v-for="(item, index) in catalog_list">
                            <catalog-card
                                :title="item.portfolio.name"
                                :id="item.id"
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
                                :title="item.gallery.name"
                                :readed="item.gallery.readed"
                                :id="item.id"
                            />
                        </div>
                    </div>
                </div>
                <div class="w-full mb-8 pb-4 bg-white">
                    <div class="m-2 p-4 flex items-center w-full mt-1 mx-2">
                        <svg-icon size="w-8 h-8 text-black" icon="webinar" />
                        <span class="h4 font-bold ml-4">WEBINAR</span>
                    </div>
                    <div class="vx-row w-full">
                        <div class="vx-col w-1/4" :key="`webinar-item-${index}`" v-for="(item, index) in webinar_list">
                            <webinar-card 
                                :workdate="item.talk.talk_date"
                                :time="period(item.talk.start_time, item.talk.end_time)"
                                :title="item.talk.title"
                                :expositor_name="`${item.talk.user.first_name} ${item.talk.user.last_name}`"
                                :expositor_profession="`${item.talk.user.address}`"
                                :user_img="`${item.talk.user.avatar}`"
                                :live="item.talk.live===1"
                                    />
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
  methods: {
    period (start_time, end_time) {
      const sd = this.$date.timeFormat(start_time)
      const ed = this.$date.timeFormat(end_time)  
      return `${sd} - ${ed}`  
    }  
  },
  created () {
    this.$loading.show(this)
    this.$http.post('/api/setting/download')
      .then((response) => {
        this.$loading.hide(this)
        const data = response.data
        this.catalog_list = data.catalog_list
        this.video_list = data.video_list
        this.webinar_list = data.webinar_list  
        console.log(data)
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: 'éxito',
            text: 'Te has registrado con éxito.',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } else {
          this.$vs.notify({
            title: 'Oyu',
            text: 'Operación fallida',
            color: 'error',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } 
      })
    
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