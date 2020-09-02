<template>
    <div class="w-full">
        <app-header activeItem="0" :hideNavbar="true"></app-header>
        <div class="flex w-full justify-between participant-main">
            <div class="vx-col flex flex-col justify-between  w-full lg:w-1/2 sm:w-1/2 xs:w-1/2 left-panel">
                <div class="flex items-center m-4 text-white">
                    <div class="flex items-center cursor-pointer" @click="$router.back()">
                        <feather-icon icon="ArrowLeftIcon"></feather-icon>
                        <span class="ml-2">{{$t('Return')}}</span>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="text-center w-full mb-base">
                        <img src="@assets/images/logo/fair_logo.jpg">
                    </div>
                    <div class="text-center text-white think-text">
                        Think <br>
                        Outside <br> 
                        The Box
                    </div>
                </div>
                <div class="flex items-center h6 ml-6 mt-base mb-base text-white">
                    *ESPACIO PARA LOGO Y BANNER PRINCIPAL DEL EVENTO
                </div>
            </div>
            <div class="vx-col w-full bg-white lg:w-1/2 sm:w-1/2 xs:w-1/2 right-panel">
                <div class="text-center p-5">
                    <h2 class="font-bold mb-4">{{$t('WelcomeMsg')}}:</h2>
                    <h2>{{fair_title}}</h2>
                </div>
                <div class="vx-row px-20">
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" :placeholder="$t('FirstName')" name="FirstName"
                            v-validate="'required'" data-vv-validate-on="blur" v-model="user.first_name"/>
                        <span class="text-danger text-sm">{{ errors.first('FirstName') && errors.first('FirstName').replace('FirstName', $t('FirstName')) }}</span>

                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" :placeholder="$t('LastName')" name="LastName"
                            v-validate="'required'" data-vv-validate-on="blur"  v-model="user.last_name"/>
                        <span class="text-danger text-sm">{{ errors.first('LastName')  && errors.first('LastName').replace('LastName', $t('LastName'))}}</span>

                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Email" name="Email"
                        v-validate="'required|email'" data-vv-validate-on="blur" v-model="user.email"/>
                        <span class="text-danger text-sm">{{ errors.first('Email') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" :placeholder="$t('Phone')" name="Phone" 
                        v-validate="'required|min:8'" data-vv-validate-on="blur" v-model="user.phone"/>
                        <span class="text-danger text-sm">{{ errors.first('Phone') && errors.first('Phone').replace('Phone', $t('Phone'))}}</span>

                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" :placeholder="$t('Company')" name="Company" 
                            v-validate="'required'" data-vv-validate-on="blur" v-model="user.company"/>
                        <span class="text-danger text-sm">{{ errors.first('Company') && errors.first('Company').replace('Company', $t('Company'))}}</span>

                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" :placeholder="$t('Position')" name="Position" 
                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.address"/>
                        <span class="text-danger text-sm">{{ errors.first('Position') && errors.first('Position').replace('Position', $t('Position'))}}</span>

                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" type="password" color="success" :placeholder="$t('SelectPassword')" name="constrasena"
                         @blur="PasswordValidate"  v-model="user.password"/>
                        <span class="text-danger text-sm">{{ password_error}}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" type="password" color="success" :placeholder="$t('ConfirmPassword')" name="contrasena"
                        @blur="ConfirmValidate"  v-model="repeat_password"/>
                        <span class="text-danger text-sm">{{ confirm_error}}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <!--vs-input class="w-full" color="success" :placeholder="$t('SelectCountry')" name="Pais"
                        v-validate="'required'" data-vv-validate-on="blur"  v-model="user.country"/-->
                        <v-select v-model="selected_country" @input="setUserCountry" :options="countries"/> 
                        <span class="text-danger text-sm">{{ errors.first('Country') && errors.first('Country').replace('Country', $t('Country'))}}</span>

                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <!--vs-input class="w-full" color="success" :placeholder="$t('SelectRegion')" name="Region"
                        v-validate="'required'" data-vv-validate-on="blur"  v-model="user.region"/-->
                        <v-select v-model="selected_region" @input="setUserRegion" :options="regions.filter((it) => it.country_id === selected_country.id)"/> 
                        <span class="text-danger text-sm">{{ errors.first('Region') && errors.first('Region').replace('Region', $t('Region'))}}</span>

                    </div>
                    <div class="vx-col w-full my-4">
                        <div class="flex items-center">
                            <div v-show="!avatar_show">{{$t('AddLogo')}}</div>
                            <div><img ref="avatarPreview" v-show="avatar_show" style="width: 150px; height: 150px; border-radius: 100%;" /></div>
                            <vs-button @click="browseAvatarImg" class="cyan-light ml-2 attach-btn">{{$t('Attach')}}</vs-button>
                        </div>
                    </div>
                    <div class="vx-col w-full mb-2">
                        {{$t('SelectInterest')}}
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4" :key="`cat-item-${index}`" v-for="(cat, index) in categories">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="cat_checked[index]">{{cat.name}}</vs-checkbox>
                    </div>
                    <div class="vx-col w-full mb-4 text-center">
                        <vs-button class="cyan-dark register-btn" :disabled="!validateForm" @click="registerClick()">
                            {{$t('Register')}}
                        </vs-button>
                    </div>
                    <div class="vx-col flex justify-center w-full text-center mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="accept_chk">{{$t('AcceptTerm')}}</vs-checkbox>
                    </div>
                </div>
                <div class="text-right mr-2" style="margin-top: -50px;" >
                    <img src="@assets/images/logo/watermark.png">
                </div>
            </div>
        </div>
        <input class="hidden" type="file" ref="refAvatarFile" accept=".png, .gif, .jpg, .jpeg" @change="avatarChanged">
    </div>
</template>
<script>
import moduleAuth from '@/store/auth/moduleAuth.js'
import AppHeader from '@/layouts/components/Header.vue'
import vSelect from 'vue-select'
export default {
  components: {
    AppHeader,
    vSelect
  },
  data () {
    return {
      categories: [],
      cat_checked: [],
      user: {
        type: 'user'
      },
      repeat_password: '',
      accept_chk: false,
      avatar_show: false,
      avatar_file: null,
      fair_title: '',
      countries: [],
      regions: [],
      selected_country: undefined,
      selected_region: undefined,
      password_error: '',
      confirm_error: ''
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && 
            this.user.email !== '' && 
            this.user.password !== '' &&
            this.repeat_password !== '' && 
            this.repeat_password === this.user.password && 
            this.user.first_name !== '' &&
            this.user.last_name !== '' &&
            this.user.phone !== '' &&
            this.user.address !== '' &&
            this.user.company !== '' &&
            this.selected_country &&
            this.selected_region &&
            this.accept_chk 
    }
  },
  methods: {
    registerClick () {
      this.$loading.show(this)
      if (this.avatar_file) this.user.avatar_file = this.avatar_file
      //this.user.interest
      const category_interest = []
      for (let i = 0; i < this.cat_checked.length; i++) {
        if (this.cat_checked[i]) {
          category_interest.push(this.categories[i].id)  
        }
      }
      this.user.category_interest = category_interest
      this.$store.dispatch('auth/register', this.user)
        .then((response) => {
          this.$loading.hide(this)  
          console.log(response.data.status)
          if (response.data.status === 'already_exist') {
            this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('UserAlreadyExistMsg'),
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'danger'
            })    
            return
          }
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: this.$t('Success'),
              text: this.$t('RegisterSuccess'),
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })    
          }
          setTimeout(() => {
            this.$router.push('/home')  
          }, 3000)
          
        })
        .catch((error) => console.log(error))
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
      this.previewAvatar(rawFile)
    },
    isImage (file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name)
    },
    previewAvatar (file) {
      this.$refs.refAvatarFile.value = null // fix can't select the same excel
      this.readerData(file)
    },
    PasswordValidate () {
      if (!this.user.password || this.user.password.length < 8 || !(/(?=.*[a-z])(?=.*[A-Z])/.test(this.user.password)))
          this.password_error = this.$t('PasswordValidator')
      else this.password_error = ''
    },
    ConfirmValidate () {
      if(this.user.password !== this.user.repeat_password)
        this.confirm_error = this.$t('ConfirmValidator')
      else
        this.confirm_error = ''
    }
  },
  created () {
    if (!moduleAuth.isRegistered) {
      this.$store.registerModule('auth', moduleAuth)
      moduleAuth.isRegistered = true
    }
    if (this.$route.params.type === 'expositor') this.user.type = 'lecturer'
    this.$http.get('/api/fair/now/category')
      .then((res) => {
        if (res.data.categories) {
          this.fair_title = res.data.fair.name
          this.categories = res.data.categories
          for (let i = 0; i < this.categories.length; i++) {
            this.cat_checked.push(false)  
          }
        }
        if (!res.data.fair) {
          this.$vs.notify({
            title: this.$t('Error'),
            text: this.$t('FairNotExistMsg'),
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
          this.$router.push('/home').catch(() => {})
        }
      })
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
.watermark {
    position: fixed;
    bottom: 20px;
    text-align: right;
    width: 100%;
    padding-right: 30px;
    margin: auto;
    
}
.participant-main {
    min-height: calc(var(--vh, 1vh) * 100 - 86px);
    
    .left-panel {
        background: rgb(40, 58, 196);
        .think-text {
            border: 1px solid white;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 5rem;
            margin: 0 8rem;
        }
        .left-content {
            height: 100%;
        }
    }
    .right-panel {
        background: white !important;
        input, textarea {
          border-radius: 0 !important;
          font-size: 0.9rem !important;
          // padding: 0.6rem !important;
        }
        .vs-input--placeholder {
          font-size: 0.9rem !important;
        }
        .input-span-placeholder {
          padding: 0.6rem !important;
          color: #151515 !important;
        }

        .vs-con-textarea {
          border-radius: 0 !important;
        }
        .con-slot-label {
          font-size: 0.8rem
        }

        .register-btn {
          font-size: 0.8rem !important;
          padding: 0.8rem 1rem !important;
        }

        .attach-btn {
          font-size: 0.8rem !important;
          padding: 0.8rem 1rem !important;
        }
        .vs__dropdown-toggle {
          border-radius: 0 !important;
        }
        
  }  
}
</style>