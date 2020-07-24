<template>
    <div class="flex flex-col mt-0">
        <div class="text-warning font-bold h3 mb-4">
            Stand Arrangement in Fair Space  [Type: {{fair_type.name}}]
        </div>
        <vx-card class="flex">
            <div slot="no-body">
                <div class="flex justify-between flex-wrap absolute" id="select-button">
                    <vs-button class="mt-0" type="filled" icon-pack="feather" icon="icon-crosshair" color="success"
                        @click="ftypeOpen()">
                        Select Fair Type
                    </vs-button>    
                    <vs-button class="mt-0 ml-5" type="filled" icon-pack="feather" icon="icon-plus" color="success"
                        @click="stypeOpen()">
                        Insert Stand Type
                    </vs-button>
                    <vs-button class="mt-0 ml-5" type="filled" icon-pack="feather" icon="icon-save" color="primary"
                        @click="saveLocations()">
                        Save Stands Location
                    </vs-button>
                </div>
                <div id="location-wrapper">
                    <img ref="refFairImg" :src="`/fair_image/${fair_type.interior}`" @load="onImgLoad" alt="content-img" class="responsive">
                    <!-- <div class="relative w-full h-screen" style="left: 0px, top: 0px"> -->
                    <vue-draggable-resizable 
                            v-for="(location, idx) in stand_locations" 
                            :key="idx"  :w="calcW(location.width)" :h="calcH(location.height)" :x="calcX(location.left)" :y="calcY(location.top)"
                            :parent="false" :lock-aspect-ratio="true" :resizable="false" @dragstop="modifyLocation"
                            :debug="true" :min-width="100" :min-height="100">
                        <p class="text-primary font-bold">Stand: {{idx + 1}}</p>
                        <vs-button class="mt-5 rem-btn" type="filled" icon-pack="feather" icon="icon-trash" color="primary"
                            @click="removeStandLocation(idx)">
                        </vs-button>    
                        <img :src="`/fair_image/${location.stand_type.building}`" class="stand_img"> 
                    </vue-draggable-resizable>
                    <!-- </div> -->
                    <vs-sidebar 
                        parent="#location-wrapper" :hidden-background="true"  default-index="1" color="primary" 
                        class="sidebarx sidebarpage sidebar-demo-parent bordered-sidebar" 
                        position-right spacer v-model="ftype_active">
                        <div class="header-sidebar text-center" slot="header">
                            <vs-avatar size="70px" src="/fair_image/placeholder.png" />
                            <h4 class="text-danger"> Select Fair Types </h4>
                        </div>
                        <component :is="scrollbarTag" ref="verticalNavMenuPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psSectionScroll" @scroll="psSectionScroll" >
                            <template v-for="(ftype, idx) in ftypes">
                                <div :index="`item-${idx}`" :key="idx" class="vs-sidebar--item px-10 py-4"> 
                                    <h4 class="text-warning mb-4">{{ftype.name}}</h4>
                                    <div @click="ftypeSelected(ftype.id)" style="cursor: pointer">
                                        <img :src="`/fair_image/${ftype.interior}`" class="responsive ">    
                                    </div>
                                </div>
                            </template>
                        </component>
                    </vs-sidebar>
                    <vs-sidebar 
                        parent="#location-wrapper" :hidden-background="true"  default-index="1" color="primary" 
                        class="sidebarx sidebarpage sidebar-demo-parent bordered-sidebar" 
                        position-right spacer v-model="stype_active">
                        <div class="header-sidebar text-center" slot="header">
                            <vs-avatar size="70px" src="/fair_image/placeholder.png" />
                            <h4 class="text-danger"> Select Fair Types </h4>
                        </div>
                        <component :is="scrollbarTag" ref="verticalNavMenuPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psSectionScroll" @scroll="psSectionScroll" >
                            <template v-for="(stype, idx) in stypes">
                                <div :index="`item-${idx}`" :key="idx" class="vs-sidebar--item px-10 py-4"> 
                                    <h4 class="text-warning mb-4">{{stype.name}}</h4>
                                    <div @click="stypeSelected(stype)" style="cursor: pointer">
                                        <img :src="`/fair_image/${stype.building}`" class="responsive">    
                                    </div>
                                </div>
                            </template>
                        </component>
                    </vs-sidebar>
                </div>
            </div>
        </vx-card>
    </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
  components: {
    VuePerfectScrollbar,
    VueDraggableResizable
  },
  data () {
    return {
      ftypes: [],
      stypes: [],
      fair_type: {},
      stand_locations: [],
      ftype_active: false,
      stype_active: false,
      settings: {      // perfectScrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed        : 1,
        swipeEasing       : true
      },
      img_width: 0,
      img_height: 0 
    }
  },
  computed: {
    scrollbarTag ()             { return this.$store.getters.scrollbarTag          }
  },
  methods: {
    psSectionScroll () {
      const scroll_el = this.$refs.verticalNavMenuPs.$el || this.$refs.verticalNavMenuPs
      this.showShadowBottom = scroll_el.scrollTop > 0
    },
    ftypeOpen () {
      if (this.stype_active) this.stype_active = false
      this.ftype_active = !this.ftype_active
    },
    stypeOpen () {
      if (this.ftype_active) this.ftype_active = false
      this.stype_active = !this.stype_active
    },
    ftypeSelected (idx) {
      this.$http.get(`/api/stand_location/all/${idx}`)
        .then((response) => {
          this.fair_type = response.data.ftype
          this.stand_locations = response.data.stand_locations
        })
        .catch((error) => { console.log(error) })
    },
    stypeSelected (stype) {
      const new_location = {
        fair_type_id: this.fair_type.id,
        stand_type_id: stype.id,
        stand_type: stype,
        top: 0.05,
        left: 0.05,
        width: 0.2,
        height: 0.2,
        new: 1
      }
      this.stand_locations.push(new_location)
    },
    calcX (left) {
      if (left && this.img_width) {
        return parseInt(this.img_width * left)
      }
      return 100
    },
    calcY (top) {
      if (top && this.img_height) {
        return parseInt(this.img_height * top)
      } 
      return 100
    },
    calcW (width) {
      /* if (width && this.img_width) {
                return parseInt(this.img_width * width)
            } */
      console.log(width)
      return 150
    },
    calcH (height) {
      /* if (height && this.img_height) {
                return parseInt(this.img_height * height)
            }  */
      console.log(height)  
      return 170
    },
    onImgLoad () {
      this.img_width = this.$refs.refFairImg.clientWidth
      this.img_height = this.$refs.refFairImg.clientHeight
    },
    modifyLocation (x, y) {
      let idx = -1
      const draggbleVdr = document.getElementsByClassName('draggable vdr')
      for (let i = 0; i < draggbleVdr.length; i++) {
        if (draggbleVdr[i].classList.contains('active')) {
          idx = i
          break
        }
      }
      this.stand_locations[idx].left = x / this.img_width
      this.stand_locations[idx].top = y / this.img_height
    },
    saveLocations () {
      const param = {
        locations: JSON.parse(JSON.stringify(this.stand_locations))
      }
      this.$http.post('/api/stand_location/save', param)
        .then((response) => {
          if (response.data.status === 'success') console.log('success')
        })
        .catch((error) => console.log(error))
    },
    removeStandLocation (idx) {
      const item = this.stand_locations[idx]
      this.stand_locations.splice(idx, 1)
      if (idx === -1) return
      if (item.id) this.$http.post('/api/stand_location/remove', {remove_id: item.id})
        .then((response) => {
          console.log(response.data)
        }) 
    }
        
  },
  created () {
    this.$http.get('/api/stand_location/allTypes')
      .then((response) => {
        this.ftypes = response.data.fair_types
        this.stypes = response.data.stand_types
      })
      .catch((error) => { console.log(error) })

    let action = '/api/stand_location/all'
    if (this.$route.params.ftype_id) action = `/api/stand_location/all/${this.$route.params.ftype_id}`
    
    this.$http.get(action)
      .then((response) => {
        this.fair_type = response.data.ftype
        this.stand_locations = response.data.stand_locations
      })
      .catch((error) => { console.log(error) })
  },
  mounted () {
    this.wasSidebarOpen = this.$store.state.reduceButton
    this.$store.commit('TOGGLE_REDUCE_BUTTON', true)
        
  },
  beforeDestroy () {
    if (!this.wasSidebarOpen) this.$store.commit('TOGGLE_REDUCE_BUTTON', false)
  }
}
</script>
<style lang="scss">
.router-content {
    margin-top: 0 !important;
}
.vx-navbar-wrapper {
    display: none
}
#select-button{
    top: 20px;
    left: 20px;
    z-index: 9999
}

#location-wrapper {
    position: relative;
}

#location-wrapper section.ps-container {
    height: calc(var(--vh, 1vh) * 100 - 150px);
}

.vdr {
    border: none;
    background-color: #FFFFFFaa;
    border-radius:8px;
    p {
        text-align: center;
    }
}

.stand_img {
    max-width: 150px;
    max-height: 150px;
    
}

.rem-btn {
    position: absolute;
    top: 0px;
    left: 5px;
}
</style>