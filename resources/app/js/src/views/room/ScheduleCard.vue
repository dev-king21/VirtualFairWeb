<template>
    <div class="room-schedule-card" :class="{'card-border': !noborder}">
        <div class="flex reserved">
            <template v-if="reserved">
                <span class="text-white font-normal">{{$t('Reserved')}}</span>
            </template>
        </div>
        <div class="flex flex-row justify-between items-center mt-2">
            <span class="flex items-center  ml-4">
                <feather-icon svgClasses="w-5 h-5" icon="ClockIcon" class="text-yellow-light"/>
                <span class="ml-2">{{time}}</span>
            </span>
            <span class="flex items-center  mr-4">
                <feather-icon svgClasses="w-5 h-5" icon="MonitorIcon" class="text-yellow-light"/>
                <span class="ml-2">WEBINAR</span>
            </span>
        </div>
        <div class="flex flex-row justify-between items-center mt-2">
            <span class="flex items-center ml-4">
                <span class="">{{$t('Conference')}}:</span>
            </span>
        </div>
        <div class="desc-info">
            {{title}}
        </div>
        <div class="flex flex-row items-center mt-2 px-4">
            <img class="user-img" :src="`/fair_image/${user_img ? user_img : 'placeholder.png'}`"/>
            <div class="ml-4 user-info">
                Lic. {{expositor_name}}<br>
                {{expositor_profession}}
            </div>
        </div>
        <div class="flex flex-row justify-between items-center mt-4">
            <vs-button class="cyan-light event-btn uppercase" @click="addToBoard">
                {{$t('AddBoard')}}
            </vs-button>
            <vs-button class="blue-light event-btn p-big uppercase" @click="showOrReserve">
                {{$t('Start')}}
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
    reserved: {
      type: Boolean,
      required: false
    },
    user_img: {
      type: String,
      required: true
    },
    noborder: {
      type: Boolean,
      required: false
    },
    id: {
      type: Number,
      required: true  
    },
    show: {
      type: Function,
      required: false  
    },
    add: {
      type: Function,
      required: false  
    }
  },
  methods: {
    showOrReserve () {
      if (this.show && this.id) this.show(this.id)  
    },
    addToBoard () {
      if (this.add && this.id) this.add(this.id)  
    }  
  }
}
</script>
<style lang="scss">
.room-schedule-card {
    background: white;
    margin: 1rem;
    font-size: 1rem;
    font-weight: normal;
    .reserved {
        height: 1.6rem;
        span {
            font-size: 0.6rem;
            padding: 0.5rem;
            background: #FFC700
        }
    }

    .user-img {
        border-radius: 50%;
        background-color: #33333355;
        height: 4rem !important;
        width: 4rem!important;
    }

    .event-btn {
      font-size: 0.85rem !important;
      padding: 0.9rem 1.2rem !important;
    }

    .event-btn.p-big {
        padding: 0.9rem 2rem !important;
    }

    .desc-info {
        font-size: 0.9rem;
        padding: 0 1rem;
        font-style: italic;
    }

    .user-info {
        font-size: 0.9rem;
    }

}

.card-border {
    border: 1px solid #E2E2E2
}
</style>