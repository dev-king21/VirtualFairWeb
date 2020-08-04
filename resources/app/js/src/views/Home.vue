<template>
<div class="w-full">
  <app-header activeItem="0" :loggedIn="loggedIn"></app-header>
  <div class="flex w-full flex-col home-bg-img justify-between home-main">
    <template v-if="!loggedIn">
      <div class="w-full">
        <template v-if="!logInClicked">
          <div class="login-btn flex items-center text-white cursor-pointer" @click="logInClicked = true"> 
            <feather-icon svgclasses="w-8 h-8" icon="LogInIcon" />
            <span class="ml-4">INGRESAR</span>
          </div>
        </template>
        <template v-else>
          <div class="login-form w-full lg:w-1/4 md:w-1/4 sm:w-1/3 xs:w-1/2">
            <div class="h6 font-bold text-white">
              Por favor ingrese sus datos
            </div>
            <div class="login-input">
              <vs-input color="success" class="w-full" placeholder="Ingrese su email" v-model="contact_phone"/>
            </div>
            <div class="login-input">
              <vs-input color="success" class="w-full" placeholder="Ingrese su contrasena" v-model="contact_email"/>
            </div>
            <div class="mt-8">
              <vs-button class="w-full sign-btn" @click="login()" color="#164A8B">INGRESAR</vs-button>
            </div>  
          </div>
        </template>
      </div>
      <div class="flex w-full justify-between items-end home-footer" v-show="!loggedIn">
        <div class="vx-col w-full lg:w-1/4 sm:w-1/3 xs:w-1/2">
          <div class="contact-card">
            <div class="text-center pt-5 mb-3">
              TIENES DUDAS? DEJANOS SABERLAS
            </div>
            <div class="contact-content">
              <div class="contact-input"><vs-input color="success" class="w-full" placeholder="Nombre" v-model="contact_phone"/></div>
              <div class="contact-input"><vs-input color="success" class="w-full" placeholder="Email" v-model="contact_email"/></div>
              <div class="contact-input"><vs-textarea color="success" height="100px" class="w-full" placeholder="Consulta" v-model="contact_message"/></div>
            </div>
            <div class="contact-input text-right">
              <vs-button class="message-btn" >Enviar</vs-button>
            </div>
          </div>
        </div>
        <div class="vx-col w-full lg:w-1/4 sm:w-1/4 xs:w-1/4 text-right">
          <vs-button class="contact-btn items-center">
            <feather-icon svgClasses="w-4 h-4 m-1" icon="MessageCircleIcon"></feather-icon>
            <span>CONTACTA CON NOSOTROS</span>
          </vs-button>
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
                  <feather-icon svgClasses="w-10 h-10" icon="RadioIcon"/>
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
        <router-link class="main-link" to="/fair/country/2/2">
          stands
        </router-link>
        <router-link class="main-link" to="/room/schedule">
          Agenda del congreso
        </router-link>
        <router-link class="main-link" to="/room/webinar">
          webinars
        </router-link>
        <router-link class="main-link" to="/fair/chatting">
          <span>Networking</span>
          <feather-icon class="ml-2" color="green" icon="" :badge="3" />
        </router-link>
        <router-link class="main-link" to="/fair/contact">
          patrocinadores
        </router-link>
      </div>  
    </template>  
  </div>
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import MfcButton from '@/views/custom/MfcButton.vue'
export default {
  components: {
    AppHeader,
    MfcButton
  },
  data () {
    return {
      contact_phone: '',
      contact_email: '',
      contact_message: '',
      loggedIn: false,
      logInClicked: false
    }
  },
  methods: {
    login () {
      //setTimeout(function () {
      this.loggedIn = true
      //}, 1000)
      
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
    font-size: 1.1rem !important;
    float: right;
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
    }
    .input-span-placeholder {
      padding: 0.5rem !important;
      color: #333 !important;
    }
    .login-input {
      margin-top: 1rem !important;
    }
    .sign-btn {
      border-radius: 0 !important;
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
    height: 80px;
    flex-wrap: wrap;
    .main-link {
      padding: 2rem 3rem !important;
      flex: 0 0 auto;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 700;
      color: white; 
    }
    .main-link:hover, .main-link.active{
      background: #164A8B;
    }
  }
}

.home-footer {
  bottom: 0;
  .contact-btn {
    border-radius: 0px !important;
    border-top-left-radius: 0.6rem !important;
    background: rgb(103, 179, 81) !important;
    font-size: 0.8rem !important;
    padding: 0.8rem 1rem !important;
  }
  .contact-card {
    border-radius: 0px !important;
    border-top-right-radius: 0.6rem !important;
    background: white !important;
    font-size: 0.7rem !important;
    font-weight: bold;
    color: #333;
    opacity: .95;
    .contact-content {
      padding: 0 1.4rem !important;
    }
    input, textarea {
      border-radius: 0 !important;
      font-size: 0.6rem !important;
      padding: 0.4rem !important;
    }
    .vs-input--placeholder {
      font-size: 0.6rem !important;
    }
    .input-span-placeholder {
      padding: 0.4rem !important;
      color: #333 !important;
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
