<template>
    <div class="stand-button cursor-pointer bg-white flex items-center py-2 px-3" @click="gopage">
        <svg-icon size="w-8 h-8" color="text-cyan-dark" :icon="icon"/>
        <div class="ml-2 font-bold uppercase">
            {{text}}
        </div>
    </div>    
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false
    }
  },
  data () {
    return {
        
    }
  },
  methods: {
    gopage () {
      if (this.$props.to) this.$router.push(this.$props.to)
    }
  }
}
</script>
<style lang="scss">
    .stand-button {
      border-top-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      font-size: 1rem !important;
      color: black !important;
    }
    
</style>