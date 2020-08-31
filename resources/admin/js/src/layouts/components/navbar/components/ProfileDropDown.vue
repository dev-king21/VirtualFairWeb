<template>
  <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo">

    
    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
      <div class="text-right leading-tight hidden sm:block">
        <p class="font-semibold">{{ activeUserInfo.first_name }} {{ activeUserInfo.last_name }}</p>
      </div>

      <div class="con-img ml-3">
        <img v-if="activeUserInfo.avatar" key="onlineImg" :src="`/fair_image/${avatar}`" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

      <vs-dropdown-menu class="vx-navbar-dropdown">
        <ul style="min-width: 9rem">

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/pages/profile').catch(() => {})">
            <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Profile</span>
          </li>

          <!--li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/email').catch(() => {})">
            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Inbox</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/todo').catch(() => {})">
            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Tasks</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/chat').catch(() => {})">
            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Chat</span>
          </li>

          <li
            class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})">
            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
            <span class="ml-2">Wish List</span>
          </li-->

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
  </div>
</template>

<script>

export default {
  watch: {
  },
  data () {
    return {

    }
  },
  computed: {
    activeUserInfo () {
      if (this.$store.state.auth.admin) return {first_name: 'admin', last_name: 'user', avatar: ''}
      if (this.$store.state.auth.super) return {first_name: 'super', last_name: 'user', avatar: ''}
      console.log(this.$store.state.auth.userInfo)
      return this.$store.state.auth.userInfo
    }
  },
  methods: {
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
