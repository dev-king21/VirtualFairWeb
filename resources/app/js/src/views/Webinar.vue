<template>
  <div class="w-full">
    <app-header activeItem="1"></app-header>
    <div class="flex justify-end home-weinar-bg-img home-webinar-main">
        <div class="w-3/4 p-10">
            <div class="webinar-title text-white font-bold my-6">RESERVE SUS WEBINARS</div>
            <div class="vx-row bg-white webinar-card" 
                :key="`home-webinar-item-${index}`" v-for="(webinar, index) in webinar_list" >
                <div class="vx-row w-2/5 flex items-center">
                    <div class="w-full h-full p-4">
                        <img src="@assets/images/pages/foto_expositores2.jpg" class="responsive"/>
                    </div>
                </div>
                <div class="vx-row flex flex-col justify-between w-3/5">
                    <div class="font-bold">
                        <div class="vx-row mt-10 fs-11">
                            <div class="vx-col w-3/5">
                                <div>¿Cuándo?</div>
                                <div class="flex items-end">
                                    <feather-icon icon="CalendarIcon"/>
                                    <div class="ml-2">{{$date.dateFormatWithoutYear(webinar.talk_date)}}</div><!--Domingo 18 de Octubre, 2020 -->
                                </div>
                            </div>
                            <div class="vx-col w-2/5">
                                <div>¿Dónde?</div>
                                <div class="flex items-end">
                                    <feather-icon icon="MapPinIcon"/>
                                    <div class="ml-2">EVENTO ONLINE</div>
                                </div>
                            </div>
                        </div>
                        <div class="font-italic mt-4">
                            ¿Quién?
                        </div>
                        <div class="fs-11">
                            Lic. {{webinar.user.first_name}} {{webinar.user.last_name}} {{webinar.user.address}}<!--Fellipo Alenso Gerrero. Especialista en estrategias de marcas. --><br>
                            Graduago de la Universidad de Barcelona. Cuenta con una Licenciatura en Mercadeo 4.0
                        </div>
                        <h4 class="font-bold my-4">
                            {{webinar.title}}
                            <!--Desarrollo de estrategias virtuales para desarrollo de marcas -->
                        </h4>
                        <div class="font-bold font-italic mb-2">Informacion General:</div>
                        <div class="description mb-4" v-html="getDescription(webinar.description)">
                            
                        </div>
                    </div>
                    <div class="text-right">
                        <vs-button class="yellow-light">MI INTERESA</vs-button>
                        <vs-button class="cyan-dark">REGISTRAME</vs-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/layouts/components/Header.vue'
export default {
  components: {
    AppHeader
  },  
  data () {
    return {
      webinar_list: []
    } 
  },
  methods: {
    getDescription (text) {  
      return text.replace(/\n/g, '<br>')
    }
  },
  created () {
    this.$http.post('/api/home/webinar')
      .then((res) => {
        this.webinar_list = res.data.webinars
      })
  }
}
</script>

<style lang="scss">
.home-webinar-main {
  min-height: calc(var(--vh, 1vh) * 100 - 86px);
    .webinar-title {
        font-size: 3rem !important;
    }

    .webinar-card {
       margin-top: 1rem !important; 
       .description {
           font-size: 0.9rem;
       }
    }
    .vx-row {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>