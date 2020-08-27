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
                        <div class="mt-12 flex items-center justify-center w-full">
                          <div id="paypal-button" class="w-4/5"></div>
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

let pay_stand_id = 0
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
    pay_stand_id = this.$route.params.stand_id
  },
  mounted () {
    paypal.Buttons({
      createOrder (data, actions) {
      // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: '250.00',
                currency: 'USD'
              }
            }
          ]
        })
      },
      onApprove (data, actions) {
      // This function captures the funds from the transaction.
        return actions.order.capture().then(function (details) {
        // This function shows a transaction success message to your buyer.
          console.log(details)
          const param = {
            link: details.links[0].href,
            payer_id: details.payer.payer_id,
            payer_country: details.payer.address.country_code,
            payer_name: `${details.payer.name.given_name} ${details.payer.name.surname}`,
            payer_email: details.payer.email_address,
            payment_amount: `${details.purchase_units[0].amount.value} ${details.purchase_units[0].amount.currency_code}`,
            payment_status: details.purchase_units[0].payments.captures[0].status,
            payment_capture_id:  details.purchase_units[0].payments.captures[0].id,
            update_time: details.update_time,
            status: details.status,
            stand_id: pay_stand_id
          }
          console.log(param)
          return fetch('/api/stand/payment/save_transaction', {
            method: 'post',
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(param)
          }).then(() => {
            location.href = '/app/stand/home'
          })
        

          /* this.$http.post('/api/stand/payment/save_transaction', param)
            .then(() => {
              alert(`Transaction completed by ${  details.payer.name.given_name}`)
            }) */
          /* this.$http.post('/api/stand/payment/', param)
            .then(res => {
              

            }) */
          
        })
      }
    }).render('#paypal-button')
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