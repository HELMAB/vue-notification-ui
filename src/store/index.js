import Vue from 'vue'
import Vuex from 'vuex'
import notification from "./modules/notification"

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    notification
  }
})

export default store
