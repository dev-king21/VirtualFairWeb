<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="gallery" type="svg" text="GALERÍA" />
        <div class="w-full setting-stand-video bg-white-grey">
            <div class="w-full px-10 pb-4 mt-4">
                <div class="vx-row w-full">
                  <div class="vx-col w-1/6" :key="`photo-item-${index}`" v-for="(item, index) in gallery_list.filter((it) => isImage(it.url))">
                    <div class="bg-grey-real m-4 p-2" style="border-radius: 10px; height: 200px;">
                      <img :src="`/fair_image/${item.url}`" style="height: 100%; width: auto; max-width: 100%;">
                    </div>
                  </div>
                </div>
                <div class="vx-row w-full mt-4">
                  <div class="vx-col w-1/4" :key="`video-item-${index}`" v-for="(item, index) in gallery_list.filter((it) => isVideo(it.url))">
                    <video-card
                        :title="item.name"
                        :readed="item.readed"
                        :id="item.id"
                        :download="downloadGallery"
                        :show="showVideo"
                    />
                  </div>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import VideoCard from './VideoCard.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    VideoCard
  },
  data () {
    return {
      gallery_list: [],
      stand_id: null
    }
  },
  methods: {
    isImage (file) {
      return /\.(jpeg|jpg|png|gif)$/.test(file)
    },
    isVideo (file) {
      return /\.(avi|mp4|3gp)$/.test(file)
    },
    getGalleryItems () {
      if (!this.$route.params.stand_id) {
        return this.$route.push('/stand/home')
      }
      this.$http.post('/api/stand/gallery', {_id: this.$route.params.stand_id})
        .then((response) => {
          const data = response.data
          if (!data.stand || !data.stand.id) {
            this.$vs.notify({
              title: 'error',
              text: 'primero debe comprar el soporte.',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            })
            setTimeout(() => {
              this.$router.push('/setting/home')    
            }, 3000)
            return
          }
          this.gallery_show = false
          this.stand_id = data.stand.id
          this.gallery_list = data.stand.gallerys
        })  
    },
    downloadGallery (id) {
      this.$http.post('/api/stand/gallery/download', {_id: id})
        .then((response) => {
          if (response.data.status === 'ok') {
            console.log('ok')
          }
        })
    },
    showVideo (id) {
      console.log(id)  
    }    
  },
  created () {
    this.getGalleryItems() 
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
    