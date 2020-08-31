<template>
<vs-navbar v-model="active_item" class="flex flex-end">
    <div slot="title">
      <vs-navbar-title class="flex items-center">
        <router-link to="/home" >
          <img class="logo cursor-pointer" src="@assets/images/logo/logo-color.png">
        </router-link>
        <template>
          <div class="flex items-center ml-8">
            <img class="fair_logo" :src="`/fair_image/${fair_logo}`" v-show="fair_logo">
            <div class="h2 ml-4 uppercase">{{fair_title}}</div>
          </div>
        </template>
      </vs-navbar-title>
    </div>
    <i18n class="mr-8" />
    <template v-if="!loggedIn">
      <vs-navbar-item index="0" class="ml-4" v-show="!hideNavbar">
        <!-- <a class="h3" href="/app/home">Registrarme</a> -->
        <vs-dropdown >
          <a class="a-icon" href="#" >
            {{$t('SignUp')}}
            <vs-icon class="" icon="expand_more"></vs-icon>
          </a>

          <vs-dropdown-menu >
            <vs-dropdown-item to="/auth/register/participant">
            {{$t('Register')}} {{$t('Competitor')}} 
            </vs-dropdown-item>
            <vs-dropdown-item to="/auth/register/expositor">
              {{$t('Register')}} {{$t('Exhibitor')}} 
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </vs-navbar-item>

      <vs-navbar-item index="1" v-show="!hideNavbar">
          <a class="h2" href="/app/home/webinar">Webinars</a>
      </vs-navbar-item>

      <vs-navbar-item index="2" v-show="!hideNavbar">
          <a class="h2" href="/app/home/contact">{{$t('ContactUs')}}</a>
      </vs-navbar-item>

      <vs-navbar-item index="4" class="px-4" v-show="!hideNavbar">
        <svg-icon icon="facebook" size="w-8 h-8"></svg-icon>
        <svg-icon icon="instagram"  size="w-8 h-8"></svg-icon>
        <svg-icon icon="linkedin" size="w-8 h-8" ></svg-icon>
        <svg-icon icon="whatsapp" size="w-8 h-8" ></svg-icon>
        <svg-icon icon="youtube" size="w-8 h-8" ></svg-icon>
      </vs-navbar-item>
    </template>
    <template v-else>
      <vs-navbar-item index="0" class="ml-4" v-show="!hideNavbar&&loggedIn">
          <a class="h2" href="/app/home/sustainability">{{$t('Sustainability')}}</a>
      </vs-navbar-item>
      <vs-navbar-item index="1" v-show="!hideNavbar&&!loggedIn">
          <a class="h2" href="/app/home/sponsor">{{$t('Sponsors')}}</a>
      </vs-navbar-item>
      <vs-navbar-item index="2" v-show="!hideNavbar">
          <a class="h2" href="/app/home/contact">{{$t('ContactUs')}}</a>
      </vs-navbar-item>
      <vs-navbar-item index="3" v-show="!hideNavbar">
          <a class="h2 flex items-center cursor-pointer" href.prevent @click="logout()">
            <feather-icon svgClasses="w-5 h-5" icon="LogOutIcon"/>
            <span>{{$t('LogOut')}}</span>
          </a>
      </vs-navbar-item>
      <vs-navbar-item index="4" v-show="!hideNavbar">
          <a class="setting-nav text-center"  href="/app/setting">
            <svg-icon size="w-8 h-8" icon="profile"/>
            <div class="fs-10 text-white">{{$t('MyAccount')}}</div>
          </a>
      </vs-navbar-item>
    </template>
</vs-navbar>
</template>
<script>
import moduleAuth from '@/store/auth/moduleAuth.js'
import i18n from './navbar/components/I18n.vue'
export default {
  props: {
    activeItem: {
      type: String,
      required: false
    },
    hideNavbar: {
      type: Boolean,
      required: false
    }
  },
  components: {
    i18n
  },
  data () {
    return {
      search: '',
      active_item: 0,
      fair_logo: null,
      fair_title: '',
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.loggedIn
    }
  },
  methods: {
    logout () {
      if (!moduleAuth.isRegistered) {
        this.$store.registerModule('auth', moduleAuth)
        moduleAuth.isRegistered = true
      }
      this.$loading.show(this)
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$loading.hide(this)
          this.$router.push('/home').catch(() => {})
        })
        .catch(() => { })
    }    
  },
  created () {
    if (!moduleAuth.isRegistered) {
      this.$store.registerModule('auth', moduleAuth)
      moduleAuth.isRegistered = true
    }
    this.active_item = this.activeItem
    this.$http.get('/api/fair/now')
      .then((res) => {
        if (res.data.fair) {
          this.isFairExist = true
          this.fair_logo = res.data.fair.logo
          this.fair_title = res.data.fair.name
        }
      })
  }
}
</script>
<style lang="scss">
.vs-navbar {
  height: 86px;
  .vs-button {
    margin-left: 10px;
    margin-right: 10px;
  }

  .vs-input {
    margin-left: 10px;
    margin-right: 10px;
  }

  .logo{
    position: relative;
    margin: 10px 40PX;
    width: 120px;
    height: auto;
  }

  .fair_logo {
    height: 60px;
    width: auto;
    border-radius: 10% !important;
    box-shadow: 1px 5px 5px #33333322;
  }

  .vs-con-items {
    /*width: 100%;*/
    /* margin-right: 100px; */
    justify-content: flex-end;

    .circleIcon {
      border-radius: 50%;
      background: #151515;
    }
    
    .is-active-item {
      a {
        background-color:#151515;
        color: white;
      }  
    }

    .vs-navbar--item {
      margin: 0;
      cursor: pointer;
      a {
        font-size: 1rem;
        padding: 2.5rem 1.2rem;
        text-transform: uppercase;
        font-weight: 600;
        font-family: 'Lato';
        span {
          text-transform: uppercase;
        }
      }

      a:hover {
        background-color:#151515;
        color: white !important;
      }

      a.setting-nav {
        background-color:#123058;
        color:white;
        padding: 1.2rem;
      }

      .feather-icon {
        margin: 0 0.2rem;
      }

    }

  }

  background: #FFFFFFDD !important;
}

.vs-dropdown--menu {
  border-radius: 0px !important;
  border: none !important;
  .vs-dropdown--item {
    margin: 0 !important;
    width: 100% !important;
  }
  .vs-dropdown--item-link {
    text-transform: uppercase;
    font-size: .9rem !important;
    padding: 0.8rem !important;
  }

  .vs-dropdown--item-link:hover {
    background: black !important;
    color: white !important;
  }
}
</style>