// eslint-disable-next-line no-unused-vars
import './src/assets/css/notification.css'
import './src/assets/css/animate.min.css'
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

    // eslint-disable-next-line no-unused-vars
    Vue.prototype.$notification = (title, body, icon = null, handleClick = null, dateTime = null) => {
      vm.addNewNotification(Math.random(), title, body, dateTime, icon, handleClick)
    }
  }
}
