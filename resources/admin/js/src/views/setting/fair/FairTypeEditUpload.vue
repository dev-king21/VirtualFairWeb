<template>
  <div class="excel-import">
    <img :src="preview" ref="imagePreview" alt="user-profile-cover" class="responsive">
    <input type="file" ref="fileInput" class="hidden" accept=".png, .gif, .jpg, .jpeg" @change="handleClick">
    <div v-show="selected">
      <div class="flex justify-between flex-wrap">
        <vs-button class="mt-4" type="border" icon-pack="feather" icon="icon-upload" color="success"
            @click="uploadAction()">
            Upload
        </vs-button>    
        <vs-button class="mt-4" type="border" icon-pack="feather" icon="icon-x" color="dark"
            @click="cancelAction()">
            Cancel
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
      <span>Drop Image File or </span>
      <span class="font-medium text-primary" @click.stop="$refs.fileInput.click()">Browse</span>
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
    }
  },
  data () {
    return {
      selected: false
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
      if (files.length !== 1) {
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'Only support uploading one file!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })
        return
      }
      const rawFile = files[0] // only use files[0]
      if (!this.isImage(rawFile)) {
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'Only supports upload .png, .gif, .jpg, .jpeg suffix files',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })
        return false
      }
      this.uploadFile(rawFile)
    },
    readerData (rawFile) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
          this.$refs.imagePreview.src = e.target.result
          this.selected = true
          resolve()
        }
        reader.readAsDataURL(rawFile)
      })
    },
    handleClick (e) {
      const files = e.target.files
      const rawFile = files[0]
      if (!rawFile) return
      this.uploadFile(rawFile)
    },
    isImage (file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name)
    },
    uploadFile (file) {
      this.$refs['fileInput'].value = null // fix can't select the same excel
      this.readerData(file)
    },
    uploadAction () {

    },
    cancelAction () {
      this.$refs.imagePreview.src = preloader
      this.selected = false
    }

  },
  created () {
    this.preview = preloader
  }
}
</script>
