<template>
<div class="w-full" id="home">
  <app-header activeItem="2"></app-header>
  <div class="w-full">
    <!-- <div class="vx-row mx-20 mb-2">
        <vx-card>
          <div class="flex flex-start justify-between items-center flex-wrap ml-4">
            <div class="flex flex-start items-center flex-wrap">
              <router-link :to="`/fair/country/${fair.id}`" class="h2 font-bold text-success">{{fair.name}} </router-link>
              <template v-if="country.code !== undefined">
                <feather-icon class="ml-2" icon="ChevronRightIcon"></feather-icon>
                <router-link :to="`/fair/country/${fair.id}/${country.id}`">
                  <img class="ml-4 country_flag" :src="`https://www.countryflags.io/${country.code}/shiny/32.png`"> 
                </router-link>
                <router-link :to="`/fair/country/${fair.id}/${country.id}`">
                  <h3 class="text-warning ml-2"> {{country.name}}</h3>
                </router-link>
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
    </div> -->
    <div class="vx-row" style="margin: 0; padding: 0">
        <div class="relative mt-base">
            <template v-if="fair.fair_type !== undefined">
              <img class="relative responsive" @load="onLoadImg()" :src="`/fair_image/${fair.fair_type.interior}`">
            </template>
            <template v-for="(item, index) in stands.filter((st) => st.country_id === country.id)">
                <img class="stand_img absolute"
                    @click="goStandPage(item.id, item.user_id === null)"
                    :src="`/fair_image/${item.stand_location.stand_type.building}`"
                    :key="`stand-${index}`"
                    :style="`cursor: pointer; top: ${item.stand_location.top * 100}%; left: ${item.stand_location.left * 100}%`" >
                
                <img class="logo_img rounded absolute" 
                    @click="goStandPage(item.id, item.user_id === null)"
                    :src="logoImage(item.logo)"
                    :key="`logo-${index}`"
                    :style="`cursor: pointer; top: ${item.stand_location.top * 100}%; left: ${item.stand_location.left * 100}%`" >
            </template>
            
        </div>
    </div>
  </div>
  <!-- <app-footer></app-footer> -->
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
      fair_type: {},
      country: {},
      stands: [],
      loading: false
    }
  },
  methods: {
    logoImage (logo) {
      if (logo === null) return '/fair_image/placeholder.png'  
      return `/fair_image/${logo}.png`
    },
    goStandPage (stand_id, is_empty) {
      if (is_empty) return this.$router.push(`/fair/stand/${stand_id}`)  
      return this.$router.push(`/fair/stand/${this.$route.params.fair_id}/${this.$route.params.country_id}/${stand_id}`)  
    },
    onLoadImg () {
      this.loading = true
    }
  },
  created () {
    if (!this.$route.params.fair_id) {
      return this.$router.push('/pages/error-404')
    }

    if (!this.$route.params.country_id) {
      return this.$router.push('/pages/error-404')
    }
      
    this.$http.get(`/api/fair/show/${this.$route.params.fair_id}/${this.$route.params.country_id}`)
      .then((response) => {
        const data = response.data
        this.fair = data.fair
        this.fair_type = data.fair.fair_type
        this.country = data.country
        this.stands = data.stands
        console.log(this.stands)
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
</style>