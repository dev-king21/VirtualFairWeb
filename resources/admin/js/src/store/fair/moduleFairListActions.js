import axios from '@/axios.js'

export default {

  allFairs ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/fair/all')
        .then((response) => {
          commit('SET_FAIRS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  nextFairs ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/fair/next')
        .then((response) => {
          commit('SET_FAIRS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  liveFairs ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/fair/current')
        .then((response) => {
          commit('SET_FAIRS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  pastFairs ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/fair/past')
        .then((response) => {
          commit('SET_FAIRS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  addItem ({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post('/api/data-list/products/', {item})
        .then((response) => {
          commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  
  fetchDataListItems ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/api/data-list/products')
        .then((response) => {
          commit('SET_PRODUCTS', response.data)
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
