<template>
    <vx-card title="" >
        <div>
          <h2 class="text-warning" color="rgb(32, 201, 192)">
            Fair's Information
          </h2>
        </div>
        <div class="px-4 mt-5">
          <h5 class="mb-3" color="success">Fair Name</h5>
          <h5 class="mb-3">Start Date: </h5>
          <h5 class="mb-3">End Date: </h5>
        </div>
        <div class="mt-5 px-5">
            <vs-tabs color="rgb(32, 201, 192)">
              <vs-tab label="Stands Information">
                    <!-- left -->
                    <vs-tabs position="left" color="danger">
                      <vs-tab label="All Countries">
                          <country-stands
                          />
                      </vs-tab>
                      <vs-tab label="Service" v-for="(country, idx) in countries" :key="idx">
                          <country-stands
                          />
                      </vs-tab>
                    </vs-tabs>
                </vs-tab>
            </vs-tabs>
        </div>
    </vx-card>
</template>
<script>
import CountryStands from './CountryStands.vue'

export default {
  components: {
    CountryStands    
  },
  data () {
    return {
      countries: [],
      stands: []
    }
  },
  computed: {
    
    
  },
  methods: {
    
  },
  created () {
    if (this.$route.params.fair_id) {
      const action = `/fair/stands/${this.$route.params.fair_id}`
      this.$http.get(action)
        .then((response) => {
          const res = response.data
          this.countries = res.countries
          this.stands = res.stands
        })
        .catch((error) => console.log(error))
    }

  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style lang="scss">

</style>
