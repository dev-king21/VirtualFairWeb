<template>
    <div id="demo-basic-card">
        <div class="vx-row">
            <div class="vx-col w-full mb-base text-right">
                <vs-button color="success" icon-pack="feather" icon="icon-plus" type="filled" :to="{path: '/settings/fair-type/edit/1'}">
                    Add New Fair Type
                </vs-button>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" v-for="(ftype, index) in fair_types" :key="index">
                <vx-card>
                    <div slot="no-body">
                        <router-link :to="'/settings/stand-location/'+ftype.id">
                            <img :src="imgUrl(ftype.building)" alt="content-img" class="responsive card-img-top">
                        </router-link>
                    </div>
                    <h5 class="mb-2">{{ ftype.name }}</h5>
                    <p class="text-primary">Stand Items: {{ ftype.stand_locations.length }}</p>
                    <div class="flex justify-between flex-wrap">
                        <vs-button 
                            class="mt-4 mr-2 shadow-lg" 
                            type="gradient" 
                            color="#7367F0" 
                            icon-pack="feather" 
                            icon="icon-navigation" 
                            gradient-color-secondary="#CE9FFC"
                            :to="{path: '/settings/stand-location/'+ftype.id}">
                            Go Stand Locations
                        </vs-button>    
                        <vs-button class="mt-4" type="border" icon-pack="feather" icon="icon-edit"
                            color="warning"
                            :to="{path: '/settings/fair-type/edit/'+ftype.id}">
                            Edit
                        </vs-button>
                    </div>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
export default{
  components: {
    
  },
  data () {
    return {
      fair_types: []
    }
  },
  computed: {

  },
  methods: {
    imgUrl (fname) {
      return `/fair_image/${fname}`
    }
  },
  mounted () {
    
  },
  created () {
    this.$http.get('/api/fair_type/all')
      .then((response) => { this.fair_types = response.data.fair_types })
      .catch((error)   => { console.log(error) })
  }
}
</script>

<style lang="scss">
#demo-basic-card {
    .overlay-card {
        .vx-card__collapsible-content {
            max-height: 485px;
        }
    }

    .chat-card-log {
        height: 360px;

        .chat-sent-msg {
            background-color: #f2f4f7 !important;
        }
    }

    .card-video {
        .video-js {
            height: 370px;
        }
    }
}
</style>
