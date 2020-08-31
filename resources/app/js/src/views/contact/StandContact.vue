<template>
    <div class="w-full">
        <app-header activeItem="2"></app-header>
        <bread-crumb icon="address-book" type="svg" text="contactar" />
        <div class="flex w-full justify-center px-8 py-2 bg-white-grey stand-contact-main">
          <div class="h4 mt-8 font-italic" style="width: 500px;">
            <div class="contact-info">
              <div>{{$t('Name')}}: {{user.first_name}} {{user.last_name}}</div>
              <div>Email: {{user.email}}</div>
              <div>{{$t('Phone')}}: {{user.phone}}</div>
              <div>{{$t('Position')}}: {{user.address}}</div>
              <div>{{$t('Company')}}: {{user.company}}</div>
              <div>{{$t('Country')}}: {{user.country}}</div>
              <div>{{$t('Region')}}: {{user.region}}</div>
              <div class="flex">
                <div>{{$t('InterestArea')}}: </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div class="ml-4 mt-8" style="width: 500px">
            <h3>{{$t('ContactMsg')}}</h3>
            <div class="mb-4">
              <vs-textarea class="mt-2" placeholder="Escriba el mensaje aquí" style="height: 120px;" v-model="contact_text"/>
              <div class="ml-4" style="color: #ee0000" v-show="error_contact_text">{{$t('MsgOption')}}</div>
            </div>
            <div>
              <vs-checkbox color="rgb(103, 179, 81)" class="mb-4" v-model="accept">{{$t('AcceptTerm')}}</vs-checkbox>
              <vs-checkbox color="rgb(103, 179, 81)" class="mb-4" v-model="mail_available">{{$t('EmailTerm')}}</vs-checkbox>
              <vs-checkbox color="rgb(103, 179, 81)" class="mb-4" v-model="phone_available">{{$t('PhoneTerm')}}</vs-checkbox>
            </div>
            <div class="text-center mt-12">
              <vs-button @click="contactRequest" class="cyan-dark">{{$t('Contact')}}</vs-button>
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
      phone_available: false,
      error_contact_text: false 
    }  
  },
  methods: {
    contactRequest () {
      if (!this.accept) {
        return 
      }
      if (!this.contact_text) {
        this.error_contact_text = true
        return 
      } else {
        this.error_contact_text = false
      }
      const param = {
        stand_id: this.$route.params.stand_id,
        contact_text: this.contact_text,
        mail: this.mail_available,
        phone: this.phone_available
      }
      this.$loading.show(this)
      this.$http.post('/api/fair/sponsor/request', param)
        .then((response) => {
          this.$loading.hide(this)
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: this.$t('Success'),
              text: this.$t('SuccessMessage'),
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } else {
            this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('FailMessage'),
              color: 'danger',
              iconPack: 'feather',
              icon: 'icon-alert-circle'
            })
          } 
        })
    }
  },
  created () {
    const userInfo = localStorage.getItem('userInfo')
    if (!userInfo || !this.$route.params.stand_id) {
      return this.$router.push('/home')
    }
    this.user = JSON.parse(userInfo)
    this.$loading.show(this)
    this.$http.get('/api/fair/sponsor')
      .then((response) => {
        this.$loading.hide(this)
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