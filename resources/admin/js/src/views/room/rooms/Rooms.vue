<template>
  <div id="chat-app" class="vx-row border border-solid d-theme-border-grey-light rounded relative overflow-hidden ">
        <vs-sidebar class="vx-col w-full lg:w-1/4" :click-not-close="clickNotClose" :hidden-background="clickNotClose" v-model="isChatSidebarActive" id="chat-list-sidebar">
          <div class="chat__profile-search flex p-4">
              <div class="relative inline-flex">
                  <div class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0" ></div>
              </div>
              <vs-input icon-no-border icon="icon-search" icon-pack="feather" class="w-full mx-5 input-rounded-full" v-model="searchQuery"  search 
                :data="this.countries" @keypress="searchList()"  placeholder="Search..." />

          </div>

          <vs-divider class="d-theme-border-grey-light m-0" />
          <component :is="scrollbarTag" class="chat-scroll-area pt-4" :settings="settings" :key="$vs.rtl">

              <!-- Country LIST -->
              <div class="chat__contacts">
                  <ul class="chat__contacts bordered-items" >
                      <div class="chat__contact flex items-center px-2 pt-4 pb-2 borded-items ml-3" @click="showTalks(0)">
                        <h5 class="font-semibold ">All</h5>
                      </div>
                      <vs-divider class="d-theme-border-grey-light m-0" />
                      <div v-for=" (country, index) in searchedCountries" :key="index">
                        <li class="cursor-pointer" @click="showTalks(country.id)">
                        
                        <div class="chat__contact flex items-center px-2 pt-4 pb-2 borded-items" >
                            <div class="contact__avatar mr-1">
                                <vs-avatar :src="`https://www.countryflags.io/${country.code}/shiny/32.png`" class="flex-shrink-0 mr-2" size="30px" />
                            </div>
                            <div class="contact__container w-full flex items-center justify-between overflow-hidden">
                                <div class="contact__info flex flex-col truncate w-5/6">
                                    <h5 class="font-semibold">{{ country.name }}</h5>
                                  <!--  <span class="truncate">{{ showLastMsg ? $store.getters['chat/chatLastMessaged'](contact.uid).textContent : contact.about }}</span> -->
                                </div>
                            </div>
                          </div>
                          <vs-divider class="d-theme-border-grey-light m-0" />
                        </li> 
                      </div>
                      
                  </ul>
              </div>
          </component>
        </vs-sidebar>

        <!-- RIGHT COLUMN -->
    <div id="stands-list" class="vx-col w-full lg:w-3/4 d-theme-border-grey-light m-0">
      <div class="flex flex-wrap-reverse items-center data-list-btn-container mt-6">
          <!-- ADD NEW -->
          <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Add New</span>
          </div>
          <vs-popup class="w-full mb-base items-center" :title="popupTitle" :active.sync="isAddShow">
            <div class=" w-full mb-base">
              <vx-card>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>Room Name</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="name"/>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>Country</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                     <v-select v-model="country_id"  :clearable="false" :options="countryOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                      <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>Description</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="description" />
                  </div>
                </div>
                
                <div class="vx-row">
                  <div class="vx-col sm:w-2/3 w-full ml-auto">
                    <vs-button class="mr-3 mb-2" @click="addEditRoom()">OK</vs-button>
                    <vs-button color="warning" type="border" class="mb-2" @click="cancelAction()" >Cancel</vs-button>
                  </div>
                </div>

                <!-- CODE -->
               
              </vx-card>
            </div>

          </vs-popup>
        </div>
      <template>  
        <ag-grid-vue
          ref="agGridTable"
          :components="components"
          :gridOptions="gridOptions"
          class="ag-theme-material w-100 my-4 ag-grid-table"
          :columnDefs="columnDefs"
          :defaultColDef="defaultColDef"
          :rowData="this.rooms"
          rowSelection="multiple"
          colResizeDefault="shift"
          :animateRows="true"
          :floatingFilter="true"
          :pagination="true"
          :paginationPageSize="paginationPageSize"
          :suppressPaginationPanel="true"
          :enableRtl="$vs.rtl">
        </ag-grid-vue>
        <vs-pagination
          :total="totalPages"
          :max="7"
          v-model="currentPage" />
      </template>    
    </div>
  </div>
</template>

<script>

import VuePerfectScrollbar from 'vue-perfect-scrollbar' 

import { AgGridVue } from 'ag-grid-vue'
import '@sass/vuexy/extraComponents/agGridStyleOverride.scss'
import vSelect from 'vue-select'

// Cell Renderer
import CellRendererLink from './cell-renderer/CellRendererLink.vue'
import CellRendererStatus from './cell-renderer/CellRendererStatus.vue'
import CellRendererActions from './cell-renderer/CellRendererActions.vue'




