<template>
    <div class="w-full">
        <app-header :hideNavbar="true"></app-header>
        <div class="flex w-full items-start justify-between setting-bg-img setting-home-main">
            <nav-back-button></nav-back-button>
            <div class="flex flex-col setting-wrapper">
                <div class="flex items-center justify-between bg-blue-dark">
                    <div class="flex items-center text-white mx-6" >
                        <svg-icon size="w-10 h-10" icon="profile"/>
                        <div class="h3 text-white ml-4">MI CUENTA</div>
                    </div>
                    <div class="flex items-center py-3 cursor-pointer" @click="$router.push('/setting/profile')">
                        <div>
                            <div class="user-name text-white">MI PERFIL</div>
                        </div>
                        <img :src="`/images/pages/${user.avatar}`" class="user-img responsive mx-4">
                    </div>
                </div>
                <div class="flex flex-col bg-white text-center py-6" style="opacity: .9">
                    <h3>iHola! Felipe Alonso Guerrero</h3>
                    <h4 class="mt-2">Que deseas hacer?</h4>
                </div>
                <div class="flex px-12" style="background: #ffffff44; height: 100%;">
                    <div class="flex flex-col py-12 w-full">
                        <div class="flex items-center justify-between buttons-row">
                            <setting-button cls="bg-cyan-dark" to="/setting/stand" icon="ListIcon" text="mi stand"></setting-button>
                            <setting-button cls="bg-blue-dark" to="/setting/schedule" icon="ListIcon" text="ver mi agenda"></setting-button>
                        </div>
                        <div class="flex items-center justify-between buttons-row">
                            <setting-button cls="bg-grey-real" to="/setting/webinar" icon="MonitorIcon" text="mis webinars"></setting-button>
                            <setting-button cls="bg-blue-light" to="/setting/download" icon="DownloadIcon" text="mis descargasy archivos guardados"></setting-button>
                        </div>
                        <div class="flex items-center justify-between buttons-row">
                            <setting-button cls="bg-cyan-light" to="/setting/contact" icon="BookIcon" text="mis contactos"></setting-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import SettingButton from '@/views/custom/SettingButton.vue'
export default {
  components: {
    AppHeader,
    NavBackButton,
    SettingButton
  },
  data () {
    return {
      user: {}  
    }    
  },
  created () {
    let userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      return this.$router.push('/home')
    }
    userInfo = JSON.parse(userInfo)
    if (!userInfo.id || !userInfo.email || userInfo.email === '') {
      return this.$router.push('/home')
    }
    this.user = userInfo
  }
    
}
</script>
<style lang="scss">
.setting-home-main {
    height: calc(var(--vh, 1vh) * 100 - 86px);

    .setting-wrapper {
        width: 60%;
        height: 100%;
        .buttons-row {
            height: 30%;
            margin-top: 1.666%; 
            margin-bottom: 1.666%; 
        }
    }

    .user-img {
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        border: 1px solid silver
    }

    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>