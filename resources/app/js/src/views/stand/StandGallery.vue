<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="gallery" type="svg" :text="$t('Gallery')" />
        <div class="w-full setting-stand-video bg-white-grey">
            <div class="w-full px-10 pb-4 mt-4">
                <div class="vx-row w-full">
                  <div class="vx-col w-1/6" :key="`photo-item-${index}`" v-for="(item, index) in gallery_list.filter((it) => isImage(it.url))">
                    <div class="card-grey m-4 p-2 cursor-pointer" @click="showGallery(index)" style="border-radius: 10px; height: 200px;">
                      <img :src="`/fair_image/${item.url}`" style="height: 100%; width: auto; max-width: 100%;">
                    </div>
                  </div>
                </div>
                <div class="vx-row w-full bottom">
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
                <LightBox ref="lightbox" :media="images" :show-caption="true" :show-light-box="false" />
            </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import VideoCard from './VideoCard.vue'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import LightBox from 'vue-image-lightbox'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    VideoCard,
    LightBox
  },
  data () {
    return {
      gallery_list: [],
      images: [],
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
      this.$loading.show(this)
      this.$http.post('/api/stand/gallery', {_id: this.$route.params.stand_id})
        .then((response) => {
          this.$loading.hide(this)
          const data = response.data
          if (!data.stand || !data.stand.id) {
           this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('BucketMsg'),
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
          this.gallery_list.forEach(element => {
            if (this.isImage(element.url)) {
              this.images.push({
                thumb: `/fair_image/${element.url}`, src: `/fair_image/${element.url}`, caption: element.name
              })
            }
          })
        })  
    },
    showGallery (idx) {
      this.$refs.lightbox.showImage(idx)
    },
    downloadGallery (id) {
      this.$loading.show(this)
      this.$http.post('/api/stand/gallery/download', {_id: id})
        .then((response) => {
          this.$loading.hide(this)
         if (response.data.status === 'ok') {
            this.$vs.notify({
              title: this.$t('Success'),
              text: this.$t('SuccessMessage'),
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          }
        })
    },
    showVideo (id) {
      this.$router.push(`/stand/video/gallery/${id}`)
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

    .vx-row.bottom {
      margin-top: 2rem !important;
    }

    .vx-col {
        padding: 0 !important;
    }

    .vue-lb-container {
      z-index: 10001 !important;
      .vue-lb-info {
        display: none !important;
      }
    }
}
</style>
    