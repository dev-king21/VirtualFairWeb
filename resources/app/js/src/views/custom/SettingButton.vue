<template>
    <div class="setting-button cursor-pointer flex items-end"  @click="gopage">
        <div class="flex icon-span items-center justify-center" :class="cls">
          <svg-icon size="w-12 h-12" :icon="icon"/>
        </div>
        <div class="flex text-span h5 items-center">
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
    },
    cls: {
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
    .setting-button {
        width: 46%;
        .icon-span{
            border-top-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
            background: rgb(103, 179, 81);
            height: 6rem;
            width: 6rem;
            padding: 0.8rem;
            z-index: 20;
            color: white;
        }
        .text-span{
            width: 65%;
            height: 5rem;
            margin-left: -0.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top-right-radius: 1rem;
            background: rgba(255, 255, 255, 0.85);
            padding: 0.6rem;
            text-transform: uppercase;
            z-index: 19;
            color: #151515;
            font-weight: 600;
        }
    }
</style>