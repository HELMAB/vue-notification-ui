// eslint-disable-next-line no-unused-vars
import './src/assets/css/notification.css'
import Notification from "./src/Notification"
import store from "./src/store"

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    const NotificationWrapper = Vue.extend(Notification)
    const vm = new NotificationWrapper({
      store
    }).$mount()

    document.body.appendChild(vm.$el)

    if (options) {
      vm.options = options
    }

    Vue.prototype.$notification = (title, body, dateTime, icon = null) => {
      vm.addNewNotification(Math.random(), title, body, dateTime, icon)
    }
  }
}
