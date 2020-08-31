<template>
    <div id="profile-page">

        <!-- PROFILE HEADER -->
        <div class="profile-header">
            <div class="flex items-center justify-end flex-wrap profile-header-nav p-6">

                <div class="block sm:hidden">
                    <feather-icon @click="isNavOpen = !isNavOpen" icon="AlignJustifyIcon" v-show="!isNavOpen" class="vx-navbar-toggler cursor-pointer" />
                    <feather-icon icon="XIcon" v-show="isNavOpen" @click="isNavOpen = !isNavOpen" class="vx-navbar-toggler cursor-pointer" />
                </div>
                
            </div>
            <!-- <vx-navbar> -->
            <!-- </vx-navbar> -->
        </div>

        <!-- COL AREA -->
        <div class="vx-row" v-if="(stand !== null && stand.user !== null)"> 
          
            <div class="vx-col w-full">
                <!-- ABOUT CARD -->
                <vx-card title="User Information" >
                  <div class="vx-row">
                    <div class="vx-col xs:1 sm:w-1/2 md:w-1/2 xl:1/2" >
                      <div  class="mt-0 ml-4" >
                        <h5 class="mb-2">{{$t('UserName')}}: {{ stand.user.first_name}} {{stand.user.last_name}}</h5>
                        <h5 class="mb-2">{{$t('Name')}}: {{ stand.user.first_name}} {{stand.user.last_name}}</h5>
                        <h5 class="mb-2">{{$t('Email')}}: {{ stand.user.email }}</h5>
                        <h5 class="mb-2">{{$t('Country')}}: {{ stand.user.country }}</h5>
                      </div>  
                      <div class="vx-row mt-base">
                        <div class="vx-col xs:1 sm:w-1 md:w-1/3 xl:1"></div>
                        <div class="text-center vx-col xs:1 sm:w-1 md:w-1/3 xl:1">
                          <img :src="`/fair_image/${stand.logo}`" alt="content-img" class="rounded mb-4 responsive">
                        </div>
                        <div class="vx-col xs:1 sm:w-1 md:w-1/3 xl:1"></div>
                      </div>
                    </div>
                    <div class="vx-col xs:1 sm:w-1/2 md:w-1/2 xl:1/2">
                       <div  class="mt-0 ml-4 pl-10 py-3" style="border-left: 5px solid #e2e2e2">
                        <h5 class="mb-2">{{$t('Phone')}}: {{ stand.contact.phone }}</h5>
                        <h5 class="mb-2">{{$t('Email')}}: {{ stand.contact.email }}</h5>
                        <h5 class="mb-2">Address: {{ stand.contact.address}}</h5>
                        <h5 class="mb-2">Whatsapp: {{ stand.contact.whatsapp }}</h5>
                        <h5 class="mb-2">Google: {{ stand.contact.google }}</h5>
                        <h5 class="mb-2">Facebook: {{ stand.contact.facebook }}</h5>
                        <h5 class="mb-2">Linkin: {{ stand.contact.linkin }}</h5>
                        <h5 class="mb-2">Instagram: {{ stand.contact.instagram }}</h5>
                        <h5 class="mb-2">Youtube: {{ stand.contact.youtube }}</h5>
                        <h5 class="mb-2">Twitter: {{ stand.contact.twitter }}</h5>
                      </div>  
                    </div>
                  </div>
                </vx-card>               
            </div>

            <div class="vx-col w-full lg:w-2/3">
                <vx-card title="Portfolios" class="mt-base" v-for="(portfolio, index) in stand.portfolios" :key="index">
                    <div>
                        <!-- POST HEADER -->
                        <div class="post-header flex justify-between mb-4">
                            <div class="flex items-center">
                                <div class="ml-4">
                                    <h6>{{ portfolio.name }}</h6>
                                    <h6>{{ portfolio.country }}</h6>
                                </div>
                            </div>
                           
                        </div>

                        <div class="vx-row pt-2" >
                            <div class="vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4">
                                <img :src="`/fair_image/${portfolio.url}`" alt="content-img" class="rounded mb-4 user-latest-image responsive">
                            </div>
                        </div>
                        
                        <div class="post-content">
                            <p>{{ portfolio.description }}</p>
                        </div>
                    </div>
                </vx-card>
            </div>
            
            <div class="vx-col w-full lg:w-1/3">

                <!-- LATEST PHOTOS -->
                <vx-card title="Gallery" class="mt-base">
                    <div class="vx-row pt-2">
                        <div class="vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4" v-for="(gallery, index) in stand.gallerys" :key="index">
                            <img :src="`/fair_image/${gallery.url}`" alt="latest-upload" class="rounded mb-4 user-latest-image responsive">
                        </div>
                    </div>
                </vx-card>
                <vx-card title="Files" class="mt-base" v-for="(file, index) in stand.files" :key="index" >
                  <div class="ml-4">
                      <h3>{{ file.name }}</h3>
                  </div>
                  <div class="flex justify-between flex-wrap" >
                      <vs-button 
                      class="mt-4 mr-2 shadow-lg" 
                      type="gradient" 
                      color="#7367F0" 
                      icon-pack="feather" 
                      icon="icon-download" 
                      gradient-color-secondary="#CE9FFC"
                      @click="downloadFile(file.url)"
                      >
                      DownLoad
                      </vs-button>
                    </div>
                </vx-card>
            </div>

            <div class="vx-col w-full lg:w-2/3">

                <!-- LATEST PHOTOS -->
                <vx-card title="Stand Contents" class="mt-base">
                    <div class="vx-row pt-2">
                        <div class="vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4" v-for="(stand_content, index) in stand.stand_contents" :key="index">
                            <img :src="`/fair_image/${stand_content.content}`" alt="latest-upload" class="rounded mb-4 user-latest-image responsive">
                        </div>
                    </div>
                </vx-card>
                
            </div>
        </div>
    </div>  
    
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  data () {
    return {
      stand: null,
      isNavOpen: false
    }
  },
  computed: {
   
    /* stand () {
      if (this.stands.length !== 0)
        return this.stands[0]
      else
        return {user:{}}
    } */
  },
  methods: {
    forceFileDownload (response) {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'file.zip') //or any other extension
      document.body.appendChild(link)
      link.click()
    },
    downloadFile (url) {
      this.$http({
        method: 'get',
        url,
        responseType: 'arraybuffer'
      })
        .then(response => {
        
          this.forceFileDownload(response)
        
        })
        .catch(() => console.log('error occured'))
    }
  },
  components: {
    videoPlayer
  },
  
  created () {
    if (this.$route.params.id) {
      const action = `/api/stand/stand-detail/${this.$route.params.id}`
      this.$loading.show(this)
      this.$http.get(action)
        .then((response) => {
          const res = response.data
          if (res.stands && res.stands.length) {
            this.stand = res.stands[0]
          }
          
          this.$loading.hide(this)
        })
        .catch((error) => console.log(error))
    }
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/pages/profile.scss";
</style>
