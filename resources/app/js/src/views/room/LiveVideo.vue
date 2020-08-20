<template>
<div class="w-full">
    <app-header activeItem="-1"/>  
    <div class="flex w-full breadcrumb justify-between" >
      <!-- <div class="flex flex-row nav-item"> -->
          <nav-back-button/>
          <div class="flex items-center text-white mx-4 justify-between w-full">
              <div class="ml-4 h5 font-bold font-italic text-white">{{webinar.title}}</div>
              <div class="flex items-center text-white justify-end">
                <div class="flex items-center cursor-pointer mr-10">
                  <img class="user-img" :src="`/fair_image/${user.avatar}`" />
                  <div class="uppercase ml-2">
                    <div class="h6 font-italic font-bold text-white">Expositor:</div>
                    <div class="fs-8 ml-3">
                      Lic. {{user.first_name}} {{user.last_name}} <br>
                      {{user.address}}
                    </div>
                  </div>
                </div>
                <div @click="downloadWebinar()" class="flex items-center cursor-pointer mx-4">
                  <feather-icon size="w-8 h-8" icon="DownloadIcon" />
                  <div class="uppercase ml-2 fs-8">
                    descargar
                  </div>
                </div>
                <div @click="addToBoard()" class="flex items-center cursor-pointer mx-4">
                  <svg-icon size="w-8 h-8" icon="webinar" />
                  <div class="uppercase ml-2 fs-8">
                    Agenda a <br>
                    mi tableo
                  </div>
                </div>
              </div>
          </div>
      <!-- </div> -->
    </div>
    <div class="flex w-full flex-col live-bg-img items-center justify-center live-main">
      <vs-icon size="5rem" class="play-icon" color="red" icon-pack="material-icons" icon="play_circle_filled" />
      <div class="absolute" style="top: 157px; left: 0">
        <div class="flex flex-col items-center justify-center text-white relative py-4 px-6" style="background: #ffffff88; color: #ffffffcc;">
            <div class="text-center"><svg-icon size="w-8 h-8" icon="live" /></div>
            <div>EN VIVO</div>
            <div class="flex ites-center">
                <feather-icon icon="EyeIcon"/>
                <div class="ml-2">1232</div>
            </div>
        </div>
      </div>
    </div>  
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
export default {
  components: {
    AppHeader,
    NavBackButton
  },
  data () {
    return {
      webinar: {},
      user: {}
    }
  },
  methods: {
    downloadWebinar () {
      this.$loading.show(this)
      this.$http.post('/api/room/webinar/download', {_id: this.$route.params.webinar_id})
        .then((response) => {
          this.$loading.hide(this)
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Se ha descargado con éxito.',
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } else {
            this.$vs.notify({
              title: 'Oyu',
              text: 'Operación fallida',
              color: 'error',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } 
        })
    },
    addToBoard () {
      this.$loading.show(this)
      this.$http.post('/api/room/webinar/add_to_board', {_id: this.$route.params.webinar_id})
        .then((response) => {
          this.$loading.hide(this)
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: 'éxito',
              text: 'Te has registrado con éxito.',
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } else {
            this.$vs.notify({
              title: 'Oyu',
              text: 'Operación fallida',
              color: 'error',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } 
        })
    }
  },
  created () {
    this.$loading.show(this)
    this.$http.post('/api/room/webinar/show', {_id: this.$route.params.webinar_id})
      .then((response) => {
        this.$loading.hide(this)
        const data = response.data
        this.webinar = data.webinar
        this.user = data.webinar.user
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: 'éxito',
            text: 'Te has registrado con éxito.',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } else {
          this.$vs.notify({
            title: 'Oyu',
            text: 'Operación fallida',
            color: 'error',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } 
        console.log(data.webinar.user)
      })
  }
}
</script>
<style lang="scss">
.live-main {
  height: calc(var(--vh, 1vh) * 100 - 162px);
  .play-icon {
    margin-top: -10%;
  }
}
.live-bg-img {
  background-size: 100vw calc(var(--vh, 1vh) * 100 - 150px) !important;
}

.breadcrumb {
    background: #123058;
    
    .user-img {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      border: 1px solid silver
    }
    .user-name {
      font-size: 0.8rem !important;
    }
}
</style>