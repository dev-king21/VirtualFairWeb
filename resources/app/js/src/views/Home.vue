<template>
<div class="w-full">
  <app-header></app-header>
  <div class="flex w-full flex-col home-bg-img justify-between home-main">
    <div class="absolute font-bold text-white"  style="z-index: 1; right: 10rem; top: 8rem;">
      <div class="text-center"><svg-icon size="w-32 h-32 text-cyan-dark" icon="watermark"/></div>
      <div class="fs-36" style="margin-top: -2rem">CONFERENCIAS</div>
      <div class="fs-52" style="margin-top: -2rem">VIRTUALES</div> 
      <div class="fs-16 font-normal gradient-bar" style="margin-top: -1rem">The new way of making business</div>
    </div>
    <template v-if="!loggedIn">
      <div class="w-full">
        <template v-if="!logInClicked">
          <div class="login-btn flex items-center text-white cursor-pointer" @click="logInClicked = true"> 
            <feather-icon svgClasses="w-6 h-6" icon="LogInIcon" />
            <span class="ml-4">INGRESAR</span>
          </div>
        </template>
        <template v-else>
          <div class="login-form w-full lg:w-1/6 md:w-1/4 sm:w-1/3 xs:w-1/2 absolute"  style="z-index: 3; right: 0; top: 86px">
            <div class="h6 font-bold text-white">
              Por favor ingrese sus datos
            </div>
            <div class="login-input">
              <vs-input color="success" class="w-full" placeholder="Ingrese su email" 
                v-validate="'required|email'" data-vv-validate-on="blur" name="email" v-model="auth.email"/>
              <span class="text-danger text-sm">{{ errors.first('email') }}</span>
            </div>
            <div class="login-input">
              <vs-input color="success" class="w-full" placeholder="Ingrese su contrasena" type="password"
                v-validate="'required'" data-vv-validate-on="blur" name="contrasena" @keypress="goEnter" v-model="auth.password"/>
              <span class="text-danger text-sm">{{ errors.first('contrasena') }}</span>
            </div>
            <div class="mt-8">
              <vs-button class="w-full sign-btn" :disabled="!validateAuthParam" @click="login()" color="#164A8B">INGRESAR</vs-button>
            </div>  
          </div>
        </template>
      </div>
      <div class="flex w-full justify-between items-end home-footer" v-show="!loggedIn">
        <div class="vx-col w-full lg:w-1/4 sm:w-1/3 xs:w-1/2">
          <div class="contact-card">
            <div class="text-center pt-5 mb-3 font-bold">
              TIENES DUDAS? DEJANOS SABERLAS
            </div>
            <div class="contact-content">
              <div class="contact-input">
                <vs-input color="success" class="w-full" placeholder="Nombre" 
                  v-validate="'required'" data-vv-validate-on="blur" name="contact_name" v-model="contact_name"/>
                <span class="text-danger text-sm">{{ errors.first('contact_name') }}</span>
              </div>
              <div class="contact-input">
                <vs-input color="success" class="w-full" placeholder="Email"
                  v-validate="'required|email'" data-vv-validate-on="blur" name="contact_email" v-model="contact_email"/></div>
                  <span class="text-danger text-sm">{{ errors.first('contact_email') }}</span>
              <div class="contact-input">
                <vs-textarea color="success" height="100px" class="w-full" placeholder="Consulta" 
                  data-vv-validate-on="blur" name="contact_message" v-model="contact_message"/>
              </div>
            </div>
            <div @click="send_message" class="contact-input text-right">
              <vs-button class="message-btn" >Enviar</vs-button>
            </div>
          </div>
        </div>
        <div class="vx-col text-right">
          <div class="contact-btn cyan-dark flex items-center justify-end cursor-pointer">
            <svg-icon icon="contact"></svg-icon>
            <span class="text-white ml-2">CONTACTA CON NOSOTROS</span>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex">
        <div class="vx-col w-full lg:w-1/6 sm:w-1/6 xs:w-1/6 left-panel">
          <div class="flex flex-col justify-between">
            <div class="flex flex-col left-content">
                <div class="text-center w-full mt-4">
                    <img src="@assets/images/logo/fair_logo.jpg" class="fair-logo">
                </div>
                <div class="text-center text-white think-text m-base mt-0">
                    Think <br>
                    Outside <br> 
                    The Box
                </div>
            </div>
          </div>
        </div>
        <div class="vx-col w-full lg:w-2/3 sm:w-2/3 xs:w-2/3">
        </div>
        <div class="vx-col w-full lg:w-1/6 sm:w-1/6 xs:w-1/6" style="margin-top: 12%;">
          <!-- <div class="flex flex-col justify-between">
            <div class="flex flex-col"> -->
              <div class="text-white">
                <div class="live-panel text-center cursor-pointer" @click="$router.push('/room/live-video')">
                  <svg-icon size="w-10 h-10" icon="live"/>
                  <div class="text-center font-bold">
                    EN VIVO
                  </div>
                </div>
              </div>
            <!-- </div>
          </div> -->
        </div>
      </div>
      <div class="flex justify-between flex-wrap items-center home-footer main-btns">
        <router-link class="main-link" to="/stand/home">
          stands
        </router-link>
        <router-link class="main-link" to="/room/schedule">
          Agenda del congreso
        </router-link>
        <router-link class="main-link" to="/room/webinar">
          webinars
        </router-link>
        <router-link class="main-link flex" to="/fair/chatting">
          <span>Networking</span>
          <feather-icon class="ml-2 networking-badge" icon=""
             style="margin-top: 0px; background: #ff0000; margin-left: 2px;" :badge="msg_count" />
        </router-link>
        <router-link class="main-link" to="/home/sponsor">
          patrocinadores
        </router-link>
      </div>  
    </template>  
  </div>
