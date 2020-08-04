<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full schedule-main">
            <bread-crumb icon="MonitorIcon" text="webinar" />
            <div class="w-full bg-white-grey">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-3/4 px-4 event-panel bg-white">
                        <div class="p-6 pb-2 flex flex-row items-center">
                            <span class="h6 font-bold">(8 DISPONIBLES)</span>
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
                        <div class="vx-row" >
                            <div class="vx-col w-1/3" :key="`all-schedule-${index}`" v-for="(item, index) in all_schedules" >
                                <div class="px-2">
                                    <webinar-card 
                                        :reserved="true"
                                        workdate = "01 DE AGOSTO"
                                        time="5 pm - 6:00 pm"
                                        title="Desarrollo de estrategias virtuales para desarrollo de marcas."
                                        expositor_company="Felipe Alenso Guererro"
                                        expositor_profession="Especilista en estrategias de marcas"
                                        user_img="maintenance-2.png" />
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

.schedule-main {
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

/* .schedule-main {
  .page-content{
      background: white;
      .calendar-panel {
        background: rgb(249, 250, 255) !important;  
      }

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

  .rounded-btn {
      border-radius: 1.5rem !important;
  }
  .event-schedule-color {
      color: rgb(128, 173, 116)
  }

  
}
.left-rounded {
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    padding: 0.6rem 0.4rem 0.6rem 1.5rem;
    color: white;
    font-size: 0.8rem;
}

.event-color {
    background: #00818D !important;
}

.event-second-color {
    background: rgb(247, 198, 95) !important;
}

.event-active-color {
    background: #283ac4 !important;
}

.event-inactive-color {
    background: #ababab !important;
}

.los-event-color {
    background: #164A8B !important;
}

.user-img {
    border-radius: 0.6rem;
    background-color: #33333355;
    height: 4rem !important;
    width: auto;
}
.desc-info {
    font-size: 0.8rem;
    padding: 0 2rem;
    font-style: italic;
    font-weight: 900;
}

.user-info {
    font-size: 0.7rem;
}

.topleft-corner-btn {
    border-radius: 0 !important;
    border-top-left-radius:  0.5rem !important;
}
.topright-corner-btn {
    border-radius: 0 !important;
    border-top-right-radius:  0.5rem !important;
}

.event-btn {
    font-size: 0.6rem !important;
    padding: 0.8rem 0.6rem !important;
} */


</style>