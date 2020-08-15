<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="brochure" type="svg" text="CATÁLOGOS O BROCHURES" />
        <div class="w-full setting-stand-brochure bg-white-grey">
          <div class="w-full px-10 pb-4 mt-4">
            <div class="vx-row w-full">
                <div class="vx-col w-1/5" :key="`catalog-item-${index}`" v-for="(item, index) in catalog_list">
                    <catalog-card
                        title="Catalog de Productos Ecologicos"
                        item="123"
                        :id="item.id"
                        :download="downloadBrochure"
                        :show="showBrochure"
                    />
                </div>
            </div>
          </div>    
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import CatalogCard from './CatalogCard.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    CatalogCard
  },
  data () {
    return {
      catalog_list: [],
      stand_id: null
    }
  },
  methods: {
    getBrochures () {
      if (!this.$route.params.stand_id) {
        return this.$route.push('/stand/home')
      }
      this.$http.post('/api/stand/brochure', {_id: this.$route.params.stand_id})
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
          this.stand_id = data.stand.id
          this.catalog_list = data.stand.portfolios
        })  
    },
    downloadBrochure (id) {
      this.$http.post('/api/stand/brochure/download', {_id: id})
        .then((response) => {
          if (response.data.status === 'ok') {
            console.log('ok')
          }
        })
    },    
    showBrochure (id) {
      console.log(id)  
    }    
  },
  created () {
    this.getBrochures()
  }
}
</script>
<style lang="scss">
.setting-stand-brochure {
    min-height: calc(var(--vh, 1vh) * 100 - 161px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>
    