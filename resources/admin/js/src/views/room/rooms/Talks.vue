<template>
  <div id="data-list-thumb-view" class="data-list-container">


    <vs-table ref="table"  pagination :max-items="itemsPerPage" search :data="this.talks">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">{{$t('AddNew')}}</span>
        </div>
        <vs-popup class="w-full mb-base items-center" :title="popupTitle" :active.sync="isAddShow">
            <div class=" w-full mb-base">
              <vx-card>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Place')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                     <v-select v-model="room_id"  :clearable="false" :options="roomOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                      <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Exhibitor')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                     <v-select v-model="user_id"  :clearable="false" :options="userOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                      <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('WebinarType')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                     <v-select v-model="webinarType"  :clearable="false" :options="webinarOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                      <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Webinar')}} {{$t('Title')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="title"/>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Webinar')}} {{$t('Date')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3  mt-0">
                     <template>
                        <datepicker placeholder="Webinar Date" :format="format" v-model="webinarDate"></datepicker>
                    </template> 
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Description')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-textarea class="w-full" v-model="description" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Exhibitor')}} {{$t('Name')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="exhibitor_name" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Exhibitor')}} {{$t('Profession')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="exhibitor_profession" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Exhibitor')}} {{$t('Company')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="exhibitor_company" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Key')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="key" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Password')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" type="password" v-model="password" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('WebinarOption')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-checkbox class="inline-flex" v-model="checkOption"/>
                  </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col sm:w-2/3 w-full ml-auto">
                    <vs-button class="mr-3 mb-2" @click="addEditTalk()">{{$t('Ok')}}</vs-button>
                    <vs-button color="warning" type="border" class="mb-2" @click="cancelAction()" >{{$t('Cancel')}}</vs-button>
                  </div>
                </div>
              </vx-card>
            </div>

          </vs-popup>
        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ talks.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : talks.length }} of {{ queriedItems }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
          <vs-dropdown-menu>

            <vs-dropdown-item @click="itemsPerPage=4">
              <span>4</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <template slot="thead">
        <vs-th>ID</vs-th>
        <vs-th sort-key="title">{{$t('Place')}}</vs-th>
        <vs-th sort-key="title">{{$t('Title')}}</vs-th>
        <vs-th sort-key="title">{{$t('Description')}}</vs-th>
        <vs-th sort-key="title">{{$t('WebinarType')}}</vs-th>

        <vs-th sort-key="title">User</vs-th>

        <vs-th sort-key="title">{{$t('Exhibitor')}} {{$t('Name')}}/ {{$t('Profession')}}/ {{$t('Company')}}</vs-th>
        <vs-th sort-key="title">{{$t('Key')}}</vs-th>
        <vs-th sort-key="title">{{$t('Password')}}</vs-th>
        <vs-th sort-key="title">{{$t('Webinar')}} {{$t('Date')}}</vs-th>

        <vs-th sort-key="title">{{$t('StartTime')}}</vs-th>
        <vs-th sort-key="title">{{$t('EndTime')}}</vs-th>

        <vs-th>{{$t('Actions')}}</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td class="img-container">
              <p class="product-name font-medium truncate">{{ tr.id }}</p>
            </vs-td>
            <!-- <vs-td class="img-container">
              <img :src="`/fair_image/${tr.video}`" class="product-img" />
            </vs-td>
 -->
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.room.name }}</p>
            </vs-td>
           
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.title }}</p>
            </vs-td>
            

            <vs-td>
              <p class="product-category">{{ tr.description }}</p>
            </vs-td>

             <vs-td>
              <p class="product-category">{{ tr.live === 1 ? $t('Live') : $t('Recorded') }}</p>
            </vs-td>

             <vs-td>
              <p class="product-category">{{ tr.user.first_name }} {{ tr.user.last_name }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.exhibitor_name}}</p>
              <p class="product-category">{{ tr.exhibitor_profession }}</p>
              <p class="product-category">{{ tr.exhibitor_company }}</p>            
            </vs-td>

            <vs-td>
              <p class="product-category">{{tr.key}}</p>
            </vs-td>
            <vs-td>
              <p class="product-category">{{tr.password}}</p>
            </vs-td>

             <vs-td>
              <p class="product-name font-medium truncate">{{ tr.talk_date }}</p>
            </vs-td>
             <vs-td>
              <p class="product-price">{{ tr.start_time }}</p>
            </vs-td>
            <vs-td>
              <p class="product-price">{{ tr.end_time }}</p>
            </vs-td>
            <vs-td class="whitespace-no-wrap">
              <div>
                <vs-switch color="success" :disabled="isPast" v-model="tr.status" @change="updateStatus(tr)">
                  <span slot="on">{{$t('Accept')}}</span>
                  <span slot="off">{{$t('Cancel')}}</span>
                </vs-switch>
              </div>
              <div class="mt-3 text-center">
                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="EditData(tr.id)" />
                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="confirmDeleteRecord(tr.id)" />
              </div>

            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
