<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="flex w-full items-start justify-between setting-bg-img setting-profile-main">
            <nav-back-button></nav-back-button>
            <div class="flex flex-col setting-wrapper">
                <div class="flex items-center bg-blue-dark pt-4 pb-2">
                    <div class="flex items-center ml-8 cursor-pointer" @click="$router.push('/setting/profile')">
                        <img :src="require(`@assets/images/pages/foto_expositores1.jpg`)" class="user-img responsive mx-4">
                        <div>
                            <div class="user-name h4 text-white">MI PERFIL</div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center mx-24" style="backgound">
                        <h3 class="text-center text-white ">iHola! Felipe Alonso Guerrero</h3>
                        <h4 class="text-center text-white mt-2">Que deseas hacer?</h4>
                    </div>
                </div>
                <div class="flex px-12" style="background: #ffffffDD; height: 100%;">
                    <div class="flex flex-col py-12 px-20 w-full items-center">
                        <div>
                            <h4 class="font-bold mb-6">Datos Personales</h4>
                            <div class="vx-row w-full">
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success"  v-model="input1" label-placeholder="Numbre"></vs-input>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success"  v-model="input1" label-placeholder="Apellido"></vs-input>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success"  v-model="input1" label-placeholder="Email"></vs-input>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success"  v-model="input1" label-placeholder="Telefono"></vs-input>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success"  v-model="input1" label-placeholder="Compania"></vs-input>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success"  v-model="input1" label-placeholder="Posicion"></vs-input>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <!-- <vs-input class="w-4/5" color="success"  v-model="input1" label-placeholder="Seleccione un Pais"></vs-input> -->
                                    <div class="ml-1">Seleccione un Pais</div>
                                    <v-select class="w-4/5" label="countryName" v-model="selected"  :options="countries" />
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <!-- <vs-input class="w-4/5" color="success"  v-model="input1" label-placeholder="Seleccione la Region"></vs-input> -->
                                    <div class="ml-1">Seleccione la Region</div>
                                    <v-select class="w-4/5" label="countryName" v-model="selected"  :options="regions" />
                                </div>
                                <div class="vx-col w-full my-3">
                                    <div class="flex items-center">
                                        <div>Agregar Fotografia o combiarla</div>
                                        <vs-button class="ml-4 cyan-light frm-button">Adjuntar foto</vs-button>
                                    </div>
                                </div>
                                <div class="vx-col w-full">
                                    <h4 class="font-bold">Cambiar contrasena</h4>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" type="password" color="success"  v-model="input1" label-placeholder="Seleccione una constrasena"></vs-input>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" type="password" color="success"  v-model="input1" label-placeholder="Repita la contrasena"></vs-input>
                                </div>
                                <div class="vx-col w-full text-center mt-base">
                                    <vs-button class="yellow-dark frm-button">
                                        CANCELAR
                                    </vs-button>
                                    <vs-button class="cyan-dark frm-button ml-8">
                                        GUARDAR CAMBIOS
                                    </vs-button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import VSelect from 'vue-select'
export default {
  components: {
    AppHeader,
    NavBackButton,
    VSelect
  },
  data () {
    return {
      input1: '',
      countries: [],
      regions: [],
      selected: {}
    }
  },
  created () {
    const list = []
    for (let i = 0; i < 9; i++) {
      list.push(i)
    }

    this.countries = this.regions = [
      {
        countryCode: 'DE',
        countryName: 'Germany'
      },
      {
        countryCode: 'AUS',
        countryName: 'Australia'
      },
      {
        countryCode: 'CA',
        countryName: 'Canada'
      }
    ]
    
    this.all_contacts = list
  }
    
}
</script>
<style lang="scss">
.setting-profile-main {
    height: calc(var(--vh, 1vh) * 100 - 86px);

    .setting-wrapper {
        width: 65%;
        height: 100%;
        
    }

    .user-img {
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        border: 1px solid silver
    }

    .vs__dropdown-toggle {
        background: white !important;
        border-radius: 0 !important;
    }

    .vs-input--input {
        border-radius: 0 !important;
    }

    .vs-input--input.hasValue+.vs-placeholder-label, .vs-input--input:focus+.vs-placeholder-label {
        font-size: .9rem !important;
        padding: .4rem !important;
    }

    .frm-button {
        font-size: 0.85rem!important;
        padding: 0.6rem 1.2rem !important; 
        min-width: 10rem;
        min-height: 2.6rem;
    }

    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>