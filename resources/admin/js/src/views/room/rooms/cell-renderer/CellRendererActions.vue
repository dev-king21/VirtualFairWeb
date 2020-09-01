<template>
    <div :style="{'direction': $vs.rtl ? 'rtl' : 'ltr'}">
      <feather-icon icon="EditIcon" svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer" @click="editRecord" />
      <vs-popup class="w-full mb-base items-center" title="Edit Rooms" :active.sync="isEditShow">
            <div class=" w-full mb-base">
              <vx-card>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>Room Name</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="name"></vs-input>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>Country</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                     <v-select v-model="country_id"  :clearable="false" :options="countryOptions" v-validate="'required'" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
                      <span class="text-danger text-sm"  v-show="errors.has('role')">{{ errors.first('role') }}</span>
                  </div>
                </div>
                <div class="vx-row mb-6">
                  <div class="vx-col sm:w-1/3 w-full">
                    <span>Description</span>
                  </div>
                  <div class="vx-col sm:w-2/3 w-full">
                    <vs-input class="w-full" v-model="description" />
                  </div>
                </div>
                
                <div class="vx-row">
                  <div class="vx-col sm:w-2/3 w-full ml-auto">
                    <vs-button class="mr-3 mb-2" @click="EditRoom()">OK</vs-button>
                    <vs-button color="warning" type="border" class="mb-2" @click="cancelAction()" >Cancel</vs-button>
                  </div>
                </div>

                <!-- CODE -->
               
              </vx-card>
            </div>

          </vs-popup>
      <feather-icon icon="TrashIcon" svgClasses="h-5 w-5 hover:text-danger cursor-pointer" @click="confirmDeleteRecord" />
    </div>
    
</template>

<script>

import vSelect from 'vue-select'
export default {
  components:{
     vSelect
  },
  data() {  
    return{
      isEditShow:false,
      name: '',
      country_id: 0,
      countries:  [],//params.countries,
      description: '', //params.description
      countryOptions:[]
    }
  },
  name: 'CellRendererActions',
  methods: {
    editRecord () {
      this.params.editAction(this.params.data.id)
    },
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('DeleteTitle'),
        text: this.$t('DeleteConfig'),
        accept: this.deleteRecord,
        acceptText: this.$t('Delete'),
        cancelText: this.$t('Cancel')
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      this.params.removeAction(this.params.data.id)
      this.showDeleteSuccess()

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: this.$t('Success'),
        text: this.$t('DeleteMessage')
      })
    }
  }, 
  created () {
    if (this.isEditShow)
    {
      this.country_id = this.params.data.country_id
      this.name = this.params.data.name
      this.description = this.params.data.description
      this.countries = this.params.data.country
      this.countryOptions = this.params.data.countryOptions
    }
    
  }
}
</script>
