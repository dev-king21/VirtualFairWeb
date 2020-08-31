<template>
  <div id="page-user-view">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <div id="user-data" v-if="user_data">

      <vx-card title="Account" class="mb-base">

        <!-- Avatar -->
        <div class="vx-row">

          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="`/fair_image/${user_data.avatar ? user_data.avatar : 'placeholder.png'}`" class="rounded w-full" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold">{{$t('UserName')}}</td>
                <td>{{ user_data.first_name}} {{ user_data.last_name}}</td>
              </tr>
              
              <tr>
                <td class="font-semibold">{{$t('Email')}}</td>
                <td>{{ user_data.email }}</td>
              </tr> 
              <tr>
                <td class="font-semibold">{{$t('Fair')}} {{$t('Name')}}</td>
                <td>{{ user_data.fair.name }}</td>
              </tr> 

              <tr>
                <td class="font-semibold">{{$t('Role')}}</td>
                <td>{{ user_data.type }}</td>
              </tr>
              
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">{{$t('Country')}}</td>
                <td>{{ user_data.country }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('Address')}}</td>
                <td>{{ user_data.address }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('Phone')}}</td>
                <td>{{ user_data.phone }}</td>
              </tr>
            </table>
          </div>
        </div>

      </vx-card>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      user_data: null,
      user_not_found: false
    }
  },
  computed: {
    userAddress () {
      let str = ''
      for (const field in this.user_data.location) {
        str += `${field  } `
      }
      return str
    }
  },
  methods: {
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('DeleteTitle'),
        text: this.$t('DeleteConfig'),
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord () {
      this.$router.push({name:'app-user-list'})
      this.showDeleteSuccess()
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted'
      })
    }
  },
  created () {
    const userId = this.$route.params.user_id
    const action = `/api/user/show/${userId}`
    this.$http.get(action)
     .then((response) => {
          this.user_data = response.data.user
          // this.user_data = users
          console.log(this.user_data)
        })
      .catch((error) => { console.log(error) })
  }
}

</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }
}

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }


@media screen and (min-width:1201px) and (max-width:1211px),
only screen and (min-width:636px) and (max-width:991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }

}

</style>
