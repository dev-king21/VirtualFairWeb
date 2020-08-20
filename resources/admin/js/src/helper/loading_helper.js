const colorLoading = '#00818D'
export default {
  show (screen) {
    screen.$vs.loading({ color: colorLoading, type: 'sound' })
  },

  hide (screen) {
    screen.$vs.loading.close()
  }

}

