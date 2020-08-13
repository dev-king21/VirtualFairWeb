<template>
    <div class="setting-webinar-card card-border" :class="{'card-border': !noborder}">
        <div class="relative card-img">
            <img class="relative responsive" :src="`/fair_image/${user_img}`">
            <div class="card-over text-white flex flex-col justify-between" >
                <div>
                    <span class="text-white absolute p-3 bg-cyan-light" style="font-size: 0.8rem">{{workdate}}</span> 
                </div>
                <div class="card-title">
                    <div class="flex flex-row items-center">
                        <template v-if="live">
                            <svg-icon size="w-8 h-8" icon="live"/>
                            <div class="ml-2 text-white" style="font-size: 0.8rem">EN VIVO</div>
                        </template>
                        <template v-else>
                            <svg-icon size="w-8 h-8" icon="video"/>
                            <div class="ml-2 text-white" style="font-size: 0.8rem">GRABADO</div>
                        </template>
                    </div>
                    <div style="font-style: italic">{{title}}</div>
                </div>
            </div>
        </div>
        <div class="mt-2 center">
            <span class="flex items-center justify-center ml-4">
                <feather-icon svgClasses="w-5 h-5" icon="ClockIcon" class="text-cyan-dark"/>
                <span class="ml-2">{{time}}</span>
            </span>
        </div>
        <div class="flex flex-row items-center mt-2 px-4">
            <img class="user-img" :src="`/fair_image/${user_img}`"/>
            <div class="ml-4 user-info">
                <div class="h6 font-bold">Lic. {{expositor_name}}</div>
                <div>{{expositor_profession}}</div>
            </div>
        </div>
        <div class="flex flex-row justify-end items-center mt-2">
            <vs-button v-show="!reserved" class="cyan-dark event-btn">
                VER DE NUEVO 
            </vs-button>
            <vs-button v-show="reserved" class="blue-dark event-btn p-big">
                VER
            </vs-button>
        </div>
        <!-- <vs-divider class="px-2" /> -->
    </div>
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    expositor_name: {
      type: String,
      required: true
    },
    expositor_profession: {
      type: String,
      required: true
    },
    user_img: {
      type: String,
      required: true
    },
    noborder: {
      type: Boolean,
      required: false
    },
    workdate: {
      type: String,
      required: true  
    },
    reserved: {
      type: Boolean,
      required: false
    },
    live: {
      type: Boolean,
      required: false
    }
  }
}
</script>
<style lang="scss">
.setting-webinar-card {
    background: white;
    margin: 1rem;
    font-size: 1rem;
    font-weight: normal;
    
    .user-img {
        border-radius: 50%;
        background-color: #33333355;
        height: 4rem !important;
        width: auto;
    }

    .event-btn {
        font-size: 1rem !important;
        padding: 0.8rem 0.6rem !important;
        min-width: 9rem !important;
        margin-top: 0.8rem !important;
    }

    .event-btn.p-big {
        padding: 0.8rem 1.2rem !important;
    }

    .desc-info {
        font-size: 0.9rem;
        padding: 0 1rem;
        font-style: italic;
    }

    .user-info {
        font-size: 0.9rem;
    }

    .card-over {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        bottom: 0;
        .card-title {
            background: #33333355;
            padding: 0.6rem;
        }
    }

    .card-img {
        background: #000000AA;
    }

}

.card-border {
    border: 1px solid #F2F2F2
}
</style>