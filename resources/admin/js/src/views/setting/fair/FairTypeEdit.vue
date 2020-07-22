<template>
  <div>
    <div class="flex justify-between flex-wrap mb-4">
        <vs-input label-placeholder="Fair Type Name" v-model="ftype_name" />
        <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-save" color="success"
            @click="saveAction()">
            Save
        </vs-button> 
    </div>
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/2 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <h5 class="mb-2 text-warning font-bold">Building Image</h5>
            <div class="mb-8">
              <file-upload :preview="building_image" :onSuccess="loadDataInTable" />
            </div>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/2 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <h5 class="mb-2 text-warning font-bold">Interior Hall Image</h5>
            <div class="mb-8">
              <file-upload :preview="interior_image" :onSuccess="loadDataInTable" />
            </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from './FairTypeEditUpload.vue'

export default {
  components: {
    FileUpload
  },
  data () {
    return {
      building_image: undefined,
      interior_image: undefined,
      ftype_name: undefined,
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
    },
    saveAction () {
      const param = {name: this.ftype_name}
      let action = '/api/fair_type/create/'
      if (this.$route.params.ftype_id) {
        action = `/api/fair_type/update/${this.$route.params.ftype_id}`
      }
      this.$http.get(action, param)
        .then((response) => {
          const res = response.data
          if (res.success === 'ok' && res.id) this.$route.push({ path: `/settings/fair-type/edit/${res.id}` })
        })
        .catch((error) => { console.log(error) })
    }
  },
  created () {
    if (this.$route.params.ftype_id) {
      this.$http.get(`/api/fair_type/get/${this.$route.params.ftype_id}`)
        .then((response) => { 
          const fair_type = response.data.fair_type 
          if (fair_type.building) this.building_image = `/fair_image/${  fair_type.building}` 
          
          if (fair_type.interior) this.interior_image = `/fair_image/${  fair_type.interior}` 

          if (fair_type.name) this.ftype_name = fair_type.name
        })
        .catch((error)   => { console.log(error) })
    }  
  }
}
</script>