</template>

<script>
import DataViewSidebar from './DataViewSidebar.vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import Datepicker from 'vuejs-datepicker'
import vSelect from 'vue-select'

export default {
  components: {
    DataViewSidebar,
    flatPickr,
    Datepicker,
    vSelect
  },
  data () {
    return {
      format: 'yyyy-MM-dd',
      time: null,
      configdateTimePicker: {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
      selected: [],
      // products: [],
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      sidebarData: {},
      checkOption: false,
      talks:[],
      isPast: false,
      switch1: false,
      isAddShow: false,
      popupTitle: '',
      isAddOrEdit: 0,
      title: '',
      description: '',
      exhibitor_name: '',
      exhibitor_profession: '',
      exhibitor_company: '',
      key: '',
      password:'',
      password_key:'',
      startTime:null,
      endTime: null,
      webinarDate:null,
      room_id: 0,
      roomOptions: [],
      rooms: [],
      user_id: 0,
      userOptions:[],
      users:[],
      sent: false,
      active_idx: 0,
      talk_id: 0,
      live: 1,
      categories: [],
      webinarType: '',
      webinarOptions: [
        {
          value: 1, label: this.$t('Live')
        },
        {
          value: 2, label: this.$t('Recorded')
        }

      ],
      webinarTypes: [this.$t('Live'), this.$t('Recorded')]

    }
  },
  computed: {
    currentPage () {
      if (this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    queriedItems () {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.talks.length
    }
  },
  methods: {
    confirmDeleteRecord (id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('DeleteTitle'),
        text: this.$t('DeleteConfig'),
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
      this.deleteId = id
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      this.removeAction(this.deleteId)
      
      this.showDeleteSuccess()
    },
    removeAction (id) {
    //   this.$store.dispatch('dataList/removeItem', id).catch(err => { console.error(err) })
      const action = `/api/room/talk/delete/${id}`
      this.$loading.show(this)
      this.$http.post(action)
        .then((response) => {
          this.isAddShow = false
          this.$loading.hide(this)
          this.loadContent()
        })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: this.$t('Success'),
        text: this.$t('DeleteMessage')
      })
    },
    formatDate (date) {
      const d = new Date(date), year = d.getFullYear()
      let month = `${  d.getMonth() + 1}`, day = `${  d.getDate()}`
      
      if (month.length < 2) month = `0${  month}`
      if (day.length < 2) day = `0${  day}`

      return [year, month, day].join('-')
    },
    addEditTalk () {
      if (this.title === null || !this.room_id || !this.user_id || this.description === null || this.exhibitor_name === null 
      || this.exhibitor_profession === null || this.exhibitor_company === null || this.key === null || this.password === null
      || this.talk_date === null) return
      let action = '/api/room/talk/create'
      
      if(this.isAddOrEdit === 1)
        action = `/api/room/talk/update/${this.talk_id}`
      this.webinarDate = this.formatDate(this.webinarDate)
      const newData = {
        title: this.title,
        room_id: this.room_id.value,
        user_id: this.user_id.value,
        live: this.webinarType.value,
        description: this.description,
        exhibitor_name: this.exhibitor_name,
        exhibitor_profession: this.exhibitor_profession,
        exhibitor_company: this.exhibitor_company,
        key: this.key,
        password: this.password,
        // password_key: this.password_key,
        talk_date: this.webinarDate
      }
      this.$loading.show(this)
      this.$http.post(action, newData)
        .then((response) => {
          this.isAddShow = false
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
          this.loadContent()
        })
    },
    EditData (id) {
      this.isAddShow = true
      this.isAddOrEdit = 1
      this.talk_id = id
      const talk  = this.talks.find((item) => item.id === id)
      const roomOption = this.roomOptions.find((item) => item.value === talk.room_id)
      const userOption = this.userOptions.find((item) => item.value === talk.user_id)
      const webinarOption = this.webinarOptions.find((item) => item.value === talk.live)

      this.room_id = roomOption
      console.log(this.place)
      this.user_id = userOption
      this.webinarType = webinarOption
      this.title = talk.title
      this.webinarDate = talk.talk_date
      this.description = talk.description
      this.exhibitor_name = talk.exhibitor_name
      this.exhibitor_profession = talk.exhibitor_profession
      this.exhibitor_company = talk.exhibitor_company
      this.key = talk.key
      this.password = talk.password

    },
    cancelAction () {
      this.isAddShow = false
    },
    addNewData () {
      this.room_id = 0
      this.user_id = 0
      this.webinarType = 0
      this.title = ''
      this.exhibitor_name = ''
      this.exhibitor_profession = ''
      this.exhibitor_company = ''
      this.webinarDate = null
      this.description = ''
      this.key = ''
      this.password = ''
      this.isAddOrEdit = 0
      this.popupTitle = this.$t('Add')
      this.isAddShow = true
    },
    getOrderStatusColor (status) {
      if (status === 'on_hold')   return 'warning'
      if (status === 'delivered') return 'success'
      if (status === 'canceled')  return 'danger'
      return 'primary'
    },
    getPopularityColor (num) {
      if (num > 90)  return 'success'
      if (num > 70)  return 'primary'
      if (num >= 50) return 'warning'
      if (num < 50)  return 'danger'
      return 'primary'
    },
    toggleDataSidebar (val = false) {
      this.addNewDataSidebar = val
    },
    updateStatus (tr) {
      if (this.sent === true) {
        this.sent = false
        return  
      }
      this.sent = true
      const action = `/api/room/talk/update/${tr.id}`
      const param = {
        status: tr.status
      }
      this.$loading.show(this)
      this.$http.post(action, param).then((response) => {
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
    },
    loadContent () {
      let action = `/api/rooms/talks/all/${this.$route.params.room_id}`
      if (this.$route.name === 'request_talk') {
        this.isPast = false
        action = '/api/rooms/talks/request'
      } else if (this.$route.name === 'scheduled_talk') {
        this.isPast = false
        action = '/api/rooms/talks/scheduled'
      } else if (this.$route.name === 'live_talk') {
        this.isPast = false

        action = '/api/rooms/talks/live'
      } else if (this.$route.name === 'past_talk') {
        action = '/api/rooms/talks/past'
        this.isPast = true
      }
      this.$loading.show(this)
      this.$http.get(action)
        .then((response) => {

          const res = response.data
          console.log(res)
          this.talks = res.talks
          this.rooms = res.rooms
          this.categories = res.categories
          console.log(this.categories)
          for (let i = 0; i < this.rooms.length; i++) {
            this.roomOptions.push({
              value: this.rooms[i].id,
              label: this.rooms[i].name
            })
          }

          this.users = res.users

          for (let i = 0; i < this.users.length; i++) {
            this.userOptions.push({
              value: this.users[i].id,
              label: `${this.users[i].first_name} ${this.users[i].last_name}`
            })
          }
          this.$loading.hide(this)
        })
        .catch((error) => console.log(error))
    }
   
  },
  created () {
    /* if (!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }
    this.$store.dispatch('dataList/fetchDataListItems') */
    this.loadContent()
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style lang="scss">
#data-list-thumb-view {
  .vs-con-table {

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap-reverse;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;


      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 10px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
            &.img-container {
              // width: 1rem;
              // background: #fff;

              span {
                display: flex;
                justify-content: flex-start;
              }

              .product-img {
                height: 110px;
              }
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
