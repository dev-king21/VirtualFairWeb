<template>
  <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo">

    
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer flex items-center">
      <div class="con-img mr-3">
        <img v-if="activeUserInfo.avatar" key="onlineImg" :src="`/fair_image/${activeUserInfo.avatar}`" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>
      
      <div class="leading-tight hidden sm:block">
        <p class="font-semibold">{{ activeUserInfo.first_name }} {{ activeUserInfo.last_name }}</p>
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="EditProfile">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">{{$t('Profile')}}</span>
          </li>

          

          <vs-divider class="m-1" />

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="logout">
            <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Logout</span>
          </li>
        </ul>
      </vs-dropdown-menu>
    </vs-dropdown>
    <vs-popup class="w-full mb-base items-center" :title="$t('Profile')" :active.sync="isShow">
      <div class=" w-full mb-base">
        <vx-card>
          <!-- <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>{{$t('Email')}}</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" v-model="email"/>
            </div>
          </div> -->
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>{{$t('OldPassword')}}</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" type="password" v-model="oldPassword"/>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>{{$t('NewPassword')}}</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" type="password" @blur="PasswordValidate" v-model="newPassword"/>
              <span class="text-danger text-sm">{{ password_error}}</span>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
              <span>{{$t('ConfirmPassword')}}</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
              <vs-input class="w-full" type="password" @blur="ConfirmValidate" v-model="confirmPassword"/>
              <span class="text-danger text-sm">{{ confirm_error}}</span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
              <vs-button class="mr-3 mb-2" @click="SaveProfile">{{$t('Ok')}}</vs-button>
              <vs-button color="warning" type="border" class="mb-2" @click="cancelAction()" >{{$t('Cancel')}}</vs-button>
            </div>
          </div>
        </vx-card>
      </div>

    </vs-popup>
  </div>
</template>

<script>

export default {
  watch: {
  },
  data () {
    return {
      isShow: false,
      email: '',
      password: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      old_error: '',
      password_error: '',
      confirm_error: ''

    }
  },
  computed: {
    activeUserInfo () {
      if (this.$store.state.auth.admin) return {first_name: 'admin', last_name: 'user', avatar: ''}
      if (this.$store.state.auth.super) return {first_name: 'super', last_name: 'user', avatar: ''}
      return this.$store.state.auth.userInfo
    }
  },
  methods: {
    PasswordCheck () {
      if (this.password !== this.oldPassword)
        this.old_error = this.$t("PasswordIncorrect")
      else this.old_error = ''
    },
    PasswordValidate () {
      if (!this.newPassword || this.newPassword.length < 8 || !(/(?=.*[a-z])(?=.*[A-Z])/.test(this.newPassword)))
          this.password_error = this.$t('PasswordValidator')
      else this.password_error = ''
    },
    ConfirmValidate () {
      if(this.newPassword !== this.confirmPassword)
        this.confirm_error = this.$t('ConfirmValidator')
      else
        this.confirm_error = ''
    },
    EditProfile () {
      const action = '/api/user/get-password'
      this.$loading.show(this)
      this.$http.post(action)
        .then((response) => {
          this.$loading.hide(this)
        })
      this.isShow = true
      
    },
    cancelAction () {
      this.isShow = false
    },
    SaveProfile () {
      if(!this.oldPassword || !this.newPassword || !this.confirmPassword)
        return
      const action = '/api/user/profile/save'
      const newData = {
        old_password: this.old_password,
        password: this.newPassword
      }
      this.$loading.show(this)
      
      this.$http.post(action, newData)
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
            this.isShow = false
          } 
          else if(response.data.status === 'not exact password'){
            this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('PasswordIncorrect'),
              color: 'danger',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          }
        })
    },
    logout () {
      this.$loading.show(this)
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$loading.hide(this)
          this.$router.push('/auth/login')
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  }
}
</script>
