<template>
    <div class="w-full">
      <app-header activeItem="0"></app-header>
      <bread-crumb 
          icon="MonitorIcon" text="networking" 
          :avartar="true" 
          user_img="maintenance-2.png" 
          user_name="Felipe Alenso Guererro"/>
      <div class="flex w-full flex-col px-8 bg-white-grey chatting-main">
          <div class="pl-8 pt-6">
              <h2>CHAT</h2>
          </div>
          <div class="vx-row page-content">
              <div class="vx-col lg:w-1/3 md:w-1/3 sm:w-1/3 xs:w-1/3 contact-panel">
                  <div class="contact-wrapper">
                    <component :is="scrollbarTag" ref="contactScrollPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psContactSectionScroll" @scroll="psContactSectionScroll" >
                      <contact-item 
                          :active="(index === 1)? true : false"
                          expositor_name="Felipe Alenso Guererro"
                          expositor_company="MFC"
                          expositor_profession="Especilista en estrategias de marcas"
                          expositor_country="Costa Rica"
                          user_img="maintenance-2.png" 
                          :key="`message-item-${index}`"
                          v-for="(item, index) in all_schedules"/>
                    </component>
                  </div>
              </div>
              <div class="vx-col w-2/3 content-panel">
                  <div class="ml-12 my-3" style="height: 100%">
                      <div class="flex flex-row w-full items-center bg-white py-3">
                          <img src="@assets/images/pages/maintenance-2.png" class="user-img responsive mx-4">
                          <div class="ml-2">
                              <div class="font-bold">Felipe Alenso Guererro</div>
                              <div>Online</div>
                          </div>
                      </div>
                      <div class="mt-4">
                        <div class="message-wrapper">
                          <component :is="scrollbarTag" ref="messageScrollPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psMessageSectionScroll" @scroll="psMessageSectionScroll" >
                            <message-item
                                :received="(index % 2 === 0)? true: false" 
                                content="Lerem ipsum dolor sit amet, consectetuer adipiscing edit, sed diam nonum"
                                user_img="maintenance-2.png" 
                                :key="`message-item-${index}`"
                                v-for="(item, index) in all_schedules"/>
                          </component>
                        </div>
                      </div>
                      <div>
                          <div class="w-full flex flex-row px-4 py-3 items-center justify-between bg-white msg-input">
                            <vs-input class="w-full inputx" placeholder="Enviar mensaje..." v-model="chat_text" size="large"/>
                            <div class="ml-6">
                              <vs-button type="filled" class="send-btn cyan-dark">
                                <feather-icon svgClasses="w-6 h-6" icon="SendIcon"/>
                              </vs-button>
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
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
import ContactItem from './ContactItem.vue'
import MessageItem from './MessageItem.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb,
    ContactItem,
    MessageItem,
    VuePerfectScrollbar
  },
  data () {
    return {
      chat_text: '',
      today_schedules: [],  
      all_schedules: [],
      settings: {      // perfectScrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed        : 1,
        swipeEasing       : true
      }
    }
  },
  computed: {
    scrollbarTag ()             { return this.$store.getters.scrollbarTag          }
  },
  methods: {
    psContactSectionScroll () {
      const scroll_el = this.$refs.contactScrollPs.$el || this.$refs.contactScrollPs
      this.showShadowBottom = scroll_el.scrollTop > 0
    },
    psMessageSectionScroll () {
      const scroll_el = this.$refs.messageScrollPs.$el || this.$refs.messageScrollPs
      this.showShadowBottom = scroll_el.scrollTop > 0
    }
  },
  created () {
    const list = []
    for (let i = 0; i < 9; i++) {
      list.push(i)
    }
    this.today_schedules = list.filter((it) => it < 3)   
    this.all_schedules = list
  }
}
</script>
<style lang="scss">
.chatting-main {
  height: calc(var(--vh, 1vh) * 100 - 150px);
  .page-content{
      .contact-panel {
        padding: 0 !important;        
        font-size: 0.8rem;
        font-weight: 900;
        color: #555;
        
        .chevron-border {
           border: 1px solid #f2f2f2;
           border-radius: 0.5rem;
           padding: 0.4rem; 
        }
      }

      .user-img {
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        border: 1px solid silver
      }

      .border-contact {
        border-left: 3px solid #123058;
      }

      .message-item {
        font-size: 1.1rem;
        margin-top: 2rem;
        color: #333;
        .receive-item {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            padding: 1.2rem 2rem;
        }

        .send-item {
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            padding: 1.2rem 2rem;
        }
      }

      .msg-input {
        border: 1px solid #efefef;
        .vs-input--input {
          border: none !important;
          padding-left: 0 !important;
        }
        .vs-input--input:focus {
          box-shadow: none !important;
        }
        .vs-input--placeholder {
          padding-left: 0 !important;
        }
        .send-btn {
          border-radius: 50% !important;
          width: 3.5rem !important;
          height: 3.5rem !important;
          padding: 1rem !important;
        }
      }

    .contact-wrapper section.ps-container {
      padding-right: 2rem !important;
      height: calc(var(--vh, 1vh) * 100 - 200px);
    }

    .message-wrapper section.ps-container {
      padding-right: 2rem !important;
      height: calc(var(--vh, 1vh) * 100 - 390px);
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