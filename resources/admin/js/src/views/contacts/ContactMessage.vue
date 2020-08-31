<template>
  <div id="data-list-list-view" class="data-list-container">

    <!-- <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" /> -->

    <vs-table ref="table"  pagination :max-items="itemsPerPage" search :data="this.queries">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

             
        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ queries.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : queries.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="name">Name</vs-th>
        <vs-th sort-key="email">Email</vs-th>
        <vs-th sort-key="company">company</vs-th>
        <vs-th sort-key="phone">Phone</vs-th>
        <vs-th sort-key="address">Address</vs-th>
        <vs-th sort-key="country">Country</vs-th>
        <vs-th sort-key="message">Message</vs-th>
      </template>

        <template slot-scope="{data}">
          <tbody >
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td > 
                <p >{{ tr.id }}</p>
              </vs-td>
              <vs-td > 
                  <p class="product-name font-medium truncate">{{ tr.first_name }} {{tr.last_name}}</p>
              </vs-td>

              <vs-td>
                <p>{{ tr.email }}</p>
              </vs-td>
              <vs-td>
                <p>{{ tr.company }}</p>
              </vs-td><vs-td>
                <p>{{ tr.phone }}</p>
              </vs-td><vs-td>
                <p>{{ tr.address }}</p>
              </vs-td>
              <vs-td>
                <p>{{ tr.country }}</p>
              </vs-td>
              <vs-td>
                <p>{{ tr.message }}</p>
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
    </vs-table>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      queries: [],
      // fairs: [],
      itemsPerPage: 4,
      isMounted: false,
      isActive: false,
      status: false,

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      name:'',
      email:'',
      message: ''
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
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.queries.length
    }
  },
  methods: {
   
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
    loadContent () {
      const action = '/api/contact_message/all'
      this.$loading.show(this)
      this.$http.get(action)
        .then((response) => {
          const res = response.data
          this.queries = res.messages
          //   this.searchedQueries = this.queries
          this.$loading.hide(this)
        })
        .catch((error) => { console.log(error) })
    },
    confirmDeleteRecord (id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: 'Do you really delete it?',
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
      const action = `/api/query/remove/${id}`
      this.$loading.show(this)
      this.$http.post(action, newData)
        .then((response) => {
          this.$loading.hide(this)
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: this.$t('Success'),
              text: this.$t('DeleteMessage'),
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
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Fair Deleted',
        text: 'The selected Fair was successfully deleted'
      })
    }
  },
  created () {
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
