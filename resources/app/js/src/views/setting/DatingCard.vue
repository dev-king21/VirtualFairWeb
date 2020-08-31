<template>
    <div class="dating-card">
        <div class="vx-row mt-2">
            <div class="vx-col flex items-center w-1/4">
                <img :src="`/fair_image/${logo}`" class="logo-img">
            </div>
            <div class="vx-col flex flex-col items-center justify-center w-1/2">
                <div class="flex items-start w-full mt-3 px-4">
                    <feather-icon svgClasses="w-6 h-6" icon="ClockIcon" class="text-yellow-light"/>
                    <span class="ml-4">{{time}}</span>
                </div>
                <div class="flex items-start w-full mt-4 px-4">
                    <svg-icon size="w-6 h-6" icon="stand" class="text-yellow-light"/>
                    <span class="ml-4">Stand: {{stand_no}}</span>
                </div>
                <div class="flex items-start w-full mt-3 px-4">
                    <svg-icon size="w-6 h-6" icon="profession" class="text-yellow-light"/>
                    <span class="ml-4">{{$t('Exhibitor')}}: {{expositor_profession}}</span>
                </div>
            </div>
            <div class="vx-col flex items-end justify-end w-1/4">
                <vs-button class="blue-light event-btn p-big">
                    {{$t('GoAppointment')}}
                </vs-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      required: true
    },
    stand_no: {
      type: String,
      required: true  
    },
    expositor_profession: {
      type: String,
      required: true
    },
    logo: {
      type: String, 
      required: true  
    }
  }
}
</script>
<style lang="scss">
.dating-card {
    background: white;
    border: 1px solid #F2F2F2;
    margin: 1rem;
    font-size: 1rem;
    font-weight: normal;
    
    .logo-img {
        margin: 5%;
        width: 90% !important;
        height: auto;
    }

    .event-btn {
        font-size: 1rem !important;
        padding: 1rem 1.8rem !important;
    }

}
</style>