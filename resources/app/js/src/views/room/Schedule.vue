<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full room-schedule-main">
            <bread-crumb icon="topic" type="svg" text="agenda del congreso" />
            <div class="w-full h-full">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-1/4 md:w-1/4 sm:w-1/4 xs:w-1/4 event-panel bg-white-grey">
                        <div class="p-4 bg-cyan-dark">
                            <span class="h2 text-white font-bold">Evantos</span>
                            <span class="h2 text-white font-bold stroke-text">del dia</span>
                        </div>
                        <schedule-card 
                            :reserved="true"
                            :noborder="true"
                            :time="period(item.start_time, item.end_time)"
                            :title="item.title"
                            :expositor_name="`${item.user.first_name} ${item.user.last_name}`"
                            :expositor_profession="`${item.user.address}`"
                            :user_img="`${item.user.avatar}`" 
                            :id="item.id"
                            :add="addToBoard"
                            :show="show"
                            :key="`today-schedule-${index}`" v-for="(item, index) in webinars.filter((it) => it.talk_date === today)"/>                        
                    </div>
                    <div class="vx-col w-3/4 event-los-panel bg-white-grey">
                        <div class="flex flex-row justify-between items-center bg-blue-light">
                            <div class="p-4 ml-8">
                                <span class="h2 text-white font-bold stroke-text">Todos</span>
                                <span class="h2 text-white font-bold">los Evantos</span>
                            </div>
                            <div class="text-white h6 bg-blue-dark cursor-pointer font-normal px-2 py-6" @click="$router.push('/room/webinar')">
                                VER TODOS LOS WEBINARS
                            </div>
                        </div>
                        <div>

                        </div>
                        <div class="vx-row" >
                            <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in webinars" >
                                <schedule-card 
                                    :reserved="item.talk_date === today"
                                    :time="period(item.start_time, item.end_time)"
                                    :title="item.title"
                                    :expositor_name="`${item.user.first_name} ${item.user.last_name}`"
                                    :expositor_profession="`${item.user.address}`"
                                    :user_img="`${item.user.avatar}`" 
                                    :id="item.id"
                                    :add="addToBoard"
                                    :show="show" />
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
import ScheduleCard from './ScheduleCard.vue'
export default {
  components: {
    AppHeader,
    NavBackButton,
    BreadCrumb,
    Datepicker,
    ScheduleCard
  },
  data () {
    return {
      webinars: [],
      today: ''
    }
  },
  methods: {
    period (start_time, end_time) {
      const sd = this.$date.timeFormat(start_time)
      const ed = this.$date.timeFormat(end_time)  
      return `${sd} - ${ed}`  
    },
    show (id) {
      console.log(id)
    },
    addToBoard (id) {
      this.$http.post('/api/room/webinar/add_to_board', {_id: id})
        .then((response) => {
          if (response.data.status === 'ok') {
            console.log('ok')
          }
        })
    }  
  },
  created () {
    this.$http.post('/api/room/schedule')
      .then((response) => {
        console.log(response.data)
        const data = response.data
        this.today = data.today
        this.webinars = data.webinars
      })
  }
}
</script>
<style lang="scss">

.room-schedule-main {
    
    .page-content{
        background: white;
        
        .event-panel {
            padding: 0 !important;
            border-right: 1px solid silver;
            font-size: 0.8rem;
            font-weight: 900;
            color: #555;
            min-height: calc(var(--vh, 1vh) * 100 - 162px);

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
            min-height: calc(var(--vh, 1vh) * 100 - 162px);
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