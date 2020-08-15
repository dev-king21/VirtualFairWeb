<template>
<div class="w-full">
    <app-header activeItem="-1"/>  
    <bread-crumb :center="true" text="video title" />
    <div class="flex w-full flex-col live-bg-img items-center justify-center live-main">
      <!-- <div class="play-icon text-white"> -->
        <vs-icon size="5rem" class="play-icon" color="red" icon-pack="material-icons" icon="play_circle_filled" />
      <!-- </div> -->
    </div>  
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb
  }
}
</script>
<style lang="scss">
.live-main {
  height: calc(var(--vh, 1vh) * 100 - 152px);
  .play-icon {
    margin-top: -10%;
  }
}
.live-bg-img {
  background-size: 100vw calc(var(--vh, 1vh) * 100 - 150px) !important;
}
</style>