</div>
</template>
<script>
import moduleAuth from '@/store/auth/moduleAuth.js'
import AppHeader from '@/layouts/components/Header.vue'
import MfcButton from '@/views/custom/MfcButton.vue'
export default {
  components: {
    AppHeader,
    MfcButton
  },
  data () {
    return {
      contact_name: '',
      contact_email: '',
      contact_message: '',
      auth: {
        email: '',
        password: ''
      },
      logInClicked: false,
      msg_count: 0
    }
  },
  computed: {
    validateAuthParam () {
      return !this.errors.any() && this.auth.email !== '' && this.auth.password !== ''
    },
    loggedIn () {
      return this.$store.state.auth.loggedIn
    }
  },
  methods: {
    login () {
      this.$loading.show(this)
      this.$store.dispatch('auth/login', this.auth)
        .then(() => {
          this.$loading.hide(this)
        })
        .catch(() => {
          this.$loading.hide(this)
          this.$vs.notify({
            title: 'Error',
            text: 'Correo electrónico o la contraseña son incorrectos.',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
      this.auth.email = ''
      this.auth.password = ''
      this.logInClicked = false
    },
    goEnter (event) {
      if (event.keyCode === 13) {
        this.login()
      }
    },
    send_message () {
      const param = {
        name: this.contact_name,
        email: this.contact_email,
        message: this.contact_message
      }
      this.$loading.show(this)
      this.$http.post('/api/query', param)
        .then((res) => {
          if (res.data.status === 'ok') {
            this.$loading.hide(this)
            this.$vs.notify({
              title:'Notificación',
              text:'Hemos recibido su petición. \n Por favor espera.',
              color:'success',
              iconPack: 'feather',
              icon:'icon-mail'
            })
          }
          
        })
    }
  },
  created () {
    if (!moduleAuth.isRegistered) {
      this.$store.registerModule('auth', moduleAuth)
      moduleAuth.isRegistered = true
    }

    if (this.$store.state.auth.loggedIn) {
      this.$http.post('/api/fair/chat/unread_count')
        .then((res) => {
          const data = res.data
          if (res.data.status === 'unknown_user') {
            return 
          }
          this.msg_count = data.msg_count
        })
    }

    
  }
}
</script>

<style lang="scss">
.overlay-card {
    opacity: .9;
    .vx-card__collapsible-content {
        max-height: 300px;
    }
}
.home-main {
  height: calc(var(--vh, 1vh) * 100 - 86px);
  .login-btn {
    border-radius: 0px !important;
    border-bottom-left-radius: 0.6rem !important;
    background: black;
    padding: 0.8rem 1.5rem;
    font-size: 1rem !important;
    float: right;
  }

  .gradient-bar {
    border-top-width: 0;
    border-bottom: 10px solid red;
    border-left-width: 0;
    border-right-width: 0;
    border-image: linear-gradient(to right, 
      rgba(44, 91, 231, 1) 0%,
      rgba(201, 62, 128, 1) 50%,
      rgba(249, 109, 46, 1) 100%) 1 stretch;
   }

  .login-form {
    border-radius: 0px !important;
    float: right;
    padding: 3rem 1.5rem;
    background: #123058;
    input, textarea {
      border-radius: 0 !important;
      font-size: 0.8rem !important;
      padding: 0.5rem !important;
    }
    .vs-input--placeholder {
      font-size: 0.8rem !important;
      font-weight: 900 !important;
    }
    .input-span-placeholder {
      padding: 0.5rem !important;
      color: #151515 !important;
    }
    .login-input {
      margin-top: 1rem !important;
    }
    .sign-btn {
      font-size: 0.8rem !important;
    }
  }

  .left-panel {
    .think-text {
        border: 1px solid white;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.6rem;
        margin: 0 2rem;
    }
    .fair-logo {
      width: 30%;
      height: auto;
    }
    .left-content {
        height: 100%;
        background: rgb(40, 58, 196);
    }
  }

  .live-panel {
    padding: 1.5rem;
    background: #123058;
    color: white;
    position: relative;
    width: 8rem;
    float: right;
  }

  .main-btns {
    margin-bottom: 0%;
    background: #123058;
    height: 7rem;
    flex-wrap: wrap;
    .main-link {
      padding: 2.5rem 3rem !important;
      flex: 0 0 auto;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 900;
      color: white; 
    }
    .main-link:hover, .main-link.active{
      background: #164A8B;
    }

    .networking-badge {
      .feather-icon-badge {
        background: #ee0000 !important;
      }
    }
  }
}

.home-footer {
  bottom: 0;
  .contact-btn {
    border-radius: 0px !important;
    border-top-left-radius: 0.6rem !important;
    font-size: 0.8rem !important;
    padding: 0.8rem 1rem !important;
  }
  .contact-card {
    border-radius: 0px !important;
    border-top-right-radius: 0.6rem !important;
    background: white !important;
    font-size: 0.7rem !important;
    font-weight: bold;
    color: #151515;
    opacity: .95;
    .contact-content {
      padding: 0 1.4rem !important;
    }
    input, textarea {
      border-radius: 0 !important;
      font-size: 0.8rem !important;
      padding: 0.4rem !important;
    }
    .vs-input--placeholder {
      font-size: 0.8rem !important;
    }
    .input-span-placeholder {
      padding: 0.4rem !important;
      color: #151515 !important;
    }
    .contact-input {
      margin-top: 0.8rem !important;
    }

    .vs-con-textarea {
      border-radius: 0 !important;
      .vs-textarea:focus {
        border: 1px solid rgb(70,201,58) !important;
      }
    }

    .message-btn {
      border-radius: 0px !important;
      border-top-left-radius: 0.6rem !important;
      background: rgb(243, 0, 84) !important;
      font-size: 0.8rem !important;
      padding: 0.6rem 1rem !important;
    }
  }  
}

</style>
