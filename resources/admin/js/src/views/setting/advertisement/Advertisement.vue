<template>
  <div>
    
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/4 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <h3 class="mb-2 text-warning font-bold">{{$t('Advertisement')}} {{$t('Image')}}</h3>
            <div class="mb-8">
              <file-upload :preview="ads_image" :upload_key="'advertisement'" :onSuccess="changeUploadFile" />
            </div>
        </vx-card>
        <div class="flex items-center justify-center mb-4">
          <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-save" color="success"
              @click="saveAction">
              {{$t('Add')}} {{$t('Image')}}
          </vs-button> 
        </div>
      </div>
      
      <div class="vx-col w-full lg:w-3/4 sm:w-1 mb-base">
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/3 lg:w-1/4 mb-base" v-for="(ad, index) in ads" :key="index">
            <vx-card>
                <div slot="no-body">
                    <img :src="`/fair_image/${ad.url}`" alt="content-img" class="responsive card-img-top">
                    <div class="flex items-center justify-between mt-5 px-4 pb-4">
                        <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-trash" color="success" @click="remove(ad)">
                            {{$t('Delete')}}
                        </vs-button> 
                        <vs-switch class="mt-4 ml-2" color="success" v-model="ad.show" @change="updateStatus(ad)">
                            <span slot="on">{{$t('Show')}}</span>
                            <span slot="off">{{$t('Cancel')}}</span>
                        </vs-switch>
                    </div>
                </div>
            </vx-card>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import FileUpload from '@/views/components/extra-components/upload/ImageFileUpload.vue'

export default {
  components: {
    FileUpload
  },
  data () {
    return {
      ads: [],
      ads_image: undefined,
      ads_file: null,
      isShow : false,
      sent: false
    }
  },
  methods: {
    changeUploadFile ({ action, name, file}) {
      if (action === 'remove') {
        this.ads_file = null
      } else this.ads_file = file

    },

    saveAction () {
      if(this.ads_file === null) return
      const action = '/api/setting/ads/create'
      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      if (this.ads_file) formData.append('ads_file', this.ads_file)
      formData.append('show', 1)
      this.$loading.show(this)
      this.$http.post(action, formData, headers)
        .then((response) => {
          this.$loading.hide(this);
          const res = response.data
          this.isShow = true
          if (response.data.status === 'ok') {
            this.loadContent()
            // this.$router.push({ path: `/settings/advertisement` }).catch(()=>{})
          }
          if(response.data.status === 'ok')
          {
            this.$vs.notify({
              title: this.$t('Success'),
              text: this.$t('SuccessMessage'),
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
           
          }
          else
          {
            this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('FailMessage'),
              color: 'danger',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          }  
        })
        .catch((error) => { console.log(error) })
    },
    updateStatus (ad) {
      if (this.sent === true) {
        this.sent = false
        return  
      }
      this.sent = true
      const action = `/api/setting/ads/update/${ad.id}`
      const param = {
        show: ad.show
      }
      this.$loading.show(this)

      this.$http.post(action, param).then((response) => {
        this.$loading.hide(this)  
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: this.$t('Success'),
            text: this.$t('SuccessMessage'),
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
          
        } else {
          this.$vs.notify({
            title: this.$t('Error'),
            text: this.$t('FailMessage'),
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        }      
      })
    },
    remove(ad){
      const action = `/api/setting/ads/remove/${ad.id}`
      this.$loading.show(this)
     this.$http.post(action).then((response) => {
       this.$loading.hide(this)  
        if (response.data.status === 'ok') {
            this.loadContent()
            // this.$router.push({ path: `/settings/advertisement` }).catch(()=>{})
          }
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: this.$t('Success'),
            text: this.$t('DeleteMessage'),
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
          
        } else {
          this.$vs.notify({
            title: this.$t('Error'),
            text: this.$t('FailMessage'),
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        }    
     })
    },
    loadContent(){
      this.$loading.show(this)
    this.$http.get(`/api/setting/ads/get`)
    .then((response) => { 
        this.ads = response.data.ads
        this.$loading.hide(this)
    })
    .catch((error)   => { console.log(error) })
  
    }
  },
  created () {
    this.loadContent();
  }
    
}
</script>
