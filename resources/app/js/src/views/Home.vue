<template>
<div class="w-full">
  <app-header activeItem="0"></app-header>
  <div class="h-screen flex w-full home-bg-img items-center justify-center home-main">
    <div class="vx-col w-full lg:w-1/4 sm:w-1/4 xs:w-1/4 mb-base">
      <vx-card class="overlay-card overflow-hidden">
          <template slot="no-body">
              <img src="@assets/images/pages/home-background.png" alt="user-profile-cover" class="responsive">
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
      <router-link to="/app/fair">
      <vx-card class="overlay-card overflow-hidden" to="/app/fair">
          <template slot="no-body">
              <img src="@assets/images/pages/home-background.png" alt="user-profile-cover" class="responsive">
              <div class="card-overlay text-white flex flex-col justify-between">
                  <h4 class="text-success mb-4">Virtual Fair</h4>
                  <p>Conference room to see scheduled talk and view earlier talks</p>
              </div>
          </template>
      </vx-card>
      </router-link>
    </div>
  </div>
  <app-footer></app-footer>
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import AppFooter from '@/layouts/components/Footer.vue'
export default {
  components: {
    AppHeader,
    AppFooter
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


</style>
