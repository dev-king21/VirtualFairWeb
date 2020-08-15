<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="gallery" type="svg" text="GALERÍA" />
        <div class="w-full setting-stand-video bg-white-grey">
            <div class="w-full px-10 pb-4 mt-4">
                <div class="h3 m-2 font-bold" v-show="hasImage">
                  Image
                </div>
                <div class="vx-row w-full">
                  <div class="vx-col w-1/6" :key="`photo-item-${index}`" v-for="(item, index) in gallery_list.filter((it) => isImage(it.url))">
                    <div class="bg-grey-real m-4 p-2" style="border-radius: 10px; height: 200px;">
                      <img :src="`/fair_image/${item.url}`" style="height: 100%; width: auto; max-width: 100%;">
                    </div>
                  </div>
                </div>
                <div class="h3 m-2 font-bold" v-show="hasVideo">
                  Video
                </div>
                <div class="vx-row w-full mt-4">
                    <div class="vx-col w-1/4" :key="`video-item-${index}`" v-for="(item, index) in gallery_list.filter((it) => isVideo(it.url))">
                       <video-card
                            :title="item.name"
                            :readed="item.readed"
                            :id="item.id"
                            :remove="removeGallery"
                            :show="showVideo"
                        />
                    </div>
                    <template v-if="!gallery_show">
                      <div class="vx-col w-1/4 flex flex-col items-center justify-center">
                          <div class="mt-4 blue-dark flex items-center justify-center text-white" style="border-radius: 50%; width: 4rem; height: 4rem">
                              <feather-icon svgClases="w-10 h-10" class="cursor-pointer" icon="PlusIcon" @click="browseVideo()" />
                          </div>
                          <div class="mt-4 text-center">
                              SUBIR FOTO O VIDEO <br>
                              (Peso maximo 100mb)
                          </div>
                      </div>
                    </template>
                    <template v-if="gallery_show && isVideo(gallery_file.name)">
                        <div class="vx-col w-1/4">
                            <div class="video-card">
                                <div class="h6 mb-2">
                                    <vs-input class="w-full" placeholder="título del catálogo" v-model="gallery_title"/>
                                </div>
                                <div class="flex w-full items-center justify-center card-header grey-real">
                                    <vs-icon size="4rem" class="play-icon" color="red" icon-pack="material-icons" icon="play_circle_filled" />
                                </div>
                                <div class="vx-row">
                                    <div class="vx-col w-full">
                                        <div @click="saveGallery()" class="flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer">
                                            <feather-icon size="w-5 h-5" icon="SaveIcon" />
                                            <div class="ml-2" style="font-size: 0.9rem">GUARDAR</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>    
                    <input class="hidden" type="file" ref="refVideoFile" accept=".avi, .mp4, .3gp, .jpg, .png, .gif, .jpeg" @change="videoChanged">
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
      gallery_list: [],
      gallery_show: false,
      gallery_title: '',
      gallery_file: null,
      stand_id: null
    }
  },
  computed: {
    hasImage () {
      return this.gallery_list.filter((it) => this.isImage(it.url)).length !== 0
    },
    hasVideo () {
      return this.gallery_list.filter((it) => this.isVideo(it.url)).length !== 0
    }
  },
  methods: {
    browseVideo () {
      this.$refs.refVideoFile.click()
    },
    videoChanged (e) {
      const files = e.target.files
      this.validateAndUpload(files)  
    },
    validateAndUpload (files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: 'Error - Too Many Files',
          text: 'Only support uploading one file!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isValidExt(rawFile)) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 100 MB y tener el formato .avi, .mp4, .3gp, .jpg, .png, .gif, .jpeg',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.gallery_show = true
      this.gallery_file = rawFile
      this.$refs.refVideoFile.value = null
      if (this.isImage(this.gallery_file.name)) this.saveGallery()
    },
    isImage (file) {
      return /\.(jpeg|jpg|png|gif)$/.test(file)
    },
    isVideo (file) {
      return /\.(avi|mp4|3gp)$/.test(file)
    },
    isValidExt (file) {
      return /\.(avi|mp4|3gp|jpeg|jpg|png|gif)$/.test(file.name)
    },
    getGalleryItems () {
      this.$http.post('/api/setting/my_stand/gallery')
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
    saveGallery () {
      
      if (!this.gallery_file || this.gallery_file.size > 100 * 1024 * 1024) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 100 MB y tener el formato .avi, .mp4, .3gp, .jpg, .png, .gif, .jpeg',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })  
        return 
      }

      if (this.isVideo(this.gallery_file.name) && (!this.gallery_title || this.gallery_title === '')) {
        this.$vs.notify({
          title: 'Error de título del catálogo',
          text: 'Ingrese corregir el mosaico del catálogo',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })  
        return 
      } 
      
      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      formData.append('stand_id', this.stand_id)
      formData.append('gallery_file', this.gallery_file)
      if (this.isVideo(this.gallery_file.name)) {
        console.log(this.gallery_title)
        formData.append('gallery_title', this.gallery_title)
      }
      console.log('save_gallery')
      this.$http.post('/api/setting/my_stand/gallery/save', formData, headers)
        .then((response) => {
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Folleto registrado con éxito',
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
            this.getGalleryItems()  
          }    
        })
    },
    removeGallery (id) {
      this.$http.post('/api/setting/my_stand/gallery/remove', {_id: id})
        .then((response) => {
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Folleto registrado con éxito',
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
            this.getGalleryItems()  
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
    