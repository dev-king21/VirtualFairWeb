<template>
<vs-navbar v-model="activeItem" class="p-2 fixed">
    <div slot="title">
        <vs-navbar-title>
            <img class ="logo" src="@assets/images/logo/logo-color.png">
        </vs-navbar-title>
    </div>

    <vs-navbar-item index="0">
        <a class="h3" href="#">Home</a>
    </vs-navbar-item>

    <vs-navbar-item index="1">
        <a class="h3" href="/app/room">Room</a>
    </vs-navbar-item>

    <vs-navbar-item index="2">
        <a class="h3" href="/app/fair">Fair</a>
    </vs-navbar-item>
    <div class="flex w-full nav-action-div">
        <vs-button class="text-right" id ="login-btn" color="success" type="border" to="/auth/login" icon-pack="feather" icon="icon-user">Login</vs-button>
        <vs-button id ="register-btn" color="warning" type="border" to="/auth/register" icon-pack="feather" icon="icon-user-plus">Register</vs-button>
        <vs-input icon-pack="feather" icon="icon-search" placeholder="Search" v-model="search" />
    </div>
</vs-navbar>
</template>
<script>
export default {
  props: {
    activeItem: {
      type: String,
      required: true
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
  .vs-button {
    margin-left: 10px;
    margin-right: 10px;
  }

  .vs-navbar--item {
    a {
      font-size: 1.6rem
    }
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

  .is-active-item {
    a {
        color: rgba(var(--vs-success), 1) !important;
    }  
  }

  .vs-con-items {
    width: 100%;
    margin-left: 100px;
    justify-content: flex-start;
  }

  .nav-action-div {
      justify-content: flex-end;
  }

  background: #FFFFFFDD !important;
}
</style>