<template>
    <div class="w-full bg-white">
        <app-header activeItem="0"></app-header>
        <div v-if="sustain">
            <nav-back-button class="absolute" style="z-index: 2000"/>
            <swiper :options="swiperOption">
                <swiper-slide :key="`sus-swiper-item-${index}`" v-for="(item, index) in sustainability_images">
                  <img class="responsive" :src="`/fair_image/${item.url}`" alt="banner">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev">
                    <feather-icon svgClasses="w-6 h-6 mt-3 ml-3" style="color: black" icon="ChevronLeftIcon"/>
                </div>
                <div class="swiper-button-next" slot="button-next">
                    <feather-icon svgClasses="w-6 h-6 mt-3 ml-3" style="color: black" icon="ChevronRightIcon"/>
                </div>
            </swiper>
        </div>
        <div class="my-8">
            <h1 class="font-bold text-center mb-8 fs-40" >{{sustain_title}}</h1>
            <div class="mx-32 fs-14 text-black" v-html="sustainability_text">
            </div>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import AppHeader from '@/layouts/components/Header.vue'

export default {
  data () {
    return {
      sustain: {},
      sustainability_images: [],
      sustain_title: '',
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    NavBackButton,
    AppHeader
  },
  computed: {
    sustainability_text () {
      if (!this.sustain || !this.sustain.description) return ''
      return this.sustain.description.replace(/\n/g, '<br>')
    }
  },
  methods: {
    
  },
  created () {
    this.$http.post('/api/fair/sustainability')
      .then((res) => {
        this.sustain = res.data.sustainability
        if (this.sustain){
          this.sustainability_images = this.sustain.sustainability_images
          this.sustain_title = this.sustain.title
        }
          
        if (!this.sustain) {
          this.$router.push('/home')
        }
      })
  }
}
</script>
<style lang="scss">


</style>