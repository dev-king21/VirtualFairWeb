<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="address-book" type="svg" text="MIS CONTACTOS" />
        <div class="w-full setting-stand-brochure bg-white-grey">
            <div class="w-full px-20 pb-4 mt-4">
                <div class="vx-row w-full">
                    <div class="vx-col w-1/3" :key="`catalog-item-${index}`" v-for="(item, index) in contacts">
                      <div class="mx-8 my-4">
                        <template v-if="item.stand.business_cards.length">
                          <img :src="`/fair_image/${item.stand.business_cards[0].url}`" class="responsive" />
                        </template>
                        <template v-else>
                          <img :src="`/fair_image/${item.stand.logo}`" class="responsive" />
                        </template>
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
  components: {
    AppHeader,
    BreadCrumb
  },
  data () {
    return {
      contacts: []
    }
  },
  methods: {

  },
  created () {
    this.$loading.show(this)
    this.$http.post('/api/setting/contacts')
      .then((response) => {
        this.$loading.hide(this)
        const data = response.data
        console.log(data)
        this.contacts = data.requests
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: 'éxito',
            text: 'Te has registrado con éxito.',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } else {
          this.$vs.notify({
            title: 'Oyu',
            text: 'Operación fallida',
            color: 'error',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } 
      })
  }
}
</script>
<style lang="scss">
.setting-stand-brochure {
    min-height: calc(var(--vh, 1vh) * 100 - 152px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>
    