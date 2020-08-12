<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="video" type="svg" text="videos" />
        <div class="w-full setting-stand-video bg-white-grey">
            <div class="w-full px-10 pb-4 mt-4">
                <div class="vx-row w-full">
                    <div class="vx-col w-1/4" :key="`video-item-${index}`" v-for="(item, index) in video_list">
                       <video-card
                            :title="item.name"
                            :readed="item.readed"
                            :id="item.id"
                            :remove="removeVideo"
                            :show="showVideo"
                        />
                    </div>
                    <template v-if="!video_show">
                      <div class="vx-col w-1/4 flex flex-col items-center justify-center">
                          <div class="mt-4 blue-dark flex items-center justify-center text-white" style="border-radius: 50%; width: 4rem; height: 4rem">
                              <feather-icon svgClases="w-10 h-10" class="cursor-pointer" icon="PlusIcon" @click="browseVideo()" />
                          </div>
                          <div class="mt-4 text-center">
                              SUBIR VIDEO <br>
                              (Peso maximo 100mb)
                          </div>
                      </div>
                    </template>
                    <template v-else>
                        <div class="vx-col w-1/4">
                            <div class="video-card">
                                <div class="h6 mb-2">
                                    <vs-input class="w-full" placeholder="título del catálogo" v-model="video_title"/>
                                </div>
                                <div class="flex w-full items-center justify-center card-header grey-real">
                                    <vs-icon size="4rem" class="play-icon" color="red" icon-pack="material-icons" icon="play_circle_filled" />
                                </div>
                                <div class="vx-row">
                                    <div class="vx-col w-full">
                                        <div @click="saveVideo()" class="flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer">
                                            <feather-icon size="w-5 h-5" icon="SaveIcon" />
                                            <div class="ml-2" style="font-size: 0.9rem">GUARDAR</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>    
                    <input class="hidden" type="file" ref="refVideoFile" accept=".avi, .mp4, .3gp" @change="videoChanged">
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
      video_list: [],
      video_show: false,
      video_title: '',
      video_file: null,
      stand_id: null
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
          text: 'El tamaño del archivo debe ser inferior a 100 MB y tener el formato avi, mp4, 3gp',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.video_show = true
      this.video_file = rawFile
    },
    isValidExt (file) {
      return /\.(avi|mp4|3gp)$/.test(file.name)
    },
    getVideos () {
      this.$http.post('/api/setting/my_stand/get_videos')
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
          this.video_show = false
          this.stand_id = data.stand.id
          this.video_list = data.stand.gallerys
        })  
    },
    saveVideo () {
      if (!this.video_title && this.video_title === '') {
        this.$vs.notify({
          title: 'Error de título del catálogo',
          text: 'Ingrese corregir el mosaico del catálogo',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })  
        return 
      } 
      if (!this.video_file || this.video_title.name === '' || this.video_file.size > 100 * 1024 * 1024) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 100 MB y tener el formato avi, mp4, 3gp',
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
      formData.append('video_title', this.video_title)
      formData.append('video_file', this.video_file)
      
      this.$http.post('/api/setting/my_stand/save_video', formData, headers)
        .then((response) => {
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Folleto registrado con éxito',
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
            this.getVideos()  
          }    
        })
    },
    removeVideo (id) {
      this.$http.post('/api/setting/my_stand/remove_video', {_id: id})
        .then((response) => {
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Folleto registrado con éxito',
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
            this.getVideos()  
          }   
        })  
    },
    showVideo (id) {
      console.log(id)  
    }    
  },
  created () {
    this.getVideos() 
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
    