export default {
  components: {
    AgGridVue,
    vSelect,

    VuePerfectScrollbar,
    // Cell Renderer
    CellRendererLink,
    CellRendererStatus,
    CellRendererActions
  },
  data () {
    return {

      searchQuery: '',

      // AgGrid
      gridApi: null,
      gridOptions: {},
      name: '',
      country_id: 0,
      description: '',
      status: 0,
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [
        {
          headerName: 'ID',
          field: 'id',
          width: 80,
          filter: true,
        },
        {
          headerName: 'Country Name',
          field: 'country.name',
          filter: true,
          width: 180,
          cellRendererFramework: 'CellRendererLink'
        },
        {
          headerName: 'Room Name',
          field: 'name',
          filter: true,
          width: 240,
          cellRendererFramework: 'CellRendererLink'
        }
        ,
        {
          headerName: 'Description',
          field: 'description',
          filter: true,
          width: 240,
          cellRendererFramework: 'CellRendererLink'
        },
        {
          headerName: 'Actions',
          field: 'transactions',
          width: 150,
          cellRendererFramework: 'CellRendererActions',
          cellRendererParams: {
            editAction: this.editRecord,
            removeAction: this.RemoveRecord
          }
        }
      ],

      // Cell Renderer Components
      components: {
        CellRendererLink,
        CellRendererStatus,
        CellRendererActions
      },
      settings             : {
        maxScrollbarLength : 60,
        wheelSpeed         : 0.70
      },
      clickNotClose        : true,
      isChatSidebarActive  : true,
      isLoggedInUserProfileView: false ,
      isChatSidebarActive  : true,
      countries:[],
      searchedCountries: [],
      countryOptions: [],

      rooms:[],
      isAddShow:false,
      isAddOrEdit: 0,
      popupTitle:'Add New',
      editId: 0
    }
  },
  
  computed: {
  paginationPageSize () {
      if (this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 10
    },
    totalPages () {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages()
      else return 0
    },
    currentPage: {
      get () {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
        else return 1
      },
      set (val) {
        this.gridApi.paginationGoToPage(val - 1)
      }
    },
    
    scrollbarTag () {
      return this.$store.getters.scrollbarTag
    },
  
    windowWidth () {
      return this.$store.state.windowWidth
    }
  }, 
   methods: {
     setColumnFilter (column, val) {
      const filter = this.gridApi.getFilterInstance(column)
      let modelObj = null

      if (val !== 'all') {
        modelObj = { type: 'equals', filter: val }
      }

      filter.setModel(modelObj)
      this.gridApi.onFilterChanged()
    },
    resetColFilters () {
      this.gridApi.setFilterModel(null)
      this.gridApi.onFilterChanged()

      this.roleFilter = this.statusFilter = this.isVerifiedFilter = this.departmentFilter = { label: 'All', value: 'all' }

      this.$refs.filterCard.removeRefreshAnimation()
    },
    updateSearchQuery (val) {
      this.gridApi.setQuickFilter(val)
    },  
    addNewData(){
      this.name = ''
      this.country_id = 0
      this.description = ''
      this.isAddOrEdit = 0
      this.popupTitle="Add Room"
      this.isAddShow = true
    },
    editRecord(id) {
      console.log(id)
      this.editId = id
      this.isAddOrEdit = 1
      this.popupTitle="Edit Room"

      const room = this.rooms.find((item) => item.id === id)
      this.name = room.name
      this.country_id = room.country_id
      this.description = room.description 
      this.isAddShow = true
    },
    RemoveRecord(id){
      const action = `/api/room/update/${id}`
      console.log(action)
      const newData = {
        status: 0
      }

      this.$http.post(action, newData)
        .then((response) => {
          this.loadContent()
        })
    },
    searchList() {
      
      if (this.searchQuery === '')
        this.searchedCountries = this.countries;
      else 
        this.searchedCountries = this.countries.filter((item) => item.name.toLowerCase().lastIndexOf(this.searchQuery.toLowerCase())!== -1);
    },
    
    showTalks (country_id) {
      let action = `/api/rooms/all`
      if(country_id !== 0)
        action = `/api/rooms/all/${country_id}`
      this.$http.get(action)
        .then((response) => {
          const res = response.data
          this.rooms = res.rooms
          console.log(this.rooms);
        })
        .catch((error) => console.log(error))
    
    },
    addEditRoom(){
      let action = `/api/room/create`
      if(this.isAddOrEdit === 1)
        action = `/api/room/update/${this.editId}`
       console.log(action)

      const newData = {
        name: this.name,
        country_id: this.country_id.value,
        description: this.description,
        status: 1
      }
      console.log(newData)

      if(this.name === "" || this.country_id === 0 || this.description === "")
        return
      this.$http.post(action, newData)
        .then((response) => {
          this.isAddShow = false
          this.loadContent()
        })
    },
    loadContent () {
      const action = `/api/rooms/all`
      this.$http.get(action)
        .then((response) => {
          const res = response.data
          this.countries = res.countries
          this.searchedCountries = this.countries
          this.rooms = res.rooms

          for(let i = 0; i < this.countries.length; i++)
          {
              this.countryOptions.push ({
                value: this.countries[i].id, 
                label: this.countries[i].name
              })
          }
          console.log(this.countryOptions)
        })
        .catch((error) => console.log(error))
    },
    cancelAction(){
      this.isAddShow = false;
    }
  }, 
  mounted () {
    this.gridApi = this.gridOptions.api

    if (this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector('.ag-header-container')
      header.style.left = `-${  String(Number(header.style.transform.slice(11, -3)) + 9)  }px`
    }
  },
  created () {
      
    this.loadContent()
  },
  
  /* beforeDestroy () {
    this.$store.unregisterModule('chat')
  },*/
  
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/chat.scss";
#chat-app {
  .vs-sidebar {
    width: auto;
  }
}
</style>
