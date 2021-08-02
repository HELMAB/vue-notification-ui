const state = () => ({
  notifications: []
})

const mutations = {
  add(state, notification) {
    state.notifications.push(notification)
  },
  remove(state, notification) {
    state.notifications.splice(state.notifications.indexOf(notification), 1)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
