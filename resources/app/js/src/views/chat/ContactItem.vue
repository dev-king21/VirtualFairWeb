<template>
    <div class="py-4 my-3 w-full bg-white contact-item" @click="selectContact(idx)">
        <div class="flex flex-row w-full items-center" :class="{'border-contact': active_index === idx}">
            <img :src="user_img" class="user-img responsive mx-4">
            <div class="ml-2 w-full">
                <div class="font-bold">{{expositor_name}}</div>
                <div>{{expositor_profession}}</div>
                <div>{{expositor_company}}</div>
                <div>{{expositor_country}}</div>
            </div>
            <div class="mx-4" v-if="count!==0">
              <div class="badge flex items-center justify-center">
                <div>{{count}}</div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    expositor_name: {
      type: String,
      required: true
    },
    expositor_company: {
      type: String,
      required: true
    },
    expositor_profession: {
      type: String,
      required: true
    },
    expositor_country: {
      type: String,
      required: true
    },
    active_index: {
      type: Number,
      required: true
    },
    user_img: {
      type: String,
      required: true
    },
    idx: {
      type: Number,
      required: true
    },
    select: {
      type: Function,
      required: true
    },
    count: {
      type: Number,
      required: false
    }
  },
  
  methods: {
    selectContact (id) {
      this.select(id)
    }
  }
}
</script>
<style lang="scss">
.contact-item {
  .badge {
    background: #ff2200; 
    border-radius: 100%;
    color: white;
    width: 1.6rem; 
    height: 1.6rem;
    font-size: 0.8rem;
    font-weight: normal !important;
  }
}

</style>