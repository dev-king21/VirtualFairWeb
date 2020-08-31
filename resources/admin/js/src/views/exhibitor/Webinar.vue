<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <vs-table ref="table"  pagination :max-items="itemsPerPage" search :data="this.talks">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
        <vs-popup class="w-full mb-base items-center" title="Edit Webinar" :active.sync="isAddShow">
            <div class=" w-full mb-base">
              <vx-card>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Place')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" :disabled="true" v-model="place"/>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Exhibitor')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" :disabled="true" v-model="exhibitor"/>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Webinar')}} {{$t('Title')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" :disabled="true" v-model="title"/>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Webinar')}} {{$t('Date')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3  mt-0">
                     <template>
                        <datepicker placeholder="Webinar Date" :disabled="true" :format="format" v-model="webinarDate"></datepicker>
                    </template> 
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Description')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" :disabled="true" v-model="description" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Exhibitor')}} {{$t('Name')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" :disabled="true" v-model="exhibitor_name" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Exhibitor')}} {{$t('Profession')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" :disabled="true" v-model="exhibitor_profession" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Exhibitor')}} {{$t('Company')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" :disabled="true" v-model="exhibitor_company" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Key')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" :disabled="true" v-model="key" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Password')}}</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" type="password" :disabled="true" v-model="password" />
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>{{$t('Period')}}({{$t('Start')}} ~ {{$t('End')}})</span>
                  </div>
                  <div class="vx-col sm:w-2/3 mt-0">
                     <template>
                        <flat-pickr :config="configdateTimePicker" v-model="startTime" placeholder="Start time" />
                        <span> ~ </span>
                        <flat-pickr :config="configdateTimePicker" v-model="endTime" placeholder="End time" />
                    </template> 
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/4 w-full">
                    <span>Background</span>
                  </div>
                  <div class="vx-col sm:w-3/4 text-center mt-0">
                      <img :src="`/fair_image/${make_logo(logo)}`" alt="content-img" ref="logoPreview" 
                          @click="browseLogoImg" class="cursor-pointer" style="height: 120px; width: auto">
                      <input class="hidden" type="file" ref="refLogoFile" accept=".png, .gif, .jpg, .jpeg" @change="logoChanged">
                  </div>
                </div>
                <div class="vx-row">
                  <div class="vx-col sm:w-2/3 w-full ml-auto">
                    <vs-button class="mr-3 mb-2" @click="editTalk">OK</vs-button>
                    <vs-button color="warning" type="border" class="mb-2" @click="cancelAction()" >Cancel</vs-button>
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
        <vs-th sort-key="title">{{$t('Exhibitor')}} {{$t('Name')}} /{{$t('Profession')}} /{{$t('Company')}}</vs-th>
        <vs-th sort-key="title">{{$t('Key')}}</vs-th>
        <vs-th sort-key="title">{{$t('Password')}}</vs-th>
        <vs-th sort-key="title">{{$t('Webinar')}} {{$t('Date')}}</vs-th>

        <vs-th sort-key="title">{{$t('StartTime')}}</vs-th>
        <vs-th sort-key="title">{{$t('EndTime')}}</vs-th>
        <vs-th sort-key="title">{{$t('Background')}}</vs-th>


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
            <vs-td>
                  <img :src="`/fair_image/${tr.background}`" alt="content-img" class="fair_logo">
              </vs-td>
            <vs-td class="whitespace-no-wrap">
                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="EditData(tr.id)" />

            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import Datepicker from 'vuejs-datepicker'
import vSelect from 'vue-select'

export default {
  components: {
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
      password_key: '',
      startTime:null,
      endTime: null,
      webinarDate:null,
      room_id: 0,
      roomOptions: [],
      rooms: [],
      user_id: 0,
      userOptions:[],
      users:[],
      exhibitor: '',
      place: '',
      talk_id: 0,
      logo: '',
      logo_file: null
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
     make_logo (logo) {
      if (logo) return logo
      else return 'placeholder.png'
    },
    browseLogoImg () {
      this.$refs.refLogoFile.click()
    },
     readerData (rawFile) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
          this.$refs.logoPreview.src = e.target.result
          this.logo_file = rawFile
          //this.onSuccess(sendData)
          resolve()
        }
        this.logo_show = true
        reader.readAsDataURL(rawFile)
      })
    },
     validateAndUpload (files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: this.$t('TooManyFileTitle'),
          text: this.$t('TooManyFileContent'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isImage(rawFile)) {
        this.$vs.notify({
          title: this.$t('FileFormatTitle'),
          text: this.$t('FileFormatContent'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.previewLogo(rawFile)
    },
    isImage (file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name)
    },
    previewLogo (file) {
      this.$refs.refLogoFile.value = null // fix can't select the same excel
      this.readerData(file)
    },  
    logoChanged (e) {
      const files = e.target.files
      this.validateAndUpload(files)  
    },
    deleteData (id) {
    //   this.$store.dispatch('dataList/removeItem', id).catch(err => { console.error(err) })
    },
    cancelAction () {
      this.isAddShow = false
    },
    formatDate (date) {
      const d = new Date(date), year = d.getFullYear()
      let month = `${  d.getMonth() + 1}`, day = `${  d.getDate()}`
      
      if (month.length < 2) month = `0${  month}`
      if (day.length < 2) day = `0${  day}`

      return [year, month, day].join('-')
    },
    editTalk () {
      if (this.talk_id === 0 || this.startTime === null || this.endTime === null || this.logo_file === null) return
      const action = `/api/exhibitor/update/${this.talk_id}`
      const newData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      newData.append('start_time', this.startTime)
      newData.append('end_time', this.endTime)
      if(this.logo_file) newData.append('background', this.logo_file)
      this.$loading.show(this)
      this.$http.post(action, newData, headers)
        .then((response) => {
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
          this.isAddShow = false
        })
    },
    EditData (talk_id) {
      this.isAddShow = true
      for (let i = 0; i < this.talks.length; i++) {
        if (this.talks[i].id === talk_id) {
          this.place = this.talks[i].room.name
          this.exhibitor = `${this.talks[i].user.first_name  } ${  this.talks[i].user.last_name}`
          this.title = this.talks[i].title
          this.webinarDate = this.talks[i].talk_date
          this.description = this.talks[i].description
          this.exhibitor_name = this.talks[i].exhibitor_name
          this.exhibitor_profession = this.talks[i].exhibitor_profession
          this.exhibitor_company = this.talks[i].exhibitor_company
          this.key = this.talks[i].key
          this.password = this.talks[i].password
          this.talk_id = talk_id
          this.startTime = this.talks[i].start_time
          this.endTime = this.talks[i].end_time
        }
      }
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

      const action = '/api/exhibitor'
      this.$loading.show(this)
      this.$http.get(action)
        .then((response) => {

          const res = response.data
          this.talks = res.talks
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
    .fair_logo{
      height: 50px;
      width: auto;
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
