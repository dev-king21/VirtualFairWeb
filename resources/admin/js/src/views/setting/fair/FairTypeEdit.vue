<template>
  <div>
    <div class="flex justify-between flex-wrap mb-4">
        <vs-input label-placeholder="Fair Type Name" v-model="ftype_name" />
        <vs-button class="mt-4" type="filled" icon-pack="feather" icon="icon-save" color="success"
            @click="saveAction()">
            {{$t('Save')}}
        </vs-button> 
    </div>
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/2 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <h3 class="mb-2 text-warning font-bold">{{$t('BuildingImage')}}</h3>
            <div class="mb-8">
              <file-upload :preview="building_image" :upload_key="'building'" :onSuccess="changeUploadFile" />
            </div>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/2 sm:w-1 mb-base">
        <vx-card class="overlay-card overflow-hidden">
            <h3 class="mb-2 text-warning font-bold">{{$t('Interior')}}</h3>
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
      ftype_name: undefined,
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
      let action = '/api/fair_type/create/'
      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      if (this.$route.params.ftype_id) {
        action = `/api/fair_type/update/${this.$route.params.ftype_id}`
      }
      
      formData.append('name', this.ftype_name)
      if (this.building_file) formData.append('building_file', this.building_file)
      if (this.interior_file) formData.append('interior_file', this.interior_file)
      this.$loading.show(this)
      this.$http.post(action, formData, headers)
        .then((response) => {
          this.$loading.hide(this)
          const res = response.data
          if (res.status === 'ok' && res.id) this.$router.go()
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: this.$t('Success'),
              text: this.$t('SuccessMessage'),
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } else {
            this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('FailMessage'),
              color: 'danger',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          }  
        })
        .catch((error) => { console.log(error) })
    }
  },
  created () {
    if (this.$route.params.ftype_id) {
      this.$loading.show(this)
      this.$http.get(`/api/fair_type/get/${this.$route.params.ftype_id}`)
        .then((response) => { 
          const fair_type = response.data.fair_type 
          if (fair_type.building) this.building_image = `/fair_image/${  fair_type.building}` 
          if (fair_type.interior) this.interior_image = `/fair_image/${  fair_type.interior}` 
          if (fair_type.name) this.ftype_name = fair_type.name
          this.$loading.hide(this)
        })
        .catch((error)   => { console.log(error) })
    }  
  }
}
</script>
