<template>
  <div class="layout--full-page">
    <router-view></router-view>
  </div>
</template>

<script>
import moduleAuth from '@/store/auth/moduleAuth.js'
export default {
  created () {
    if (!moduleAuth.isRegistered) {
      this.$store.registerModule('auth', moduleAuth)
      moduleAuth.isRegistered = true
    }
    let userInfo = localStorage.getItem('userInfo')
    // console.log(userInfo)
    if (userInfo && userInfo !== null) {
      userInfo = JSON.parse(userInfo)
      if (userInfo.id !== 0 && userInfo.email && userInfo.email !== '') {
        this.$store.dispatch('auth/logged')
      }
    }
    
  }
}
</script>
<style lang="scss">
.layout--full-page {
  .vs-button {
    border-radius: 0 !important;
  }
}

.cyan-light {
  background: #8BAFB6 !important
}

.cyan-dark {
  background: #00818D !important
}

.blue-light {
  background: #164A8B !important
}

.blue-dark {
  background: #123058 !important
}

.yellow-light {
  background: #FFC700 !important
}

.yellow-dark {
  background: #FA712A !important
}

.green-light {
  background: #009D00 !important
}  

.grey-real {
  background: #AEB4C2 !important
}

.card-grey {
  background: #EAEFF0 !important
}

.font-italic {
  font-style: italic!important;
}

.uppercase {
  text-transform: uppercase !important;
}

.vs-button.uppercase {
  .vs-button-text {
    text-transform: uppercase !important;
  }
}

.fs-4 {
  font-size: 0.4rem !important;
}

.fs-6 {
  font-size: 0.6rem !important;
}

.fs-7 {
  font-size: 0.7rem !important;
}

.fs-8 {
  font-size: 0.8rem !important;
}

.fs-10 {
  font-size: 1rem !important;
}

.fs-11 {
  font-size: 1.1rem !important;
}

.fs-12 {
  font-size: 1.2rem !important;
}

.fs-14 {
  font-size: 1.4rem !important;
}

.fs-16 {
  font-size: 1.6rem !important;
}

.fs-20 {
  font-size: 2rem !important;
}

.fs-24 {
  font-size: 2.4rem !important;
}

.fs-28 {
  font-size: 2.8rem !important;
}

.fs-32 {
  font-size: 3.2rem !important;
}

.fs-36 {
  font-size: 3.6rem !important;
}

.fs-40 {
  font-size: 4rem !important;
}

.fs-52 {
  font-size: 5.2rem !important;
}

.swiper-pagination {
  .swiper-pagination-bullet {
      border-radius: 3px !important;
      width: 40px !important;
      height: 6px !important;
      background: transparent !important;
      border: 1px solid white !important;
      opacity: 0.8 !important;
  }
  .swiper-pagination-bullet-active {
      background: white !important
  }
}

.swiper-pagination2 {
  .swiper-pagination-bullet {
      border-radius: 3px !important;
      width: 28px !important;
      height: 4px !important;
      background: transparent !important;
      border: 1px solid white !important;
      opacity: 0.8 !important;
  }
  .swiper-pagination-bullet-active {
      background: white !important
  }
}

.swiper-button-prev, [dir] .swiper-container-rtl .swiper-button-next {
    border-radius: 100%;
    width: 40px !important;
    height: 40px !important;
    background: #ffffff;
    opacity: 0.6 !important;    
    background-image: none !important;
}

.swiper-button-next, [dir] .swiper-container-rtl .swiper-button-prev {
    border-radius: 100%;
    width: 40px !important;
    height: 40px !important;
    background: #ffffff;
    opacity: 0.6 !important;
    background-image: none !important;
}
</style>
