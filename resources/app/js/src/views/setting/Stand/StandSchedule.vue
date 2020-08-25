<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="schedule-edit" type="svg" text="mis citas" />
        <div class="w-full setting-stand-schedule bg-white-grey">
            <div class="vx-row mt-4">
              <div class="vx-col w-1/3">
                <div class="m-3 p-4 bg-white">
                  <div class="p-6" style="border: 1px solid #e2e2e2">
                    <div class="flex items-center justify-center mb-4">
                      <feather-icon size="w-8 h-8" class="text-yellow-light" icon="ClockIcon" />
                      <div class="uppercase h5 font-bold ml-4">SELECCIONE LA HORA</div>
                    </div>
                    <div class="vx-row">
                      <div class="vx-col w-1/3 timetable text-center" 
                          :key="`timetable-${index}`" v-for="(item, index) in time_table">
                        <div class="p-3 mb-2" >
                          <span @click="set_available(item)"
                              class="time-table" :class="{'selected_time': availables.lastIndexOf(item) !== -1}">
                              {{item}}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <vs-button @click="saveTimetable" class="cyan-dark">AGREGAR</vs-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="vx-col w-2/3">
                <div :key="`schedule-item-${index}`" v-for="(apo_date, index) in appointments_dates">
                    <div class="h4 pt-6 ml-6 font-bold">
                        {{apo_date.schedule_date}}
                        <!-- JUEVES 04 de AGOSTO -->
                    </div>
                    <div class="vx-row w-full">
                        <div class="vx-col lg:w-1/3 md:w-1/3 sm:w-1/2 xs:w-full" :key="`catalog-item-${index}`" v-for="(apo, index) in appointments.filter((it) => it.schedule_date == apo_date.schedule_date)">
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
      appointments: [],
      time_table: [],
      end_time_table: [],
      availables: [],
      can_contact: [],
      selected_index: null,
      stand_id: null
    }
  },
  methods: {
    period (start_time, end_time) {
      const sd = this.$date.timeFormat(start_time)
      const ed = this.$date.timeFormat(end_time)  
      return `${sd} - ${ed}`  
    },  
    make_time_table () {
      const list = []
      for (let i = 0; i < 27; i++) {
        const idx = parseInt(i / 3) + ((i % 3) * 9)  
        const hour = 9 + parseInt(idx / 2)
        const minute = (idx % 2 === 0) ? '00' : '30'
        
        list.push(this.$date.timeFormat(`${hour}:${minute}`))
      }
      
      this.time_table = list
    },
    make_end_time_table () {
      const list = []
      for (let i = 0; i < 27; i++) {
        const idx = parseInt(i / 3) + ((i % 3) * 9)  
        const hour = 9 + parseInt((idx + 1) / 2)
        const minute = (idx % 2 === 1) ? '00' : '30'
        
        list.push(this.$date.timeFormat(`${hour}:${minute}`))
      }
      
      this.end_time_table = list
    },
    make_availables (tt) {
      const list = []
      for (let i = 0; i < tt.length; i++) {
        const idx = parseInt(tt[i])
        //const idx = parseInt(ii / 9) + ((ii % 9) * 9)  
        const hour = 9 + parseInt(idx / 2)
        const minute = (idx % 2 === 0) ? '00' : '30'
        
        list.push(this.$date.timeFormat(`${hour}:${minute}`))
      }

      this.availables = list
    },
    convert_time (ts) {
      const [time, ap] = ts.split(' ')
      const [hour, minute] = time.split(':')
      if (ap.toLowerCase() === 'am') return `${time}:00`
      return `${parseInt(hour) + 12}:${minute}:00`  
    },
    available (time) {
      return this.availables.lastIndexOf(time) !== -1
    },
    set_available (time) {
      const ind = this.availables.lastIndexOf(time)
      if (ind === -1) {
        this.availables.push(time)
      } else {
        this.availables.splice(ind, 1)
      }
    },
    saveTimetable () {
      const tts = []
      for (let i = 0; i < this.availables.length; i++) {
        let ind = this.time_table.lastIndexOf(this.availables[i])
        ind = parseInt(ind / 3) + ((ind % 3) * 9)  
        tts.push(ind)
      }

      this.$loading.show(this)
      this.$http.post('/api/setting/my_stand/save_time_table', {_id: this.stand_id, tt: tts.join(',')})
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
            if (response.data.time_table) {
              const tt = response.data.time_table.replace(/\s/g, '')
              this.make_availables(tt.split(','))
            }
          } else {
            this.$vs.notify({
              title: 'Oyu',
              text: 'Error de registro',
              color: 'error',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          }
        })
    },
    request_schedule () {
      if (!this.schedule_date || !this.selected_index) return
      const st = this.time_table[this.selected_index]
      const et = this.end_time_table[this.selected_index]
      
      const param = {
        _id: this.$route.params.stand_id, 
        schedule_date: this.schedule_date,
        start_time: this.convert_time(st),
        end_time: this.convert_time(et)
      }
      this.$loading.show(this)
      this.$http.post('/api/stand/appointment/save', param)
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
              text: 'Error de registro',
              color: 'error',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          }
        }).catch(() => {
          
        })
    }  
  },
  
  created () {
     
    this.$loading.show(this)
    this.make_time_table()
    this.make_end_time_table()
    
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
        const data = response.data
        this.appointments_dates = data.appointments_dates
        this.appointments = data.appointments
        this.stand_id = data.stand_id
        if (data.time_table) {
          const tt = data.time_table.replace(/\s/g, '')
          this.make_availables(tt.split(','))
        }
      })
  }
}
</script>
<style lang="scss">
.setting-stand-schedule {
    min-height: calc(var(--vh, 1vh) * 100 - 152px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }

    .time-table {
      color: #666 !important;
      font-weight: bold;
      padding: 0.4rem 0.6rem;
      cursor: pointer
    }

    .time-table.selected_time {
      color: #FFC700 !important;
      cursor: pointer
    }
}
</style>
    