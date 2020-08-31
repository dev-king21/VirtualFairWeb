<template>
<div class="w-full">
    <app-header/>  
    <div class="flex w-full flex-col setting-stand-bg-img items-center justify-between setting-stand-main" 
        :style="`background-image: url('/fair_image/${stand_type.interior}');`">
        <div class="absolute flex flex-col w-full justify-between stand-header" >
            <div class="flex w-full">
                <div class="flex flex-row breadcrumb2">
                    <nav-back-button/>
                    <div class="flex items-center ml-4" :key="`stand-user-${index}`" v-for="(item, index) in contact_requests">
                        <vs-dropdown vs-custom-content vs-trigger-click>
                            <a class="flex items-center" href.prevent>
                                <div class="flex flex-col items-center justify-center ml-2 cursor-pointer" >
                                    <img :src="`/fair_image/${item.requestor.avatar}`" class="user-img responsive mx-4">
                                    <div class="text-black user-text">{{item.requestor.first_name}} {{item.requestor.last_name}}</div>
                                </div>
                            </a>
                            <vs-dropdown-menu class="dropdown-userinfo">
                                <div class="mb-1 font-italic">{{$t('Name')}}: {{item.requestor.first_name}} {{item.requestor.last_name}} </div>
                                <div class="mb-1 font-italic">Email: {{item.requestor.email}}</div>
                                <div class="mb-1 font-italic">{{$t('Phone')}}: {{item.requestor.phone}}</div>
                                <div class="mb-1 font-italic">{{$t('Position')}}: {{item.requestor.address}}</div>
                                <div class="mb-1 font-italic">{{$t('Company')}}: {{item.requestor.company}}</div>
                                <div class="mb-1 font-italic">{{$t('Country')}}: {{item.requestor.country}}</div>
                                <div class="mb-1 font-italic">{{$t('Region')}}: {{item.requestor.region}}</div>
                            </vs-dropdown-menu>
                        </vs-dropdown>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-between stand-social-icons mx-2">
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="facebook"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">{{$t('Facebook')}}</div>
                            <div class="mb-1 font-italic">{{$t('Example')}}</div>
                            <div class="mb-1 font-italic"><vs-input placeholder="https://www.facebook.com/..." v-model="contact.facebook" class="w-full"></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button @click="saveContact()" class="cyan-dark">{{$t('Save')}}</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="instagram"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">{{$t('Instagram')}}</div>
                            <div class="mb-1 font-italic">{{$t('Example')}}</div>
                            <div class="mb-1 font-italic"><vs-input placeholder="https://www.instagram.com/..." v-model="contact.instagram" class="w-full"></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button @click="saveContact()" class="cyan-dark">{{$t('Save')}}</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="linkedin"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">{{$t('LinkedIn')}}</div>
                            <div class="mb-1 font-italic">{{$t('Example')}}</div>
                            <div class="mb-1 font-italic"><vs-input placeholder="https://www.linkedin.com/company/..." v-model="contact.linkedin" class="w-full"></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button @click="saveContact()" class="cyan-dark">{{$t('Save')}}</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="whatsapp"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">{{$t('WhatsApp')}}</div>
                            <div class="mb-1 font-italic">{{$t('Example')}}</div>
                            <div class="mb-1 font-italic"><vs-input v-model="contact.whatsapp" class="w-full"></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button @click="saveContact()" class="cyan-dark">{{$t('Save')}}</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                    <vs-dropdown vs-custom-content vs-trigger-click>
                        <a class="flex items-center" href.prevent>
                            <svg-icon class="mx-2 cursor-pointer" size="w-8 h-8" icon="youtube"/>
                        </a>
                        <vs-dropdown-menu class="dropdown-userinfo">
                            <div class="mb-1 font-bold">{{$t('Youtube')}}</div>
                            <div class="mb-1 font-italic">{{$t('Example')}}</div>
                            <div class="mb-1 font-italic"><vs-input placeholder="https://www.youtube.com/channel/..." v-model="contact.youtube" class="w-full"></vs-input></div>
                            <div class="mb-1 font-italic text-center"><vs-button @click="saveContact()" class="cyan-dark">{{$t('Save')}}</vs-button></div>
                        </vs-dropdown-menu>
                    </vs-dropdown>
                </div>
            </div>
        </div>
        <div class="absolute flex items-center justify-between w-full px-6 py-4 stand-footer">
            <stand-button class="stand-button" icon="list" to="/setting/stand/information" :text="$t('AddCompanyInfo')"/>
            <stand-button class="stand-button" icon="brochure" to="/setting/stand/brochure" :text="$t('UploadCatglog')"/>
            <stand-button class="stand-button" icon="gallery" to="/setting/stand/video" :text="$t('UploadPhoto')"/>
            <stand-button class="stand-button" icon="schedule-edit" to="/setting/stand/schedule" :text="$t('SeeSchedule')"/>
            <stand-button class="stand-button" icon="address-book" to="/setting/stand/contact" :text="$t('UploadBussiness')"/>
        </div>
        <div class="absolute stand-wrapper" style="border: 1px solid red">
            <div class="absolute" style="top: 64px">
                <div class="flex flex-col items-center justify-center text-white relative px-3 py-8" style="background: #ffffff88; color: #ffffffcc; height: 3rem">
                    <div>VISUALIZACION</div>
                    <div class="flex ites-center">
                        <feather-icon icon="EyeIcon"/>
                        <div class="ml-2">1234</div>
                    </div>
                </div>
            </div>
            <div class="absolute" style="bottom: 74px; right: 0">
                <div class="flex flex-col items-center justify-center text-white relative px-2 py-4 bg-blue-dark chatting-btn">
                  <svg-icon size="w-6 h-6" icon="contact"/>
                  <div class="ml-2 text-center cursor-pointer btn-text" @click="$router.push('/fair/chatting')">{{$t('ChattingOwner')}}</div>
                </div>
            </div>
            <div class="absolute stand-item-wrapper flex flex-col items-center justify-center text-white" 
                :key="`stand-content-item-${index}`" v-for="(s_content, index) in stand.stand_contents"
                :style="`left: ${s_content.stand_type_item.left * 100}%; top: ${s_content.stand_type_item.top * 100}%; width: ${s_content.stand_type_item.width * 100}%; height: ${s_content.stand_type_item.height * 100}%; background: #ffffff33; border: 1px solid green`">
                <template v-if="!s_content.content||s_content.content ===''">
                    <div class="stand-item text-center bg-blue-dark cursor-pointer">
                        <div @click="browseStandContent(s_content.stand_type_item.type, s_content.id)">{{$t('Upload')}} {{s_content.stand_type_item.type}}</div>
                    </div>
                </template>
                <template v-else>
                    <div class="relative text-center" style="width: 100%; height: 100%;">
                        <template v-if="s_content.stand_type_item.type==='image'">
                            <img style="width: 100%; height: 100%" :src="`/fair_image/${s_content.content}`"
                                @click="browseStandContent(s_content.stand_type_item.type, s_content.id)" />
                        </template>
                        <template v-else-if="s_content.stand_type_item.type==='video'">
                            <video controls style="width: 100%; height: 100%" :src="`/fair_image/${s_content.content}`"/>
                        </template>
                        <feather-icon @click="removeStandContent(s_content.id)" 
                            class="relative bg-yellow-dark p-2 cursor-pointer" 
                            svgClasses="w-5 h-5" icon="Trash2Icon"/>
                        <feather-icon @click="browseStandContent(s_content.stand_type_item.type, s_content.id)"
                            class="relative bg-cyan-dark p-2 ml-2 cursor-pointer" 
                            svgClasses="w-5 h-5" icon="Edit3Icon"/>
                    </div>
                </template>
            </div>
            <input class="hidden" type="file" ref="refStandImageFile" 
                accept=".jpg, .png, .gif, .jpeg" @change="contentChanged" />
            <input class="hidden" type="file" ref="refStandVideoFile" 
                accept=".avi, .mp4, .3gp" @change="contentChanged" />
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
      stand_type: {},
      content_id: 0,
      content_type: 'image',
      contact_requests: []
    }
  },
  methods: {
    saveContact () {
      this.$loading.show(this)
      this.$http.post('/api/setting/my_stand/save_contact', this.contact)
        .then((response) => {
          this.$loading.hide(this)
          if (response.data.status !== 'error') {
            this.$vs.notify({
              title:this.$t('Notification'),
              text: this.$t('ContactInfo'),
              color:'danger',
              iconPack: 'feather',
              icon:'icon-mail'})
            this.contact = response.data.contact    
          }
        })  
    },
    contentChanged (e) {
      const files = e.target.files
      this.validateAndUpload(files)  
    },
    validateAndUpload (files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: this.$t('TooManyFileTitle'),
          text: this.$t('TooManyFileContent'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isValidExt(rawFile)) {
        this.$vs.notify({
          title: this.$t('FileFormatTitle'),
          text: `${this.$t('FileFormatTitle')} ${this.content_type}`,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.saveStandContent(rawFile)
    },
    isValidExt (file) {
      if (this.content_type === 'image') return /\.(jpg|png|gif|jpeg)$/.test(file.name)
      else if (this.content_type === 'video') return /\.(avi|mp4|3gp)$/.test(file.name)
    },
    browseStandContent (type, id) {
      this.content_type = type
      this.content_id = id
      if (this.content_type === 'image') {
        this.$refs.refStandImageFile.click()  
      } else if (this.content_type === 'video') {
        this.$refs.refStandVideoFile.click()    
      }
    },
    saveStandContent (file) {
      const formData = new FormData()
      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      formData.append('id', this.content_id)
      formData.append('content_file', file)
      this.$refs.refStandImageFile.value = null
      this.$refs.refStandVideoFile.value = null
      this.$loading.show(this)
      this.$http.post('/api/setting/my_stand/save_content', formData, headers)
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
          if (response.data.status === 'ok') {
            this.refresh()
          }    
        })
    },
    removeStandContent (id) {
      this.$loading.show(this)
      this.$http.post('/api/setting/my_stand/remove_content', {_id: id})
        .then((response) => {
          this.$loading.hide(this)
          if (response.data.status === 'ok') {
            this.$vs.notify({
              title: this.$t('Success'),
              text: this.$t('DeleteMessage'),
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'success'
            })  
          }
          if (response.data.status === 'ok') {
            this.refresh()
          }
        })
    },
    refresh () {
      this.getStandContent()
    },  
    getStandContent () {
      this.$loading.show(this)
      this.$http.post('/api/setting/my_stand')
        .then((response) => {
          this.$loading.hide(this)
          const data = response.data
          if (data.status === 'error') {
            if (data.msg === 'unknown_fair') {
              this.$vs.notify({
                title: this.$t('Error'),
                text: this.$t('NoCurrentFair'),
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              })
              return this.$router.back()
            } else {
              this.$vs.notify({
                title: this.$t('Error'),
                text: this.$t('NoStandBuy'),
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              })
              return this.$router.back()
            }
          }
        
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
          
          this.stand = data.stand  
          this.stand_type = data.stand_type
          this.contact = this.stand.contact
          this.contact_requests = this.stand.contact_requests
        })
        .catch(() => {
          
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
            background: #ffffffee;
            width: 100%;
            .user-img {
                border-radius: 50%;
                width: 2.6rem;
                height: 2.6rem;
                border: 1px solid silver
            }

            .user-text {
                font-size: 0.6rem !important;
                color: #151515;
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

.dropdown-userinfo {
    a {
        
    }
    .vs-dropdown--menu {
        width: 320px;
        font-size: 0.8rem;
        padding: 0.5rem 1rem !important;
        .vs-button {
            font-size: 0.8rem !important;
            padding: 0.4rem 1rem !important;
            margin-top: 0.4rem;
        }
    }
}

</style>