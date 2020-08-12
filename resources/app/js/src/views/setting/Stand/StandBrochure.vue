<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="brochure" type="svg" text="catlogos o brochures" />
        <div class="w-full setting-stand-brochure bg-white-grey">
            <div class="w-full px-10 pb-4 mt-4">
                <div class="vx-row w-full">
                    <div class="vx-col w-1/4" :key="`catalog-item-${index}`" v-for="(item, index) in catalog_list">
                        <catalog-card
                            title="Catalog de Productos Ecologicos"
                            item="123"
                            :id="item.id"
                            :remove="removeBrochure"
                            :show="showBrochure"
                        />
                    </div>
                    <template v-if="!catalog_show">
                        <div class="vx-col w-1/4 flex flex-col items-center justify-center">
                            <div class="mt-4 blue-dark flex items-center justify-center text-white" style="border-radius: 50%; width: 4rem; height: 4rem">
                                <feather-icon class="cursor-pointer" svgClases="w-10 h-10" icon="PlusIcon" @click="browseBrochure"/>
                            </div>
                            <div class="mt-4 text-center">
                                SUBIR PDF O JPG <br>
                                (Peso maximo 1mb)
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="vx-col w-1/4">
                            <div class="catalog-card">
                                <div class="h6 mb-2">
                                    <vs-input class="w-full" placeholder="título del catálogo" v-model="catalog_title"/>
                                </div>
                                <div class="flex w-full items-center justify-center card-header grey-real">
                                    <svg-icon size="w-12 h-12" color="text-black" icon="brochure"/>
                                </div>
                                <div class="vx-row">
                                    <div class="vx-col w-full">
                                        <div @click="saveBrochure()" class="flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer">
                                            <feather-icon size="w-5 h-5" icon="SaveIcon" />
                                            <div class="ml-2" style="font-size: 0.9rem">GUARDAR</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>    
                    <input class="hidden" type="file" ref="refBrochureFile" accept=".jpg, .pdf" @change="brochureChanged">
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import CatalogCard from '../CatalogCard.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    CatalogCard
  },
  data () {
    return {
      catalog_list: [],
      catalog_show: false,
      catalog_title: '',
      catalog_file: null,
      stand_id: null
    }
  },
  methods: {
    browseBrochure () {
      this.$refs.refBrochureFile.click()
    },
    brochureChanged (e) {
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
          title: 'File Format Error',
          text: 'Only supports upload .jpg, .pdf suffix files',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.catalog_show = true
      this.catalog_file = rawFile
    },
    isValidExt (file) {
      return /\.(pdf|jpg)$/.test(file.name)
    },
    getBrochures () {
      this.$http.post('/api/setting/my_stand/get_brochures')
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
          this.catalog_show = false
          this.stand_id = data.stand.id
          this.catalog_list = data.stand.portfolios
        })  
    },
    saveBrochure () {
      if (!this.catalog_title && this.catalog_title === '') {
        this.$vs.notify({
          title: 'Error de título del catálogo',
          text: 'Ingrese corregir el mosaico del catálogo',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })  
        return 
      } 
      if (!this.catalog_file || this.catalog_title.name === '' || this.catalog_file.size > 1024 * 1024) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 1 MB y tener el formato pdf, jpg',
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
      formData.append('catalog_title', this.catalog_title)
      formData.append('catalog_file', this.catalog_file)
      
      this.$http.post('/api/setting/my_stand/save_brochure', formData, headers)
        .then((response) => {
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Folleto registrado con éxito',
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
            this.getBrochures()  
          }    
        })
    },
    removeBrochure (id) {
      this.$http.post('/api/setting/my_stand/remove_brochure', {_id: id})
        .then((response) => {
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Folleto registrado con éxito',
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
            this.getBrochures()  
          }   
        })  
    },
    showBrochure (id) {
      console.log(id)  
    }    
  },
  created () {
    this.getBrochures()
  }
}
</script>
<style lang="scss">
.setting-stand-brochure {
    min-height: calc(var(--vh, 1vh) * 100 - 152px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>
    