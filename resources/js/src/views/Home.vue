<!-- =========================================================================================
    File Name: Home.vue
    Description: Home Page
========================================================================================== -->
<template>
<div class="h-screen flex vx-row w-full" id="home">
  <div class="fixed" id="logo"> 
    <img src="/images/logo/logo-color.png">
   
  </div>
  <div class="fixed pull-right" id="login">
    <vs-button color="success" type="border" to="/auth/login" icon-pack="feather" icon="icon-user">Login</vs-button>
  </div>
  <div class="fixed ml-20 pull-right" id="register">  
    <vs-button color="warning" type="border" to="/auth/register" icon-pack="feather" icon="icon-user-plus">Register</vs-button>
  </div>
  <div class="h-screen flex w-full home-bg-img vx-row items-center justify-center" id="home">
    <div class="vx-col w-full lg:w-1/3 sm:w-1/3 xs:w-1/3 mb-base">
      <vx-card class="overlay-card overflow-hidden">
          <template slot="no-body">
              <img src="/images/card-image-6.jpg?b26faf1e51482f6816e4d1a528fc5818" alt="user-profile-cover" class="responsive">
              <div class="card-overlay text-white flex flex-col justify-between">
                  <h4 class="text-white mb-4">Room</h4>
                  <p>Conference room to see scheduled talk and view earlier talks</p>
              </div>
          </template>
      </vx-card>
    </div>
    <div class="vx-col w-full lg:w-1/12 sm:w-1/12 mb-base">
    </div>

    <div class="vx-col w-full lg:w-1/3 sm:w-1/3 xs:w-1/3 mb-base">
      <vx-card class="overlay-card overflow-hidden">
          <template slot="no-body">
              <img src="/images/card-image-5.jpg?677b3fc1ac8287624d8071bc811d04a2" alt="user-profile-cover" class="responsive">
              <div class="card-overlay text-white flex flex-col justify-between">
                  <h4 class="text-white mb-4">Virtual Fair</h4>
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
    .vx-card__collapsible-content {
        max-height: 300px;
    }
}

#logo {
  top: 30px;
  left: 50px;
  img {
    width: 120px;
  height: auto;
  }
  
}

#login{
  top: 30px;  
  right: 240px;
}

#register{
  top: 30px;  
  right: 100px;
}
  
</style>
