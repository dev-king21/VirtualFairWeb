import axios from '@/axios.js'

export default {

  allCountry ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/country/all')
        .then((response) => {
          commit('SET_COUNTRIES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  activateCountries ({ commit }, item) {
    return new Promise((resolve, reject) => {
      console.log(item);
      axios.post(`/api/country/activate/${item.status}`, {countries: item.countries})
        .then((response) => {
          console.log(response.data);
          commit('SET_COUNTRIES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/data-list/products/${item.id}`, {item})
        .then((response) => {
          commit('UPDATE_PRODUCT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeItem ({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/data-list/products/${itemId}`)
        .then((response) => {
          commit('REMOVE_ITEM', itemId)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
}
