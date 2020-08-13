<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full setting-webinar-main">
            <bread-crumb icon="webinar" type="svg" text="webinar" />
            <div class="w-full bg-white-grey">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-3/4 px-4 event-panel bg-white">
                        <div class="p-6 pb-2 flex flex-row items-center">
                            <span class="h6 font-bold">(6 DISPONIBLES)</span>
                            <span class="h6 ml-10 flex flex-row items-center ml-2 chevron-border">
                                <span class="mr-6">CATEGORIA</span> <feather-icon icon="ChevronRightIcon" />
                            </span>
                            <span class="h6 ml-4 flex flex-row items-center ml-2 chevron-border">
                                <span class="mr-6">EN VIVO</span> <feather-icon icon="ChevronRightIcon" />
                            </span>
                            <span class="h6 ml-4 flex flex-row items-center ml-2 chevron-border">
                                <span class="mr-6">EXPOSITOR</span> <feather-icon icon="ChevronRightIcon" />
                            </span>
                        </div>
                        <div class="px-8">
                            <h2 class="font-bold my-4">RESERVADOS O AGREGADOS</h2>
                        </div>
                        <div class="vx-row" >
                            <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in reserved_webinars" >
                                <div class="px-2">
                                    <webinar-card 
                                        :reserved="true"
                                        :workdate="item.talk_date"
                                        :time="period(item.start_time, item.end_time)"
                                        :title="item.title"
                                        :expositor_name="`${me.first_name} ${me.last_name}`"
                                        :expositor_profession="`${me.address}`"
                                        :user_img="`${me.avatar}`"
                                        :live="item.live===1"
                                        />
                                </div>
                            </div>    
                        </div>
                        <div class="px-8">
                            <h2 class="font-bold my-4">VISTOS</h2>
                        </div>
                        <div class="vx-row" >
                            <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in past_webinars" >
                                <div class="px-2">
                                    <webinar-card 
                                        :workdate="item.talk_date"
                                        :time="period(item.start_time, item.end_time)"
                                        :title="item.title"
                                        :expositor_name="`${me.first_name} ${me.last_name}`"
                                        :expositor_profession="`${me.address}`"
                                        :user_img="`${me.avatar}`"
                                        :live="item.live===1" />
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div class="vx-col w-1/4 event-los-panel bg-white-grey">
                        <div class="ml-8 bg-white" style="height: 100%">
                            <div class="p-6 font-bold">
                                <span class="h6">PUBLICIDAD</span>
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
export default {
  components: {
    AppHeader,
    NavBackButton,
    BreadCrumb,
    Datepicker,
    WebinarCard
  },
  data () {
    return {
      me: {},
      reserved_webinars: [],
      past_webinars: []
    }
  },
  methods: {
    period (start_time, end_time) {
      const sd = this.$date.timeFormat(start_time)
      const ed = this.$date.timeFormat(end_time)  
      return `${sd} - ${ed}`  
    }  
  },
  created () {
    this.me = JSON.parse(localStorage.getItem('userInfo'))
    this.$http.post('/api/setting/webinar')
      .then((response) => {
        console.log(response.data)
        const data = response.data
        this.reserved_webinars = data.reserved_webinars
        this.past_webinars = data.past_webinars
        
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