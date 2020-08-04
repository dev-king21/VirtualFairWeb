<template>
    <div class="py-4 my-3 w-full bg-white contact-item" >
        <div class="flex flex-row w-full items-center" :class="{'border-contact': active}">
            <img :src="require(`@assets/images/pages/${user_img}`)" class="user-img responsive mx-4">
            <div class="ml-2">
                <div class="font-bold">{{expositor_name}}</div>
                <div>{{expositor_profession}}</div>
                <div>{{expositor_company}}</div>
                <div>{{expositor_country}}</div>
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
    active: {
      type: Boolean,
      required: false
    },
    user_img: {
      type: String,
      required: true
    }
  }
}
</script>
