<template>
  <div>
    <vs-input
        v-validate="'required|min:5'"
        data-vv-validate-on="blur"
        name="key"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Activation Key"
        v-model="key"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('key') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:10'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Password"
        v-model="password"
        @keypress="goLogin"
        class="w-full mt-12" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
        <router-link to="/auth/forgot-password">Forgot Password?</router-link>
    </div>
    <div class="flex flex-wrap justify-between mb-3"> 
      <!-- <vs-button  type="border" @click="registerUser">Register</vs-button> -->
      <vs-button class="w-full cyan-dark" :disabled="!validateForm" @click="login">Login</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: '',
      password: '',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.email !== '' && this.password !== ''
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.loggedIn) {

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },
    login () {

      if (!this.checkLogin()) {
        return setTimeout(() => {
          this.goHome()
        }, 300)
      }

      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        key: this.key,
        password: this.password
      }

      this.$store.dispatch('auth/login', payload)
        .then(() => { 
          this.$vs.loading.close() 
          this.goHome()
        })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },
    goHome () {
      const key = localStorage.getItem('activateKey')
      if (!key) return
      if (key && key === 'admin') this.$router.push('/user')
      else {
        this.user = 
        this.$router.push('/exhibitor')
      }
    },
    goLogin (event) {
      if (event.keyCode === 13) this.login()
    }
  },
  created () {
    if (!this.checkLogin()) {
      this.goHome()
    }
  }
}

</script>

