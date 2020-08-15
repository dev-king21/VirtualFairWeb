<template>
<div class="w-full">
    <app-header/>  
    <div class="flex w-full flex-col setting-stand-bg-img items-center justify-between setting-stand-main" 
        :style="`background-image: url('/fair_image/${stand_type.interior}');`">
        <div class="absolute flex flex-col w-full justify-between stand-header" >
            <div class="flex w-full">
                <div class="flex flex-row breadcrumb2">
                    <nav-back-button/>
                </div>
                <div class="flex flex-row items-center justify-between stand-social-icons mx-2" v-if="contact">
                  <a v-if="contact.facebook" class="flex items-center" :href="contact.facebook">
                      <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="facebook"/>
                  </a>
                  <a v-if="contact.instagram" class="flex items-center" :href="contact.instagram">
                      <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="instagram"/>
                  </a>
                  <a v-if="contact.linkedin" class="flex items-center" :href="contact.linkedin">
                      <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="linkedin"/>
                  </a>
                  <a v-if="contact.whatsapp" class="flex items-center" :href="contact.whatsapp">
                      <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="whatsapp"/>
                  </a>
                  <a v-if="contact.youtube" class="flex items-center" :href="contact.youtube">
                      <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="youtube"/>
                  </a>
                </div>
            </div>
        </div>
        <div class="absolute flex items-center justify-between w-full px-6 py-4 stand-footer">
            <stand-button class="stand-button" icon="list" :to="`/stand/information/${$route.params.stand_id}`" text="SOBRE NOSOTROS"/>
            <stand-button class="stand-button" icon="brochure" :to="`/stand/brochure/${$route.params.stand_id}`" text="CATÁLOGOS Y BROCHURES"/>
            <stand-button class="stand-button" icon="gallery" :to="`/stand/gallery/${$route.params.stand_id}`" text="GALERÍA"/>
            <stand-button class="stand-button" icon="schedule-edit" :to="`/stand/schedule/${$route.params.stand_id}`" text="AGENDAR CITAS"/>
            <stand-button class="stand-button" icon="address-book" :to="`/stand/contact/${$route.params.stand_id}`" text="CONTACTO"/>
        </div>
        <div class="absolute stand-wrapper" style="border: 1px solid red">
            <div class="absolute" style="bottom: 74px; right: 0">
                <div class="flex flex-col items-center justify-center text-white relative px-2 py-4 bg-blue-dark chatting-btn">
                  <svg-icon size="w-6 h-6" icon="contact"/>
                  <div class="ml-2 text-center btn-text">CHATEAR CON UN USEARIO</div>
                </div>
            </div>
            <div class="absolute stand-item-wrapper flex flex-col items-center justify-center text-white" 
                :key="`stand-content-item-${index}`" v-for="(s_content, index) in stand.stand_contents"
                :style="`left: ${s_content.stand_type_item.left * 100}%; top: ${s_content.stand_type_item.top * 100}%; width: ${s_content.stand_type_item.width * 100}%; height: ${s_content.stand_type_item.height * 100}%; background: #ffffff33; border: 1px solid green`">
                <div class="relative text-center flex items-center justify-center" style="width: 100%; height: 100%;">
                    <template v-if="s_content.stand_type_item.type==='image'">
                      <img style="width: 100%; height: 100%" :src="`/fair_image/${s_content.content}`" />
                    </template>
                    <template v-else-if="s_content.stand_type_item.type==='video'">
                      <video disabled style="width: 100%; height: 100%" :src="`/fair_image/${s_content.content}`"/>
                    </template>
                </div>
            </div>
            <template v-if="stand.stand_contents">
              <div class="absolute stand-item-wrapper flex flex-col items-center justify-center text-white cursor-pointer" 
                  :key="`stand-video-item-${index}`" v-for="(s_content, index) in stand.stand_contents.filter((it) => it.stand_type_item.type === 'video')"
                  :style="`left: ${s_content.stand_type_item.left * 100}%; top: ${s_content.stand_type_item.top * 100}%; width: ${s_content.stand_type_item.width * 100}%; height: ${s_content.stand_type_item.height * 100}%; background: #ffffff33; z-index: 99999`"> 
                <vs-icon size="5rem" class="play-icon" color="red" icon-pack="material-icons" icon="play_circle_filled" />
              </div>
            </template>
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
      contact: {},
      stand: {},
      stand_type: {}
    }
  },
  methods: {
    getStandContent () {
      if (!this.$route.params.stand_id) {
        return this.$router.push('/stand/home')
      }
      this.$http.post('/api/stand/home', {_id: this.$route.params.stand_id})
        .then((response) => {
          const data = response.data
          if (data.status === 'error') return console.log(data.msg)
        
          if (!data.stand || !data.stand.id) {
            this.$vs.notify({
              title: 'error',
              text: 'primero debe comprar el soporte.',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            })
            setTimeout(() => {
              this.$router.push('/setting/home')    
            }, 3000)
            return
          }
          console.log(data)
          this.stand = data.stand  
          this.stand_type = data.stand_type
          this.contact = this.stand.contact
        })  
    }
  },
  created () {
    this.getStandContent()
  }
}
</script>
<style lang="scss">
.setting-stand-main {
    height: calc(var(--vh, 1vh) * 100 - 86px); 
    .stand-header {
        z-index: 90;
        .breadcrumb2 {
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
        width: 100%;
        .stand-item-wrapper {
            z-index: 100;
            .tand-item {
                border-radius: 0.3rem;
                padding: 0.3rem 1rem !important; 
            }
        }
        .chatting-btn {
          height: 3rem; 
          border-top-left-radius: 1.5rem;
          padding: 5px;
          width: 110px;
          height: 80px;
          .btn-text {
            font-size: 0.8rem;
          }
        }
    } 
}
.setting-stand-bg-img {
    //background-image: url("/app/images/pages/stand1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw calc(var(--vh, 1vh) * 100 - 86px) !important;
}

.stand-social-icons {
    background: transparent;
}

</style>