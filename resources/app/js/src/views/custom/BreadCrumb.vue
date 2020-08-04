<template>
  <div class="flex w-full breadcrumb justify-between" >
    <div class="flex flex-row nav-item">
        <nav-back-button v-show="!disableBack"/>
        <div class="flex items-center text-white ml-4" :class="{'justify-between': center}">
            <feather-icon svgClasses="w-10 h-10" :icon="icon"/>
            <div class="ml-4">{{text}}</div>
        </div>
    </div>
    <div class="flex flex-row text-white items-center py-3">
      <template v-if="avartar">
        <img :src="require(`@assets/images/pages/${user_img}`)" class="user-img responsive mx-4">
        <div class="mr-4">
          <div class="user-name text-white">{{user_name}}</div>
        </div>
      </template>
      <template v-if="second">
        <feather-icon :icon="second_icon"/>
        <div class="mx-4">
          <div class="user-name h6 text-white">{{second_text}}</div>
        </div>
      </template>
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
    },
    center: {
      type: Boolean,
      required: false
    },
    avartar: {
      type: Boolean,
      reqired: false
    },
    user_img: {
      type: String,
      required: false
    },
    user_name: {
      type: String,
      required: false
    },
    second: {
      type: Boolean,
      required: false
    },
    second_icon: {
      type: String,
      required: false
    },
    second_text: {
      type: String,
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
    background: #123058;
    .nav-item {
        div {
          text-transform: uppercase;
          font-size: 1.3rem;
        }
    }
    .user-img {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      border: 1px solid silver
    }
    .user-name {
      font-size: 0.8rem !important;
    }
}
</style>