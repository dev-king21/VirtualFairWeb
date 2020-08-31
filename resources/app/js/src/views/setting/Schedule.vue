<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full setting-schedule-main">
            <bread-crumb icon="topic" type="svg" :text="$t('MySchedule')" />
            <div class="w-full">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-1/4 md:w-1/4 sm:w-1/4 xs:w-1/4 event-panel bg-white-grey">
                        <div class="p-4 bg-cyan-dark">
                            <span class="h2 text-white font-bold stroke-text">{{$t('My')}}</span>
                            <span class="h2 text-white font-bold">{{$t('Event')}}:</span>
                        </div>
                        <div :key="`webinar-date-${index}`" v-for="(wdate, index) in webinars_dates">
                            <div class="mt-8 ml-6 h6 font-bold">
                                {{wdate.talk_date}}
                                <!-- JUEVES 04 de AGOSTO -->
                            </div>
                            <schedule-card 
                                :reserved="true"
                                :noborder="true"
                                :time="period(wnar.start_time, wnar.end_time)"
                                :title="wnar.title"
                                :expositor_name="`${me.first_name} ${me.last_name}`"
                                :expositor_profession="`${me.address}`"
                                :user_img="`${me.avatar}`"
                                :key="`webinar-date-${index}`" v-for="(wnar, index) in webinars.filter((it) => it.talk_date === wdate.talk_date)" />        
                        </div>
                    </div>
                    <div class="vx-col w-1/2 event-los-panel bg-white">
                        <div class="flex flex-row justify-between items-center bg-blue-light">
                            <div class="p-4 ml-8">
                                <span class="h2 text-white font-bold">{{$t('My')}}</span>
                                <span class="h2 text-white font-bold stroke-text">{{$t('Quote')}}:</span>
                            </div>
                        </div>
                        <div :key="`dating-item-${index}`" v-for="(apo_date, index) in appointments_dates">
                            <div class="mt-8 ml-6 h6 font-bold">
                                <!-- JUEVES 04 de AGOSTO -->
                                {{apo_date.schedule_date}}
                            </div>
                            <div :key="`dating-schedule-${index}`" v-for="(apo, index) in appointments.filter((it) => it.schedule_date === apo_date.schedule_date)" >
                                <dating-card 
                                    :time="period(apo.start_time, apo.end_time)"
                                    :stand_no="`${apo.stand.id}`"
                                    :expositor_profession="apo.stand.user.address"
                                    :logo="`${apo.stand.logo}`" />
                            </div>    
                        </div>
                    </div>
                    <div class="vx-col lg:w-1/4 md:w-1/4 sm:w-1/4 xs:w-1/4 event-panel bg-white">
                        <div class="uppercase fs-11 mt-8 ml-4 font-bold mb-4">{{$t('Ads')}}</div>
                        <div class="ml-4 mr-8">
                          <swiper :options="swiperOption">
                            <swiper-slide :key="`swiper-item-${index}`" v-for="(item, index) in ads_list">
                              <img class="responsive" :src="`/fair_image/${item.url ? item.url : 'placeholder.png'}`" alt="">
                              <!-- @assets/images/pages/carousel/banner-16.jpg-->
                            </swiper-slide>
                            <div class="swiper-pagination swiper-pagination2" slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev">
                                <feather-icon svgClasses="w-6 h-6 mt-3 ml-3" style="color: black" icon="ChevronLeftIcon"/>
                            </div>
                            <div class="swiper-button-next" slot="button-next">
                                <feather-icon svgClasses="w-6 h-6 mt-3 ml-3" style="color: black" icon="ChevronRightIcon"/>
                            </div>
                          </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import Datepicker from 'vuejs-datepicker'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import ScheduleCard from './ScheduleCard.vue'
import DatingCard from './DatingCard.vue'
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    AppHeader,
    NavBackButton,
    BreadCrumb,
    Datepicker,
    ScheduleCard,
    DatingCard,
    swiper,
    swiperSlide
  },
  data () {
    return {
      me: {},
      appointments_dates: [],
      appointments: [],
      webinars_dates: [],
      webinars: [],
      ads_list: [],
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination2',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    period (start_time, end_time) {
      if (start_time === null || end_time === null) return ''
      const sd = this.$date.timeFormat(start_time)
      const ed = this.$date.timeFormat(end_time)  
      return `${sd} - ${ed}`  
    }  
  },
  created () {
    this.me = JSON.parse(localStorage.getItem('userInfo'))
    this.$loading.show(this)
    this.$http.post('/api/setting/schedule')
      .then((response) => {
        this.$loading.hide(this)
        const data = response.data
        this.appointments_dates = data.appointments_dates
        this.appointments = data.appointments
        this.webinars_dates = data.webinars_dates
        this.webinars = data.webinars
      })
    this.$http.post('/api/stand/ads/get')
      .then((res) => {
        this.ads_list = res.data.ads
      })
    this.$http.post('/api/stand/ads/get')
      .then((res) => {
        this.ads_list = res.data.ads
      })
  }
}
</script>
<style lang="scss">

.setting-schedule-main {
  .page-content{
      background: white;

      .event-panel {
        padding: 0 !important;
        border-right: 1px solid silver;
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
        
        .stroke-text {
            color: transparent;
            -webkit-text-fill-color: transparent; 
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #EEEEEEEE;
        }
      }

       .event-los-panel {
        padding: 0 !important;
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
        
        .stroke-text {
            color: transparent;
            -webkit-text-fill-color: transparent; 
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #EEEEEEEE;
        }
      }

  }
  .vx-row {
      margin: 0 !important;
  }

  .vx-col {
      padding: 0 !important;
  }
}


</style>