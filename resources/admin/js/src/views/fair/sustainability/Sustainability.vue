<template>
  <div>
    <div class="vx-row mb-6">
      <div class="vx-col sm:w-1/3 w-full flex items-center text-right">
        <h3>Select Fair</h3>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
          <v-select v-model="fair_id"  :clearable="false" :options="fairOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" @input="showSustainability" />
          <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col sm:w-1/3 w-full">
        <h4>Sustainability Content</h4>
      </div>
      <div class="vx-col sm:w-2/3 w-full">
        <vs-textarea class="w-full" v-model="sustainability_content"/>
      </div>
    </div>
     <div class="flex mb-6 justify-end ">
       <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-save" color="success"
          @click="saveSustainability">
          Save Description
      </vs-button> 
    </div>
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/3 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
          <div class="vx-row">
            <h3 class="vx-col w-full lg:w-1/2 sm:w-1 mb-2">Ads Image</h3>
            <vs-button class="vx-col w-full lg:w-1/2 sm:w-1 mb-2" type="filled" icon-pack="feather" icon="icon-save" color="success"
              @click="saveAction">
              Add Image
           </vs-button> 
           </div>
            <div class="mb-8">
              <file-upload :preview="sustainability_image" :upload_key="'advertisement'" :onSuccess="changeUploadFile" />
            </div>
            
        </vx-card>
      </div>
      
      <div class="vx-col w-full lg:w-2/3 sm:w-1 mb-base">
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 lg:w-1/2 mb-base" v-for="(sustainbilityImg, index) in sustainability_images" :key="index">
            <vx-card>
                <div slot="no-body">
                    <img :src="`/fair_image/${sustainbilityImg.url}`" alt="content-img" class="responsive card-img-top">
                    <div class="flex items-center justify-between mt-5 px-4 pb-4">
                        <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-trash" color="success" @click="remove(sustainbilityImg)">
                            Delete
                        </vs-button> 
                        <vs-switch class="mt-4 ml-2" color="success" v-model="sustainbilityImg.show" @change="updateStatus(sustainbilityImg)">
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
import vSelect from 'vue-select'

export default {
  components: {
    FileUpload,
    vSelect
  },
  data () {
    return {
      sustainability: [],
      sustainability_content: '',
      sustainability_images: [],
      sustainability_image: undefined,
      image_file: null,
      isShow : false,
      sent: false,
      fairs: [],
      fair_id: 0,
      fairOptions: []
    }
  },
  methods: {
    changeUploadFile ({ action, name, file}) {
      if (action === 'remove') {
        this.image_file = null
      } else this.image_file = file

    },
    showSustainability(){
      let index = 0;
      if(!this.fair_id.value || this.fair_id.value === 0) return
      for(let i = 0; i < this.fairs.length; i++)
      {
        if(this.fairs[i].id === this.fair_id.value)
          index = i;
      }
      this.sustainability = this.fairs[index].sustainability
      if(this.sustainability === null) return
      this.sustainability_content = this.sustainability.description
      this.sustainability_images = this.sustainability.sustainability_images
    },
    saveSustainability(){
      if(!this.fair_id.value) return
      console.log("fair id", this.fair_id.value)
      if(this.fair_id.value === 0) return
      const action = '/api/fair/sustainability/save'
      const newData = {
        fair_id: this.fair_id.value,
        description: this.sustainability_content
      }

      this.$loading.show(this)
      this.$http.post(action, newData)
      .then((response) => {
        this.$loading.hide(this)
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
     
    },
    saveAction () {
      this.sustainability_id = this.sustainability.id
      console.log("sustainability_id", this.sustainability_id)
      if(this.image_file === null || !this.sustainability_id) return
      const action = '/api/fair/sustainability_image/create'
      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      if (this.image_file) formData.append('image_file', this.image_file)
      formData.append('sustainability_id', this.sustainability_id)
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
      const action = `/api/fair/sustainability/update/${sustainability.id}`
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
      const action = `/api/fair/sustainability/remove/${ad.id}`
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
      this.$http.get(`/api/fair/sustainability/get`)
      .then((response) => { 
          this.fairs = response.data.fairs
          // this.sustainability = response.data.fairs.sustainability
          for(let i = 0; i < this.fairs.length; i++){
            this.fairOptions.push({
              value: this.fairs[i].id,
              label: this.fairs[i].name
            })
          }
          this.$loading.hide(this)
          this.showSustainability()
      })
      .catch((error)   => { console.log(error) })
    
    }
  },
  created () {
    this.loadContent();
  }
    
}
</script>
