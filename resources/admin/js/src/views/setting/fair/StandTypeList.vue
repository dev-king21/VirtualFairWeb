<template>
    <div id="demo-basic-card">
        <div class="vx-row">
            <div class="vx-col w-full mb-base text-right">
                <vs-button color="success" icon-pack="feather" icon="icon-plus" type="filled" :to="{path: '/settings/fair-type/edit'}">
                    Add New Stand Type
                </vs-button>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 lg:w-1/3 mb-base" v-for="(stype, index) in stand_types" :key="index">
                <vx-card>
                    <div slot="no-body" class="standImgDiv">
                        <router-link :to="'/settings/stand-location/'+stype.id">
                            <img :src="'/fair_image/' + stype.building" alt="content-img" class="responsive rounded-lg">
                        </router-link>
                    </div>
                    <div class="flex justify-between flex-wrap">
                        <span class="mb-2 h2">{{ stype.name }}</span>
                        <vs-button class="mb-2" type="border" icon-pack="feather" icon="icon-edit" color="warning"
                            :to="{path: '/settings/fair-type/edit/'+stype.id}">
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
      stand_types: []
    }
  },
  computed: {

  },
  methods: {
    
  },
  mounted () {
    
  },
  created () {
    this.$http.get('/api/stand_type/all')
      .then((response) => { this.stand_types = response.data.stand_types })
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

    .standImgDiv {
        padding: 20px 40px;
    }
}
</style>
