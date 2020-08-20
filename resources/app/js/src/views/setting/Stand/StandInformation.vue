<template>
<div class="w-full">
    <app-header activeItem="0"/>  
    <div class="flex w-full flex-col items-center justify-start bg-white-grey setting-stand-information">
        <div class="flex w-full">
            <nav-back-button/>
        </div>
        <div class="w-full h-full mb-5 bg-white page-content">
            <div class="flex items-center mt-8 ml-8">
                <div class="info-logo grey-real flex items-center justify-center cursor-pointer" @click="browseLogoImg()">
                  <img ref="logoPreview" v-show="logo_show" :src="`/fair_image/${stand.logo}`" class="info-logo" />
                  <div v-show="!logo_show" class="text-center text-black fs-8 cursor-pointer"> 
                    SUBIR LOGO <br> TAMANO 150 * 150px 
                  </div>
                  <input class="hidden" type="file" ref="refLogoFile" accept=".png, .gif, .jpg, .jpeg" @change="logoChanged">
                </div>
                <template v-if="!name_edit">
                    <div class="h3 font-bold mx-4">
                    {{ (stand.company)? stand.company : 'Nombre de la Empresa'}}</div>
                </template>
                <template v-else>
                    <vs-input class="mx-4" placeholder="Nombre de la Empresa" v-model="stand.company"></vs-input>
                </template>
                <vs-button class="blue-dark save-btn" @click="name_edit = true">AGREGAR</vs-button>
            </div>
            <div>
                <div class="flex items-center mt-4 ml-8">
                    <div class="h3 font-bold">Informacion de la empresa</div>
                    <vs-button class="ml-2 blue-dark save-btn" @click="desc_edit = true">AGREGAR</vs-button>
                </div>
                <div class="w-full mt-4 ml-12">
                    <template v-if="!desc_edit">
                    <div v-html="description">
                    </div>
                    </template>
                    <template v-else>
                        <vs-textarea style="height: 250px;" placeholder="Informacion de la empresa" v-model="stand.description"/>
                    </template>
                </div>
            </div>
            <div class="text-center my-4">
                <vs-button class="allsave-btn cyan-dark" @click="saveInformation()">GUARDAR</vs-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
export default {
  components: {
    AppHeader,
    NavBackButton
  },
  data () {
    return {
      name_edit: false,
      desc_edit: false,
      stand: {
        id: null,
        company: null,
        description: null  
      },
      logo_show: false,
      logo_file: null  
    }
  },
  computed: {
    description () {
      return this.stand.description ? this.stand.description.replace(/\n/g, '<br>') : 'por favor complete la información sobre su empresa'
    }  
  },
  methods: {
    saveInformation () {
      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      
      formData.append('id', this.stand.id)
      formData.append('company', this.stand.company)
      formData.append('description', this.stand.description)
      if (this.logo_file) formData.append('logo', this.logo_file)
      this.$loading.show(this);
      this.$http.post('/api/setting/my_stand/information/save', formData, headers)
        .then((response) => {
          this.$loading.hide(this);
          const data = response.data
          if (data.status === 'error') return console.log(data.msg)  
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title:'Notificación',
              text:'La información de su empresa se ha guardado correctamente.',
              color:'success',
              iconPack: 'feather',
              icon:'icon-mail'})
          }
          
          this.name_edit = false
          this.desc_edit = false
          this.stand.id = data.stand.id
          this.stand.company  = data.stand.company
          this.stand.description  = data.stand.description
          this.stand.logo = data.stand.logo
          if (this.stand.logo) this.logo_show = true
          console.log(this.stand)
        })  
    },
    getInformation () { 
      this.$loading.show(this)
      this.$http.post('/api/setting/my_stand/information')
        .then((response) => {
          this.$loading.hide(this)
          const data = response.data
          if (data.status === 'error') return console.log(data.msg)
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
          this.stand.id = data.stand.id
          this.stand.company  = data.stand.company
          this.stand.description  = data.stand.description
          this.stand.logo = data.stand.logo
          if (this.stand.logo) this.logo_show = true
        })
    },
    browseLogoImg () {
      this.$refs.refLogoFile.click()
    },
    readerData (rawFile) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
          this.$refs.logoPreview.src = e.target.result
          this.logo_file = rawFile
          //this.onSuccess(sendData)
          resolve()
        }
        this.logo_show = true
        reader.readAsDataURL(rawFile)
      })
    },
    logoChanged (e) {
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
      if (!this.isImage(rawFile)) {
        this.$vs.notify({
          title: 'File Format Error',
          text: 'Only supports upload .png, .gif, .jpg, .jpeg suffix files',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.previewLogo(rawFile)
    },
    isImage (file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name)
    },
    previewLogo (file) {
      this.$refs.refLogoFile.value = null // fix can't select the same excel
      this.readerData(file)
    }  
  },
  created () {
    this.getInformation()
  }
  
}
</script>
<style lang="scss">
.setting-stand-information {
    min-height: calc(var(--vh, 1vh) * 100 - 86px); 
    .page-content {
        width: calc(100% - 10rem) !important;
        
        .info-logo {
            width: 150px;
            height: 150px;
        }

        .save-btn {
            font-size: 0.8rem;
            border-radius: 0.2rem !important;
            padding: 0.5rem 1rem !important;
        }

        .vs-textarea {
            min-height: 250px !important; 
        }

    }

    .allsave-btn {
        font-size: 1.2rem;
        border-radius: 0.4rem !important;
        padding: 0.6rem 2rem !important;
    }
}
</style>
    