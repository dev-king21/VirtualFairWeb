<template>
  <div class="flex items-center">
    <!-- <img :src="avatar" alt="content-img" class="responsive rounded-lg"> -->
    <router-link :to="url" @click.stop.prevent class="text-inherit hover:text-primary">{{ params.value }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'CellRendererLink',
  computed: {
    url () {
      return '/rooms/talks/all/' + this.params.data.id
    },

    avatar () {
      return 'https://www.countryflags.io/' + this.params.data.code + '/shiny/32.png'
    }
  }
}
</script>
