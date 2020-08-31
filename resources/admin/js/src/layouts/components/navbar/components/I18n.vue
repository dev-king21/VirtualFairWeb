<template>
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <span class="cursor-pointer flex items-center i18n-locale">
      <img class="h-4 w-5" :src="i18n_locale_img" :alt="$i18n.locale" />
      <span class="hidden sm:block ml-2">{{ getCurrentLocaleData.lang }}</span>
    </span>
    <vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
      <vs-dropdown-item @click="updateLocale('en')"><img class="h-4 w-5 mr-1" src="@assets/images/flags/en.png" alt="en" /> &nbsp;English</vs-dropdown-item>
      <vs-dropdown-item @click="updateLocale('es')"><img class="h-4 w-5 mr-1" src="@assets/images/flags/es.png" alt="pt" /> &nbsp;Spanish</vs-dropdown-item>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
import moduleAuth from '@/store/auth/moduleAuth.js'
export default {
  data () {
    return {
      lang: 'en'
    }
  },
  computed: {
    i18n_locale_img () {
      const lang = localStorage.getItem("language")
      const locale = lang? lang : 'en'
      this.$i18n.locale = locale
      
      if (locale === 'en') return require('@assets/images/flags/en.png')
      else if (locale === 'es') return require('@assets/images/flags/es.png')
      else return require('@assets/images/flags/en.png')
    },
    getCurrentLocaleData () {
      const lang = localStorage.getItem("language")
      const locale = lang? lang : 'en'
      this.$i18n.locale = locale
      if (locale === 'en')      return { flag: 'us', lang: 'English'    }
      else if (locale === 'es') return { flag: 'es', lang: 'Spanish'    }

    }
  },
  methods: {
    updateLocale (locale) {
      this.$i18n.locale = locale
      localStorage.setItem("language", locale)
      this.$router.go()
    }
  },
  created () {
    let lang = localStorage.getItem('language')
    this.lang = lang ? lang : 'en'
    this.$i18n.locale = lang
  }
}
</script>
