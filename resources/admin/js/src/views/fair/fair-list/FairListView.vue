<template>
  <div id="data-list-list-view" class="data-list-container">

    <!-- <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" /> -->

    <vs-table ref="table"  pagination :max-items="itemsPerPage" search :data="this.fairs">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center data-list-btn-container">

          <!-- ADD NEW -->
          <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">{{$t('AddNew')}}</span>
          </div>
        </div>

        <vs-popup class="popupModal w-full" :title="popupTitle" :active.sync="isAddShow" style="width: 1000px;">
            <div class=" w-full px-20 mb-base">
              <!-- <vx-card> -->
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/4 w-full">
                    <span>{{$t('Fair')}} {{$t('Name')}}</span>
                  </div>
                  <div class="vx-col sm:w-3/4 w-full">
                    <vs-input class="w-full" v-model="name"/>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/4 w-full">
                    <span>{{$t('FairTypes')}}</span>
                  </div>
                  <div class="vx-col sm:w-3/4 w-full">
                     <div class="vx-row">
                         <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" v-for="(ftype, index) in fair_types" :key="index">
                            <vx-card @click="changeActive(ftype.id)" :class="(active_idx===ftype.id)? 'active-card':''">
                                <div slot="no-body">
                                  <img :src="`/fair_image/${ftype.building}`" alt="content-img" class="responsive card-img-top">
                                </div>
                                <h5 class="mb-2">{{ ftype.name }}</h5>
                                <p class="text-primary">{{$t('StandItems')}}: {{ ftype.stand_locations.length }}</p>
                            </vx-card>
                          </div>
                      </div>
                  </div>
                </div>

                 <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/4 w-full">
                    <span>{{$t('Period')}}({{$t('Start')}}~{{$t('End')}})</span>
                  </div>
                  <div class="vx-col sm:w-3/4 demo-alignment mt-0">
                     <template>
                        <datepicker placeholder="Start Date" :format="format" v-model="startDate"></datepicker>
                        <span> ~ </span>
                        <datepicker placeholder="End Date" :format="format" v-model="endDate"></datepicker>
                    </template> 
                  </div>
                </div>

                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/4 w-full">
                    <span>{{$t('InterestArea')}}</span>
                  </div>
                  <div class="vx-col sm:w-3/4 mt-0">
                    <vs-chips class="w-full" color="rgb(115,103,240)" placeholder="Nueva categoría" v-model="categories">
                      <vs-chip @click="removeCategory(index)" v-for="(category, index) in categories" :key="`interest-item-${index}`" closable> {{ category }} </vs-chip>
                    </vs-chips>
                  </div>
                </div>

                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/4 w-full">
                    <span>logo</span>
                  </div>
                  <div class="vx-col sm:w-3/4 text-center mt-0">
                      <img :src="`/fair_image/${make_logo(logo)}`" alt="content-img" ref="logoPreview" 
                          @click="browseLogoImg" class="cursor-pointer" style="height: 120px; width: auto">
                      <input class="hidden" type="file" ref="refLogoFile" accept=".png, .gif, .jpg, .jpeg" @change="logoChanged">
                  </div>
                </div>

                <div class="vx-row">
                  <div class="vx-col sm:w-2/3 w-full ml-auto">
                    <vs-button class="mr-3 mb-2" @click="addEditFair()">{{$t('Ok')}}</vs-button>
                    <vs-button color="warning" type="border" class="mb-2" @click="cancelAction()" >{{$t('Cancel')}}</vs-button>
                  </div>
                </div>

                <!-- CODE -->
               
              <!-- </vx-card> -->
            </div>

          </vs-popup>
        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ fairs.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : fairs.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="id">ID</vs-th>
        <vs-th sort-key="name">{{$t('Name')}}</vs-th>
        <vs-th sort-key="start_date">{{$t('StartDate')}}</vs-th>
        <vs-th sort-key="end_date">{{$t('EndDate')}}</vs-th>
        <vs-th sort-key="logo">{{$t('Logo')}}</vs-th>
        <vs-th>{{$t('Actions')}}</vs-th>
      </template>

        <template slot-scope="{data}">
          <tbody >
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td > 
                <p >{{ tr.id }}</p>
              </vs-td>
              
              <vs-td > 
                <router-link :to="{path: '/fair/stands/' + tr.id}">
                  <p class="product-name font-medium truncate">{{ tr.name }}</p>
                </router-link>
              </vs-td>

              <vs-td>
                <p>{{ tr.start_date }}</p>
              </vs-td>
              
              <vs-td>
                <p>{{ tr.end_date }}</p>
              </vs-td>

              <vs-td>
                  <img :src="`/fair_image/${tr.logo}`" alt="content-img" class="fair_logo">
              </vs-td>
             
              <vs-td class="whitespace-no-wrap">
                <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editData(tr.id)" />
                <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="confirmDeleteRecord(tr.id)" />
              </vs-td>

            </vs-tr>
          </tbody>
        </template>
    </vs-table>
  </div>
</template>

<script>
import FairViewSidebar from '../FairViewSidebar.vue'
import moduleFairList from '@/store/fair/moduleFairList.js'
import Datepicker from 'vuejs-datepicker'



