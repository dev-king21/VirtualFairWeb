<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full room-schedule-main">
            <bread-crumb icon="BookIcon" text="agenda del congreso" />
            <div class="w-full">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-1/4 md:w-1/4 sm:w-1/4 xs:w-1/4 event-panel bg-white-grey">
                        <div class="p-4 bg-cyan-dark">
                            <span class="h2 text-white font-bold">Evantos</span>
                            <span class="h2 text-white font-bold stroke-text">del dia</span>
                        </div>
                        <schedule-card 
                            :reserved="true"
                            :noborder="true"
                            time="5 pm - 6:00 pm"
                            title="Desarrollo de estrategias virtuales para desarrollo de marcas."
                            expositor_name="Felipe Alenso Guererro"
                            expositor_profession="Especilista en estrategias de marcas"
                            user_img="maintenance-2.png" :key="`today-schedule-${index}`" v-for="(item, index) in today_schedules"/>                        
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
                            <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in all_schedules" >
                                <schedule-card 
                                    :reserved="true"
                                    time="5 pm - 6:00 pm"
                                    title="Desarrollo de estrategias virtuales para desarrollo de marcas."
                                    expositor_name="Felipe Alenso Guererro"
                                    expositor_profession="Especilista en estrategias de marcas"
                                    user_img="maintenance-2.png" />
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
      today_schedules: [],  
      all_schedules: []
    }
  },
  created () {
    const list = []
    for (let i = 0; i < 9; i++) {
      list.push(i)
    }
    this.today_schedules = list.filter((it) => it < 3)   
    this.all_schedules = list
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