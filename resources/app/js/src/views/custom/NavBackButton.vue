<template>
    <vs-button class="back-btn mb-6 text-center text-white" @click="$router.back()" color="black">
        <feather-icon svgClasses="w-6 h-6" icon="ArrowLeftIcon"></feather-icon>
        <div class="back-text">VOLVER</div>
    </vs-button>
</template>
<style lang="scss">
.layout--full-page{
    .back-btn {
        border-radius: 0 !important;
        border-bottom-right-radius: 0.8rem !important;
        padding: 0.3rem 0.8rem !important;
        height: 3.6rem !important;
        .back-text {
            font-size: 0.6rem !important;
        }
        
    }
}
</style>