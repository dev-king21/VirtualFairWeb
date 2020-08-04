<template>
  <div class="layout--full-page">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
.layout--full-page {
  .vs-button {
    border-radius: 0 !important;
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

}

.font-italic {
  font-style: italic;
}

.uppercase {
  text-transform: uppercase;
}
</style>
