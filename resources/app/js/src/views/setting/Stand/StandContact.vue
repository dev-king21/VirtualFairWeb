<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="address-book" type="svg" text="contacto" />
        <div class="w-full setting-stand-contact bg-white-grey">
            <div class="w-full px-10">
                <div class="vx-row w-full pt-8">
                    <div class="vx-col w-1/4" :key="`catalog-item-${index}`" v-for="(item, index) in card_list">
                       <div class="flex flex-col justify-between mx-3 my-3 bg-white" style="border: 1px solid #e2e2e2; border-radius: 0.8rem;">
                           <div class="flex flex-col items-center w-full px-3 my-4" >
                                <img :src="`/fair_image/${item.url}`" class="responsive" />
                                <div @click="removeBusinessCard(item.id)" class="flex items-center justify-center text-white mt-2 py-2 yellow-dark w-full cursor-pointer">
                                    <svg-icon size="w-5 h-5" icon="erase" />
                                    <div class="ml-2" style="font-size: 0.9rem">BORRAR</div>
                                </div>
                            </div>
                            
                            <!-- <div class="flex mt-6 justify-start">
                                <div class="w-4/5 ml-4 mb-4" style="border-bottom: 10px solid #123058"> </div>
                            </div> -->
                       </div>
                    </div>
                    <template v-if="!card_show">
                        <div class="vx-col w-1/4 flex flex-col items-center justify-center">
                            <div class="mt-4 blue-dark flex items-center justify-center text-white" style="border-radius: 50%; width: 4rem; height: 4rem">
                                <feather-icon svgClases="w-10 h-10" class="cursor-pointer" @click="browseBusinessCard()" icon="PlusIcon"/>
                            </div>
                            <div class="mt-4 text-center">
                                SUBIR TARJETA <br>
                                DE PRESENTACION <br>
                                FORMATO JPG O PDF<br> 
                                (Peso maximo 500kb)
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="vx-col w-1/4">
                            <div class="flex flex-col justify-between mx-3 my-3 bg-white" style="border: 1px solid #e2e2e2; border-radius: 0.8rem;">
                                <div class="flex flex-col items-center w-full px-3 mt-8" >
                                    <div class="my-4 text-center h3">
                                        Nuevo Contacto
                                    </div> 
                                    <div class="my-4 blue-dark flex items-center justify-center text-white" style="border-radius: 50%; width: 4rem; height: 4rem">
                                        <svg-icon size="w-10 h-10" icon="address-book"/>
                                    </div>
                                    <div @click="saveBusinessCard()" class="flex items-center justify-center text-white py-2 my-4 cyan-dark w-full cursor-pointer">
                                        <feather-icon size="w-5 h-5" icon="SaveIcon" />
                                        <div class="ml-2" style="font-size: 0.9rem">GUARDAR</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>    
                    <input class="hidden" type="file" ref="refBusinessCardFile" accept=".jpg, .pdf" @change="cardChanged">
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
export default {
  watch: {
  },
  components: {
    AppHeader,
    BreadCrumb
  },
  data () {
    return {
      card_list: [],
      card_show: false,
      card_file: null,
      stand_id: null
    }
  },
  methods: {
    browseBusinessCard () {
      this.$refs.refBusinessCardFile.click()
    },
    cardChanged (e) {
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
          text: 'El tamaño del archivo debe ser inferior a 500 KB y tener el formato jpg, pdf',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.card_show = true
      this.card_file = rawFile
    },
    isValidExt (file) {
      return /\.(jpg|pdf)$/.test(file.name)
    },
    getBusinessCards () {
      this.$http.post('/api/setting/my_stand/businesscard')
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
          this.card_show = false
          this.stand_id = data.stand.id
          this.card_list = data.stand.business_cards
        })  
    },
    saveBusinessCard () {
      
      if (!this.card_file || this.card_file.size > 500 * 1024) {
        this.$vs.notify({
          title: 'error de formato de archivo',
          text: 'El tamaño del archivo debe ser inferior a 500 KB y tener el formato jpg, pdf',
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
      formData.append('card_file', this.card_file)
      
      this.$http.post('/api/setting/my_stand/businesscard/save', formData, headers)
        .then((response) => {
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Folleto registrado con éxito',
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
            this.getBusinessCards()  
          }    
        })
    },
    removeBusinessCard (id) {
      this.$http.post('/api/setting/my_stand/businesscard/remove', {_id: id})
        .then((response) => {
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Folleto registrado con éxito',
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
            this.getBusinessCards()  
          }   
        })  
    },
    showBusinessCard (id) {
      console.log(id)  
    }    
  },
  created () {
    this.getBusinessCards()
  }
}
</script>
<style lang="scss">
.setting-stand-contact {
    min-height: calc(var(--vh, 1vh) * 100 - 160px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>
    