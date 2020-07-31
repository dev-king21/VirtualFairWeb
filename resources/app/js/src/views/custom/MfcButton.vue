<template>
    <div class="mfc-button cursor-pointer flex items-end" @click="gopage">
        <span class="icon-span">
            <feather-icon class="w-6 h-6" :icon="icon"></feather-icon>
        </span>
        <span class="text-span">
            {{text}}
        </span>
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
    .mfc-button {
        .icon-span{
            /* border-top-right-radius: 1.4rem;
            border-bottom-left-radius: 1.4rem; */
            border-top-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
            background: rgb(103, 179, 81);
            padding: 0.4rem 0.8rem;
            z-index: 20;
            color: white;
        }
        .text-span{
            margin-left: -0.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top-right-radius: 1rem;
            /* border-top-right-radius: 1.4rem; */
            background: rgba(255, 255, 255, 0.7);
            /* padding: 0.7rem;
            font-size: 1rem; */
            padding: 0.6rem;
            font-size: 0.8rem;
            text-transform: uppercase;
            z-index: 19;
            color: #333;
            font-weight: 900;
        }
    }
    .mfc-button:hover {
        .icon-span{
            background: white;
            color: rgb(103, 179, 81);
        }
        .text-span{
            background: rgb(103, 179, 81);
            color: white;
        }
    }
</style>