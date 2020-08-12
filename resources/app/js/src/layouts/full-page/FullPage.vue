<template>
  <div class="layout--full-page">
    <router-view></router-view>
  </div>
</template>

<script>
import moduleAuth from '@/store/auth/moduleAuth.js'
export default {
  created () {
    if (!moduleAuth.isRegistered) {
      this.$store.registerModule('auth', moduleAuth)
      moduleAuth.isRegistered = true
    }
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      userInfo = JSON.parse(userInfo)
      if (userInfo.id !== 0 && userInfo.email && userInfo.email !== '') {
        this.$store.dispatch('auth/logged')
      }
    }
    
  }
}
</script>
<style lang="scss">
.layout--full-page {
  .vs-button {
    border-radius: 0 !important;
  }

}

.cyan-light {
    background: #8BAFB6 !important
  }

  .cyan-dark {
    background: #00818D !important
  }

  .blue-light {
    background: #164A8B !important
  }

  .blue-dark {
    background: #123058 !important
  }

  .yellow-light {
    background: #FFC700 !important
  }

  .yellow-dark {
    background: #FA712A !important
  }

  .green-light {
    background: #009D00 !important
  }  

  .grey-real {
    background: #AEB4C2 !important
  }

.font-italic {
  font-style: italic;
}

.uppercase {
  text-transform: uppercase;
}

.fs-4 {
  font-size: 0.4rem !important;
}

.fs-6 {
  font-size: 0.6rem !important;
}

.fs-7 {
  font-size: 0.7rem !important;
}

.fs-8 {
  font-size: 0.8rem !important;
}

.fs-10 {
  font-size: 1rem !important;
}

.fs-12 {
  font-size: 1.2rem !important;
}

.fs-14 {
  font-size: 1.4rem !important;
}

</style>
