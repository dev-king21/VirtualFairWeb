<template>
<div class="w-full">
    <app-header activeItem="0"/>  
    <div class="flex w-full flex-col items-center justify-start bg-white-grey setting-stand-information">
        <div class="flex w-full">
            <nav-back-button/>
        </div>
        <div class="w-full h-full mb-5 bg-white page-content">
            <div class="flex items-center mt-8 ml-8">
                <img src="" class="info-logo"/>
                <div class="h3 font-bold mx-4">Nombre de la Empresa</div>
                <vs-button class="blue-dark save-btn">AGREGAR</vs-button>
            </div>
            <div>
                <div class="flex items-center mt-4 ml-8">
                    <div class="h3 font-bold">Informacion de la empresa</div>
                    <vs-button class="ml-2 blue-dark save-btn">AGREGAR</vs-button>
                </div>
                <div class="w-full mt-4 ml-12">
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                    Lerem Ipsum fasdfjl<br>
                </div>
            </div>
            <div class="text-center my-4">
                <vs-button class="allsave-btn cyan-dark">GUARDAR</vs-button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
export default {
  components: {
    AppHeader,
    NavBackButton
  }
}
</script>
<style lang="scss">
.setting-stand-information {
    min-height: calc(var(--vh, 1vh) * 100 - 86px); 
    .page-content {
        width: calc(100% - 10rem) !important;
        
        .info-logo {
            width: 150px;
            height: 150px;
        }

        .save-btn {
            font-size: 0.8rem;
            border-radius: 0.2rem !important;
            padding: 0.5rem 1rem !important;
        }

    }

    .allsave-btn {
        font-size: 1.2rem;
        border-radius: 0.4rem !important;
        padding: 0.6rem 2rem !important;
    }
}
</style>
    