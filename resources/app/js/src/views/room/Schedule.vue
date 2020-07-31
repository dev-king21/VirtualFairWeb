<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <div class="w-full home-bg-img schedule-main">
            <bread-crumb icon="BookIcon" text="agenda del congreso" />
            <div class="w-full">
                <div class="vx-row page-content">
                    <div class="vx-col lg:w-1/5 md:w-1/5 sm:w-1/5 xs:w-1/5">
                        <div class="mt-base font-bold text-center calendar-panel" >
                            Seleccione un dia para ver los eventos
                        </div>
                        <div class="text-center mb-4">
                            <datepicker class="w-full" :inline="true"/>
                        </div>
                        <div class="text-center mb-4">
                            <vs-button class="rounded-btn" color="rgb(75, 209, 159)">
                                VER TODO EL MES
                            </vs-button>
                        </div>
                    </div>
                    <div class="vx-col lg:w-1/5 md:w-1/5 sm:w-1/5 xs:w-1/5 event-panel">
                        <div class="pt-base pb-4 px-10 event-color">
                            <h1 class="text-white font-bold">Evantos</h1>
                            <h1 class="text-white font-bold stroke-text">del dia</h1>
                        </div>
                        <div>
                            <div class="flex flex-row justify-between items-center mt-2">
                                <span class="flex items-center font-bold ml-4">
                                    <feather-icon icon="ClockIcon" class="event-schedule-color"/>
                                    <span class="ml-2">5 pm - 6:00 pm</span>
                                </span>
                                <span class="left-rounded event-color">
                                    RESERVADO
                                </span>
                            </div>
                            <div class="flex flex-row justify-between items-center mt-2">
                                <span class="flex items-center ml-4">
                                    <feather-icon icon="MonitorIcon" class="event-schedule-color"/>
                                    <span class="ml-2 font-bold">WEBINAR</span>
                                </span>
                                <span class="mr-2 font-bold" style="color: black">
                                    SALON TALAMANSA
                                </span>
                            </div>
                            <div class="flex flex-row justify-between items-center mt-2">
                                <span class="flex items-center ml-4">
                                    <feather-icon icon="MonitorIcon" class="event-schedule-color"/>
                                    <span class="ml-2 font-bold">CONFERENCIA:</span>
                                </span>
                            </div>
                            <div class="desc-info">
                                Desarrollo de estrategias virtuales para desarrollo de marcas. 
                            </div>
                            <div class="flex flex-row items-center mt-2 px-4">
                                <img class="user-img" src="@assets/images/pages/maintenance-2.png"/>
                                <div class="ml-4 user-info">
                                    Lic Felipe Alenso Guererro <br>
                                    Especilista en estrategias de marcas
                                </div>
                            </div>
                            <div class="flex flex-row justify-between items-center mt-2">
                                <vs-button class="event-second-color topright-corner-btn event-btn">
                                    AGREGAR A MI AGENDA 
                                </vs-button>
                                <vs-button class="event-active-color topleft-corner-btn event-btn" icon-pack="feather" icon="icon-slack">
                                    <span class="px-3">INICIAR</span>
                                </vs-button>
                            </div>
                            <vs-divider class="px-2" />
                        </div>
                        <div>
                            <div class="flex flex-row justify-between items-center mt-2">
                                <span class="flex items-center font-bold ml-4">
                                    <feather-icon icon="ClockIcon" class="event-schedule-color"/>
                                    <span class="ml-2">Disponsable a partir de las 7:00pm hasta el 31 de Agosto</span>
                                </span>
                            </div>
                            <div class="flex flex-row justify-between items-center mt-2">
                                <span class="flex items-center ml-4">
                                    <feather-icon icon="MonitorIcon" class="event-schedule-color"/>
                                    <span class="ml-2 font-bold">WEBINAR</span>
                                </span>
                                <span class="mr-2 font-bold" style="color: black">
                                    SALON LIMON
                                </span>
                            </div>
                            <div class="flex flex-row justify-between items-center mt-2">
                                <span class="flex items-center ml-4">
                                    <feather-icon icon="MonitorIcon" class="event-schedule-color"/>
                                    <span class="ml-2 font-bold">CONFERENCIA:</span>
                                </span>
                            </div>
                            <div class="desc-info">
                                Desarrollo de estrategias virtuales para desarrollo de marcas. 
                            </div>
                            <div class="flex flex-row items-center mt-2 px-4">
                                <img class="user-img" src="@assets/images/pages/maintenance-2.png"/>
                                <div class="ml-4 user-info">
                                    Lic Felipe Alenso Guererro <br>
                                    Especilista en estrategias de marcas
                                </div>
                            </div>
                            <div class="flex flex-row justify-between items-center mt-2">
                                <vs-button class="event-second-color topright-corner-btn event-btn">
                                    AGREGAR A MI AGENDA 
                                </vs-button>
                                <vs-button class="event-inactive-color topleft-corner-btn event-btn" icon-pack="feather" icon="icon-slack">
                                    <span class="px-3">INICIAR</span>
                                </vs-button>
                            </div>
                            <vs-divider class="px-2" />
                        </div>
                    </div>
                    <div class="vx-col w-3/5 event-los-panel">
                        <div class="pt-base pb-4 px-10 los-event-color">
                            <span class="h2 text-white font-bold stroke-text">Todos</span>
                            <span class="h2 text-white font-bold">los Evantos</span>
                        </div>
                        <div>

                        </div>
                        <div class="vx-row" >
                            <div class="vx-col w-1/3" v-for="(iss) in vlist" :key="iss">
                                <div class="px-2">
                                    <div class="flex flex-row justify-between items-center mt-2">
                                        <span class="flex items-center font-bold ml-2">
                                            <feather-icon icon="ClockIcon" class="event-schedule-color"/>
                                            <span class="ml-2">5 pm - 6:00 pm</span>
                                        </span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mt-2">
                                        <span class="flex items-center ml-2">
                                            <feather-icon icon="MonitorIcon" class="event-schedule-color"/>
                                            <span class="ml-2 font-bold">WEBINAR</span>
                                        </span>
                                        <span class="mr-2 font-bold" style="color: black">
                                            SALON LIMON
                                        </span>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mt-2">
                                        <span class="flex items-center ml-2">
                                            <feather-icon icon="MonitorIcon" class="event-schedule-color"/>
                                            <span class="ml-2 font-bold">CONFERENCIA:</span>
                                        </span>
                                    </div>
                                    <div class="desc-info">
                                        Desarrollo de estrategias virtuales para desarrollo de marcas. 
                                    </div>
                                    <div class="flex flex-row items-center mt-2 px-4">
                                        <img class="user-img" src="@assets/images/pages/maintenance-2.png"/>
                                        <div class="ml-3 user-info">
                                            Lic Felipe Alenso Guererro <br>
                                            Especilista en estrategias de marcas
                                        </div>
                                    </div>
                                    <div class="flex flex-row justify-between items-center mt-2">
                                        <vs-button class="event-second-color topright-corner-btn event-btn">
                                            AGREGAR A MI AGENDA 
                                        </vs-button>
                                        <vs-button class="los-event-color topleft-corner-btn event-btn">
                                            <span class="px-3">RESERVAR</span>
                                        </vs-button>
                                    </div>
                                    <vs-divider class="px-2" />
                                </div>
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
export default {
  components: {
    AppHeader,
    NavBackButton,
    BreadCrumb,
    Datepicker
  },
  data () {
    return {
      vlist: []
    }
  },
  created () {
    const list = []
    for (let i = 0; i < 9; i++) {
      list.push(i)
    }
    this.vlist = list   
  }
}
</script>
<style lang="scss">
.schedule-main {
  /* height: calc(var(--vh, 1vh) * 100 - 86px); */
  .page-content{
      background: white;
      .calendar-panel {
        background: rgb(249, 250, 255) !important;  
      }

      .event-panel {
        box-shadow: -5px 0px 5px 0 rgba(55, 55, 55, 0.3);
        padding: 0 !important;
        padding-right:  0.8rem !important;
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
        
        .stroke-text {
            color: transparent;
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #EEEEEEEE;
        }
      }

       .event-los-panel {
        box-shadow: -5px 0px 5px 0 rgba(55, 55, 55, 0.3);
        padding: 0 !important;
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
        
        .stroke-text {
            color: transparent;
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
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
    background: rgb(75, 209, 159) !important;
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
    background: rgb(14, 144, 202) !important;
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
}


</style>