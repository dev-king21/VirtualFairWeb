<template>
<div class="w-full">
    <app-header activeItem="0"/>  
    <div class="flex w-full flex-col setting-stand-bg-img items-center justify-between setting-stand-main">
        <div class="absolute flex flex-col w-full justify-between stand-header" >
            <div class="flex w-full">
                <div class="flex flex-row breadcrumb2">
                    <nav-back-button/>
                    <div class="flex items-center ml-4" :key="`stand-user-${index}`" v-for="(item, index) in user_list">
                        <vs-dropdown vs-custom-content vs-trigger-click>
                            <a class="flex items-center" href.prevent>
                                <div class="flex flex-col items-center justify-center ml-2 cursor-pointer" >
                                    <img :src="require(`@assets/images/pages/foto_expositores1.jpg`)" class="user-img responsive mx-4">
                                    <div class="text-black user-text">kuran Garbadono</div>
                                </div>
                            </a>
                            <vs-dropdown-menu class="dropdown-userinfo">
                                <div class="mb-1 font-italic">Nombre: {{item.name}}</div>
                                <div class="mb-1 font-italic">Email: {{item.email}}</div>
                                <div class="mb-1 font-italic">Telefono: {{item.phone}}</div>
                                <div class="mb-1 font-italic">Posicion: {{item.profession}}</div>
                                <div class="mb-1 font-italic">Compania: {{item.company}}</div>
                                <div class="mb-1 font-italic">Pais: {{item.country}}</div>
                                <div class="mb-1 font-italic">Region: {{item.region}}</div>
                            </vs-dropdown-menu>
                        </vs-dropdown>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-between stand-social-icons mx-2">
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <feather-icon class="mx-2" icon="FacebookIcon"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">Para agregar su Facebook debe copiar el URL de su pagina</div>
                            <div class="mb-1 font-italic">Ejemplo</div>
                            <div class="mb-1 font-italic"><vs-input class="w-full"></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button class="cyan-dark">GUARDAR</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <feather-icon class="mx-2" icon="FacebookIcon"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">Para agregar su Facebook debe copiar el URL de su pagina</div>
                            <div class="mb-1 font-italic">Ejemplo</div>
                            <div class="mb-1 font-italic"><vs-input></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button>GUARDAR</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <feather-icon class="mx-2" icon="InstagramIcon"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">Para agregar su Facebook debe copiar el URL de su pagina</div>
                            <div class="mb-1 font-italic">Ejemplo</div>
                            <div class="mb-1 font-italic"><vs-input></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button>GUARDAR</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <feather-icon class="mx-2" icon="LinkedinIcon"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">Para agregar su Facebook debe copiar el URL de su pagina</div>
                            <div class="mb-1 font-italic">Ejemplo</div>
                            <div class="mb-1 font-italic"><vs-input></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button>GUARDAR</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <feather-icon class="mx-2" icon="YoutubeIcon"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">Para agregar su Facebook debe copiar el URL de su pagina</div>
                            <div class="mb-1 font-italic">Ejemplo</div>
                            <div class="mb-1 font-italic"><vs-input></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button>GUARDAR</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                </div>
            </div>
        </div>
        <div class="absolute flex items-center justify-between w-full px-6 py-4 stand-footer">
            <stand-button class="stand-button" icon="ListIcon" to="/setting/stand/information" text="agregar information de la empresa"/>
            <stand-button class="stand-button" icon="ListIcon" to="/setting/stand/brochure" text="subir catalogosy brochures"/>
            <stand-button class="stand-button" icon="ListIcon" to="/setting/stand/video" text="subir fotos y videos"/>
            <stand-button class="stand-button" icon="ListIcon" to="/setting/stand/schedule" text="ver citas"/>
            <stand-button class="stand-button" icon="ListIcon" to="/setting/stand/contact" text="subir tarjeta de presentacion"/>
        </div>
        <div class="absolute stand-wrapper" style="border: 1px solid red">
            <div class="absolute" style="top: 64px">
                <div class="flex flex-col items-center justify-center text-white relative px-3 py-8" style="background: #ffffff88; color: #ffffffcc; height: 3rem">
                    <div>VISUALIZACION</div>
                    <div class="flex ites-center">
                        <feather-icon icon="EyeIcon"/>
                        <div class="ml-2">1234</div>
                    </div>
                </div>
            </div>
            <div class="absolute stand-item-wrapper flex flex-col items-center justify-center text-white" style="left: 30%; top: 20%; width: 10%; height: 10%; border: 1px solid green">
                <div class="stand-item text-center bg-blue-dark cursor-pointer">
                    <div>subir imagen</div>
                    <div>115*152px</div>
                </div>
            </div>
            <div class="absolute flex flex-col items-center justify-center text-white" style="left: 40%; top: 30%; width: 10%; height: 10%; border: 1px solid green">
                <div class="stand-item text-center bg-blue-dark cursor-pointer">
                    <div class="uppercase">subir imagen</div>
                    <div>115*152px</div>
                </div>
            </div>
        </div>
    </div>  
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
import StandButton from '@/views/custom/StandButton.vue'
export default {
  components: {
    AppHeader,
    NavBackButton,
    StandButton
  },
  data () {
    return {
      user_list: [],  
      all_schedules: []
    }
  },
  created () {
    const list = []
    for (let i = 0; i < 9; i++) {
      const item = {
        name:  'Karla Loazia Brenes',
        email: 'kibrenes@gropohouse.com',
        phone: '5064567-6789',
        profession: 'Jefa de Proyectors',
        company: 'Grupo House',
        country: 'Costa Rica',
        resion: 'San Jose',
        concern: 'Diseno del Espacio',
        active: i === 0,
        id: i 
      }  
      list.push(item)
    }
    
    this.user_list = list
  }
}
</script>
<style lang="scss">
.setting-stand-main {
    height: calc(var(--vh, 1vh) * 100 - 86px); 
    .stand-header {
        z-index: 90;
        .breadcrumb2 {
            background: #ffffffee;
            width: 100%;
            .user-img {
                border-radius: 50%;
                width: 2.6rem;
                height: 2.6rem;
                border: 1px solid silver
            }

            .user-text {
                font-size: 0.6rem !important;
                color: #333;
            }            
        }
    }
    .stand-footer {
        background: #ffffff66;
        bottom: 0;
        z-index: 90;
    }
    .stand-wrapper {
        z-index: 88;
        height: calc(var(--vh, 1vh) * 100 - 86px); 
        .stand-item-wrapper {
            z-index: 100;
            .stand-item {
                border-radius: 0.3rem;
                padding: 0.3rem 1rem !important; 
            }
        }
    } 
}
.setting-stand-bg-img {
    background-image: url("/app/images/pages/stand1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw calc(var(--vh, 1vh) * 100 - 86px) !important;
}

.stand-social-icons {
    background: transparent;
}

.dropdown-userinfo {
    a {
        
    }
    .vs-dropdown--menu {
        width: 250px;
        font-size: 0.8rem;
        padding: 0.5rem 1rem !important;
    }
}

</style>