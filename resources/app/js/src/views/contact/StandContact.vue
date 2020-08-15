<template>
    <div class="w-full">
        <app-header activeItem="2"></app-header>
        <bread-crumb icon="address-book" type="svg" text="contactar" />
        <div class="flex w-full justify-center px-8 py-2 bg-white-grey stand-contact-main">
          <div class="h4 mt-8 font-italic" style="width: 500px;">
            <div class="contact-info">
              <div>Nombre: {{user.first_name}} {{user.last_name}}</div>
              <div>Email: {{user.email}}</div>
              <div>Teléfono: {{user.phone}}</div>
              <div>Posición: {{user.address}}</div>
              <div>Compañía: {{user.company}}</div>
              <div>País: {{user.country}}</div>
              <div>Región: {{user.region}}</div>
              <div class="flex">
                <div>Área de interés: </div>
                <div>
                  <!-- <div :key="`interest-item-${index}`" v-for="(item, index) in interest">
                    
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="ml-4 mt-8" style="width: 500px">
            <h3>Mensaje para contacto</h3>
            <div>
              <vs-textarea class="mt-2" placeholder="Escriba el mensaje aquí" style="height: 120px;" v-model="contact_text"/>
            </div>
            <div>
              <vs-checkbox color="rgb(103, 179, 81)" class="mb-4" v-model="accept">Acepto los términos y condiciones</vs-checkbox>
              <vs-checkbox color="rgb(103, 179, 81)" class="mb-4" v-model="mail_available">Autorizo que me puedan contactar por correo</vs-checkbox>
              <vs-checkbox color="rgb(103, 179, 81)" class="mb-4" v-model="phone_available">Autorizo que me puedan contactar por teléfono</vs-checkbox>
            </div>
            <div class="text-center mt-12">
              <vs-button @click="contactRequest" class="cyan-dark">CONTACTAR</vs-button>
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
      stands: [],
      user: {},
      contact_text: '',
      accept: false,
      mail_available: false,
      phone_available: false  
    }  
  },
  methods: {
    contactRequest () {
      if (!this.accept) {
        return 
      }
      const param = {
        stand_id: this.$route.params.stand_id,
        contact_text: this.contact_text,
        mail: this.mail_available,
        phone: this.phone_available
      }
      this.$http.post('/api/fair/sponsor/request', param)
        .then((response) => {
          console.log(response.data.status)
        })
    }
  },
  created () {
    const userInfo = localStorage.getItem('userInfo')
    if (!userInfo || !this.$route.params.stand_id) {
      return this.$router.push('/home')
    }
    this.user = JSON.parse(userInfo)
    
    this.$http.get('/api/fair/sponsor')
      .then((response) => {
        this.stands = response.data.stands  
      })
  }  
}
</script>
<style lang="scss">
.stand-contact-main {
  min-height: calc(var(--vh, 1vh) * 100 - 162px);
  
  .contact-info {
    div {
      padding: 0.5rem 1rem;
      color: #777;
    }
  }
  .vx-row {
      margin: 0 !important;
  }

  .vx-col {
      padding: 0 !important;
  }
}
</style>