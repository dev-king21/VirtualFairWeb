<template>
<div class="w-full" id="home">
  <app-header activeItem="2"></app-header>
  <div class="w-full" style="padding-top: 100px">
    <div class="vx-row mx-20 mb-2">
        <vx-card>
          <div class="flex flex-start justify-between items-center flex-wrap ml-4">
            <div class="flex flex-start items-center flex-wrap">
              <router-link :to="`/fair/country/${fair.id}`" class="h2 font-bold text-success">{{fair.name}}</router-link>
              <template v-if="country.code !== undefined">
                <feather-icon class="ml-2" icon="ChevronRightIcon"></feather-icon>
                <router-link :to="`/fair/country/${fair.id}/${country.id}`">
                  <img class="ml-4 country_flag" :src="`https://www.countryflags.io/${country.code}/shiny/48.png`"> 
                </router-link>
                <router-link :to="`/fair/country/${fair.id}/${country.id}`">
                  <h3 class="text-warning ml-4">{{country.name}}</h3>
                </router-link>
              </template>
              <template v-if="stand.user_id">
                <feather-icon class="ml-2" icon="ChevronRightIcon"></feather-icon>
                <img class="ml-4 logo_img" :src="`/fair_image/${stand.logo}.png`"> 
                <h3 class="text-warning ml-4">{{stand.company}}</h3>
              </template>
            </div>
            <div>
              <span class="mr-4 mt-4">Period: </span>
              <span class="text-warning">{{fair.start_date}} </span>
              <span> ~ </span>
              <span class="text-warning">{{fair.end_date}}</span>
            </div>
          </div>
        </vx-card>
    </div>
    <div class="vx-row mx-20">
        <div class="relative mt-base">
            <template v-if="stand_type !== undefined">
              <img class="relative responsive" ref="refStandImg" @load="onImgLoad" :src="`/fair_image/${stand_type.interior}`">
            </template>
            <template  v-for="(item, index) in stand.stand_contents">
                <img v-if="loading" class="stand_img absolute"
                    :src="`/fair_image/${item.content}`"
                    :key="`stand-${index}`"
                    :width="`${item.stand_type_item.width * $img_width}`"
                    :height="`${item.stand_type_item.height * $img_height}`"
                    :style="`top: ${item.stand_type_item.top * 100}%; left: ${item.stand_type_item.left * 100}%`" >
            </template>
            <div v-if="loading" class="absolute w-full stand-contents flex items-center justify-center">
              <vs-button type="filled" size="large" class="ml-8" color="success">Gallery</vs-button>
              <vs-button type="filled" size="large" class="ml-8" color="success">Portfolio</vs-button>
              <vs-button type="filled" size="large" class="ml-8" color="success">Files</vs-button>
              <vs-button type="filled" size="large" class="ml-8" color="success">Appointment</vs-button>
              <vs-button type="filled" size="large" class="ml-8" color="success">Contact</vs-button>
            </div>
        </div>
    </div>
  </div>
  <app-footer></app-footer>
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import AppFooter from '@/layouts/components/Footer.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      fair: {},
      country: {},
      stand: {},
      stand_type: {},
      img_width: 0,
      img_height: 0,
      loading: false
    }
  },
  methods: {
    logoImage (logo) {
      if (logo === null) return '/fair_image/placeholder.png'  
      return `/fair_image/${logo}.png`
    },
    goStandPage (stand_id, is_empty) {
      if (is_empty) return this.$router.push({path: `/fair/stand/${stand_id}`})  
      return this.$router.push({path: `/fair/stand/${stand_id}`})  
    },
    onImgLoad () {
      this.img_width = this.$refs.refStandImg.clientWidth
      this.img_height = this.$refs.refStandImg.clientHeight
      this.loading = true
    }
  },
  created () {
    if (!this.$route.params.fair_id || !this.$route.params.country_id || !this.$route.params.stand_id) {
      return this.$router.push('/pages/error-404')
    }
      
    this.$http.get(`/api/fair/show/${this.$route.params.fair_id}/${this.$route.params.country_id}/${this.$route.params.stand_id}`)
      .then((response) => {
        const data = response.data
        this.fair = data.fair
        this.country = data.country
        this.stand = data.stand
        this.stand_type = data.stand_type
        console.log(data)
      })
  }
}
</script>
<style lang="scss">
    .stand_img {
        width: 150px;
        height: 150px;
    }

    .logo_img {
      max-width: 50px;
      max-height: 50px;
      margin-left: 100px;
      background: white;
      box-shadow: 1px 2px 3px #33333355;
    }

    .stand-contents {
      height: 80px;
      background: #FFFFFF88;
      bottom: 0px;
      .vs-button {
        border-radius: 0 !important;
        font-weight: 700;
      }
    }
</style>