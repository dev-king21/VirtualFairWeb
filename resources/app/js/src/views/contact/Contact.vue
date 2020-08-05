<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb 
            icon="MonitorIcon" text="contactenos" />
        <div class="flex w-full justify-center bg-white-grey home-contact-main">
            <div class="bg-white my-4 py-2 w-1/2 contact-form">
                <div class="h1 text-center mt-8">
                    Dejanos tus datos y te contactenos
                </div>
                <div class="vx-row px-20 mt-8">
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6">
                        <vs-input class="w-4/5" color="success" placeholder="Numbre"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6">
                        <vs-input class="w-4/5" color="success" placeholder="Apellido"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6">
                        <vs-input class="w-4/5" color="success" placeholder="Email"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6">
                        <vs-input class="w-4/5" color="success" placeholder="Telefono"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6">
                        <vs-input class="w-4/5" color="success" placeholder="Compania"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6">
                        <vs-input class="w-4/5" color="success" placeholder="Posicion"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6">
                        <vs-input class="w-4/5" color="success" placeholder="Seleccione un Pais"></vs-input>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6">
                        <vs-input class="w-4/5" color="success" placeholder="Seleccione la Region"></vs-input>
                    </div>
                    <div class="vx-col w-full">
                        <vs-textarea class="w-4/5" color="success" height="100px" placeholder="Comentarios" lines="5"></vs-textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center mt-8">
                    <feather-icon icon="FacebookIcon" />
                    <feather-icon icon="InstagramIcon" />
                    <feather-icon icon="LinkedinIcon" />
                    <feather-icon icon="WhatsappIcon" />
                    <feather-icon icon="YoutubeIcon" />
                </div>
                <div class="mt-8 text-center">
                    <vs-button class="cyan-dark register-btn">CONTACTAR</vs-button>
                </div>
                <div class="text-right mr-2" style="margin-top: -50px;" >
                    <img src="@assets/images/logo/watermark.png">
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
  min-height: calc(var(--vh, 1vh) * 100 - 150px);

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
      padding: 0 !important;
  }
}
</style>