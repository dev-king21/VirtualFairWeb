<template>
  <div class="flex items-center">
    <vs-avatar :src="`/fair_image/${params.data.avatar ? params.data.avatar : 'placeholder.png'}`" class="flex-shrink-0 mr-2" size="30px" />
    <router-link :to="url" @click.stop.prevent class="text-inherit hover:text-primary">{{ params.value }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'CellRendererLink',
  computed: {
    url () {
      return `/user/user-view/${this.params.data.id}`
    }
  }
}
</script>
