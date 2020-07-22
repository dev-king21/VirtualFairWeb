<template>
  <div>
    <div class="flex justify-between flex-wrap mb-4">
        <vs-input label-placeholder="Stand Type Name" v-model="stype_name" />
        <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-save" color="success"
            @click="saveAction()">
            Save
        </vs-button> 
    </div>
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/3 sm:w-full mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <h3 class="mb-2 text-warning font-bold">Building Image</h3>
            <div class="mb-8">
              <file-upload :preview="building_image" :upload_key="'building'" :onSuccess="changeUploadFile" />
            </div>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-2/3 sm:w-full mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <h3 class="mb-2 text-warning font-bold">Interior Hall Image</h3>
            <div class="mb-8">
              <file-upload :preview="interior_image" :upload_key="'interior'" :onSuccess="changeUploadFile" />
            </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from '@/views/components/extra-components/upload/ImageFileUpload.vue'

export default {
  components: {
    FileUpload
  },
  data () {
    return {
      building_image: undefined,
      interior_image: undefined,
      // upload_building_url: undefined,
      // upload_interior_url: undefined,
      stype_name: undefined,
      building_file: null,
      interior_file: null
    }
  },
  methods: {
    changeUploadFile ({ action, name, file}) {
      if (action === 'remove') {
        if (name === 'building') this.building_file = null
        else this.interior_file = null
      } else if (name === 'building') this.building_file = file
      else this.interior_file = file
    },

    saveAction () {
      let action = '/api/stand_type/create/'
      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      if (this.$route.params.stype_id) {
        action = `/api/stand_type/update/${this.$route.params.stype_id}`
      }
      
      formData.append('name', this.stype_name)
      if (this.building_file) formData.append('building_file', this.building_file)
      if (this.interior_file) formData.append('interior_file', this.interior_file)
      
      this.$http.post(action, formData, headers)
        .then((response) => {
          const res = response.data
          if (res.status === 'ok' && res.id) this.$router.push({ path: `/settings/stand-type/edit/${res.id}` }, () => {})
        })
        .catch((error) => { console.log(error) })
    }
  },
  created () {
    if (this.$route.params.stype_id) {
      // this.upload_building_url = `/api/fair_type/upload/building/${this.$route.params.stype_id}`
      // this.upload_interior_url = `/api/fair_type/upload/interior/${this.$route.params.stype_id}`
      this.$http.get(`/api/stand_type/get/${this.$route.params.stype_id}`)
        .then((response) => { 
          const stand_type = response.data.stand_type 
          if (stand_type.building) this.building_image = `/fair_image/${  stand_type.building}` 
          if (stand_type.interior) this.interior_image = `/fair_image/${  stand_type.interior}` 
          if (stand_type.name) this.stype_name = stand_type.name
        })
        .catch((error)   => { console.log(error) })
    }  
  }
}
</script>
