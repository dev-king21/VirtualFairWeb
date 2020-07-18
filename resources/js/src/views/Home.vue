<!-- =========================================================================================
    File Name: Home.vue
    Description: Home Page
========================================================================================== -->
<template>
<div class="h-screen flex w-full" id="home">
  <div class="fixed w-full justify-center" id="topBar"> 
    <img id ="logo" src="/images/logo/logo-color.png">
    <vs-button id ="login-btn" class="fixed" color="success" type="border" to="/auth/login" icon-pack="feather" icon="icon-user">Login</vs-button>
    <vs-button id ="register-btn" class="fixed" color="warning" type="border" to="/auth/register" icon-pack="feather" icon="icon-user-plus">Register</vs-button>
  </div>
  <div class="h-screen flex w-full home-bg-img items-center justify-center" id="home">
    <div class="vx-col w-full lg:w-1/4 sm:w-1/4 xs:w-1/4 mb-base">
      <vx-card class="overlay-card overflow-hidden">
          <template slot="no-body">
              <img src="/images/card-image-6.jpg?b26faf1e51482f6816e4d1a528fc5818" alt="user-profile-cover" class="responsive">
              <div class="card-overlay text-white flex flex-col justify-between">
                  <h4 class="text-success mb-4">Room</h4>
                  <p>Conference room to see scheduled talk and view earlier talks</p>
              </div>
          </template>
      </vx-card>
    </div>
    <div class="vx-col w-full lg:w-1/4 sm:w-1/4 mb-base">
    </div>

    <div class="vx-col w-full lg:w-1/4 sm:w-1/4 xs:w-1/4 mb-base">
      <vx-card class="overlay-card overflow-hidden">
          <template slot="no-body">
              <img src="/images/card-image-5.jpg?677b3fc1ac8287624d8071bc811d04a2" alt="user-profile-cover" class="responsive">
              <div class="card-overlay text-white flex flex-col justify-between">
                  <h4 class="text-success mb-4">Virtual Fair</h4>
                  <p>Conference room to see scheduled talk and view earlier talks</p>
              </div>
          </template>
      </vx-card>
    </div>
  </div>
</div>
</template>


<script>
import LoginJwt from './auth/LoginJWT.vue'
import LoginFirebase from './auth/LoginFirebase.vue'
import LoginAuth0 from './auth/LoginAuth0.vue'

export default {
  components: {
    LoginJwt,
    LoginFirebase,
    LoginAuth0
  }
}
</script>

<style lang="scss">
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}

.overlay-card {
    opacity: .95;
    .vx-card__collapsible-content {
        max-height: 300px;
    }
}

#topBar {
  top: 0px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 5px 2px rgba(0, 0, 0, 0.35);
  z-index: 99999;
  #logo{
    position: relative;
    margin-top: 20px;
    margin-left: 30px;
    width: 120px;
    height: auto;
  }

  #login-btn{
    top: 20px;
    right: 100px;  
  }

  #register-btn{
    top: 20px;
    right: 240px;  
  }
  
}

</style>
