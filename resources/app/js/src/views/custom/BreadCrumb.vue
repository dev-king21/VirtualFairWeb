<template>
    <div class="flex w-full breadcrumb">
        <nav-back-button v-show="!disableBack"/>
        <div class="flex items-center text-white ml-4">
            <feather-icon svgClasses="w-10 h-10" :icon="icon"/>
            <div class="ml-4">{{text}}</div>
        </div>
    </div>
</template>
<script>
import NavBackButton from '@/views/custom/NavBackButton.vue'
export default {
  props: {
    text: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    disableBack: {
      type: Boolean,
      required: false
    }
  },
  components: {
    NavBackButton  
  }
}
</script>
<style lang="scss">
.breadcrumb {
    background: rgb(40, 58, 196);
    div {
        text-transform: uppercase;
        font-size: 1.3rem;
    }
}
</style>