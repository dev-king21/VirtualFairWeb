<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="flex w-full items-start justify-between setting-bg-img setting-profile-main">
            <nav-back-button></nav-back-button>
            <div class="flex flex-col setting-wrapper">
                <div class="flex items-center bg-blue-dark pt-4 pb-2">
                    <div class="flex items-center ml-8 cursor-pointer" @click="$router.push('/setting/profile')">
                        <img :src="`/fair_image/${user.avatar}`" class="user-img responsive mx-4">
                        <div>
                            <div class="user-name h4 text-white">MI PERFIL</div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center mx-24" style="backgound">
                        <h3 class="text-center text-white ">iHola! {{user.first_name}} {{user.last_name}}</h3>
                        <h4 class="text-center text-white mt-2">Que deseas hacer?</h4>
                    </div>
                </div>
                <div class="flex px-12" style="background: #ffffffDD; height: 100%;">
                    <div class="flex flex-col py-12 px-20 w-full items-center">
                        <div>
                            <h4 class="font-bold mb-6">Datos Personales</h4>
                            <div class="vx-row w-full">
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" label-placeholder="Nombre" name="Nombre"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.first_name"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" label-placeholder="Apellido" name="Apellido"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.last_name"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" label-placeholder="Email" name="Email"
                                        v-validate="'required|email'" data-vv-validate-on="blur" v-model="user.email"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" label-placeholder="Telefono" name="Telefono"
                                        v-validate="'required|min:8'" data-vv-validate-on="blur" v-model="user.phone"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" label-placeholder="Compania" name="Compania"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.company"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" label-placeholder="Posicion" name="Posicion"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.address"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <!-- <vs-input class="w-4/5" color="success" label-placeholder="Seleccione un Pais"/> -->
                                    <div class="ml-1">Seleccione un Pais</div>
                                    <v-select class="w-4/5" label="countryName" v-model="selected" :options="countries" />
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <!-- <vs-input class="w-4/5" color="success" label-placeholder="Seleccione la Region"/> -->
                                    <div class="ml-1">Seleccione la Region</div>
                                    <v-select class="w-4/5" label="countryName" v-model="selected" :options="regions" />
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
                                    <vs-input class="w-4/5" type="password" color="success" name="Contrasena"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.password" label-placeholder="Seleccione una constrasena"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" type="password" color="success"  name="Apellido"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="repeat_password" label-placeholder="Repita la contrasena"/>
                                </div>
                                <div class="vx-col w-full text-center mt-base">
                                    <vs-button to="/setting/home" class="yellow-dark frm-button">
                                        CANCELAR
                                    </vs-button>
                                    <vs-button @click="saveProfile()" class="cyan-dark frm-button ml-8">
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
      selected: {},
      user: {},
      repeat_password: ''
    }
  },
  methods: {
    saveProfile () {
      this.$loading.show(this)
      this.$http.post('/api/auth/save', this.user)
        .then((response) => {
          this.$loading.hide(this)
          localStorage.setItem('userInfo', JSON.stringify(response.data.user))
          this.$router.push('/setting/profile').catch(() => {})  
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
    }  
  },
  created () {
    
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
    
    let userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      return this.$router.push('/home')
    }
    userInfo = JSON.parse(userInfo)
    if (!userInfo.id || !userInfo.email || userInfo.email === '') {
      return this.$router.push('/home')
    }
    this.$loading.show(this)
    this.$http.post('/api/auth/profile')
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
        this.user = response.data  
      })
      .catch((error) => console.log(error))
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