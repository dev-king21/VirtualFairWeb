<template>
    <div class="w-full">
        <app-header activeItem="1"></app-header>
        <bread-crumb text="contactenos" />
        <div class="flex w-full justify-center bg-white-grey home-contact-main">
            <div class="bg-white my-4 py-2 w-1/2 contact-form">
                <div class="h1 text-center mt-8">
                    Dejanos tus datos y te contactenos
                </div>
                <div class="vx-row px-20 mt-8">
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Nombre" name="Nombre"
                            v-validate="'required'" data-vv-validate-on="blur" v-model="user.first_name"/>
                        <span class="text-danger text-sm">{{ errors.first('Nombre') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Apellido" name="Apellido"
                            v-validate="'required'" data-vv-validate-on="blur"  v-model="user.last_name"/>
                        <span class="text-danger text-sm">{{ errors.first('Apellido') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Email" name="Email"
                        v-validate="'required|email|min:5'" data-vv-validate-on="blur" v-model="user.email"/>
                        <span class="text-danger text-sm">{{ errors.first('Email') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Telefono" name="Telefono" 
                        v-validate="'required|min:8'" data-vv-validate-on="blur" v-model="user.phone"/>
                        <span class="text-danger text-sm">{{ errors.first('Telefono') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Compania" name="Compania" 
                            v-validate="'required'" data-vv-validate-on="blur" v-model="user.company"/>
                        <span class="text-danger text-sm">{{ errors.first('Compania') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Posicion" name="Posicion" 
                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.address"/>
                        <span class="text-danger text-sm">{{ errors.first('Posicion') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Seleccione un Pais" name="Pais"
                        v-validate="'required'" data-vv-validate-on="blur"  v-model="user.country"/>
                        <span class="text-danger text-sm">{{ errors.first('Pais') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Seleccione la Region" name="Region"
                        v-validate="'required'" data-vv-validate-on="blur"  v-model="user.region"/>
                        <span class="text-danger text-sm">{{ errors.first('Region') }}</span>
                    </div>

                    <div class="vx-col w-full px-3">
                        <vs-textarea class="w-full" color="success" height="100px" v-model="user.message"
                         placeholder="Comentarios" lines="5"></vs-textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center mt-8">
                    <svg-icon icon="facebook" size="w-8 h-8 mx-1"></svg-icon>
                    <svg-icon icon="instagram"  size="w-8 h-8 mx-1"></svg-icon>
                    <svg-icon icon="linkedin" size="w-8 h-8 mx-1" ></svg-icon>
                    <svg-icon icon="whatsapp" size="w-8 h-8 mx-1" ></svg-icon>
                    <svg-icon icon="youtube" size="w-8 h-8 mx-1" ></svg-icon>
                </div>
                <div class="mt-8 text-center">
                    <vs-button class="cyan-dark register-btn" @click="send_message">CONTACTAR</vs-button>
                </div>
                <div class="text-right mr-2" style="margin-top: -50px;" >
                    <svg-icon icon="watermark" size="w-24 h-24" color="text-cyan-dark"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
export default {
  methods: {
    send_message () {
      if (!this.user.message) {
        this.$vs.notify({
          title: 'Error',
          text: 'Ingrese el contenido del mensaje.',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
      }

      this.$http.post('/api/contact_message', this.user)
        .then((res) => {
          if (res.data.status === 'ok') {
            this.$vs.notify({
              title:'Notificación',
              text:'Hemos recibido su petición. \n Por favor espera.',
              color:'success',
              iconPack: 'feather',
              icon:'icon-mail'
            })  
          }  
        })

    }
  },
  components: {
    AppHeader,
    BreadCrumb
  },
  data () {
    return {
      user: {}
    }  
  },
  created () {

  }
    
}
</script>
<style lang="scss">
.watermark {
    position: absolute;
    bottom: 20px;
    text-align: right;
    width: 50%;
    right: 25%;
    padding-right: 30px;
    margin: auto;
}

.home-contact-main {
  min-height: calc(var(--vh, 1vh) * 100 - 162px);

  .contact-form {
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
        color: #151515 !important;
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
        font-size: 0.8rem !important;
        padding: 0.5rem 1rem !important;
    }

    .watermark {
        position: absolute;
        bottom: 20px;
        text-align: right;
        /* width: 100 */
    }
  }

  .vx-row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .vx-col {
      /* padding: 0 !important; */
  }
}
</style>