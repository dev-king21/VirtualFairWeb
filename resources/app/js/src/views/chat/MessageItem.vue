<template>
    <div class="my-6 w-full message-item" >
        <template v-if="received">
            <div class="flex flex-row justify-start items-end">
                <img :src="require(`@assets/images/pages/${user_img}`)" class="user-img responsive mx-4">
                <div class="w-1/2 receive-item bg-white">
                    <div>{{content}}</div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="flex flex-row justify-end items-end">
                <div class="w-1/2 send-item bg-msg-send">
                    <div>{{content}}</div>
                </div>
                <img :src="require(`@assets/images/pages/${user_img}`)" class="user-img responsive mx-4">
            </div>
        </template>
    </div>
</template>
<script>
export default {
  props: {
    received: {
      type: Boolean,
      required: false
    },
    user_img: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">

</style>
