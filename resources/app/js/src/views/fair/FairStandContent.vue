<template>
<div class="w-full" id="home">
  <app-header activeItem="2"></app-header>
  <div class="w-full">
    <!-- <div class="vx-row mb-2">
        <vx-card>
          <div class="flex flex-start justify-between items-center flex-wrap ml-4">
            <div class="flex flex-start items-center flex-wrap">
              <router-link :to="`/fair/country/${fair.id}`" class="h2 font-bold text-success">{{fair.name}}</router-link>
              <template v-if="country.code !== undefined">
                <feather-icon class="ml-2" icon="ChevronRightIcon"></feather-icon>
                <router-link :to="`/fair/country/${fair.id}/${country.id}`">
                  <img class="ml-4 country_flag" :src="`https://www.countryflags.io/${country.code}/shiny/48.png`"> 
                </router-link>
                <router-link :to="`/fair/country/${fair.id}/${country.id}`">
                  <h3 class="text-warning ml-4">{{country.name}}</h3>
                </router-link>
              </template>
              <template v-if="stand.user_id">
                <feather-icon class="ml-2" icon="ChevronRightIcon"></feather-icon>
                <img class="ml-4 logo_img" :src="`/fair_image/logo-1.png`"> 
                <h3 class="text-warning ml-4">{{stand.company}}</h3>
              </template>
            </div>
            <div>
              <span class="mr-4 mt-4">Period: </span>
              <span class="text-warning">{{fair.start_date}} </span>
              <span> ~ </span>
              <span class="text-warning">{{fair.end_date}}</span>
            </div>
          </div>
        </vx-card>
    </div> -->
    <div class="vx-row" style="margin: 0; padding: 0">
        <div class="relative mt-base" v-if="fair">
            <template v-if="stand_type !== undefined">
              <img class="relative responsive" ref="refStandImg" @load="onImgLoad" :src="`/fair_image/${stand_type.interior}`">
            </template>
            <template  v-for="(item, index) in stand.stand_contents">
                <img v-if="loading" class="stand_img absolute"
                    :src="`/fair_image/${item.content}`"
                    :key="`stand-${index}`"
                    :width="`${item.stand_type_item.width * $img_width}`"
                    :height="`${item.stand_type_item.height * $img_height}`"
                    :style="`top: ${item.stand_type_item.top * 100}%; left: ${item.stand_type_item.left * 100}%`" >
            </template>
            <div v-if="loading" class="absolute w-full stand-contents flex items-center justify-center">
              <vs-button @click="goto('card-gallery')" type="relief" class="ml-8 items-center" color="success" icon-pack="feather" icon="icon-image">
                {{$t('Gallery')}}
              </vs-button>
              <vs-button type="relief" class="ml-8" color="success" icon-pack="feather" icon="icon-layers">
                {{$t('Portfolio')}}
              </vs-button>
              <vs-button type="relief" class="ml-8" color="success" icon-pack="feather" icon="icon-download-cloud">
                {{$t('Files')}}
              </vs-button>
              <vs-button type="relief" class="ml-8" color="success" icon-pack="feather" icon="icon-airplay">
                {{$t('Appointment')}}
              </vs-button>
              <vs-button type="relief" class="ml-8" color="success" icon-pack="feather" icon="icon-link">
                {{$t('Contact')}}
              </vs-button>
            </div>
        </div>
    </div>
    <div class="vx-row mx-20">
      <vx-card class="mt-base" ref="card-gallery" v-show="stand.gallerys && stand.gallerys.length">
        <div class="text-success h2 mb-4">{{$t('Gallery')}}</div>
        <div style="height: 800px;">
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" :dir="$vs.rtl ? 'rtl' : 'ltr'" key="swiper-main">
              <swiper-slide v-for="(gallery_item, index) in stand.gallerys" :key="`gallery-main-${index}`">
                <img class="responsive" :src="`/fair_image/${gallery_item.url}`" alt="banner">
              </swiper-slide>
              <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>

            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs" :dir="$vs.rtl ? 'rtl' : 'ltr'" key="swiper-thumb">
              <swiper-slide v-for="(gallery_item, index) in stand.gallerys" :key="`gallery-thumb-${index}`">
                <img class="responsive" :src="`/fair_image/${gallery_item.url}`" alt="banner">
              </swiper-slide>
            </swiper>
        </div>
      </vx-card>
      <vx-card class="mt-base" v-show="stand.portfolios && stand.portfolios.length">
        <div class="text-success h2 mb-10">{{$t('Portfolio')}}</div>
        <div class="vx-row mx-5">
          <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" v-for="(portfolio_item, index) in stand.portfolios" :key="`portfolio-item-${index}`">
              <vx-card class="hover-card">
                <div slot="no-body" class="card-img-wrapper">
                  <img class="responsive card-img-top" @click="openPortfolio(index)" :src="`/fair_image/${portfolio_item.url}`">
                </div>
                <div class="flex justify-between items-center flex-wrap">
                  <div class="text-warning h3 mb-3">{{portfolio_item.name}}</div>
                  <div>
                    {{portfolio_item.description}}
                  </div>
                </div>
              </vx-card>
          </div>
        </div>
      </vx-card>
      <vx-card class="mt-base" v-show="stand.files && stand.files.length">
        <div class="text-success h2 mb-10">{{$t('Files')}}</div>
        <div v-for="(file_item, index) in stand.files" :key="`file-item-${index}`">
          <router-link :to="`/fire_image/${file_item.url}`">
            <feather-icon class="ml-2" icon="DownloadCloudIcon"></feather-icon>
            {{file_item.name}}
          </router-link>
        </div>
      </vx-card>
      <vx-card class="mt-base" >
        <div class="text-success h2 mb-10">{{$t('Contact')}}</div>
        <div class="vx-row mx-5">
          <div class="vx-col w-full xs:w-full sm:w-full md-1/2 lg:w-1/2 mb-base">
            <div class="flex flex-start items-center flex-wrap">
              <feather-icon class="w-5 h-5 mr-2" icon="MailIcon"></feather-icon>
              <h5>email: </h5>
            </div>
            <div class="flex flex-start items-center flex-wrap mt-3">
              <feather-icon class="w-5 h-5 mr-2" icon="PhoneIcon"></feather-icon>
              <h5>{{$t('Phone')}}: </h5>
            </div>
            <div class="flex flex-start items-center flex-wrap mt-3">
              <feather-icon class="w-5 h-5 mr-2" icon="MapPinIcon"></feather-icon>
              <h5>{{$t('Address')}}: </h5>
            </div>
            <div class="flex flex-start mt-10">
              <!-- <router-link v-if="stand.contact.google" :to="``"> -->
                <img class="social-icon" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/google_plus_icon-128.png">
              <!-- </router-link> -->
                <img class="social-icon" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/facebook_icon-128.png">
                <img class="social-icon" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Twitter_icon-128.png">
                <img class="social-icon" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/You_Tube_icon-128.png">
                <img class="social-icon" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-128.png">
                <img class="social-icon" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/instagram_icon-128.png">
                <img class="social-icon" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Skype_icon-128.png">
                <img class="social-icon" src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Pinterest_icon-128.png">
            </div>
          </div>
          <div class="vx-col w-full xs:w-full sm:w-full md-1/2 lg:w-1/2 mb-base">
            <GmapMap
              :center="center"
              :zoom="7"
              map-type-id="terrain"
              style="width: 100%; height: 250px">
              <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              />
            </GmapMap>
          </div>
        </div>
      </vx-card>
    </div>
    <LightBox ref="lightbox" :media="media" :show-caption="true" :show-light-box="false" />
  </div>
  <!-- <app-footer></app-footer> -->
