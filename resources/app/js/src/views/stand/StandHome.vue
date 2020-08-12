<template>
    <div class="w-full">
        <app-header activeItem="3"></app-header>
        <div class="flex w-full breadcrumb justify-between" >
            <div class="flex flex-row w-full nav-item">
                <nav-back-button/>
                <div class="flex items-center text-white w-full justify-center">
                    <div class="w-1/3 p-8">
                        <div class="uppercase fs-10 text-white">Buscar por categoria</div>
                        <vs-input class="w-full"/>
                    </div>
                    <div class="w-1/3 p-8">
                        <div class="uppercase fs-10 text-white">Buscar por nombre</div>
                        <vs-input placeholder="Buscar" class="w-full"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="vx-row stand-home-main">
            <div class="vx-col lg:w-3/4 md:w-2/3 sm:w-full xs:w-full py-8 px-12">
                <div class="relative w-full h-full">
                    <!-- <img class="stand_wrapper" @load="onLoadImg()" :src="`/fair_image/${fair.fair_type.interior}`"> -->
                    <template v-if="fair.fair_type !== undefined">
                        <img ref="refFairImg" class="stand_wrapper" @load="onLoadImg()" :src="`/fair_image/${fair.fair_type.interior}`">
                    </template>
                    <template v-for="(item, index) in stands.filter((st, index) => st.country_id === country.id && index < 9)">
                        <img class="stand_img absolute cursor-pointer"
                            @click="goStandPage(item.id, item.user_id)"
                            :src="`/fair_image/${item.stand_location.stand_type.building}`"
                            :key="`stand-${index}`"
                            :style="`top: ${item.stand_location.top * 100}%; left: ${item.stand_location.left * img_width}px`" >
                        
                        <img class="logo_img rounded absolute cursor-pointer" 
                            @click="goStandPage(item.id, item.user_id)"
                            :src="logoImage(item.logo)"
                            :key="`logo-${index}`"
                            :style="`top: ${item.stand_location.top * 100}%; left: ${item.stand_location.left * img_width}px`" >
                    </template>
                    
                </div>
            </div>    
            <div class="vx-col lg:w-1/4 md:w-1/3 sm:w-full xs: w-full">
                <div class="uppercase mt-4">publicidad</div>
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
      fair: {},
      fair_type: {},
      country: {},
      stands: [],
      loading: false,
      img_width: 0,
      img_height: 0 
    }
  },
  methods: {
    logoImage (logo) {
      if (logo === null) return '/fair_image/placeholder.png'  
      return `/fair_image/${logo}.png`
    },
    goStandPage (stand_id, user_id) {
      if (!user_id) {
        return this.purchaseStand(stand_id)
      }
      return this.$router.push('/fair/stand/2/2/3')  
    },
    purchaseStand (stand_id) {
      this.$http.post('/api/stand/purchase', {stand: stand_id})
        .then((response) => {
          const data = response.data
          if (data.status !== 'ok') return console.log(data.msg)
          this.$vs.notify({
            title:'Notificación',
            text:'¡Ha comprado el stand con éxito! <br> Puede editar su stand en la página de configuración',
            color:'success',
            iconPack: 'feather',
            icon:'icon-mail'})
          setTimeout(() => {
            this.$router.push('/setting/stand').catch(() => {})  
          }, 3000)  
          

        })
        .catch((error) => console.log(error))
    },
    onLoadImg () {
      this.loading = true
      this.img_width = this.$refs.refFairImg.clientWidth
      this.img_height = this.$refs.refFairImg.clientHeight
    }
  },
  created () {
    this.$http.get('/api/fair/get_current_stands')
      .then((response) => {
        console.log(response.data)
        const data = response.data
        this.fair = data.fair
        this.fair_type = data.fair.fair_type
        this.country = data.country
        this.stands = data.stands        
      })
      .catch(() => {})
  }
}
</script>
<style lang="scss">
.stand-home-main {
    height: calc(var(--vh, 1vh) * 100 - 8.2rem - 86px);
    .h-responsive {
        height: 100%;
        width: auto;
    }

    .stand_wrapper {
        height: calc(var(--vh, 1vh) * 100 - 12.6rem - 86px);
        width: auto;
    }
    .stand_img {
        max-width: 15%;
        max-height: 15%;
    }

    .logo_img {
        max-width: 6%;
        max-height: 6%;
        //margin-left: 100px;
        background: white;
        box-shadow: 1px 2px 3px #33333355;
    }
}
.breadcrumb {
    background: #123058;
    .nav-item {
        div {
          text-transform: uppercase;
          font-size: 1.3rem;
        }
    }
    .user-img {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      border: 1px solid silver
    }
    .user-name {
      font-size: 0.8rem !important;
    }
}
</style>