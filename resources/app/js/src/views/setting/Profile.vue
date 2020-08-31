<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="flex w-full items-start justify-between setting-bg-img setting-profile-main">
            <nav-back-button></nav-back-button>
            <div class="flex flex-col setting-wrapper">
                <div class="flex items-center bg-blue-dark pt-4 pb-2">
                    <div class="flex items-center ml-8 cursor-pointer" @click="$router.push('/setting/profile')">
                        <img :src="`/fair_image/${user.avatar ? user.avatar : 'placeholder.png'}`" class="user-img responsive mx-4">
                        <div>
                            <div class="user-name h4 text-white">{{$t('MyProfile')}}</div>
                        </div>
                    </div>
                    <div class="flex flex-col items-center mx-24" style="backgound">
                        <h3 class="text-center text-white ">{{$t('Hello')}}! {{user.first_name}} {{user.last_name}}</h3>
                        <h4 class="text-center text-white mt-2">{{$t('YouWant')}}</h4>
                    </div>
                </div>
                <div class="flex px-12" style="background: #ffffffDD; height: 100%;">
                    <div class="flex flex-col py-12 px-20 w-full items-center">
                        <div>
                            <h4 class="font-bold mb-6">{{$t('PersonalInfo')}}</h4>
                            <div class="vx-row w-full">
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" :label-placeholder="$t('FirstName')" name="Nombre"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.first_name"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" :label-placeholder="$t('LastName')" name="Apellido"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.last_name"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" label-placeholder="Email" name="Email"
                                        v-validate="'required|email'" data-vv-validate-on="blur" v-model="user.email"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" :label-placeholder="$t('Phone')" name="Telefono"
                                        v-validate="'required|min:8'" data-vv-validate-on="blur" v-model="user.phone"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" :label-placeholder="$t('Company')" name="Compania"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.company"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <vs-input class="w-4/5" color="success" :label-placeholder="$t('Position')" name="Posicion"
                                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.address"/>
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <!-- <vs-input class="w-4/5" color="success" label-placeholder="Seleccione un Pais"/> -->
                                    <div class="ml-1">{{$t('SelectCountry')}}</div>
                                    <v-select class="w-4/5" v-model="selected_country" @input="setUserCountry" :options="countries" />
                                </div>
                                <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-2">
                                    <!-- <vs-input class="w-4/5" color="success" label-placeholder="Seleccione la Region"/> -->
                                    <div class="ml-1">{{$t('SelectRegion')}}</div>
                                    <v-select class="w-4/5" v-model="selected_region" @input="setUserRegion" :options="regions.filter((it) => it.country_id === selected_country.id)"/> 
                                </div>
                                <div class="vx-col w-full my-6">
                                    <div class="flex items-center">
                                        <template v-if="!user.avatar && user.avatar === ''">
                                          <div>{{$t('AddPhoto')}}</div>
                                        </template>
                                        <template v-else>
                                          <div>
                                            <img ref="avatarPreview" style="width: 100px; height: 100px; border-radius: 100%;" :src="`/fair_image/${user.avatar}`" />
                                          </div>
                                        </template>
                                        <vs-button class="ml-8 cyan-light frm-button" @click="browseAvatarImg">{{$t('AttachPhoto')}}</vs-button>
                                    </div>
                                </div>
                                <div class="vx-col w-full mb-4">
                                    <h4 class="font-bold">{{$t('ChangePassword')}}</h4>
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
                                        {{$t('Cancel')}}
                                    </vs-button>
                                    <vs-button @click="saveProfile()" class="cyan-dark frm-button ml-8">
                                        {{$t('Save')}} {{$t('Changes')}}
                                    </vs-button>
                                </div>
                            </div>
                        </div>
                        <input class="hidden" type="file" ref="refAvatarFile" accept=".png, .gif, .jpg, .jpeg" @change="avatarChanged">  
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
      countries: [],
      regions: [],
      selected: {},
      avatar_show: false,
      avatar_file: null,
      user: {},
      repeat_password: '',
      selected_country: undefined,
      selected_region: undefined
    }
  },
  methods: {
    saveProfile () {
      this.$loading.show(this)
      
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      
      const formData = new FormData()
      for (const key in this.user) {
        if (key === 'category_interest') {
          if (this.user[key].length > 0) {
            for (let i = 0; i < this.user[key].length; i++) {
              formData.append(`${key}[${i}]`, this.user[key][i])
            }
          }
        } else {
          formData.append(key, this.user[key])
        }        
      }
      if (this.avatar_file) formData.append('avatar_file', this.avatar_file)

      this.$http.post('/api/auth/save', formData, headers)
        .then((response) => {
          this.$loading.hide(this)
          localStorage.setItem('userInfo', JSON.stringify(response.data.user))
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
          this.$router.go()  
        })  
    },
    setUserCountry () {
      if (this.selected_country) {
        this.user.country = this.selected_country.name
      } else {
        this.user.country = undefined
      }
      this.selected_region = undefined
      this.user.region = undefined      
    },
    setUserRegion () {
      if (this.selected_region) {
        this.user.region = this.selected_region.name
      } else {
        this.user.region = undefined
      }      
    },
    browseAvatarImg () {
      this.$refs.refAvatarFile.click()
    },
    readerData (rawFile) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
          this.$refs.avatarPreview.src = e.target.result
          this.avatar_file = rawFile
          //this.onSuccess(sendData)
          resolve()
        }
        this.avatar_show = true
        reader.readAsDataURL(rawFile)
      })
    },
    avatarChanged (e) {
      const files = e.target.files
      this.validateAndUpload(files)  
    },
    validateAndUpload (files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: this.$t('TooManyFileTitle'),
          text: this.$t('TooManyFileContent'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isImage(rawFile)) {
        this.$vs.notify({
          title: this.$t('FileFormatTitle'),
          text: this.$t('FileFormatContent'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.previewAvatar(rawFile)
    },
    isImage (file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name)
    },
    previewAvatar (file) {
      this.$refs.refAvatarFile.value = null // fix can't select the same excel
      this.readerData(file)
    }   
  },
  created () {
    
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
        this.user = response.data  
      })
      .catch((error) => console.log(error))
    this.$http.get('/api/country_info')
      .then((res) => {
        if (res.data.countries) {
          this.countries = res.data.countries
          this.regions = res.data.regions
          this.selected_country = {id: 0, label: this.$t('SelectCountry')}
          this.selected_region = {id: 0, label: this.$t('SelectRegion')}
        }        
      })
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