</div>
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import AppHeader from '@/layouts/components/Header.vue'
import AppFooter from '@/layouts/components/Footer.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import LightBox from 'vue-image-lightbox'

export default {
  components: {
    AppHeader,
    AppFooter,
    swiper,
    swiperSlide,
    LightBox
  },
  data () {
    return {
      fair: {},
      country: {},
      stand: {},
      stand_type: {},
      img_width: 0,
      img_height: 0,
      loading: false,
      swiperOptionTop: {
        spaceBetween: 10,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        { position: { lat: 10.0, lng: 10.0 } },
        { position: { lat: 11.0, lng: 11.0 } }
      ],
      media: []
    }
  },
  methods: {
    logoImage (logo) {
      if (logo === null) return '/fair_image/placeholder.png'  
      return `/fair_image/${logo}.png`
    },
    goStandPage (stand_id, is_empty) {
      if (is_empty) return this.$router.push({path: `/fair/stand/${stand_id}`})  
      return this.$router.push({path: `/fair/stand/${stand_id}`})  
    },
    onImgLoad () {
      this.img_width = this.$refs.refStandImg.clientWidth
      this.img_height = this.$refs.refStandImg.clientHeight
      this.loading = true
    },
    openPortfolio (index) {
      this.$refs.lightbox.showImage(index)
    },
    goto (refName) {
      const element = this.$refs[refName]
      window.scrollTo(0, element.offsetTop)
    }
  },
  created () {
    if (!this.$route.params.fair_id || !this.$route.params.country_id || !this.$route.params.stand_id) {
      return this.$router.push('/pages/error-404')
    }
    
    this.$loading.show(this)
    this.$http.get(`/api/fair/show/${this.$route.params.fair_id}/${this.$route.params.country_id}/${this.$route.params.stand_id}`)
      .then((response) => {
        const data = response.data
        this.fair = data.fair
        this.country = data.country
        this.stand = data.stand
        this.stand_type = data.stand_type
        this.stand.gallerys = [
          {
            url: 'fair_building1.jpeg'
          },
          {
            url: 'fair_building2.jpeg'
          },
          {
            url: 'fair_building3.jpeg'
          },
          {
            url: 'fair_building4.jpeg'
          },
          {
            url: 'fair_building5.jpeg'
          }
        ]
        this.stand.portfolios = [
          {
            url: 'fair_building1.jpeg',
            name: 'portfolio name 1',
            description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
          },
          {
            url: 'fair_building2.jpeg',
            name: 'portfolio name 2',
            description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
          },
          {
            url: 'fair_building3.jpeg',
            name: 'portfolio name 3',
            description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
          },
          {
            url: 'fair_building4.jpeg',
            name: 'portfolio name 4',
            description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
          },
          {
            url: 'fair_building5.jpeg',
            name: 'portfolio name 5',
            description: 'User: You can join stands, request appointments for chat (video), see the stands and conference rooms, you can manage a stand when the administrator assigns it to you.'
          }
        ]
        this.stand.files = this.stand.portfolios
        this.$loading.hide(this)

        this.stand.portfolios.forEach(element => {
          this.media.push({
            thumb: `/fair_image/${element.url}`, src: `/fair_image/${element.url}`, caption: element.name
          })
        })
      })
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>
<style lang="scss">
  .stand_img {
      width: 150px;
      height: 150px;
  }

  .logo_img {
    max-width: 50px;
    max-height: 50px;
    margin-left: 100px;
    background: white;
    box-shadow: 1px 2px 3px #33333355;
  }

  .stand-contents {
    height: 80px;
    background: #FFFFFF88;
    bottom: 0px;
    .vs-button {
      border-radius: 0 !important;
      font-weight: 700;
      font-size: 1.6rem;
      padding: 1rem 2rem !important;
    }
  }

  .hover-card {
    .card-img-wrapper {
        overflow: hidden;
    }
    .card-img-wrapper:hover{
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        background: #151515;
    }
    .card-img-top {
        transition: all 0.4s ease-in-out;
        cursor: pointer
    }
    .card-img-top:hover {
        opacity: 0.8;
        transform: scale(1.2);
        transform-origin: 50% 50%;
        overflow: hidden;
        
    }
  }

  .social-icon {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }

  .swiper-container {
    background-color: #000;
  }
  .gallery-top {
    height: 80%!important;
    width: 100%;
  }
  .gallery-thumbs {
    height: 20%!important;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }

  .vue-lb-container {
    z-index: 10001 !important;
    .vue-lb-info {
      height: 60px !important;
      padding-top: 20px !important;
      font-size: 20px;
      color: #FFAA00
    }
  }
</style>