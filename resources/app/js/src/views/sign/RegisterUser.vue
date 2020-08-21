<template>
    <div class="w-full">
        <app-header activeItem="0" :hideNavbar="true"></app-header>
        <div class="flex w-full justify-between participant-main">
            <div class="vx-col flex flex-col justify-between  w-full lg:w-1/2 sm:w-1/2 xs:w-1/2 left-panel">
                <div class="flex items-center m-4 text-white">
                    <div class="flex items-center cursor-pointer" @click="$router.back()">
                        <feather-icon icon="ArrowLeftIcon"></feather-icon>
                        <span class="ml-2">VOLVER</span>
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
                    <h2 class="font-bold mb-4">Bienvenido al Registro de usuario para:</h2>
                    <h2>EXPO ARQUITECTURA MODERNA</h2>
                </div>
                <div class="vx-row px-20">
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Nombre" name="Nombre"
                            v-validate="'required'" data-vv-validate-on="blur" v-model="user.first_name"/>
                        <span class="text-danger text-sm">{{ errors.first('Nombre') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Apellido" name="Apellido"
                            v-validate="'required'" data-vv-validate-on="blur"  v-model="user.last_name"/>
                        <span class="text-danger text-sm">{{ errors.first('Apellido') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Email" name="Email"
                        v-validate="'required|email'" data-vv-validate-on="blur" v-model="user.email"/>
                        <span class="text-danger text-sm">{{ errors.first('Email') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Telefono" name="Telefono" 
                        v-validate="'required|min:8'" data-vv-validate-on="blur" v-model="user.phone"/>
                        <span class="text-danger text-sm">{{ errors.first('Telefono') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Compania" name="Compania" 
                            v-validate="'required'" data-vv-validate-on="blur" v-model="user.company"/>
                        <span class="text-danger text-sm">{{ errors.first('Compania') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Posicion" name="Posicion" 
                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.address"/>
                        <span class="text-danger text-sm">{{ errors.first('Posicion') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" type="password" color="success" placeholder="Seleccione una constrasena" name="constrasena"
                        v-validate="'required|min:8'" data-vv-validate-on="blur"  v-model="user.password"/>
                        <span class="text-danger text-sm">{{ errors.first('constrasena') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" type="password" color="success" placeholder="Repita la contrasena" name="contrasena"
                        v-validate="'required|min:8'" data-vv-validate-on="blur"  v-model="repeat_password"/>
                        <span class="text-danger text-sm">{{ errors.first('constrasena') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Seleccione un Pais" name="Pais"
                        v-validate="'required'" data-vv-validate-on="blur"  v-model="user.country"/>
                        <span class="text-danger text-sm">{{ errors.first('Pais') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Seleccione la Region" name="Region"
                        v-validate="'required'" data-vv-validate-on="blur"  v-model="user.region"/>
                        <span class="text-danger text-sm">{{ errors.first('Region') }}</span>
                    </div>
                    <div class="vx-col w-full my-4">
                        <div class="flex items-center">
                            <div v-show="!avatar_show">Agregar fotograpia o logotipo</div>
                            <div><img ref="avatarPreview" v-show="avatar_show" style="width: 150px; height: 150px; border-radius: 100%;" /></div>
                            <vs-button @click="browseAvatarImg" class="cyan-light ml-2 attach-btn">Adjuntar</vs-button>
                        </div>
                    </div>
                    <div class="vx-col w-full mb-2">
                        Seleccione un area de interes
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4" :key="`cat-item-${index}`" v-for="(cat, index) in categories">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="cat_checked[index]">{{cat.name}}</vs-checkbox>
                    </div>
                    <div class="vx-col w-full mb-4 text-center">
                        <vs-button class="cyan-dark register-btn" :disabled="!validateForm" @click="registerClick()">
                            REGISTRARME
                        </vs-button>
                    </div>
                    <div class="vx-col flex justify-center w-full text-center mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="accept_chk">Acepto los terminos y condiciones</vs-checkbox>
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
export default {
  components: {
    AppHeader
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
      avatar_file: null
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
            this.user.country !== '' &&
            this.user.region !== '' &&
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
          console.log(response)
          this.$loading.hide(this)  
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'su cuenta se ha registrado correctamente',
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
          this.categories = res.data.categories
          for (let i = 0; i < this.categories.length; i++) {
            this.cat_checked.push(false)  
          }
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
            padding: 0.6rem !important;
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

        
  }  
}
</style>