<template>
  <div class="excel-import">
    <img :src="image_source" ref="imagePreview" alt="user-profile-cover" class="responsive">
    <input type="file" ref="fileInput" class="hidden" accept=".png, .gif, .jpg, .jpeg" @change="handleClick">
    <div v-show="selected">
      <div class="flex justify-between flex-wrap">
        <vs-button class="mt-4" type="border" icon-pack="feather" icon="icon-x" color="dark"
            @click="cancelAction()">
            {{$t('Cancel')}}
        </vs-button>
      </div>
    </div>
    <div
      @click="$refs.fileInput.click()"
      @drop="handleDrop"
      @dragover="handleDragover"
      @dragenter="handleDragover"
      class="px-8 py-16 mt-4 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl">
      <feather-icon icon="UploadCloudIcon" svgClasses="h-16 w-16 stroke-current text-grey" class="block" />
      <span>{{$t('DropImage')}} </span>
      <span class="font-medium text-primary" @click.stop="$refs.fileInput.click()">{{$t('Browse')}}</span>
      <!-- <vs-button type="border" @click.stop="$refs.fileInput.click()">Browse</vs-button> -->
    </div>
  </div>
</template>

<script>
const preloader = '/fair_image/placeholder.png'
export default {
  props: {
    onSuccess: {
      type: Function,
      required: true
    },
    preview: {
      type: String,
      required: false
    },
    upload_key: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: false
    }
  },
  computed: {
    image_source () {
      return (this.preview) ? this.preview : preloader
    }
  },
  methods: {
    handleDragover (e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleDrop (e) {
      e.stopPropagation()
      e.preventDefault()
      const files = e.dataTransfer.files
      this.validateAndUpload(files)  
    },
    readerData (rawFile) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
          this.$refs.imagePreview.src = e.target.result
          this.selected = true
          const sendData = {}
          sendData.action = 'change'
          sendData.name = this.upload_key
          sendData.file = rawFile
          this.onSuccess(sendData)
          resolve()
        }
        reader.readAsDataURL(rawFile)
      })
    },
    handleClick (e) {
      const files = e.target.files
      this.validateAndUpload(files)  
    },
    validateAndUpload (files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: this.$t('TooManyFileTitle'),
          text: this.$t('TooManyFileContent'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isImage(rawFile)) {
        this.$vs.notify({
          title: this.$t('FileFormatTitle'),
          text: this.$t('FileFormatContent'),
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.uploadFile(rawFile)
    },
    isImage (file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name)
    },
    uploadFile (file) {
      this.$refs['fileInput'].value = null // fix can't select the same excel
      this.readerData(file)
    },
    cancelAction () {
      this.$refs.imagePreview.src = this.image_source
      this.selected = false
      const sendData = {}
      sendData.action = 'remove'
      sendData.name = this.upload_key
      this.onSuccess(sendData)
    }
  }  
}
</script>
