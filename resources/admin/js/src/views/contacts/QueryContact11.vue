<template>
    <div id="email-app" class="border border-solid d-theme-border-grey-light rounded relative overflow-hidden">
        <!-- SEARCH BAR -->
        <div class="flex border d-theme-dark-bg items-center">
            <feather-icon class="md:inline-flex lg:hidden ml-4 mr-4 cursor-pointer" icon="MenuIcon" />
            <vs-input icon-no-border icon="icon-search" size="large" icon-pack="feather" class="vs-input-no-border vs-input-no-shdow-focus w-full" v-model="searchQuery" search
            :data="this.queries" @keypress="searchList" placeholder="Search Contact" />
        </div>
        <!-- EMAILS LIST -->
        <component :is="scrollbarTag" class="email-content-scroll-area" :settings="settings" ref="mailListPS" :key="$vs.rtl">
            <transition-group name="list-enter-up" class="email__mails" tag="ul" appear>
                <li class="cursor-pointer email__mail-item" v-for="(query, index) in searchedQueries" :key="`search-query-${index}`">
                    <div class="mail__mail-item sm:px-4 px-2 py-6" >
                    <!-- MAIL ROW 1 : META -->
                    <div class="flex w-full">
                        <div class="mail__details">
                            <h3 >{{ query.name }}</h3>
                        </div>
                    </div>
                    <div class="flex w-full">
                        <div class="mail-item__meta flex items-center">
                            <h4>{{ query.email}}</h4>
                        </div>
                    </div>
                    <!-- /MAIL ROW 1 -->

                    <!-- MAIL ROW 2 : MSG & ACTIONS -->
                    <div class="flex w-full">
                        <div class="mail__message truncate ml-3">
                            <span>{{ query.message }}</span>
                        </div>
                    </div>
                    <!-- /MAIL ROW 2 -->
                </div>
                </li>
            </transition-group>
        </component>
       
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import moduleEmail         from '@/store/email/moduleEmail.js'

export default {
  data () {
    return {
      searchQuery          : '',
      queries              : [],
      searchedQueries      : [],
      openMailId           : null,
      selectedMails        : [],
      showThread           : false,
      clickNotClose        : true,
      settings             : {
        maxScrollbarLength : 60,
        wheelSpeed         : 0.30
      }
    }
  },
  
  computed: {
   
    selectAllCheckBox: {
      get () {
        // return this.selectedMails.length
      },
      set (value) {
        // value ? this.selectedMails = this.mails.map(mail => mail.id) : this.selectedMails = []
      }
    },
   
    selectAllIcon () {
      // return this.selectedMails.length === this.mails.length ? 'icon-check' : 'icon-minus'
    },
    scrollbarTag () { return this.$store.getters.scrollbarTag }
    
  },
  methods: {
    
    addToSelectedMails (mailId) {
      if (this.selectedMails.indexOf(mailId) === -1) this.selectedMails.push(mailId)
    },
    removeSelectedMail (mailId) {
      const mailIndex = this.selectedMails.indexOf(mailId)
      if (mailIndex !== -1) this.selectedMails.splice(mailIndex, 1)
    },
    
    searchList () {
      if (this.searchQuery === '') this.searchedQueries = this.queries
      else this.searchedQueries = this.queries.filter((item) => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || item.email.toLowerCase().includes(this.searchQuery.toLowerCase()) || item.message.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
    
    loadContent () {
      const action = '/api/query/all'
      this.$loading.show(this)
      this.$http.get(action)
        .then((response) => {
          const res = response.data
          this.queries = res.queries
          this.searchedQueries = this.queries
          this.$loading.hide(this)
        })
        .catch((error) => { console.log(error) })
    }
  },
  components: {
    VuePerfectScrollbar
  },
  created () {
    this.loadContent()                                        // Fetch Mail Tags
  },
  beforeDestroy () {
    this.$store.unregisterModule('email')
  },
  mounted () {
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/email.scss";
</style>
