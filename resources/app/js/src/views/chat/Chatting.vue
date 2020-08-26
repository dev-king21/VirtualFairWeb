<template>
    <div class="w-full">
      <app-header activeItem="0"></app-header>
      <bread-crumb 
          text="networking" 
          :avartar="true" 
          :user_img="`/fair_image/${me.avatar ? me.avatar : 'placeholder.png'}`" 
          :user_name="`${me.first_name} ${me.last_name}`"/>
      <div class="flex w-full flex-col px-8 bg-white-grey chatting-main">
          <div class="pl-8 pt-6">
              <h2>CHAT</h2>
          </div>
          <div class="vx-row page-content" v-if="contacts && contacts.length">
              <div class="vx-col lg:w-1/4 md:w-1/4 sm:w-1/3 xs:w-1/3 contact-panel">
                  <div class="contact-wrapper">
                    <component :is="scrollbarTag" ref="contactScrollPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psContactSectionScroll" @scroll="psContactSectionScroll" >
                      <contact-item 
                          class="cursor-pointer"
                          :idx="item.id"
                          :select="chatTo"
                          :active_index="active_index"
                          :expositor_name="`${item.first_name} ${item.last_name}`"
                          :expositor_company="`${item.company}`"
                          :expositor_profession="`${item.address}`"
                          :expositor_country="`${item.country}`"
                          :user_img="`/fair_image/${item.avatar ? item.avatar : 'placeholder.png'}`" 
                          :key="`message-item-${index}`"
                          :count="item.send_unread_messages? item.send_unread_messages.length : 0"
                          v-for="(item, index) in contacts"/>
                    </component>
                  </div>
              </div>
              <div class="vx-col lg:w-3/4 md:w-3/4 sm:w-2/3 xs:w-2/3 content-panel">
                  <div class="ml-4 my-3" style="height: 100%">
                      <div class="flex flex-row w-full items-center bg-white py-3">
                          <img :src="`/fair_image/${active_user.avatar}`" class="user-img responsive mx-4">
                          <div class="ml-2">
                              <div class="font-bold">{{active_user.first_name}} {{active_user.last_name}}</div>
                              <div>{{online_users.find((user) => user.id === active_user.id) ? 'online': 'offline'}}</div>
                          </div>
                      </div>
                      <div class="mt-4">
                        <div class="message-wrapper">
                          <component :is="scrollbarTag" ref="messageScrollPs" class="scroll-area-v-nav-menu pt-2" :settings="settings" @ps-scroll-y="psMessageSectionScroll" @scroll="psMessageSectionScroll" >
                            <message-item
                                :received="item.sender_id === active_user.id" 
                                :content="item.message"
                                :user_img="`${item.sender_id === active_user.id ? `/fair_image/${active_user.avatar}` : `/fair_image/${me.avatar}` }`" 
                                :key="`message-item-${index}`"
                                v-for="(item, index) in messages"/>
                          </component>
                        </div>
                      </div>
                      <div>
                          <div class="w-full flex flex-row px-4 py-3 items-center justify-between bg-white msg-input">
                            <vs-input class="w-full inputx" placeholder="Enviar mensaje..." @keypress="goEnter" v-model="chat_text" size="large"/>
                            <div class="ml-6">
                              <vs-button @click="sendMessage" type="filled" class="send-btn cyan-dark">
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
      active_index: 0,
      active_user: {},
      me: null,
      contacts: [],
      online_users: [],
      messages:[],
      settings: {      // perfectScrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed        : 1,
        swipeEasing       : true
      }
    }
  },
  computed: {
    scrollbarTag ()             { return this.$store.getters.scrollbarTag }
  },
  methods: {
    psContactSectionScroll () {
      const scroll_el = this.$refs.contactScrollPs.$el || this.$refs.contactScrollPs
      this.showShadowBottom = scroll_el.scrollTop > 0
    },
    psMessageSectionScroll () {
      const scroll_el = this.$refs.messageScrollPs.$el || this.$refs.messageScrollPs
      this.showShadowBottom = scroll_el.scrollTop > 0
    },
    chatTo (index) {
      this.$loading.show(this)
      this.active_index = index
      this.getMessages()
    },
    getMessages () {
      this.active_user = this.contacts.find((it) => it.id === this.active_index)
      this.$http.post('/api/fair/chat/messages', {other: this.active_index})
        .then((res) => {
          this.$loading.hide(this)

          this.messages = res.data.messages
          this.active_user.send_unread_messages = []
          setTimeout(() => {
            const scroll_el = this.$refs.messageScrollPs.$el || this.$refs.messageScrollPs
            scroll_el.scrollTop = scroll_el.scrollHeight
          })
        })
        .catch(() => {
          this.$loading.hide(this)
        })
    },
    goEnter (event) {
      if (event.keyCode === 13) {
        this.sendMessage()
      }
    },
    sendMessage () {
      if (this.chat_text === '') return
      this.$loading.show(this)
      this.$http.post('/api/fair/chat/send_message', {other: this.active_index, message: this.chat_text})
        .then(() => {
          this.messages.push({
            sender_id: this.me.id,
            receiver_id: this.active_index,
            message: this.chat_text
          })
          this.$loading.hide(this)
          this.chat_text = ''
          setTimeout(() => {
            const scroll_el = this.$refs.messageScrollPs.$el || this.$refs.messageScrollPs
            scroll_el.scrollTop = scroll_el.scrollHeight
          })
        })
        .catch(() => {
          this.$loading.hide(this)
        })
    }
  },
  created () {
    this.$loading.show(this)
    let userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      return this.$router.push('/home')
    }
    userInfo = JSON.parse(userInfo)
    if (!userInfo.id || !userInfo.email || userInfo.email === '') {
      return this.$router.push('/home')
    }
    this.me = userInfo
    this.$http.post('/api/fair/chat/contacts')
      .then((res) => {
        this.$loading.hide(this)
        this.contacts = res.data.contacts
        if (this.contacts.length !== 0) {
          this.active_index = this.contacts[0].id //res.data.active_index
          this.getMessages()
        }
      })
      .catch(() => {
        this.$loading.hide(this)
      })
    
    Echo.join('chat')
      .here(users => {
        this.online_users = users
      })
      .joining(user => {
        this.online_users.push(user)
      })
      .leaving(user => {
        this.online_users = this.online_users.filter(u => u.id !== user.id)
      })
      .listen('ChatEvent', (event) => {
        if (event.chat.receiver_id === this.me.id) {
          if (this.active_index === event.chat.sender_id) {
            this.messages.push(event.chat)
            setTimeout(() => {
              const scroll_el = this.$refs.messageScrollPs.$el || this.$refs.messageScrollPs
              scroll_el.scrollTop = scroll_el.scrollHeight
            })
          } else {
            const sender = this.contacts.find((item) => item.id === event.chat.sender_id)
            sender.send_unread_messages.push(event.chat)
          }
        }        
      })
      .listenForWhisper('typing', user => {
        this.activeUser = user
        if (this.typingTimer) {
          clearTimeout(this.typingTimer)
        }
        this.typingTimer = setTimeout(() => {
          this.activeUser = false
        }, 1000)
      })
  }
}
</script>
<style lang="scss">
.chatting-main {
  height: calc(var(--vh, 1vh) * 100 - 162px);
  .page-content{
      .contact-panel {
        padding: 0 !important;        
        font-size: 0.9rem;
        font-weight: 500;
        color: #151515;
        
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
      height: calc(var(--vh, 1vh) * 100 - 212px);
    }

    .message-wrapper section.ps-container {
      padding-right: 2rem !important;
      height: calc(var(--vh, 1vh) * 100 - 402px);
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