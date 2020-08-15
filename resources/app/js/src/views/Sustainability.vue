<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div>
            <nav-back-button class="absolute" style="z-index: 2000"/>
            <swiper :options="swiperOption" :dir="$vs.rtl ? 'rtl' : 'ltr'" :key="$vs.rtl">
                <swiper-slide>
                <img class="responsive" src="@assets/images/pages/carousel/banner-16.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                <img class="responsive" src="@assets/images/pages/carousel/banner-13.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                <img class="responsive" src="@assets/images/pages/carousel/banner-4.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                <img class="responsive" src="@assets/images/pages/carousel/banner-2.jpg" alt="banner">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev">
                    <feather-icon svgClasses="w-6 h-6 mt-3 ml-3" style="color: black" icon="ChevronLeftIcon"/>
                </div>
                <div class="swiper-button-next" slot="button-next">
                    <feather-icon svgClasses="w-6 h-6 mt-3 ml-3" style="color: black" icon="ChevronRightIcon"/>
                </div>
            </swiper>
            <!-- Sostenibilidad -->
        </div>
        <div class="mt-8">
            <h1 class="font-bold text-center mb-8 fs-40" >Titular Lorem ipsum</h1>
            <div class="mx-32 fs-14 text-black">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<br><br>
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br><br>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.<br><br>
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br><br>
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

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
  }
}
</script>
<style lang="scss">
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

.swiper-button-prev, [dir] .swiper-container-rtl .swiper-button-next {
    border-radius: 100%;
    width: 45px;
    height: 45px;
    background: #ffffff;
    opacity: 0.6 !important;    
    background-image: none !important;
}

.swiper-button-next, [dir] .swiper-container-rtl .swiper-button-prev {
    border-radius: 100%;
    width: 45px;
    height: 45px;
    background: #ffffff;
    opacity: 0.6 !important;
    background-image: none !important;
}

</style>