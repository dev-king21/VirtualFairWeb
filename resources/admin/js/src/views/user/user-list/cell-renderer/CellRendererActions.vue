<template>
    <div :style="{'direction': $vs.rtl ? 'rtl' : 'ltr'}">
      <feather-icon icon="Edit3Icon" svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer" @click="editRecord" />
      <feather-icon icon="Trash2Icon" svgClasses="h-5 w-5 hover:text-danger cursor-pointer" @click="confirmDeleteRecord" />
    </div>
</template>

<script>
export default {
  name: 'CellRendererActions',
  methods: {
    editRecord () {
      this.$router.push(`/user/user-view/${this.params.data.id}`).catch(() => {})

      /*
              Below line will be for actual product
              Currently it's commented due to demo purpose - Above url is for demo purpose

              this.$router.push("/apps/user/user-edit/" + this.params.data.id).catch(() => {})
            */
    },
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: this.$t('DeleteTitle'),
        text: this.$t('DeleteConfig'),
        accept: this.deleteRecord,
        acceptText: this.$t('Delete'),
        cancelText: this.$t('Cancel')
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */

      this.showDeleteSuccess()
      const action = `/api/user/delete/${this.params.data.id}`
      this.$loading.show(this)
      this.$http.post(action)
        .then((response) => {
          this.$loading.hide(this)
        })
      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: this.$t('Success'),
        text: this.$t('DeleteMessage')
      })
    }
  }
}
</script>
