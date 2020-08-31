<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full setting-webinar-main">
            <bread-crumb icon="webinar" type="svg" :text="$t('MyWebinar')" />
            <div class="w-full bg-white-grey">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-3/4 px-4 event-panel bg-white">
                        <div class="p-6 pb-2 flex flex-row items-center">
                            <span class="h6 font-bold">({{webinar_count}} {{$t('Available')}})</span>
                            <span class="h6 ml-10 flex flex-row items-center ml-2">
                                <!-- <span class="mr-6">{{$t('Category')}}</span> <feather-icon icon="ChevronRightIcon" /> -->
                                <v-select v-model="selected_category" :options="categories" style="width: 200px;"/>
                            </span>
                            <span class="h6 ml-4 flex flex-row items-center ml-2">
                                <v-select v-model="selected_category" :options="categories" style="width: 160px;"/>
                            </span>
                            <span class="h6 ml-4 flex flex-row items-center ml-2">
                                <span class="mr-6">{{$t('Exhibitor')}}</span> <feather-icon icon="ChevronRightIcon" />
                            </span>
                        </div>
                        <div v-if="selected_cat_id === 0 || selected_cat_id === 1">
                          <div class="px-8">
                              <h2 class="font-bold my-8 uppercase">{{$t('Reserved')}} Or {{$t('Aggregates')}}</h2>
                          </div>
                          <div class="vx-row" >
                              <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in reserved_webinars" >
                                  <div class="px-2">
                                      <webinar-card 
                                          :reserved="true"
                                          :workdate="item.talk.talk_date"
                                          :time="period(item.talk.start_time, item.talk.end_time)"
                                          :title="item.talk.title"
                                          :expositor_name="`${item.talk.user.first_name} ${item.talk.user.last_name}`"
                                          :expositor_profession="`${item.talk.user.address}`"
                                          :background="item.talk.background"
                                          :user_img="`${item.talk.user.avatar}`"
                                          :live="item.talk.live===1"
                                          />
                                  </div>
                              </div>    
                          </div>
                        </div>
                        <div v-if="selected_cat_id === 0 || selected_cat_id === 2">
                          <div class="px-8">
                              <h2 class="font-bold uppercase my-8">{{$t('Seen')}} </h2>
                          </div>
                          <div class="vx-row" >
                              <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in past_webinars" >
                                  <div class="px-2">
                                      <webinar-card 
                                          :workdate="item.talk.talk_date"
                                          :time="period(item.talk.start_time, item.talk.end_time)"
                                          :title="item.talk.title"
                                          :expositor_name="`${me.first_name} ${me.last_name}`"
                                          :expositor_profession="`${me.address}`"
                                          :background="item.talk.background"
                                          :user_img="`${me.avatar}`"
                                          :live="item.talk.live===1" />
                                  </div>
                              </div>    
                          </div>
                        </div>
                    </div>
                    <div class="vx-col w-1/4 event-los-panel bg-white-grey">
                        <div class="ml-8 bg-white" style="height: 100%">
                            <div class="p-6 font-bold">
                                <span class="h6 font-bold upper-case">{{$t('Ads')}} </span>
                            </div>
                            <div class="px-4">
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
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import Datepicker from 'vuejs-datepicker'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import WebinarCard from './WebinarCard.vue'
import vSelect from 'vue-select'
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    AppHeader,
    NavBackButton,
    BreadCrumb,
    Datepicker,
    vSelect,
    WebinarCard,
    swiper,
    swiperSlide
  },
  data () {
    return {
      me: {},
      reserved_webinars: [],
      past_webinars: [],
      categories: [
        {id: 0, label: this.$t('Category')},
        {id: 1, label: this.$t('Live')},
        {id: 2, label: this.$t('Recorded')}
      ],
      selected_category: {id: 0, label: this.$t('Category')},
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
  computed: {
    available () {
      return  ((this.selected_cat_id === 0 || this.selected_cat_id === 1) && this.reserved_webinars && this.reserved_webinars.length !== 0) || 
              ((this.selected_cat_id === 0 || this.selected_cat_id === 2) && this.past_webinars && this.past_webinars.length !== 0)
    },
    webinar_count () {
      let count = 0
      if ((this.selected_cat_id === 0 || this.selected_cat_id === 1) && this.reserved_webinars) count += this.reserved_webinars.length
      if ((this.selected_cat_id === 0 || this.selected_cat_id === 2) && this.past_webinars) count += this.past_webinars.length
      return count
    },
    selected_cat_id () {
      if (this.selected_category) return this.selected_category.id
      return 0
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
    this.$http.post('/api/setting/webinar')
      .then((response) => {
        this.$loading.hide(this)
        const data = response.data
        console.log(data)
        this.reserved_webinars = data.reserved_webinars
        this.past_webinars = data.past_webinars
      })
    this.$http.post('/api/stand/ads/get')
      .then((res) => {
        this.ads_list = res.data.ads
      })
  }
}
</script>
<style lang="scss">

.setting-webinar-main {
  .page-content{
      background: white;

      .event-panel {
        padding: 0 !important;        
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
        
        .chevron-border {
           border: 1px solid #f2f2f2;
           border-radius: 0.5rem;
           padding: 0.4rem; 
        }
      }

       .event-los-panel {
        padding: 0 !important;
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
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