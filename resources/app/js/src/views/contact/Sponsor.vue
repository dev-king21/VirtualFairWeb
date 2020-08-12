<template>
    <div class="w-full">
        <app-header activeItem="2"></app-header>
        <bread-crumb 
            icon="MonitorIcon" text="patrocinadores" />
        <div class="flex w-full flex-col px-8 py-6 bg-white-grey sponsor-main">
            <div class="bg-white px-4">
                <div class="h3 text-center my-4">
                    Gracias a la colaboracion de nuestros patrocinadores este evento fue posible
                </div>
                <div class="vx-row">
                    <div class="vx-col lg:w-1/5 md:w-1/5 sm:w-1/5 xs:w-1/5"
                        :key="`contact-item-${index}`" v-for="(item, index) in all_contacts">
                        <div class="contact-item m-4">
                            <div class="text-center p-2">
                                <img class="contact-logo" 
                                :src="(index % 2 === 0)? require('@assets/images/pages/maintenance.png') : require('@assets/images/pages/maintenance-2.png')"/>
                            </div>
                            <div class="text-center my-3">
                                <vs-button class="cyan-dark contact-btn">contactar</vs-button>
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
  components: {
    AppHeader,
    BreadCrumb
  },
  created () {
    const list = []
    for (let i = 0; i < 9; i++) {
      list.push(i)
    }
    
    this.all_contacts = list
  }
    
}
</script>
<style lang="scss">
.sponsor-main {
  min-height: calc(var(--vh, 1vh) * 100 - 150px);

  .contact-item {
      border: 1px solid #f2f2f2;
  }

  .contact-logo {
      max-width: 100%;
      width: auto;
      height: 10rem; 
  }
  
  .contact-btn {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    text-transform: uppercase;  
  }

  .vx-row {
      margin: 0 !important;
  }

  .vx-col {
      padding: 0 !important;
  }
}
</style>