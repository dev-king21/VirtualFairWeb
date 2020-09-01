<template>
    <div class="w-full">
        <app-header activeItem="1"></app-header>
        <bread-crumb :text="$t('ContactUs')" />
        <div class="flex w-full justify-center bg-white-grey home-contact-main">
            <div class="bg-white my-4 py-2 w-1/2 contact-form" :before-change="validateStep1">
                <div class="h1 text-center mt-8">
                    {{$t('ContactMessage')}}
                </div>
                <form data-vv-scope="step">
                <div class="vx-row px-20 mt-8">
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" :placeholder="$t('FirstName')" name="first_name"
                            v-validate="'required'" data-vv-validate-on="blur" v-model="user.first_name"/>
                        <span class="text-danger text-sm">{{ errors.first('step.first_name') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" :placeholder="$t('LastName')" name="Apellido"
                            v-validate="'required'" data-vv-validate-on="blur"  v-model="user.last_name"/>
                        <span class="text-danger text-sm">{{ errors.first('Apellido') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" placeholder="Email" name="Email"
                        v-validate="'required|email|min:5'" data-vv-validate-on="blur" v-model="user.email"/>
                        <span class="text-danger text-sm">{{ errors.first('Email') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" :placeholder="$t('Phone')" name="Telefono" 
                        v-validate="'required|min:8'" data-vv-validate-on="blur" v-model="user.phone"/>
                        <span class="text-danger text-sm">{{ errors.first($t('Phone')) }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" :placeholder="$t('Company')" name="Compania" 
                            v-validate="'required'" data-vv-validate-on="blur" v-model="user.company"/>
                        <span class="text-danger text-sm">{{ errors.first('Compania') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <vs-input class="w-full" color="success" :placeholder="$t('Position')" name="Posicion" 
                        v-validate="'required'" data-vv-validate-on="blur" v-model="user.address"/>
                        <span class="text-danger text-sm">{{ errors.first('Posicion') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <v-select v-model="selected_country" @input="setUserCountry" :options="countries"/> 
                        <span class="text-danger text-sm">{{ errors.first('Pais') }}</span>
                    </div>
                    <div class="vx-col w-full lg:w-1/2 md:w-1/2 sm:w-full xs:w-full mb-6 px-3">
                        <v-select v-model="selected_region" @input="setUserRegion" :options="regions.filter((it) => it.country_id === selected_country.id)"/> 
                        <span class="text-danger text-sm">{{ errors.first('Region') }}</span>
                    </div>

                    <div class="vx-col w-full px-3">
                        <vs-textarea class="w-full" color="success" height="100px" v-model="user.message"
                         :placeholder="$t('Comments')" lines="5"></vs-textarea>
                    </div>
                </div>
                </form>
                <div class="flex items-center justify-center mt-8">
                    <svg-icon icon="facebook" size="w-8 h-8 mx-1"></svg-icon>
                    <svg-icon icon="instagram"  size="w-8 h-8 mx-1"></svg-icon>
                    <svg-icon icon="linkedin" size="w-8 h-8 mx-1" ></svg-icon>
                    <svg-icon icon="whatsapp" size="w-8 h-8 mx-1" ></svg-icon>
                    <svg-icon icon="youtube" size="w-8 h-8 mx-1" ></svg-icon>
                </div>
                <div class="mt-8 text-center">
                    <vs-button class="cyan-dark register-btn" @click="send_message">{{$t('Contact')}}</vs-button>
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
import vSelect from 'vue-select'
import i18n from '../../i18n/i18n'
import { Validator } from 'vee-validate'
const dict = {
  custom: {
    first_name: {
      required: 'First name is required',
      alpha: 'First name may only contain alphabetic characters'
    },
    last_name: {
      required: 'Last name is required',
      alpha: 'Last name may only contain alphabetic characters'
    },
    email: {
      required: 'Email is required',
      email: 'Please enter valid email'
    },
    job_title: {
      required: 'Job title name is required',
      alpha: 'Job title may only contain alphabetic characters'
    },
    proposal_title: {
      required: 'Proposal title name is required',
      alpha: 'Proposal title may only contain alphabetic characters'
    },
    event_name: {
      required: 'Event name is required',
      alpha: 'Event name may only contain alphabetic characters'
    }
  }
}

Validator.localize('en', dict)

export default {
  methods: {
       validateStep1 () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll('step').then(result => {
          if (result) {
            resolve(true)
          } else {
            reject('correct all values')
          }
        })
      })
    },
      setUserCountry () {
      if (this.selected_country) {
        this.user.country = this.selected_country.name
      } else {
        this.user.country = undefined
      }
      this.selected_region = undefined
      this.user.region = undefined      
    },
    setUserRegion () {
      if (this.selected_region) {
        this.user.region = this.selected_region.name
      } else {
        this.user.region = undefined
      }      
    },
    send_message () {
      if (!this.user.message) {
        this.$vs.notify({
          title: this.$t('Error'),
          text: this.$t('EnterMessage'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
      }

      this.$http.post('/api/contact_message', this.user)
        .then((res) => {
          if (res.data.status === 'ok') {
            this.$vs.notify({
              title:this.$t('Notification'),
              text:this.$t('RequestReceive'),
              color:'success',
              iconPack: 'feather',
              icon:'icon-mail'
            })  
          }  
        })
        this.user = {}
        this.selected_country = {id: 0, label: this.$t('SelectCountry')}
        this.selected_region = {id: 0, label: this.$t('SelectRegion')}
    }
  },
  components: {
    AppHeader,
    BreadCrumb,
    vSelect
  },
  data () {
    return {
      user: {},
      countries: [],
      regions: [],
      country_id: 0,
      region_id: 0,
      selected_country: '',
      selected_region: ''
    }  
  },
  created () {
       this.$http.get('/api/country_info')
      .then((res) => {
        if (res.data.countries) {
          this.countries = res.data.countries
          this.regions = res.data.regions
          this.selected_country = {id: 0, label: this.$t('SelectCountry')}
          this.selected_region = {id: 0, label: this.$t('SelectRegion')}
        }        
      })
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