<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="address-book" type="svg" text="contacto" />
        <div class="w-full setting-stand-contact bg-white-grey">
            <div class="w-full px-10">
                <div class="vx-row w-full pt-8">
                  <div class="vx-col w-1/4" :key="`catalog-item-${index}`" v-for="(item, index) in card_list">
                    <div class="flex flex-col justify-between mx-3 my-3 bg-white">
                      <div class="flex flex-col items-center w-full px-3 my-4" >
                        <img :src="`/fair_image/${item.url}`" class="responsive" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
export default {
  watch: {
  },
  components: {
    AppHeader,
    BreadCrumb
  },
  data () {
    return {
      card_list: [],
      stand_id: null
    }
  },
  methods: {
    getBusinessCards () {
      if (!this.$route.params.stand_id) {
        return this.$route.push('/stand/home')
      }
      this.$http.post('/api/stand/businesscard', {_id: this.$route.params.stand_id})
        .then((response) => {
            
          const data = response.data
          if (!data.stand || !data.stand.id) {
            this.$vs.notify({
              title: 'error',
              text: 'primero debe comprar el soporte.',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            })
            setTimeout(() => {
              this.$router.push('/setting/home')    
            }, 3000)
            return
          }
          this.card_show = false
          this.stand_id = data.stand.id
          this.card_list = data.stand.business_cards
        })  
    },
    showBusinessCard (id) {
      console.log(id)  
    }    
  },
  created () {
    this.getBusinessCards()
  }
}
</script>
<style lang="scss">
.setting-stand-contact {
    min-height: calc(var(--vh, 1vh) * 100 - 160px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>
    