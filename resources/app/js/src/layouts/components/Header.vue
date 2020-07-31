<template>
<vs-navbar v-model="activeItem" class="flex flex-end">
    <div slot="title">
      <vs-navbar-title>
          <img class ="logo" src="@assets/images/logo/logo-color.png">
      </vs-navbar-title>
    </div>

    <vs-navbar-item index="0" v-show="!hideNavbar">
      <!-- <a class="h3" href="/app/home">Registrarme</a> -->
       <vs-dropdown >
        <a class="a-icon" href="#">
          Registrarme
          <vs-icon class="" icon="expand_more"></vs-icon>
        </a>

        <vs-dropdown-menu>
          <vs-dropdown-item to="/auth/register/participant">
            Registro Participante
          </vs-dropdown-item>
          <vs-dropdown-item to="/auth/register/expositor">
            Registro Expositor
          </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </vs-navbar-item>

    <vs-navbar-item index="1" v-show="!hideNavbar">
        <a class="h3" href="/app/room">Webinars</a>
    </vs-navbar-item>

    <vs-navbar-item index="2" v-show="!hideNavbar">
        <a class="h3" href="/app/fair">Contacteons</a>
    </vs-navbar-item>
    <vs-navbar-item index="3" v-show="!hideNavbar">
      <feather-icon icon="InstagramIcon" svgClasses="text-white h-4 w-4" class="p-2 circleIcon "></feather-icon>
      <feather-icon icon="FacebookIcon" svgClasses="text-white h-4 w-4" class="p-2 circleIcon"></feather-icon>
      <feather-icon icon="TwitterIcon" svgClasses="text-white h-4 w-4" class="p-2 circleIcon"></feather-icon>
    </vs-navbar-item>
</vs-navbar>
</template>
<script>
export default {
  props: {
    activeItem: {
      type: String,
      required: true
    },
    hideNavbar: {
      type: Boolean,
      required: false
    }
  },
  components: {
    
  }, 
  data () {
    return {
      search: ''
    }
  },
  methods: {

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
    margin: 10px 20PX;
    width: 120px;
    height: auto;
  }

  .vs-con-items {
    width: 100%;
    margin-right: 100px;
    justify-content: flex-end;

    .circleIcon {
      border-radius: 50%;
      background: #333;
    }
    
    .is-active-item {
      a {
        background-color:#333;
        color: white;
        font-weight: 900;
          /* color: rgba(var(--vs-success), 1) !important; */
      }  
    }

    .vs-navbar--item {
      margin: 0 1rem;
      a {
        font-size: 0.8rem;
        padding: 2.5rem 1.5rem;
        text-transform: uppercase;
        font-weight: 900;
      }

      a:hover {
        background-color:#333;
        color: white !important;
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
  .vs-dropdown--item-link {
    text-transform: uppercase;
    font-size: 0.8rem !important;
  }

  .vs-dropdown--item-link:hover {
    background: #333 !important;
    color: white !important;
  }
}
</style>