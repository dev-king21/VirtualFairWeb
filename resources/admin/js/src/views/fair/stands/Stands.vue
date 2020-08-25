<template>
  <div id="chat-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">
    <vs-sidebar class="items-no-padding" parent="#chat-app" :click-not-close="clickNotClose" :hidden-background="clickNotClose" v-model="isChatSidebarActive" id="chat-list-sidebar">

        <div class="chat__profile-search flex p-4">
            <div class="relative inline-flex">
                <div class="h-3 w-3 border-white border border-solid rounded-full absolute right-0 bottom-0" ></div>
            </div>
            <vs-input icon-no-border icon="icon-search" icon-pack="feather" class="w-full mx-5 input-rounded-full" 
            v-model="searchQuery" :data="this.countries" @keypress="searchList()" placeholder="Search..." />

        </div>

        <vs-divider class="d-theme-border-grey-light m-0" />
        <component :is="scrollbarTag" class="chat-scroll-area pt-4" :settings="settings" :key="$vs.rtl">

            <!-- Country LIST -->
            <div class="chat__contacts">
                <ul class="chat__contacts bordered-items" >
                    <div class="chat__contact flex items-center px-2 pt-4 pb-2 borded-items ml-3" @click="showStands(0)">
                        <h5 class="font-semibold ">All</h5>
                      </div>
                      <vs-divider class="d-theme-border-grey-light m-0" />
                    <div v-for=" (country, index) in searchedCountries" :key="index">
                      <li class="cursor-pointer" @click="showStands(country.id)">
                        
                        <div class="chat__contact flex items-center px-2 pt-4 pb-2 borded-items" >
                            <div class="contact__avatar mr-1">
                                <vs-avatar :src="`https://www.countryflags.io/${country.code}/shiny/32.png`" class="flex-shrink-0 mr-2" size="30px" @click="$router.push(url)" />
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
    <div id="stands-list" class="border border-solid d-theme-border-grey-light border-t-0 border-r-0 border-b-0 sidebar-spacer--wide">
      <template>  
        <ag-grid-vue
          ref="agGridTable"
          :components="components"
          :gridOptions="gridOptions"
          class="ag-theme-material w-100 my-4 ag-grid-table"
          :columnDefs="columnDefs"
          :defaultColDef="defaultColDef"
          :rowData="this.stands"
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
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [
        {
          headerName: 'ID',
          field: 'id',
          width: 190,
          filter: true
        },
        {
          headerName: 'Country Name',
          field: 'country.name',
          filter: true,
          width: 300,
          cellRendererFramework: 'CellRendererLink'
        },
        {
          headerName: 'owner',
          field: 'user.name',
          filter: true,
          width: 300,
          cellRendererFramework: 'CellRendererLink'
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
      isLoggedInUserProfileView: false,
      countries:[],
      searchedCountries: [],
      stands:[]
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
    searchList () {
      
      if (this.searchQuery === '') this.searchedCountries = this.countries
      else this.searchedCountries = this.countries.filter((item) => item.name.toLowerCase().lastIndexOf(this.searchQuery.toLowerCase()) !== -1)
    },
    showStands (country_id) {
      let action = `/api/fair/stands/${this.$route.params.fair_id}`
      if (this.$route.params.fair_id) {
        action = `/api/fair/stands/${this.$route.params.fair_id}/${country_id}`
        this.$loading.show(this)
        this.$http.get(action)
          .then((response) => {
            const res = response.data
            this.stands = res.stands
            this.$loading.hide(this)
          })
          .catch((error) => console.log(error))
      }
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
  /*   this.$store.registerModule('chat', moduleChat)
    this.$store.dispatch('chat/fetchContacts')
    this.$store.dispatch('chat/fetchChatContacts')
    this.$store.dispatch('chat/fetchChats')
    this.setSidebarWidth() */

    if (this.$route.params.fair_id) {
      const action = `/api/fair/stands/${this.$route.params.fair_id}`
      this.$loading.show(this)
      this.$http.get(action)
        .then((response) => {
          const res = response.data
          this.countries = res.countries
          this.searchedCountries = this.countries

          this.stands = res.stands
          this.$loading.hide(this)

        })
        .catch((error) => console.log(error))
    }
  }
  
  /* beforeDestroy () {
    this.$store.unregisterModule('chat')
  },*/
  
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/chat.scss";
</style>
