<template>
    <div class="catalog-card">
        <div class="h6 mb-2 mx-8 text-center">
            {{title}}
        </div>
        <div class="flex w-full items-center justify-center card-header grey-real">
            <svg-icon size="w-12 h-12" color="text-black" icon="brochure"/>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/2">
                <div @click="showBrochure(id)" class="flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer">
                    <svg-icon size="w-5 h-5" icon="eye" />
                    <div class="ml-2" style="font-size: 0.9rem">{{$t('See')}}</div>
                </div>
            </div>
            <div class="vx-col w-1/2">
                <div @click="removeBrochure(id)" class="flex items-center justify-center text-white py-2 yellow-dark w-full cursor-pointer">
                    <svg-icon size="w-5 h-5" icon="erase" />
                    <div class="ml-2" style="font-size: 0.9rem">{{$t('Delete')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    remove: {
      type: Function,
      required: false  
    },
    show: {
      type: Function,
      required: false
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeBrochure (id) {
      this.remove(id)  
    },
    showBrochure (id) {
      this.show(id)  
    }
  }
}
</script>
<style lang="scss">
.catalog-card {
    margin: 0 1.5rem;
    font-size: 1rem;
    font-weight: normal;
    
    .card-header {
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        height: 12rem;
    }

}
</style>