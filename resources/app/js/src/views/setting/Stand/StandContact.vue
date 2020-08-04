<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="BookIcon" text="contacto" />
        <div class="w-full setting-stand-contact bg-white-grey">
            <div class="w-full px-10 mt-12">
                <div class="vx-row w-full mt-8">
                    <div class="vx-col w-1/3" :key="`catalog-item-${index}`" v-for="(item, index) in video_list">
                       <div class="flex flex-col justify-between mx-3 my-3 bg-white" style="border: 1px solid #f0f0f0">
                           <div class="flex items-center w-full px-3 mt-8">
                                <img src="@assets/images/pages/4-materialize.png" class="responsive" style="width: 120px"/>
                                <div class="mx-4">
                                    <div>Movil: 8888-8888</div>
                                    <div>Telefono: 2345-6789</div>
                                    <div>Email: mbarrants@apex.com</div>
                                    <div>Web: Lorem ipsum</div>
                                    <div>Zona Franca Belen, de la Radial 200mts al oste, 25 al sur</div>
                                </div>
                            </div>
                            <div class="flex mt-6 justify-start">
                                <div class="w-4/5 bg-blue-dark"></div>
                            </div>
                       </div>
                    </div>
                    <div class="vx-col w-1/3 flex flex-col items-center justify-center">
                        <div class="mt-4 blue-dark flex items-center justify-center text-white" style="border-radius: 50%; width: 4rem; height: 4rem">
                            <feather-icon svgClases="w-10 h-10" icon="PlusIcon"/>
                        </div>
                        <div class="mt-4 text-center">
                            SUBIR TARJETA <br>
                            DE PRESENTACION <br>
                            FORMATO JPG O PDF<br> 
                            (Peso maximo 500kb)
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
import VideoCard from '../VideoCard.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    VideoCard
  },
  data () {
    return {
      video_list: []
    }
  },
  created () {
    const list = []
    for (let i = 0; i < 2; i++) {
      list.push(i)
    }
    this.video_list = list    
  }
}
</script>
<style lang="scss">
.setting-stand-contact {
    min-height: calc(var(--vh, 1vh) * 100 - 152px); 
    
    .vx-row {
        margin: 0 !important;
    }

    .vx-col {
        padding: 0 !important;
    }
}
</style>
    