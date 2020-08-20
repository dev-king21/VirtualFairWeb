<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="schedule-edit" type="svg" text="mis citas" />
        <div class="w-full setting-stand-video bg-white-grey">
            <div class="w-full px-10 mt-4">
                <div :key="`schedule-item-${index}`" v-for="(apo_date, index) in appointments_dates">
                    <div class="h4 pt-6 ml-6 font-bold">
                        {{apo_date.schedule_date}}
                        <!-- JUEVES 04 de AGOSTO -->
                    </div>
                    <div class="vx-row w-full">
                        <div class="vx-col w-1/4" :key="`catalog-item-${index}`" v-for="(apo, index) in appointments.filter((it) => it.schedule_date == apo_date.schedule_date)">
                            <div class="flex flex-col justify-between mx-3 my-3 bg-white" style="border: 1px solid #f0f0f0">
                                <div class="flex items-start w-full px-3 mt-8">
                                    <feather-icon class="ml-2 text-cyan-dark" icon="ClockIcon"/>
                                    <div class="mx-4">
                                        <div>{{period(apo.start_time, apo.end_time)}}</div>
                                        <div>Nombre: {{apo.requestor.first_name}} {{apo.requestor.last_name}}</div>
                                        <div>Compania: {{apo.requestor.company}}</div>
                                        <div>Pais: {{apo.requestor.country}}</div>
                                    </div>
                                </div>
                                <div class="flex mt-6 justify-end">
                                    <vs-button class="cyan-dark">IR A LA CITA</vs-button>
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
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import VideoCard from '../VideoCard.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    VideoCard
  },
  data () {
    return {
      video_list: [],
      appointments_dates:[],
      appointments: []
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
    const list = []
    for (let i = 0; i < 3; i++) {
      list.push(i)
    }
    this.video_list = list    
    this.$loading.show(this)
    this.$http.post('/api/setting/my_stand/schedule')
      .then((response) => {
        this.$loading.hide(this)
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: 'éxito',
            text: 'Te has registrado con éxito.',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } else {
          this.$vs.notify({
            title: 'Oyu',
            text: 'Operación fallida',
            color: 'error',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } 
        console.log(response.data)
        const data = response.data
        this.appointments_dates = data.appointments_dates
        this.appointments = data.appointments
      })
  }
}
</script>
<style lang="scss">
.setting-stand-video {
    min-height: calc(var(--vh, 1vh) * 100 - 152px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>
    