<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />

    <vs-table ref="table"  pagination :max-items="itemsPerPage" search :data="this.talks">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">
        </div>
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
        <vs-th>Video</vs-th>
        <vs-th sort-key="title">Title</vs-th>
        <vs-th sort-key="title">Exhibitor Name</vs-th>
        <vs-th sort-key="title">Exhibitor Profession</vs-th>
        <vs-th sort-key="title">Exhibitor Company</vs-th>
        <vs-th sort-key="title">Number of People</vs-th>
        <vs-th sort-key="title">Start Time</vs-th>
        <vs-th sort-key="title">End Time</vs-th>

        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

            <vs-td class="img-container">
              <p class="product-name font-medium truncate">{{ tr.id }}</p>
            </vs-td>
            <vs-td class="img-container">
              <img :src="`/images/${tr.video}`" class="product-img" />
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.title }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.user.name }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.exhibitor_profession }}</p>
            </vs-td>

            <vs-td>
              <p class="product-category">{{ tr.exhibitor_company }}</p>
            </vs-td>

            <vs-td>
              <p class="product-price">{{ tr.peoples }}</p>
            </vs-td>
             <vs-td>
              <p class="product-price">{{ tr.start_time }}</p>
            </vs-td>
            <vs-td>
              <p class="product-price">{{ tr.end_time }}</p>
            </vs-td>
            <vs-td class="whitespace-no-wrap">
              <vs-switch color="success" :disabled="isPast" v-model="tr.status" @change="updateStatus(tr)">
                <span slot="on">Accept</span>
                <span slot="off">Cancel</span>
            </vs-switch>
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
</template>

<script>
import DataViewSidebar from './DataViewSidebar.vue'

export default {
  components: {
    DataViewSidebar
  },
  data () {
    return {
      selected: [],
      // products: [],
      itemsPerPage: 4,
      isMounted: false,
      addNewDataSidebar: false,
      sidebarData: {},

      talks:[],
      isPast: false,
      switch1: false
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
    
    deleteData (id) {
    //   this.$store.dispatch('dataList/removeItem', id).catch(err => { console.error(err) })
    },
    editData (data) {
        
      console.log(data)
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
      console.log(action)
      const param = {
        status: tr.status
      }
      this.$http.post(action, param).then((response) => {

      })
    }
  },
  created () {
    /* if (!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList)
      moduleDataList.isRegistered = true
    }
    this.$store.dispatch('dataList/fetchDataListItems') */
    let action = `/api/rooms/talks/all/${this.$route.params.room_id}`
    console.log(this.$route.name)
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
    this.$http.get(action)
      .then((response) => {
        console.log(action)

        const res = response.data
        this.talks = res.talks
        console.log(this.talks)
      })
      .catch((error) => console.log(error))
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
