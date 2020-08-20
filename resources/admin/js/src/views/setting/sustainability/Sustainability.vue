<template>
  <div>
    
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/3 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <h3 class="mb-2 text-warning font-bold">Advertisement Image</h3>
            <div class="mb-8">
              <file-upload :preview="sustainability_image" :upload_key="'advertisement'" :onSuccess="changeUploadFile" />
            </div>
        </vx-card>
        <div class="flex items-center justify-center mb-4">
          <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-save" color="success"
              @click="saveAction">
              Add Image
          </vs-button> 
        </div>
      </div>
      
      <div class="vx-col w-full lg:w-2/3 sm:w-1 mb-base">
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base" v-for="(sustainability, index) in sustainabilities" :key="index">
            <vx-card>
                <div slot="no-body">
                    <img :src="`/fair_image/${sustainability.url}`" alt="content-img" class="responsive card-img-top">
                    <div class="flex items-center justify-between mt-5 px-4 pb-4">
                        <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-trash" color="success" @click="remove(sustainability)">
                            Delete
                        </vs-button> 
                        <vs-switch class="mt-4 ml-2" color="success" v-model="sustainability.show" @change="updateStatus(sustainability)">
                            <span slot="on">Show</span>
                            <span slot="off">Cancel</span>
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
      sustainabilities: [],
      sustainability_image: undefined,
      image_file: null,
      isShow : false,
      sent: false
    }
  },
  methods: {
    changeUploadFile ({ action, name, file}) {
      if (action === 'remove') {
        this.image_file = null
      } else this.image_file = file

    },

    saveAction () {
      if(this.image_file === null) return
      const action = '/api/setting/sustainability/create'
      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      if (this.image_file) formData.append('image_file', this.image_file)
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
              title: 'éxito',
              text: 'Te has registrado con éxito.',
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
           
          }
          else
          {
            this.$vs.notify({
              title: 'Oyu',
              text: 'Operación fallida',
              color: 'error',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          }  
        })
        .catch((error) => { console.log(error) })
    },
    updateStatus (sustainability) {
      if (this.sent === true) {
        this.sent = false
        return  
      }
      this.sent = true
      const action = `/api/setting/sustainability/update/${sustainability.id}`
      const param = {
        show: sustainability.show
      }
      this.$loading.show(this)

      this.$http.post(action, param).then((response) => {
        this.$loading.hide(this)  
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: 'éxito',
            text: 'Ha sido cambiado exitosamente.',
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
    },
    remove(ad){
      const action = `/api/setting/sustainability/remove/${ad.id}`
      this.$loading.show(this)
     this.$http.post(action).then((response) => {
       this.$loading.hide(this)  
        if (response.data.status === 'ok') {
            this.loadContent()
            // this.$router.push({ path: `/settings/advertisement` }).catch(()=>{})
          }
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: 'éxito',
            text: 'Fue eliminado con éxito.',
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
    },
    loadContent(){
      this.$loading.show(this)
    this.$http.get(`/api/setting/sustainability/get`)
    .then((response) => { 
        this.sustainabilities = response.data.sustainabilities
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
