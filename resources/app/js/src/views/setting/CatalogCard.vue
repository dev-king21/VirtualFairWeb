<template>
    <div class="catalog-card">
        <div class="h6 mb-2 mx-8 text-center">
            {{title}}
        </div>
        <div class="flex w-full items-center justify-center card-header grey-real">
            <feather-icon svgClasses="w-12 h-12"  color="black" icon="BookOpenIcon"/>
        </div>
        <div class="vx-row">
            <div class="vx-col w-1/2">
                <div class="flex items-center justify-center text-white py-2 cyan-dark w-full cursor-pointer">
                    <feather-icon svgClasses="w-5 h-5" icon="EyeIcon" />
                    <div class="ml-2" style="font-size: 0.9rem">VER</div>
                </div>
            </div>
            <div class="vx-col w-1/2">
                <div class="flex items-center justify-center text-white py-2 yellow-dark w-full cursor-pointer">
                    <feather-icon svgClasses="w-5 h-5" icon="Trash2Icon" />
                    <div class="ml-2" style="font-size: 0.9rem">BORRAR</div>
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
    item: {
      type: String,
      required: true  
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