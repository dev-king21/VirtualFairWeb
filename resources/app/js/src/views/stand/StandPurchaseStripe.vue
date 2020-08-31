<template>
    <div class="w-full">
        <app-header ></app-header>
        <div class="w-full purchase-main">
            <bread-crumb text="pagar stand" />
            <div class="flex justify-center bg-white-grey">
                <div class="w-1/2 my-6" style="max-width: 600px; text-center">
                    <div class="py-6 font-bold text-center bg-white h2">
                        {{$t('CostStand')}}: ¢250.000
                    </div>
                    <div class="flex flex-col py-4 px-8" style="background: #f8f8f8"> 
                        <div class="text-center" style="color: #222;">
                            {{$t('PaymentInfo')}}
                        </div>
                        <div style="border-bottom: 1px solid #c2c2c2;">

                        </div>
                        <div class="mt-6">
                            <div>{{$t('CardNum')}}</div>
                            <div id="card-number-element" class="field"></div>
                        </div>
                        <div class="mt-6 flex justify-between">
                            <div class="w-1/2">
                                <div>MM/AAAA</div>
                                <div id="card-expiry-element" class="field"></div>
                            </div>
                            <div class="w-1/2">
                                <div>CVC</div>
                                <div id="card-cvc-element" class="field"></div>
                            </div>
                        </div>
                        <div class="mt-6">
                            <div>{{$t('CardNum')}}</div>
                            <div class="field" :class="{'StripeElement--focus': holder_focus}">
                                <vs-input @focus="holder_focus=true" @blur="holder_focus=false" class="w-full" placeholder="Numero del tarjeta" v-model="holder_name"  />
                            </div>
                        </div>
                        <div class="mt-12 flex items-center justify-between">
                            <vs-button class="w-1/2 bg-danger py-4 fs-12" @click="checkoutStand" >{{$t('Payment Realizer')}}</vs-button>
                            <div>
                                <div>{{$t('CompletePurchase')}}</div>
                                <div class="text-cyan-dark font-bold">
                                    {{$t('TermUse')}}
                                </div>
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
  data () {
    return {
      load_contented: false,
      configured: false,
      addPaymentStatus: 0,
      addPaymentStatusError: '',
      holder_focus: false,
      holder_name:'', 
      stripeAPIToken: 'pk_test_51HHAb0JtUQ0xzKqWtCePfZBFPkZE6aJdHXFln5m42zuFO7BSzXLGlFBWAsUviSq3t3Tq2AhR2IHLhX6aLQ5kz0RY0013CwKdIq',
      stripe: '',
      elements: '',
      cardNumberElement: '',
      cardExpiryElement: '',
      cardCvcElement: '',
      intentToken: ''
    }
  },
  methods: {
    cvvChanged (evt) {
      if (48 > evt.keyCode || evt.keyCode > 58) {
        return false
      }
      return true

    },
    includeStripe (URL, callback) {
      const documentTag = document
      const tag = 'script',
        object = documentTag.createElement(tag),
        scriptTag = documentTag.getElementsByTagName(tag)[0]
      object.src = `//${URL}`
      if (callback) { object.addEventListener('load', function (e) { callback(null, e) }, false) }
      scriptTag.parentNode.insertBefore(object, scriptTag)
    },
    configureStripe () {
      const style = {
        base: {
          'iconColor': '#666EE8',
          'color': '#151515',
          'lineHeight': '40px',
          'fontWeight': 300,
          'fontFamily': 'Arial',
          'fontSize': '18px',

          '::placeholder': {
            color: '#b2b2b2'
          }
        }
      }
      this.stripe = Stripe(this.stripeAPIToken)

      this.elements = this.stripe.elements()
      this.cardNumberElement = this.elements.create('cardNumber', {style, showIcon: true, placeholder: 'Numero del tarjeta'})
      this.cardExpiryElement = this.elements.create('cardExpiry', {style, placeholder: 'MM/AA'})
      this.cardCvcElement = this.elements.create('cardCvc', {style, placeholder: 'CVC'})
      
      this.cardNumberElement.mount('#card-number-element')
      this.cardExpiryElement.mount('#card-expiry-element')
      this.cardCvcElement.mount('#card-cvc-element')
      this.$loading.hide(this)
    },
    checkoutStand () {
      this.$loading.show(this)
      this.addPaymentStatus = 1

      this.stripe.confirmCardSetup(
        this.intentToken.client_secret, {
          payment_method: {
            card: this.cardNumberElement,
            billing_details: {
              name: this.holder_name
            }
          }
        }
      ).then((result) => {
        if (result.error) {
          this.addPaymentStatus = 3
          this.addPaymentStatusError = result.error.message
        } else {
          this.savePaymentMethod(result.setupIntent.payment_method)
          this.addPaymentStatus = 2
          this.cardNumberElement.clear()
          this.cardExpiryElement.clear()
          this.cardCvcElement.clear()
          this.holder_name = ''
        }
      })
    },
    savePaymentMethod (method) {
      this.$http.post('/api/stand/purchase/save_transaction', {
        payment_method: method,
        stand_id: this.$route.params.stand_id
      }).then(() => {
        //this.loadPaymentMethods()
        this.$loading.hide(this)
        this.$vs.notify({
          title: $t('Success'),
          text: $t('PaymentMsg'),
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-alert-circle'
        })
        setTimeout(() => {
          this.$router.push('/setting/stand').catch(() => {})  
        }, 1000)
      })
    },
    loadIntent () {
      this.$http.post('/api/stand/purchase/setup-intent')
        .then((response) => {
          this.intentToken = response.data
        })
    }
  },
  created () {
    if (!this.$route.params.stand_id) {
      this.$router.back()  
    }
  },
  mounted () {
    this.$loading.show(this)
    this.includeStripe('js.stripe.com/v3/', () => {
      this.configureStripe()
    })
    this.loadIntent()
  }
}
</script>
<style lang="scss">
.purchase-main {
    min-height: calc(var(--vh, 1vh) * 100 - 86px);
    .field {
        border: 1px solid #b2b2b2;
        padding: 0.2rem 0.8rem;
        margin-right: 0.8rem;
    }

    input, textarea {
        border-radius: 0 !important;
    }

    .vs-input--input.normal {
        font-size: 18px !important;
        padding: 0.2rem 0 !important;
        line-height: 40px !important;
        border: none !important;
        background: transparent !important;
    }

    .vs-input--input:focus {
        box-shadow: none !important;
    }

    .vs-input--placeholder.normal {
        font-size: 18px !important;
        padding: 0.6rem 0 !important;
        font-weight: 400 !important;
        transform: none !important;        
    }
    
    .StripeElement--focus {
        border: 1px solid #00818D;
    }
    
}
</style>