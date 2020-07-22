<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/2 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <template slot="no-body">
              <img :src="building_image" alt="user-profile-cover" class="responsive">
            </template>
            <h5 class="mb-2 text-warning font-bold">Building Image</h5>
            <div class="mb-8">
              <import-excel :onSuccess="loadDataInTable" />
            </div>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/2 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <template slot="no-body">
              <img :src="interior_image" alt="user-profile-cover" class="responsive">
            </template>
            <h5 class="mb-2 text-warning font-bold">Interior Hall Image</h5>
            <div class="mb-8">
              <import-excel :onSuccess="loadDataInTable" />
            </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import ImportExcel from './FairTypeEditUpload.vue'

export default {
  components: {
    ImportExcel
  },
  data () {
    return {
      building_image: '/fair_image/placeholder.png',
      interior_image: '/fair_image/placeholder.png',
      tableData: [],
      header: [],
      sheetName: ''
    }
  },
  methods: {
    loadDataInTable ({ results, header, meta }) {
      this.header = header
      this.tableData = results
      this.sheetName = meta.sheetName
    }
  },
  created () {
    if (this.$route.params.ftype_id) {
      this.$http.get('/api/fair_type/get/'+this.$route.params.ftype_id)
      .then((response) => { 
        let fair_type = response.data.fair_type 
        if (fair_type.building)
          this.building_image = '/fair_image/' + fair_type.building 
          
        if (fair_type.interior)
          this.interior_image = '/fair_image/' + fair_type.interior 
         
      })
      .catch((error)   => { console.log(error) })
    }  
  }
}
</script>