export default {
  components: {
    FairViewSidebar,
    Datepicker
  },
  data () {
    return {
      logo_file: null,
      format: 'yyyy-MM-dd',
      formatOptions:[
        {text: 'd MMM yyyy - e.g 12 Feb 2016', value: 'd MMM yyyy' },
        {text: 'd MMMM yyyy - e.g 12 February 2016', value: 'd MMMM yyyy' },
        {text: 'yyyy-MM-dd - e.g 2016-02-12', value: 'yyyy-MM-dd' },
        {text: 'dsu MMM yyyy - e.g 12th Feb 2016', value: 'dsu MMM yyyy' },
        {text: 'D dsu MMM yyyy - e.g Sat 12th Feb 2016', value: 'D dsu MMM yyyy' }
      ],

      startDate: null,
      endDate: null,
      categories: [],
      selected: [],
      // fairs: [],
      itemsPerPage: 4,
      isMounted: false,
      isActive: false,
      status: false,

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      isAddShow: false,
      popupTitle: 'Add Fair',
      name:'',
      logo:'',
      fairs: [],
      fair_types:[],
      active_idx: 0,
      isAddOrEdit: 0,
      editId: 0,
      deleteId: 0,
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
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.fairs.length
    }
  },
  methods: {
    make_logo (logo) {
      if (logo) return logo
      else return 'placeholder.png'
    },
    removeCategory (index) {
      this.categories.splice(index, 1)
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
    logoChanged (e) {
      const files = e.target.files
      this.validateAndUpload(files)  
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
    addNewData () {
      /* this.sidebarData = {}
      this.toggleDataSidebar(true)   */
      this.name = ''
      this.active_idx = 0
      this.startDate = null
      this.endDate = null
      this.status = 1
      this.isAddOrEdit = 0
      this.categories = []
      this.logo = ''
      this.popupTitle = 'Add Fair'
      this.isAddShow = true
      

    },
    deleteData (id) {
      this.$store.dispatch('dataList/removeItem', id).catch(err => { console.error(err) })
    },
    editData (id) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.editId = id
      this.isAddOrEdit = 1
      this.popupTitle = this.$t('Edit')

      const fair = this.fairs.find((item) => item.id === id)
      this.name = fair.name
      this.logo = fair.logo
      this.active_idx = fair.fair_type_id
      this.startDate = fair.start_date 
      this.endDate = fair.end_date
      this.categories = []
      fair.categories.map((cat) => this.categories.push(cat.name))
      //this.categories = fair.categories
      this.status = 1
      this.isAddShow = true
      
    },
    changeActive (idx) {
      this.active_idx = idx
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
    addEditFair () {
      if (this.name === '' || this.active_idx === 0 || this.startDate === null || this.endDate === null) return
      let action = '/api/fair/create'
      if (this.isAddOrEdit === 1) action = `/api/fair/update/${this.editId}`

      this.startDate = this.formatDate(this.startDate)
      this.endDate = this.formatDate(this.endDate)

      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      
      formData.append('name', this.name)
      formData.append('fair_type_id', this.active_idx)
      formData.append('start_date', this.startDate)
      formData.append('end_date', this.endDate)
      formData.append('status', 1)
      if (this.categories && this.categories.length) {
        this.categories = [...new Set(this.categories)]
        for (let i = 0; i < this.categories.length; i++) {
          formData.append(`categories[${i}]`, this.categories[i])
        }
      }
      if (this.logo_file) formData.append('logo', this.logo_file)
      
      this.$loading.show(this)

      this.$http.post(action, formData, headers)
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
          this.isAddShow = false
          this.loadContent()
        })
      this.categories = []
    },
    loadContent () {
      let action = '/api/fair/all'
      switch (this.$route.name) {
      case 'fair-all':
        action = '/api/fair/all'
        break
      case 'fair-next':
        action = '/api/fair/next'
        break
      case 'fair-live':
        action = '/api/fair/current'
        break
      case 'fair-past':
        action = '/api/fair/past'
        break
      }
      this.$loading.show(this)
      this.$http.get(action)
        .then((response) => {
          
          const res = response.data
          this.fairs = res.fairs
          this.$loading.hide(this)
        })
        .catch((error) => console.log(error))
      this.$loading.show(this)
      this.$http.get('/api/fair_type/all')
        .then((response) => { 
          this.$loading.hide(this)
          this.fair_types = response.data.fair_types 
        })
        .catch((error)   => { console.log(error) })
    },
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

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    removeAction (id) {
      const action = `/api/fair/update/${id}`
      const newData = {
        status: 0
      }
      this.$loading.show(this)
      this.$http.post(action, newData)
        .then((response) => {
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
    }
  },
  created () {
    
    if (!moduleFairList.isRegistered) {
      this.$store.registerModule('fair', moduleFairList)
      moduleFairList.isRegistered = true
    }
    
    this.loadContent()
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style lang="scss">
#data-list-list-view {
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
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
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
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

 .active-card {
    border: 5px solid red
  }

   .vs-popup{
    width: 1000px !important
  }

   .demo-alignment > * {
    margin-top: 0 !important;
  }
</style>
