<template>
    <div class="w-full">
        <app-header ></app-header>
        <div class="w-full purchase-main">
            <bread-crumb text="pagar stand" />
            <div class="flex justify-center bg-white-grey">
                <div class="w-1/2 my-6" style="max-width: 600px; text-center">
                    <div class="py-6 font-bold text-center bg-white h2">
                        Costo del Stand: ¢250.000
                    </div>
                    <div class="flex flex-col py-4 px-8" style="background: #f8f8f8"> 
                        <div class="text-center" style="color: #222;">
                            Por favor ingrese la información de Pago
                        </div>
                        <div style="border-bottom: 1px solid #c2c2c2;">

                        </div>
                        <div class="mt-12 flex items-center justify-between">
                          <vs-button class="w-1/2 bg-danger py-4 fs-12" id="paypal-button">Realizer Pago</vs-button>
                          <div>
                              <div>AI completar la compra, aceptas estas</div>
                              <div class="text-cyan-dark font-bold">
                                  Condiciones de uso
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
      
    }
  },
  methods: {
    
  },
  created () {
    if (!this.$route.params.stand_id) {
      this.$router.back()  
    }
  },
  mounted () {
    console.log(this.$route)
    paypal.Button.render({
      env: 'sandbox', // Optional: specify 'sandbox' environment
      client: {
        sandbox:    'xxxx',
        production: 'xxxx'
      },
      locale: 'en_US',
      style: {
        size: 'large',
        color: 'gold',
        shape: 'pill',
        label: 'checkout',
        tagline: 'true'
      },
      commit: true, // Optional: show a 'Pay Now' button in the checkout flow
      payment () {
        const returnUrl = this.$route.path//'_YOUR_RETURN_URL'
        return new Promise((resolve, reject) => {
          this.$http.post('/stand/create-payment', {return_url: returnUrl})
            .then(res => {
              resolve(res.data.id)
            })
            .catch(error => {
              reject(error)
            })
        })
      },

      onAuthorize (data) {
        // Execute the payment here, when the buyer approves the transaction
        return new Promise((resolve, reject) => {
          this.$http.post('/stand/execute-payment',  {payer_id: data.payerID, payment_id: data.paymentID, stand_id: _id})
            .then(res => {
              resolve(res)
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    }, '#paypal-button')
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