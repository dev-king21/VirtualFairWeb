<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="schedule-edit" type="svg" 
            second second_center second_icon="video" second_type="svg"
            text="citas" second_text="Las citas se realizarán mediante videoconferencia" />
        <div class="w-full stand-schedule-edit bg-white-grey">
          <div class="flex flex-col items-center justify-center">
            <div class="w-2/3 mt-2">
              <div class="vx-row">
                <div class="vx-col w-1/2">
                  <div class="m-3 p-4 bg-white">
                    <div class="px-6 py-4" style="border: 1px solid #e2e2e2">
                      <div class="flex items-center justify-center">
                        <div>
                          <svg-icon size="w-24 h-24 dt-color" icon="date-select"/>
                          <div class="relative text-center" style="margin-top: -60px;">
                            <div class="h5 text-cyan-dark font-bold">JUE</div>
                            <div class="h2 text-black font-bold">04</div>
                          </div>
                        </div>
                        <div class="ml-4">
                          <div class="uppercase h5 font-bold">
                            SELECCIONE EL DÍA
                          </div>
                          <div class="text-cyan-dark h1 font-bold uppercase mt-4">
                            AGOSTO  2020
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-center mt-4">
                        <datepicker :inline="true" :language="es" v-model="schedule_date"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vx-col w-1/2">
                  <div class="m-3 p-4 bg-white">
                    <div class="p-6" style="border: 1px solid #e2e2e2">
                      <div class="flex items-center justify-center mb-4">
                        <feather-icon size="w-8 h-8" class="text-yellow-light" icon="ClockIcon" />
                        <div class="uppercase h5 font-bold ml-4">SELECCIONE LA HORA</div>
                      </div>
                      <div class="vx-row">
                        <div class="vx-col w-1/4 timetable text-center" 
                            :key="`timetable-${index}`" v-for="(item, index) in time_table">
                          <div class="p-3 mb-2" >
                            <span
                              @click="selected_index = index"
                               class="time-table" :class="{
                                'can_contact_time': available(item), 
                                'selected_time': index === selected_index,
                                'bg-yellow-light': index === selected_index}">
                                {{item}}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="m-2">
                <div class="px-4 py-2 bg-white">
                  <div class="h5 font-bold">Asunto cita:</div>
                  <div>
                    <vs-textarea v-model="schedule_text" />
                  </div>
                </div>
              </div>
              <div class="text-center mb-4">
                <vs-button class="cyan-dark" @click="request_schedule()">AGENDAR</vs-button>
              </div>
            </div>
          </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import Datepicker from 'vuejs-datepicker'
import {en, es} from 'vuejs-datepicker/dist/locale'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    Datepicker
  },
  data () {
    return {
      appointments_dates:[],
      appointments: [],
      time_table: [],
      end_time_table: [],
      availables: [],
      selected_index: null,
      schedule_date: null,
      schedule_time: null,
      schedule_text: '',
      en,
      es
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
        const idx = parseInt(i / 4) + ((i % 4) * 7)  
        const hour = 9 + parseInt(idx / 2)
        const minute = (idx % 2 === 0) ? '00' : '30'
        
        list.push(this.$date.timeFormat(`${hour}:${minute}`))
      }
      
      this.time_table = list
    },
    make_end_time_table () {
      const list = []
      for (let i = 0; i < 27; i++) {
        const idx = parseInt(i / 4) + ((i % 4) * 7)  
        const hour = 9 + parseInt((idx + 1) / 2)
        const minute = (idx % 2 === 1) ? '00' : '30'
        
        list.push(this.$date.timeFormat(`${hour}:${minute}`))
      }
      
      this.end_time_table = list
    },
    make_availables (tt) {
      const list = []
      for (let i = 0; i < tt.length; i++) {
        const ii = parseInt(tt[i])
        const idx = parseInt(ii / 4) + ((ii % 4) * 7)  
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
          console.log(response.data.status)
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
    this.make_time_table()
    this.make_end_time_table()
    if (!this.$route.params.stand_id) {
      return this.$route.push('/stand/home')
    }
    this.$loading.show(this)
    this.$http.post('/api/stand/appointment', {_id: this.$route.params.stand_id})
      .then((response) => {
        const data = response.data
        if (data.time_table) {
          const tt = data.time_table.replace(/\s/g, '')
          this.make_availables(tt.split(','))
        }
        this.schedule_date = this.$date.today()
        this.$loading.hide(this)
      })
  }
}
</script>
<style lang="scss">
.stand-schedule-edit {
    min-height: calc(var(--vh, 1vh) * 100 - 152px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }

    .dt-color {
      color: #eaebf8;
    }

    .vdp-datepicker__calendar {
      border: none;
      .cell.day-header {
        color: #00818D !important;
        font-weight: bold !important;
        font-size: 0.9rem !important;
        text-transform: uppercase !important;
      }
      .cell.day.selected {
        background: #00818D !important;
      }
    }

    .time-table {
      color: #999 !important;
      padding: 0.4rem 0.6rem
    }

    .time-table.can_contact_time {
      color: #151515 !important;
      font-weight: bold;
      cursor: pointer
    }

    .time-table.can_contact_time.selected_time {
      color: white !important;
      font-weight: bold;
      border-radius: 1rem;
      
      cursor: pointer
    }
}
</style>
    