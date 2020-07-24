<template>
    <div class="mt-0">
        <div class="text-warning font-bold h3">
            Stand Items Arrangement in Stand Space  [Type: {{stand_type.name}}]
        </div>
        <div class="demo-alignment mb-4">
            <vs-button class="mt-5" type="filled" icon-pack="feather" icon="icon-crosshair" color="success"
                @click="stypeOpen()">
                Select Stand Type
            </vs-button>    
            <vs-button class="mt-5" type="filled" icon-pack="feather" icon="icon-save" color="primary"
                @click="saveLocations()">
                Save Stand Items' Location
            </vs-button>
            <vs-dropdown>
                <a class="flex items-center h4 text-success" href="#">
                    Insert Stand Item
                    <i class="material-icons">expand_more</i>
                </a>
                <vs-dropdown-menu>
                    <vs-dropdown-item @click="insertStandItem(0)">
                        Image Item
                    </vs-dropdown-item>
                    <vs-dropdown-item divider @click="insertStandItem(1)">
                        Video Item
                    </vs-dropdown-item>
                    <vs-dropdown-item divider @click="insertStandItem(2)">
                        Logo Item
                    </vs-dropdown-item>
                    <vs-dropdown-item divider @click="insertStandItem(3)">
                        Billboard Item
                    </vs-dropdown-item>
                    
                </vs-dropdown-menu>
            </vs-dropdown>
        </div>
        <vx-card class="flex">
            <div slot="no-body">
                <div id="location-wrapper">
                    <img ref="refStandImg" :src="`/fair_image/${stand_type.interior}`" @load="onImgLoad" alt="content-img" class="responsive">
                    <vue-draggable-resizable 
                            v-for="(item, idx) in stand_type_items" 
                            :key="idx"  :w="calcW(item.width)" :h="calcH(item.height)" :x="calcX(item.left)" :y="calcY(item.top)"
                            :parent="false" :lock-aspect-ratio="false" :resizable="true" @dragstop="modifyLocation" @resizestop="resizeLocation" 
                            :debug="true" :min-width="30" :min-height="30" :style="`background: url(/fair_image/${item.type}.png)`">
                        <p class="text-danger font-bold">Item: {{idx + 1}}( {{item.type}} ) </p>
                        <vs-button class="mt-5 rem-btn" type="filled" icon-pack="feather" icon="icon-trash" color="primary"
                            @click="removeStandItem(idx)">
                        </vs-button>
                        <!-- <img :src="`/fair_image/${item.type}.jpg`" class="stand_img">  -->
                    </vue-draggable-resizable>
                    <vs-sidebar 
                        parent="#location-wrapper" :hidden-background="true"  default-index="1" color="primary" 
                        class="sidebarx sidebarpage sidebar-demo-parent bordered-sidebar" 
                        position-right spacer v-model="stype_active">
                        <div class="header-sidebar text-center" slot="header">
                            <vs-avatar size="70px" src="/fair_image/placeholder.png" />
                            <h4 class="text-danger"> Select Stand Type </h4>
                        </div>
                        <component :is="scrollbarTag" ref="verticalNavMenuPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psSectionScroll" @scroll="psSectionScroll" >
                            <template v-for="(stype, idx) in stypes">
                                <div :index="`item-${idx}`" :key="idx" class="vs-sidebar--item px-10 py-4"> 
                                    <h4 class="text-warning mb-4">{{stype.name}}</h4>
                                    <div @click="stypeSelected(stype.id)" style="cursor: pointer">
                                        <img :src="`/fair_image/${stype.interior}`" class="responsive">    
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

const types = ['image', 'video', 'logo', 'billboard']

export default {
  components: {
    VuePerfectScrollbar,
    VueDraggableResizable
  },
  data () {
    return {
      stypes: [],
      stand_type: {},
      stand_type_items: [],
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
    stypeOpen () {
      this.stype_active = !this.stype_active
    },
    stypeSelected (idx) {
      this.$http.get(`/api/stand_type_item/all/${idx}`)
        .then((response) => {
          this.stand_type = response.data.stype
          this.stand_type_items = response.data.stand_type_items
        })
        .catch((error) => { console.log(error) }) 
    },
    insertStandItem (type) {
      const new_item = {
        type: types[type],
        stand_type_id: this.stand_type.id,
        top: 0.05,
        left: 0.05,
        width: 0.2,
        height: 0.2
      }
      this.stand_type_items.push(new_item)
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
      if (width && this.img_width) {
        return parseInt(this.img_width * width)
      }
      return 150
    },
    calcH (height) {
      if (height && this.img_height) {
        return parseInt(this.img_height * height)
      } 
      return 170
    },
    onImgLoad () {
      this.img_width = this.$refs.refStandImg.clientWidth
      this.img_height = this.$refs.refStandImg.clientHeight
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
      this.stand_type_items[idx].left = x / this.img_width
      this.stand_type_items[idx].top = y / this.img_height
    },
    resizeLocation (x, y, width, height) {
      let idx = -1
      const draggbleVdr = document.getElementsByClassName('draggable vdr')
      for (let i = 0; i < draggbleVdr.length; i++) {
        if (draggbleVdr[i].classList.contains('active')) {
          idx = i
          break
        }
      }
      this.stand_type_items[idx].left = x / this.img_width
      this.stand_type_items[idx].top = y / this.img_height
      this.stand_type_items[idx].width = width / this.img_width
      this.stand_type_items[idx].height = height / this.img_height
            
    },
    saveLocations () {
      const param = {
        locations: JSON.parse(JSON.stringify(this.stand_type_items))
      } 
      this.$http.post('/api/stand_type_item/save', param)
        .then((response) => {
          if (response.data.status === 'success') console.log('success')
        })
        .catch((error) => console.log(error))
    },
    removeStandItem (idx) {
      const item = this.stand_type_items[idx]
      this.stand_type_items.splice(idx, 1)
      if (idx === -1) return
      if (item.id) this.$http.post('/api/stand_type_item/remove', {remove_id: item.id})
        .then((response) => {
          console.log(response.data)
        }) 
    }
  },
  created () {
    this.$http.get('/api/stand_type/all')
      .then((response) => {
        this.stypes = response.data.stand_types
      })
      .catch((error) => { console.log(error) })

    let action = '/api/stand_type_item/all'
    if (this.$route.params.stype_id) action = `/api/stand_type_item/all/${this.$route.params.stype_id}`
    this.$http.get(action)
      .then((response) => {
        this.stand_type = response.data.stype
        this.stand_type_items = response.data.stand_type_items
        console.log(response.data)
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

#location-wrapper {
    position: relative;
}

#location-wrapper section.ps-container {
    height: calc(var(--vh, 1vh) * 100 - 150px);
}

.vdr {
    border: none;
    background-color: #333333CC !important;
    text-align: center;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: contain !important;
    p {
        text-align: center;
    }
}

.stand_img {
    width: auto;
    height: 100%;
}

.rem-btn {
    position: absolute;
    top: 0px;
    left: 5px;
}
</style>