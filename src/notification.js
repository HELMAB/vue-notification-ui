// eslint-disable-next-line no-unused-vars
import './assets/css/notification.css'
import Notification from "./Notification"
import store from "./store"

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    const NotificationWrapper = Vue.extend(Notification)
    const vm = new NotificationWrapper({
      store
    }).$mount()

    document.body.appendChild(vm.$el)

    vm.options = options
    Vue.prototype.$notification = (title, body) => {
      vm.addNewNotification(Math.random(), title, body)
    }
  }
}
