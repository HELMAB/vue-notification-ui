// eslint-disable-next-line no-unused-vars
import './assets/css/notification.css'
import Notification from "@/plugins/notification-ui/src/Notification"

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    const NotificationWrapper = Vue.extend(Notification)
    const vm = new NotificationWrapper({}).$mount()

    document.body.appendChild(vm.$el)

    vm.options = options
    Vue.prototype.$notification = (title, body) => {
      vm.notifications.push({title, body})
    }
  }
}
