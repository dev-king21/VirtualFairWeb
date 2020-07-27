<template>
<div class="w-full" id="home">
  <app-header activeItem="2"></app-header>
  <div class="w-full" style="padding-top: 100px">
    <div class="vx-row mx-20 mb-base">
        <vx-card>
            <div class="flex flex-start justify-between items-center flex-wrap ml-4">
                <h2 class="text-success">{{fair.name}}</h2>
                <div class="ml-4 mt-2">
                    <span class="mr-4 mt-4">Period: </span>
                    <span class="text-warning">{{fair.start_date}} </span>
                    <span> ~ </span>
                    <span class="text-warning">{{fair.end_date}}</span>
                </div>
            </div>
        </vx-card>
    </div>
    <div class="vx-row mx-20">
        <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" v-for="(country_item, index) in countries" :key="index">
            <vx-card class="hover-card">
                <div slot="no-body" class="card-img-wrapper">
                    <router-link :to="`/fair/country/${fair.id}/${country_item.country.id}`">
                        <img class="responsive card-img-top" :src="`/fair_image/${fair.fair_type.building}`">
                    </router-link>
                </div>
                <div class="flex justify-between items-center flex-wrap">
                    <span class="text-warning h3">{{country_item.country.name}}</span>
                    <img class="country_flag" :src="`https://www.countryflags.io/${country_item.country.code}/shiny/48.png`"> 
                </div>
            </vx-card>
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
      stands: [],
      countries: []
    }
  },
  methods: {
    top (t_pos) {
      return `${t_pos * 100} %` 
    }
  },
  created () {
    let action = '/api/fair/show'
    if (this.$route.params.fair_id) action = `/api/fair/show/${this.$route.params.fair_id}`  
    this.$http.get(action)
      .then((response) => {
        const data = response.data
        this.fair = data.fair
        this.countries = data.countries
      })
  }
}
</script>
<style lang="scss">
.hover-card {
    .card-img-wrapper {
        overflow: hidden;
    }
    .card-img-wrapper:hover{
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        background: #333;
    }
    .card-img-top {
        transition: all 0.4s ease-in-out;
    }
    .card-img-top:hover {
        opacity: 0.8;
        transform: scale(1.2);
        transform-origin: 50% 50%;
        overflow: hidden;
        
    }
}

</style>