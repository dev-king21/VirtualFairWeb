<template>
<div class="w-full">
  <app-header activeItem="0"/>  
  <div class="flex w-full flex-col items-center justify-start bg-white-grey setting-stand-information">
      <div class="flex w-full">
          <nav-back-button/>
      </div>
      <div class="w-full h-full mb-5 bg-white page-content">
        <div class="flex items-center mt-8 ml-8">
          <div class="info-logo grey-real flex items-center justify-center cursor-pointer">
            <img ref="logoPreview" :src="`/fair_image/${stand.logo}`" class="info-logo" />
          </div>
          <div class="h2 font-bold mx-8">
          {{stand.company}}
          </div>
        </div>
        <div>
          <div class="flex items-center mt-4 ml-8">
            <div class="h2">{{$t('CompanyInfo')}}</div>
          </div>
          <div class="w-full mt-4 ml-12">
            <div v-html="description"></div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import NavBackButton from '@/views/custom/NavBackButton.vue'
export default {
  components: {
    AppHeader,
    NavBackButton
  },
  data () {
    return {
      stand: {
        id: null,
        company: null,
        description: null  
      }
    }
  },
  computed: {
    description () {
      return this.stand.description ? this.stand.description.replace(/\n/g, '<br>') : ''
    }  
  },
  methods: {
    getInformation () { 
      if (!this.$route.params.stand_id) {
        return this.$route.push('/stand/home')
      }
      this.$loading.show(this)
      this.$http.post('/api/stand/information', {_id: this.$route.params.stand_id})
        .then((response) => {
          this.$loading.hide(this)
          const data = response.data
          if (data.status === 'error') return console.log(data.msg)
          if (!data.stand || !data.stand.id) {
             this.$vs.notify({
              title: this.$t('Error'),
              text: this.$t('BucketMsg'),
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            })
            setTimeout(() => {
              this.$router.push('/setting/home')    
            }, 3000)
            return
          } 
          this.stand.id = data.stand.id
          this.stand.company  = data.stand.company
          this.stand.description  = data.stand.description
          this.stand.logo = data.stand.logo
          if (this.stand.logo) this.logo_show = true
        })
    } 
  },
  created () {
    this.getInformation()
  }
  
}
</script>
<style lang="scss">
.setting-stand-information {
    min-height: calc(var(--vh, 1vh) * 100 - 86px); 
    .page-content {
      width: calc(100% - 10rem) !important;
      
      .info-logo {
          width: 150px;
          height: 150px;
      }
    }
}
</style>
    