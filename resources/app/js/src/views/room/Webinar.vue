<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full room-webinar-main">
            <bread-crumb icon="webinar" type="svg" text="webinar" />
            <div class="w-full bg-white-grey">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-3/4 px-4 event-panel bg-white">
                        <div class="p-6 pb-2 flex flex-row items-center">
                            <span class="h6 font-bold">({{webinar_count}} {{$t('Available')}})</span>
                            <span class="h6 ml-10 flex flex-row items-center ml-2">
                                <!--span class="mr-6">{{$t('Category')}}</span> <feather-icon icon="ChevronRightIcon" /-->
                                <v-select v-model="selected_category" :options="categories" style="width: 200px;"/>
                            </span>
                            <span class="h6 ml-4 flex flex-row items-center ml-2">
                                <!--span class="mr-6">{{$t('Live')}}</span> <feather-icon icon="ChevronRightIcon" /-->
                                <v-select v-model="selected_type" :options="types" style="width: 160px;"/>
                            </span>
                            <span class="h6 ml-4 flex flex-row items-center ml-2 chevron-border">
                                <span class="mr-6">{{$t('Exhibitor')}}</span> <feather-icon icon="ChevronRightIcon" />
                            </span>
                        </div>
                        <div class="vx-row" >
                            <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in filtered_webinars" >
                                <div class="px-2">
                                    <webinar-card 
                                        :workdate="item.talk_date"
                                        :time="period(item.start_time, item.end_time)"
                                        :title="item.title"
                                        :expositor_name="`${item.user.first_name} ${item.user.last_name}`"
                                        :expositor_profession="`${item.user.address}`"
                                        :background="item.background"
                                        :user_img="`${item.user.avatar}`"
                                        :id="item.id" 
                                        :show="show"
                                        :add="addToBoard"/>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div class="vx-col w-1/4 event-los-panel bg-white-grey">
                        <div class="ml-8 bg-white" style="height: 100%">
                            <div class="p-6 fs-11 font-bold">
                              {{$t('Ads')}}
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
    WebinarCard,
    vSelect,
    swiper, 
    swiperSlide
  },
  data () {
    return {
      categories: [
        {id: 0, label: this.$t('Category')},
        {id: 1, label: this.$t('Reserved')},
        {id: 2, label: this.$t('Seen')}
      ],
      types: [
        {id: 0, label: this.$t('Type')},
        {id: 1, label: this.$t('Live')},
        {id: 2, label: this.$t('Recorded')}
      ],
      selected_type: {id: 0, label: this.$t('Type')},
      selected_category: {id: 0, label: this.$t('Category')},
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
  computed: {
    webinar_count () {
      let count = 0
      if ((this.selected_cat_id === 0 || this.selected_cat_id === 1) && this.webinars) {
        if (this.selected_type_id === 0) {
          count += this.webinars.length
        } else {
          count += this.webinars.filter((it) => it.live === this.selected_type_id).length
        }
      }
      return count
    },
    filtered_webinars () {
      if ((this.selected_cat_id === 0 || this.selected_cat_id === 1) && this.webinars) {
        if (this.selected_type_id === 0) {
          return this.webinars
        } else {
          return this.webinars.filter((it) => it.live === this.selected_type_id)
        }
      }
      return []
    },
    selected_cat_id () {
      if (this.selected_category) return this.selected_category.id
      return 0
    },
    selected_type_id () {
      if (this.selected_type) return this.selected_type.id
      return 0
    }
  },
  methods: {
    period (start_time, end_time) {
      if (start_time === null || end_time === null) return ''
      const sd = this.$date.timeFormat(start_time)
      const ed = this.$date.timeFormat(end_time)  
      return `${sd} - ${ed}`  
    },
    show (id) {
      this.$router.push(`/room/webinar/${id}`)
    },
    addToBoard (id) {
      this.$loading.show(this)
      this.$http.post('/api/room/webinar/add_to_board', {_id: id})
        .then((response) => {
          this.$loading.hide(this)
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: this.$t('Success'),
              text: this.$t('SuccessMessage'),
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } else {
            this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('FailMessage'),
              color: 'danger',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } 
        })  
    }
  },
  created () {
    this.$loading.show(this)
    this.$http.post('/api/room/webinar')
      .then((response) => {
        this.$loading.hide(this)
        const data = response.data
        this.webinars = data.webinars
      })
    this.$http.post('/api/stand/ads/get')
      .then((res) => {
        this.ads_list = res.data.ads
      })
    
  }
}
</script>
<style lang="scss">

.room-webinar-main {
    
    .page-content{
        background: white;
        
        .event-panel {
            padding: 0 !important;        
            font-size: 0.8rem;
            font-weight: 900;
            min-height: calc(var(--vh, 1vh) * 100 - 162px);
                    
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
            min-height: calc(var(--vh, 1vh) * 100 - 162px);
            
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