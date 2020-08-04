<template>
    <div class="w-full">
        <app-header activeItem="0" :hideNavbar="true"></app-header>
        <div class="flex w-full justify-between participant-main">
            <div class="vx-col w-full lg:w-1/2 sm:w-1/2 xs:w-1/2 left-panel">
                <div class="flex flex-col justify-between left-content">
                    <div class="flex items-center m-4 text-white">
                        <div class="flex items-center cursor-pointer" @click="$router.back()">
                            <feather-icon icon="ArrowLeftIcon"></feather-icon>
                            <span class="ml-2">VOLVER</span>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-center w-full mb-base">
                            <img src="@assets/images/logo/fair_logo.jpg">
                        </div>
                        <div class="text-center text-white think-text">
                            Think <br>
                            Outside <br> 
                            The Box
                        </div>
                    </div>
                    <div class="flex items-center h6 ml-6 mt-base mb-base text-white">
                        *ESPACIO PARA LOGO Y BANNER PRINCIPAL DEL EVENTO
                    </div>
                </div>
            </div>
            <div class="vx-col w-full bg-white lg:w-1/2 sm:w-1/2 xs:w-1/2 right-panel">
                <div class="text-center p-5">
                    <h2 class="font-bold mb-4">Bienvenido al Registro de usuario para:</h2>
                    <h2>EXPO ARQUITECTURA MODERNA</h2>
                </div>
                <div class="vx-row px-10">
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Numbre"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Apellido"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Email"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Telefono"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Compania"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Posicion"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Seleccione una constrasena"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Repita la contrasena"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Seleccione un Pais"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-input class="w-full" color="success" placeholder="Seleccione la Region"></vs-input>
                    </div>
                    <div class="vx-col w-full">
                        <vs-textarea class="w-full" color="success" height="100px" placeholder="Comentarios" lines="5"></vs-textarea>
                    </div>
                    <div class="vx-col w-full mb-4">
                        Seleccione un area de interes
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Diseno del Espacio</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Espacios Intelligentes</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Illuminacion Solar</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Zonas de luz</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Salas minimalistas</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Cuartos infantiles</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Oficinas modernas</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Aprovechamiento de Espacios</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/3 md:w-1/2 sm:w-full xs:w-full mb-4">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Jardines</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mt-base">
                        <vs-checkbox color="rgb(103, 179, 81) " v-model="checkBox6">Acepto los terminos y condiciones</vs-checkbox>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mt-base">
                        <vs-button class="register-btn">
                            REGISTRARME
                        </vs-button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="watermark text-right" >
            <img src="@assets/images/logo/watermark.png">
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
export default {
  components: {
    AppHeader
  },
  data () {
    return {
      checkBox6: false

    }
  }
}
</script>
<style lang="scss">
.watermark {
    position: fixed;
    bottom: 20px;
    text-align: right;
    width: 100%;
    padding-right: 30px;
    margin: auto;
    
}
.participant-main {
    height: calc(var(--vh, 1vh) * 100 - 86px);
    
    .left-panel {
        background: rgb(40, 58, 196);
        .think-text {
            border: 1px solid white;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 5rem;
            margin: 0 8rem;
        }
        .left-content {
            height: 100%;
        }
    }
    .right-panel {
        background: white !important;
        input, textarea {
            border-radius: 0 !important;
            font-size: 0.9rem !important;
            padding: 0.6rem !important;
        }
        .vs-input--placeholder {
            font-size: 0.9rem !important;
        }
        .input-span-placeholder {
            padding: 0.6rem !important;
            color: #333 !important;
        }

        .vs-con-textarea {
            border-radius: 0 !important;
        }
        .con-slot-label {
            font-size: 0.8rem
        }

        .register-btn {
            border-radius: 0px !important;
            border-top-left-radius: 0.6rem !important;
            background: rgb(103, 179, 81) !important;
            font-size: 0.8rem !important;
            padding: 0.5rem 1rem !important;
        }

        
  }  
}
</style>